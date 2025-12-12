import nodemailer from "nodemailer";

// Put these in your root .env.local
const email = process.env.SMTP_USER;
const pass = process.env.SMTP_PASSWORD;
const hrEmail = process.env.HR_EMAIL;

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: process.env.HR_EMAIL,
};
