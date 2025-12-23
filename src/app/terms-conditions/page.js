import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import Link from "next/link";
import React from "react";
import { pagesMeta } from "@/data/pagesMeta";

export const metadata = {
  title: pagesMeta.termsconditions.title,
  description: pagesMeta.termsconditions.description,
  keywords: pagesMeta.termsconditions.keywords,
  alternates: {
    canonical: pagesMeta.termsconditions.canonical,
  },
};

const termsAndConditions = [
  {
    title: "Acceptance of Terms",
    description:
      "By accessing, browsing, or using our website, you confirm that you have read, understood, and agreed to be bound by these Terms and all applicable laws and regulations. We reserve the right to update, modify, or revise these Terms at our discretion. Continued use of the website after any such changes shall constitute acceptance of the revised Terms.",
  },
  {
    title: "Eligibility & User Obligations",
    description:
      "You agree to use our website only for lawful and legitimate purposes and in full compliance with all applicable laws and regulations. You shall not engage in any activity that may harm, interfere with, or disrupt the website’s functionality or security. Any unauthorized access, data scraping, automated scripts, or attempts to breach security are strictly prohibited and may result in legal action.",
  },
  {
    title: "Intellectual Property Rights",
    description:
      "All content, trademarks, logos, graphics, text, images, software, and other materials displayed on this website (&quot;Content&quot;) are the sole property of Lemolite Technologies or its licensors and are protected by intellectual property laws. You may not copy, reproduce, distribute, modify, or use any Content without our prior written permission. Any unauthorized use of our intellectual property may result in legal action, including but not limited to claims for damages.",
  },
  {
    title: "User Accounts & Security",
    description:
      "If you register an account with us, you are solely responsible for maintaining the confidentiality of your login credentials. You must provide accurate, complete, and up-to-date information during account registration. We reserve the right to suspend or terminate your account if we detect any fraudulent activity, misuse, or breach of these Terms. You agree to notify us immediately of any unauthorized use of your account.",
  },
  {
    title: "Privacy & Data Protection",
    description:
      "Your use of our website is also governed by our Privacy Policy, which outlines how we collect, store, and process your personal data. By using our website, you consent to our data practices as outlined in the Privacy Policy. We implement industry-standard security measures to protect your personal information. However, you acknowledge that no data transmission over the internet is entirely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Limitation of Liability",
    description:
      "To the maximum extent permitted by law, Lemolite Technologies shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use or inability to use our website and services. We do not warrant that our website will be error-free, uninterrupted, or free from viruses, malware, or other harmful components. Under no circumstances shall our total liability exceed the amount you have paid (if any) for using our services.",
  },
  {
    title: "Third-Party Links & Services",
    description:
      "Our website may contain links to third-party websites or services. These external sites are beyond our control, and we do not endorse or assume responsibility for their content, privacy policies, or practices. You acknowledge that accessing third-party websites is at your own risk, and you should review their respective Terms and Privacy Policies before using their services.",
  },
  {
    title: "Termination & Suspension of Services",
    description:
      "We reserve the right to suspend, restrict, or terminate your access to our website and services at any time, without prior notice, if we determine that you have violated these Terms, are engaged in unlawful activities, or if your actions pose a threat to the security or integrity of our website. We may also take such action if required for legal or regulatory reasons.",
  },
  {
    title: "Disclaimer of Warranties",
    description:
      "The website and its services are provided on an &quot;as is&quot; and &quot;as available&quot; basis, without warranties of any kind, either express or implied. We do not guarantee that the website will meet your expectations, function without disruptions, or be free of errors or security vulnerabilities. Any reliance on the website’s information is at your own risk.",
  },
  {
    title: "Indemnification",
    description:
      "You agree to indemnify, defend, and hold harmless Lemolite Technologies, its officers, employees, affiliates, and agents from any claims, damages, losses, liabilities, costs, or expenses (including legal fees) arising from your use or misuse of our website and services, your violation of these Terms, or your infringement of any intellectual property or other rights of a third party.",
  },
  {
    title: "Governing Law & Dispute Resolution",
    description:
      "These Terms shall be governed by and construed in accordance with the laws of **[Your Jurisdiction]**, without regard to its conflict of law principles. Any disputes arising from these Terms or your use of our website shall be subject to the exclusive jurisdiction of the courts of **[Your Jurisdiction]**. In case of any disputes, we encourage users to first contact us to seek an amicable resolution before pursuing legal action.",
  },
  {
    title: "Changes to These Terms",
    description:
      "We reserve the right to update, modify, or revise these Terms at any time. Any changes will be effective immediately upon posting on this page. We encourage users to periodically review these Terms to stay informed.",
  },
  {
    title: "Contact Information",
    description:
      "If you have any questions or concerns regarding these Terms and Conditions, please contact us at [Your Contact Email/Phone].",
  },
];

function Page() {
  return (
    <>
      <Innerhero
        padding="p-0"
        title="Terms of Use"
        btnHide={true}
        src="/privecy.webp"
        alt="terms image"
      />

      <section className="container">
        <div className="border-custom p-4 md:p-6 my-5 sm:my-10">
          <h6 className="font-semibold text-primary pb-5">
            Last Updated: March 4, 2025
          </h6>

          <p className="pb-5">
            Welcome to Lemolite Technologies. These Terms and Conditions
            (&quot;Terms&quot;) govern your use of our website,{" "}
            <Link href="/" className="underline font-semibold">
              lemolite.com
            </Link>
            , and any associated services, applications, or platforms operated
            by Lemolite Technologies (&quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;). By accessing or using our website and services,
            you acknowledge and agree to comply with these Terms. If you do not
            agree with any part of these Terms, you must refrain from using our
            services.
          </p>

          <div>
            {termsAndConditions.map((item, index) => {
              const description = item.description || "";

              const formattedDescription = description
                .split(/(\*\*.*?\*\*)/g)
                .map((part, i) =>
                  part.startsWith("**") && part.endsWith("**") ? (
                    <span key={i} className="font-bold">
                      {part.slice(2, -2)}
                    </span>
                  ) : (
                    part
                  )
                );

              return (
                <div key={index}>
                  <h4 className="text-[18px] md:text-[22px] font-bold pb-3">
                    {item.title}
                  </h4>
                  <p className="text-[16px] md:text-[18px] font-light pb-5">
                    {formattedDescription}
                  </p>
                </div>
              );
            })}
          </div>

          <h4 className="text-[18px] font-bold pb-3">Lemolite Technologies</h4>

          <ul className="space-y-2 text-[16px] md:text-[20px] font-normal">
            <li>
              <span className="font-bold text-black">Email:</span>
              <a
                href="mailto:sales@lemolite.com"
                className="underline text-primary"
              >
                sales@lemolite.com
              </a>
            </li>
            <li>
              <span className="font-bold text-black">Call:</span>
              <a href="tel:+919313834815" className="text-secondry">
                +91 9313834815
              </a>
            </li>
          </ul>

          <p className="text-[16px] md:text-[18px] font-light py-5">
            By using our website, you acknowledge that you have read,
            understood, and agreed to these Terms and Conditions.
          </p>
        </div>
      </section>
    </>
  );
}

export default Page;
