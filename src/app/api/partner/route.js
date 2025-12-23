import { transporter } from "@/lib/Transporter";
import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const data = await req.json();
    const { name, companyname, email, phone, aboutus, message } = data;
    const missingFields = [];

    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");

    // If there are missing fields, return a detailed error response
    if (missingFields.length > 0) {
      return reply.status(400).send({
        message: `The following fields are required: ${missingFields.join(
          ", "
        )}`,
      });
    }
    const htmlBody = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="text-align: center; color: #007BFF;">You Have Got a New Lead – Review and Respond</h2>
    <p><strong>Full Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company Name:</strong> ${companyname}</p>
    <p><strong>Phone Number:</strong> ${phone || "N/A"}</p>
    <p><strong>Aboutus:</strong></p>
    <p style="background-color: #f9f9f9; padding: 10px; border-radius: 5px;">${
      aboutus || message || "N/A"
    }</p>

  </div>
  `;
    // Define the email options
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender's email and name
      to: process.env.RECIPIENT_EMAIL, // Recipient email
      subject: "New Contact Form Submission",
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      {
        message: "Partner Submitted SuccessFully",
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
