import {
  acknowledgmentMailBody,
  generateInquiryHtmlBody,
} from "@/data/emailBody";
import { transporter } from "@/lib/Transporter";
import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const { name, email, countrycode, phone, compnay, message, services } =
      await req.json();
    const htmlBody = generateInquiryHtmlBody({
      name,
      email,
      countrycode,
      phone,
      compnay,
      message,
      services,
    });

    const rawRecipients = process.env.RECIPIENT_EMAIL;
    const recipients = rawRecipients
      ? rawRecipients
          .split(",")
          .map((email) => email.trim())
          .filter((email) => email)
      : [];

    if (!recipients.length) {
      console.error(
        "No valid RECIPIENT_EMAIL configured in environment variables."
      );
      return reply
        .status(500)
        .send({ message: "No valid recipients configured on server." });
    }
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: recipients,
      subject: `Lemolite - New Contact Form Submission (${compnay})`,
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);

    const acknowledgmentMail = {
      from: `Lemolite Support`,
      to: email,
      subject:
        "Thank You – We've Received Your Inquiry and Will Be in Touch Soon",
      html: acknowledgmentMailBody({
        name,
        email,
        countrycode,
        phone,
        compnay,
        message,
        services,
      }),
    };

    await transporter.sendMail(acknowledgmentMail);
    return NextResponse.json(
      {
        message: "Contact Submitted SuccessFully",
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
