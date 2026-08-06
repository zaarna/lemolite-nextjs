import { processFormData } from "@/lib/ProcessFormData";
import { transporter } from "@/lib/Transporter";
import { NextResponse } from "next/server";
import fs from "fs/promises";
export async function POST(req) {
  try {
    const formData = await req.formData();
    const { formData: data, fileData } = await processFormData(formData);

    // Destructure form data
    const {
      name,
      lastname,
      email,
      country,
      phone,
      message,
      position,
      pageurl,
    } = data;

    const recipients = process.env.CAREER_RECIPIENT_EMAIL?.split(",")
      .map((email) => email.trim())
      .filter(Boolean);

    // Extract the single image file
    const singleImage = fileData?.find((file) => file.fieldname === "image");

    // Validate required fields
    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!lastname) missingFields.push("lastname");
    if (!email) missingFields.push("email");
    if (!country) missingFields.push("country");
    if (!phone) missingFields.push("phone");
    if (!position) missingFields.push("position");

    if (missingFields.length > 0) {
      // return reply.status(400).send({
      //   message: `The following fields are required: ${missingFields.join(
      //     ", "
      //   )}`,
      // });
      return NextResponse.json(
        {
          message: `The following fields are required: ${missingFields.join(
            ", ",
          )}`,
        },
        {
          status: 400,
        },
      );
    }

    // Construct the email body
    const htmlBody = `
<div style="font-family:Arial,sans-serif;background:#f5f5f5;padding:30px;">

<table
style="
max-width:650px;
margin:auto;
background:#fff;
border-radius:12px;
overflow:hidden;
">

<tr>
<td
style="
background:#D8E8C5;
padding:25px;
text-align:center;
">

<h2
style="
margin:0;
color:#212121;
">
New Career Application
</h2>

<p
style="
margin-top:8px;
color:#555;
">
A new candidate has applied through the Lemolite Careers page.
</p>

</td>
</tr>

<tr>
<td style="padding:30px;">

<table width="100%" cellspacing="0">

<tr>
<td><strong>First Name</strong></td>
<td>${name}</td>
</tr>

<tr>
<td><strong>Last Name</strong></td>
<td>${lastname}</td>
</tr>

<tr>
<td><strong>Email</strong></td>
<td>${email}</td>
</tr>

<tr>
<td><strong>Country</strong></td>
<td>${country || "-"}</td>
</tr>

<tr>
<td><strong>Phone</strong></td>
<td>${phone}</td>
</tr>

<tr>
<td><strong>Position Applied</strong></td>
<td>${position}</td>
</tr>

<tr>
<td><strong>Page URL</strong></td>
<td>${pageurl}</td>
</tr>

</table>

<div
style="
margin-top:25px;
">

<strong>Message</strong>

<div
style="
background:#f8f8f8;
padding:15px;
margin-top:10px;
border-radius:8px;
">
${message || "-"}
</div>

</div>

<div
style="
margin-top:25px;
padding:15px;
background:#FFF8E6;
border-left:4px solid #FFBE2E;
">
<b>Resume:</b> Attached with this email.
</div>

</td>
</tr>

</table>

</div>
`;

    // Prepare email options
    const mailOptions = {
      from: `"Lemolite Careers" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: recipients,
      subject: `📄 New Job Application | ${position} | ${name} ${lastname}`,
      html: htmlBody,
      attachments: singleImage
        ? [
            {
              filename: `${name}-${lastname}-Resume.${singleImage.filename
                .split(".")
                .pop()}`,
              path: singleImage.filepath,
              contentType: singleImage.mimetype,
            },
          ]
        : [],
    };

    console.log("mailOptions", mailOptions);
    let res = await transporter.sendMail(mailOptions);
    console.log("Res", res);

    if (singleImage?.filepath) {
      try {
        await fs.unlink(singleImage.filepath);
      } catch (err) {
        console.error("Failed to delete uploaded file:", err);
      }
    }
    return NextResponse.json(
      {
        message:
          "Thanks for contacting us! We will get in touch with you shortly.",
      },
      {
        status: 200,
      },
    );
  } catch (err) {
    console.log("Error", err);
    return NextResponse.json(
      {
        message: err.message || "Something Went Wrong",
      },
      {
        status: 500,
      },
    );
  }
}
