import { processFormData } from "@/lib/ProcessFormData";
import { transporter } from "@/lib/Transporter";
import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const formData = await req.formData();
    const { formData: data, fileData } = await processFormData(formData);

    // Destructure form data
    const {
      name,
      lastname,
      email,
      countrycode,
      phone,
      message,
      position,
      pageurl,
    } = data;

    // Extract the single image file
    const singleImage = fileData?.find((file) => file.fieldname === "image");

    // Validate required fields
    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!lastname) missingFields.push("lastname");
    if (!email) missingFields.push("email");
    if (!countrycode) missingFields.push("countrycode");
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
            ", "
          )}`,
        },
        {
          status: 400,
        }
      );
    }

    // Construct the email body
    const htmlBody = `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="text-align: center; color: #007BFF;">New Career Form Submission</h2>
          <p><strong>Name:</strong> ${name} ${lastname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country Code:</strong> ${countrycode || "N/A"}</p>
          <p><strong>Phone Number:</strong> ${phone || "N/A"}</p>
          <p><strong>Position:</strong> ${position}</p>
          <p><strong>Inquiry coming from:</strong> ${pageurl || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f9f9f9; padding: 10px; border-radius: 5px;">${message}</p>
        </div>
      `;

    // Prepare email options
    const mailOptions = {
      from: `"${name} ${lastname}" <${email}>`,
      to: process.env.HR_EMAIL,
      subject: "New Career Form Submission",
      html: htmlBody,
      attachments: singleImage
        ? [
            {
              filename: singleImage.filename,
              path: singleImage.filepath,
              contentType: singleImage.mimetype,
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      {
        message:
          "Thanks for contacting us! We will get in touch with you shortly.",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log("Error", err);
    return NextResponse.json(
      {
        message: err.message || "Something Went Wrong",
      },
      {
        status: 500,
      }
    );
  }
}
