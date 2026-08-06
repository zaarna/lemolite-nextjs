import { transporter } from "@/lib/Transporter";
import { NextResponse } from "next/server";

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req) {
  try {
    const data = await req.json();

    const {
      name,
      companyname,
      email,
      phone,
      country,
      aboutus,
      message,
      pageurl,
    } = data;

    const missingFields = [];

    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!companyname) missingFields.push("companyname");
    if (!phone) missingFields.push("phone");
    if (!country) missingFields.push("country");

    if (missingFields.length) {
      return NextResponse.json(
        {
          message: `The following fields are required: ${missingFields.join(", ")}`,
        },
        {
          status: 400,
        },
      );
    }

    const recipients = process.env.RECIPIENT_EMAIL?.split(",")
      .map((email) => email.trim())
      .filter(Boolean);

    if (!recipients?.length) {
      return NextResponse.json(
        {
          message:
            "PARTNER_RECIPIENT_EMAIL is missing in environment variables.",
        },
        {
          status: 500,
        },
      );
    }

    const htmlBody = `
<div style="font-family:Arial,sans-serif;background:#f5f5f5;padding:30px;">

<table style="
max-width:650px;
margin:auto;
background:#ffffff;
border-radius:12px;
overflow:hidden;
border-collapse:collapse;
">

<tr>
<td style="
background:#D8E8C5;
padding:25px;
text-align:center;
">

<h2 style="
margin:0;
color:#212121;
font-size:26px;
">
🤝 New Partnership Inquiry
</h2>

<p style="
margin-top:8px;
color:#555;
">
A new partnership inquiry has been submitted through the Lemolite website.
</p>

</td>
</tr>

<tr>

<td style="padding:30px;">

<table width="100%" cellspacing="10">

<tr>
<td width="35%"><strong>Full Name</strong></td>
<td>${escapeHtml(name)}</td>
</tr>

<tr>
<td><strong>Company</strong></td>
<td>${escapeHtml(companyname)}</td>
</tr>

<tr>
<td><strong>Email</strong></td>
<td>${escapeHtml(email)}</td>
</tr>

<tr>
<td><strong>Phone</strong></td>
<td>${escapeHtml(phone)}</td>
</tr>

<tr>
<td><strong>Country</strong></td>
<td>${escapeHtml(country)}</td>
</tr>

<tr>
<td><strong>Submitted From</strong></td>
<td>${escapeHtml(pageurl || "-")}</td>
</tr>

</table>

<div style="margin-top:25px;">

<strong>About Company</strong>

<div style="
background:#F8F8F8;
padding:15px;
border-radius:8px;
margin-top:10px;
">
${escapeHtml(aboutus || "-")}
</div>

</div>

<div style="margin-top:20px;">

<strong>Message</strong>

<div style="
background:#FFF8E6;
padding:15px;
border-radius:8px;
margin-top:10px;
">
${escapeHtml(message || "-")}
</div>

</div>

</td>

</tr>

</table>

</div>
`;

    await transporter.sendMail({
      from: `"Lemolite Partnership" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: recipients,
      subject: `🤝 New Partnership Inquiry | ${companyname}`,
      html: htmlBody,
    });

    await transporter.sendMail({
      from: `"Lemolite Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank You for Your Partnership Inquiry",
      html: `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:30px;">

<h2 style="color:#212121;">
Hello ${escapeHtml(name)},
</h2>

<p>
Thank you for your interest in partnering with <strong>Lemolite</strong>.
</p>

<p>
We have successfully received your partnership inquiry.
</p>

<p>
Our team will review your submission and get back to you shortly.
</p>

<p>
We appreciate your interest and look forward to exploring opportunities together.
</p>

<br>

<p>
Best Regards,
<br>
<strong>Lemolite Team</strong>
</p>

</div>
`,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your partnership inquiry. Our team will contact you shortly.",
      },
      {
        status: 200,
      },
    );
  } catch (err) {
    console.error("PARTNER API ERROR:", err);

    return NextResponse.json(
      {
        success: false,
        message: err.message || "Something went wrong.",
      },
      {
        status: 500,
      },
    );
  }
}
