export const generateInquiryHtmlBody = ({
  name,
  email,
  countrycode,
  phone,
  compnay,
  message,
  services,
}) => {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="text-align: center; color: #007BFF;">New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${compnay ? `<p><strong>Company Name:</strong> ${compnay}</p>` : ""}
    <p><strong>Country Code:</strong> ${countrycode || "N/A"}</p>
    <p><strong>Phone Number:</strong> ${phone || "N/A"}</p>
    <p><strong>Message:</strong></p>
    <p style="background-color: #f9f9f9; padding: 10px; border-radius: 5px;">${message}</p>
     ${
       services && services.length
         ? `
  <p><strong>Services:</strong></p>
  <ul style="background-color: #f9f9f9; padding: 10px; border-radius: 5px; list-style-type: disc;">
    ${services.map((service) => `<li>${service}</li>`).join("")}
  </ul>
  `
         : ""
     }
  </div>
  `;
};

export const acknowledgmentMailBody = ({
  name,
  email,
  countrycode,
  phone,
  compnay,
  message,
  services,
}) => {
  const serviceList =
    services && services.length
      ? `
      <div class="info-section">
        <div class="info-label">Selected Services</div>
        <div class="info-value">
          <ul style="margin: 5px 0; padding-left: 20px;">
            ${services.map((service) => `<li>${service}</li>`).join("")}
          </ul>
        </div>
      </div>`
      : "";

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Lemolite Technologies</title>
      <style>
        body {
          font-family: sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
          color: #333;
        }
        a { color: #2ec4f3; }
        .container__client {
          width: 600px;
          margin: 50px auto;
          background-color: #fff;
          padding: 8px;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .logo {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo img {
          width: 100%;
        }
        h1 {
          text-align: center;
          font-size: 2.5em;
          margin-bottom: 15px;
        }
        .footer_client {
          text-align: center;
          margin-top: 50px;
          padding: 20px;
          background-color: rgba(191, 214, 52, 0.03);
        }
        .footer_client a {
          text-decoration: none;
        }
        .footer_client a:hover {
          text-decoration: underline;
        }
        .social-icons {
          margin-top: 15px;
          text-align: center;
        }
        .social-icons a {
          display: inline-block;
          margin-right: 10px;
          transition: transform 0.3s ease;
        }
        .social-icons a:hover {
          transform: scale(1.1);
        }
        .details-container {
          background-color: rgba(191, 214, 52, 0.03);
          padding: 20px;
          border: 3px solid rgba(191, 214, 52, 0.7);
          border-radius: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h2 {
          text-align: center;
          color: #333;
          margin-bottom: 20px;
        }
        .info-section {
          margin-bottom: 20px;
        }
        .info-label {
          font-weight: bold;
          color: #555;
        }
        .info-value {
          color: #333;
        }
        .thanking_part {
          margin-bottom: -20px;
        }
        .thanking_part .thank_bold {
          text-align: center;
        }
        .thanking_part hr {
          width: 290px;
        }
        .thanking_part p {
          text-align: center;
        }
        .footer_client h3 {
          color: #2ec4f3;
        }
        .message {
          margin-bottom: 25px;
        }
        .bottom_mesaage {
          margin-top: 25px;
        }
      </style>
    </head>
    <body>
      <div class="container__client">
        <div class="logo">
          <img id="logo-img" src="https://leadbot.lemolite.com/static/Top_Banner_for_client_email.png" alt="Lemolite Technologies Logo" />
        </div>
        <div class="message">
          <p>Dear ${name},</p>
          <p>Thank you for your interest in our services and for taking the time to share your details with us. We are excited to learn more about your idea.</p>
        </div>
        <div class="details-container">
          <h2>HERE IS A SUMMARY OF THE INFORMATION YOU PROVIDED</h2>
          <div class="info-section">
            <div class="info-label">Name</div>
            <div class="info-value">${name}</div>
          </div>
          <div class="info-section">
            <div class="info-label">Email ID</div>
            <div class="info-value">${email}</div>
          </div>
          <div class="info-section">
            <div class="info-label">Phone Number</div>
            <div class="info-value">${countrycode || ""} ${phone}</div>
          </div>
          ${
            compnay
              ? `
          <div class="info-section">
            <div class="info-label">Company Name</div>
            <div class="info-value">${compnay}</div>
          </div>`
              : ""
          }
          <div class="info-section">
            <div class="info-label">Message</div>
            <div class="info-value">${message}</div>
          </div>
          ${serviceList}
        </div>
        <div class="bottom_mesaage">
          <p>Our dedicated sales executive will be in touch with you shortly to discuss your needs in detail and provide you with the best possible solutions. In the meantime, if you have any immediate questions or require further assistance, please do not hesitate to contact us at <a href="mailto:support@lemolite.com">sales@lemolite.com</a>.</p>
        </div>
        <br />
        <div class="thanking_part">
          <h3 class="thank_bold"><b>Thank You Once Again!</b></h3>
          <hr />
          <p>We look forward to working with you!</p>
        </div>
        <div class="footer_client">
          <img id="footer_client-logo" src="https://leadbot.lemolite.com/static/Lemolite_Logo.png" alt="Footer Logo" />
          <h3>
            <a href="https://lemolite.com/" class="footer_link">Lemolite Technologies LLP</a>
          </h3>
          <div class="social-icons">
            <a href="https://www.linkedin.com/company/lemolite-technologies-llp" target="_blank"><img src="https://leadbot.lemolite.com/static/Linkedin.png" alt="LinkedIn" /></a>
            <a href="https://www.facebook.com/lemolitetech" target="_blank"><img src="https://leadbot.lemolite.com/static/Facebook.png" alt="Facebook" /></a>
            <a href="https://www.instagram.com/lemolite.tech/" target="_blank"><img src="https://leadbot.lemolite.com/static/Instagram.png" alt="Instagram" /></a>
            <a href="https://x.com/lemolite_ai" target="_blank"><img src="https://leadbot.lemolite.com/static/Twitter.png" alt="Twitter" /></a>
            <a href="https://dribbble.com/lemolitetechnologies" target="_blank"><img src="https://leadbot.lemolite.com/static/Drrrible.png" alt="Dribbble" /></a>
            <a href="https://www.behance.net/lemolitetechnologies" target="_blank"><img src="https://leadbot.lemolite.com/static/Behance.png" alt="Behance" /></a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};
