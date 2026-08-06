import {
  acknowledgmentMailBody,
  generateInquiryHtmlBody,
} from "@/data/emailBody";
import { transporter } from "@/lib/Transporter";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, country, phone, compnay, message, services } =
      await req.json();

    // ============================
    // Server-side Validation
    // ============================
    if (!name || !email || !phone || !compnay) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields are missing.",
        },
        {
          status: 400,
        },
      );
    }

    // ============================
    // Read Recipient Emails
    // ============================
    const recipients = (process.env.RECIPIENT_EMAIL || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    if (!recipients.length) {
      console.error("RECIPIENT_EMAIL is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Recipient email is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    // ============================
    // Generate HTML
    // ============================
    const htmlBody = generateInquiryHtmlBody({
      name,
      email,
      country,
      phone,
      compnay,
      message,
      services,
    });

    // ============================
    // Send Admin Email
    // ============================
    const mailOptions = {
      from: `"Lemolite Website" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: recipients,
      subject: `Lemolite - New Contact Form Submission (${compnay})`,
      html: htmlBody,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("✅ Admin email sent successfully.");
    } catch (mailError) {
      console.error("❌ Failed to send admin email:", mailError);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send contact email.",
        },
        {
          status: 500,
        },
      );
    }

    // ============================
    // Send Acknowledgement Email
    // ============================
    const acknowledgmentMail = {
      from: `"Lemolite Support" <${process.env.SMTP_USER}>`,
      to: email,
      subject:
        "Thank You – We've Received Your Inquiry and Will Be in Touch Soon",
      html: acknowledgmentMailBody({
        name,
        email,
        country,
        phone,
        compnay,
        message,
        services,
      }),
    };

    try {
      await transporter.sendMail(acknowledgmentMail);
      console.log("✅ Acknowledgement email sent.");
    } catch (ackError) {
      console.error("❌ Failed to send acknowledgement email:", ackError);
      // Do not fail the request if acknowledgement email fails
    }

    // ============================
    // Success Response
    // ============================
    return NextResponse.json(
      {
        success: true,
        message: "Contact submitted successfully.",
      },
      {
        status: 200,
      },
    );
  } catch (err) {
    console.error("=========== API ERROR ===========");
    console.error(err);

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
