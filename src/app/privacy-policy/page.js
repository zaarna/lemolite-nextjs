import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import React from "react";

function page() {
  return (
    <>
      <Innerhero
        padding="p-0"
        title={"Your Privacy is More Than a Policy - It’s Our Promise"}
        btnHide={true}
        src={"/tearms.webp"}
        alt={"tearms image"}
      />
      <section className="">
        <div className="container">
          <div className="border-custom p-4 md:p-6 my-5 sm:my-10">
            {/* Section 1 */}
            <PrivacySection
              title="Collection of Your Personal Information"
              description="To enhance your experience, **Lemolite Technologies** may collect certain personally identifiable information (PII), including but not limited to:"
              items={[
                "Your name",
                "Email address",
                "Contact details",
                "Any other voluntarily provided information",
              ]}
            />
            <p className="pb-3">
              We guarantee that we <span className="font-semibold">never</span>{" "}
              sell, rent, or trade your personal information to unauthorized
              third parties. Your data is used solely to improve your experience
              with our website and services.
            </p>
            {/* Section 2 */}
            <PrivacySection
              title="Log Files & Automatic Data Collection"
              description="Like most websites, we utilize log files to collect standard data, including:"
              items={[
                "IP addresses",
                "Browser type",
                "Internet Service Provider (ISP)",
                "Date and time of visits",
                "Referring and exit pages",
                "Click behavior and navigation patterns",
              ]}
            />
            <p className="pb-3">
              This information helps us analyze trends, administer the website,
              and improve user experience. Importantly,
              <span className="font-semibold">
                {" "}
                none of this data is linked to personally identifiable
                information.
              </span>
            </p>
            {/* Section 3 */}
            <PrivacySection
              title="Additional Data Collection Methods"
              description="As we integrate new technologies, we may employ additional methods to gather non-personal data. You can control how much data is collected by adjusting your browser settings (e.g., disabling cookies), though some website features may become unavailable."
            />
          </div>
          <div className="border-custom p-4 md:p-6 my-5 sm:my-10">
            {/* Section 1 */}
            <PrivacySection
              title="Use of Your Personal Information"
              description="The information we collect is used to:"
              items={[
                "Operate and improve our website and services",
                "Provide customer support and respond to inquiries",
                "Personalize content and recommendations based on user preferences",
                "Conduct research, surveys, and analysis for product development",
                "Inform you about relevant updates, offers, and services",
              ]}
            />
            <PrivacySection
              description="We **DO NOT** sell or rent customer information. However, we may share necessary data with trusted third-party partners who assist us in providing services, such as:"
              items={[
                "Sending emails or newsletters",
                "Conducting analytics and performance tracking",
                "Customer support and feedback collection",
              ]}
            />
            <p className="pb-3">
              These partners are{" "}
              <span className="font-semibold">contractually bound</span> to keep
              your data confidential and use it strictly for the intended
              purpose.
            </p>

            {/* Section 3 */}
            <PrivacySectionorderlist
              title="Legal Disclosures"
              description="We may disclose personal information only when required to do so by law or when we believe such action is necessary to:"
              items={[
                "**Comply with legal obligations** (e.g., responding to subpoenas or legal processes)",
                "**Protect and defend our rights, property, or safety**",
                "**Prevent fraud or security threats**",
                "**Ensure user safety** in cases of suspected malicious activity",
              ]}
            />
          </div>
          <div className="border-custom p-4 md:p-6 my-5 sm:my-10">
            {/* Section 1 */}
            <PrivacySection
              title="Use of Cookies"
              description="Cookies are small text files stored on your device to enhance your browsing experience. We use cookies to:"
              items={[
                "Recognize returning visitors",
                "Store user preferences for a more personalized experience",
                "Track website performance and optimize content",
              ]}
            />
            <p className="pb-4">
              You can modify your browser settings to disable cookies. However,
              this may impact certain features of our website, requiring manual
              re-entry of login credentials and preferences.
            </p>
          </div>
          <div className="border-custom p-4 md:p-6 my-5 sm:my-10">
            {/* Section 2 */}
            <PrivacySection
              title="Google Analytics & Third-Party Tracking"
              description="We use **Google Analytics** to understand how visitors interact with our site. This tool provides insights such as:"
              items={[
                "Popular pages and content",
                "User navigation paths",
                "General audience demographics (without personal identification)",
              ]}
            />
            <p className="pb-4">
              <span className="font-bold">Important: </span>No personally
              identifiable information (such as names, emails, or unique device
              IDs) is transferred to Google. If you wish to opt out, you can
              adjust your browser settings or disable tracking in your account
              preferences.
            </p>
          </div>
          <div className="border-custom p-4 md:p-6 my-5 sm:my-10">
            {/* Section 2 */}
            <PrivacySection title="Third-Party Links & External Sites" />
            <p className="pb-4">
              Our website may contain links to third-party websites. These
              external sites operate independently, and we
              <span className="font-bold"> do not</span> control their privacy
              policies or data collection practices. We strongly recommend
              reviewing the privacy policies of any external sites you visit.
            </p>
            <p>
              We are not responsible for any issues arising from interactions
              with third-party sites.
            </p>
          </div>
          <div className="border-custom p-4 md:p-6 my-5 sm:my-10">
            {/* Section 2 */}
            <PrivacySection title="Public Blogs & User Contributions" />
            <p className="pb-4">
              Our website may host{" "}
              <span className="font-bold">public blogs</span> where users can
              comment or contribute content. Any information shared in these
              areas becomes<span className="font-bold"> publicly visible</span>{" "}
              , so we encourage caution before posting personal details.
            </p>
            <p>
              <span className="font-bold">Lemolite Technologies</span> is not
              responsible for how others use or share publicly posted
              information.
            </p>
          </div>
          <div className="border-custom p-4 md:p-6 my-5 sm:my-10">
            {/* Section 2 */}
            <PrivacySection
              title="Contact Forms & User Inquiries"
              description="When you contact us via our website forms or email, we collect:"
              items={[
                "Your email address",
                "Any details voluntarily provided (e.g., name, phone number)",
                "Your IP address and submission timestamp (to prevent abuse)",
              ]}
            />
            <p className="pb-4">
              This data is used solely to{" "}
              <span className="font-bold">respond to your inquiry</span> and is
              never shared with unauthorized third parties.
            </p>
          </div>
          <div className="border-custom p-4 md:p-6 my-5 sm:my-10">
            {/* Section 2 */}
            <PrivacySection
              title="Your Rights & Data Protection"
              description="Under GDPR and other global privacy laws, you have the right to:"
              items={[
                "Access your personal data",
                "Request corrections or updates",
                "Request deletion of your data (where legally applicable)",
                "Opt out of marketing communications",
                "Restrict data processing in certain circumstances",
              ]}
            />
            <p className="pb-4">
              To exercise these rights, please{" "}
              <span className="font-bold">contact us</span> through our official
              support channels.
            </p>
          </div>
          <div className="border-custom p-4 md:p-6 my-5 sm:my-10">
            {/* Section 2 */}
            <PrivacySection
              title="Policy Updates & Notifications"
              description="We may update this Privacy Policy periodically to reflect changes in technology, legal requirements, or business operations. Users are encouraged to review this page regularly for updates."
              items={["**Last Updated**: March 4, 2025"]}
            />
            <p className="pb-4">
              Significant changes will be communicated via email or on our
              website. Your continued use of our services after updates
              constitutes acceptance of the revised policy.
            </p>
          </div>
          <div className="border-custom p-4 md:p-6 my-5 sm:my-10">
            {/* Section 2 */}
            <PrivacySection
              title="Contact Us"
              description="For any questions or concerns regarding this Privacy Policy, please reach out to us via:"
            />
            <ul className="common-lists pt-4 text-[16px] md:text-[20px] font-normal">
              <li>
                <span className="font-bold text-black no-underline">
                  Email:{" "}
                </span>
                <a
                  href="mailto:sales@lemolite.com"
                  className="underline text-primary"
                >
                  {" "}
                  sales@lemolite.com{" "}
                </a>
              </li>
              <li>
                <span className="font-bold text-black no-underline">
                  Call:{" "}
                </span>
                <a href="tel:+91 9313834815" className=" text-secondry">
                  +91 9313834815{" "}
                </a>
              </li>
              <li>
                <span className="font-bold text-black no-underline">
                  Office Address:{" "}
                </span>
                <a href="" className="underline text-primary">
                  {" "}
                  1101, 1103, 1104, Colonnade, Iskcon Cross Road, Satellite,
                  Ahmedabad, Gujarat, INDIA - 380059{" "}
                </a>
              </li>
            </ul>
            <p className="pb-4">
              Your privacy is our priority. Thank you for trusting Lemolite
              Technologies with your information!
            </p>
          </div>
          <div className="border-custom p-4 md:p-6 my-5 sm:my-10">
            {/* Section 2 */}

            <p>
              <span className="font-bold">Your privacy is our priority.</span>{" "}
              Thank you for trusting
              <span className="font-bold"> Lemolite Technologies</span> with
              your information!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const PrivacySection = ({ title, description = "", items = [] }) => {
  return (
    <div className="">
      <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-bold mb-4">
        {title}
      </h2>

      <p className="mb-4 text-[16px] md:text-[20px] font-normal">
        {description
          ? description.split(/(\*\*.*?\*\*)/g).map((part, i) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <span key={i} className="font-bold">
                  {part.slice(2, -2)}
                </span>
              ) : (
                part
              )
            )
          : ""}
      </p>

      <ul className="common-lists text-[16px] md:text-[20px] font-normal">
        {items.map((item, index) => {
          // Ensure item is a string before calling split
          const safeItem = item || "";

          return (
            <li key={index} className="mb-2">
              {safeItem.split(/(\*\*.*?\*\*)/g).map((part, i) =>
                part.startsWith("**") && part.endsWith("**") ? (
                  <span key={i} className="font-bold">
                    {part.slice(2, -2)}
                  </span>
                ) : (
                  part
                )
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const PrivacySectionorderlist = ({ title, description, items = [] }) => {
  return (
    <div className="">
      <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-bold mb-4">
        {title}
      </h2>

      {/* Process description to bold words wrapped in ** */}
      <p className="mb-4 text-[16px] md:text-[20px] font-normal">
        {description.split(/(\*\*.*?\*\*)/g).map((part, i) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <span key={i} className="font-bold">
              {part.slice(2, -2)}
            </span>
          ) : (
            part
          )
        )}
      </p>

      <ol className="list-decimal pl-5 text-[16px] md:text-[20px] font-normal">
        {items.map((item, index) => {
          // Process list items to bold words wrapped in **
          const formattedItem = item.split(/(\*\*.*?\*\*)/g).map((part, i) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <span key={i} className="font-bold">
                {part.slice(2, -2)}
              </span>
            ) : (
              part
            )
          );

          return (
            <li key={index} className="mb-2">
              {formattedItem}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default page;
