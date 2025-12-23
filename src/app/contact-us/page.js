import OurPresence from "@/components/ContactUs/OurPresence";
import HaveanIdea from "@/components/HaveanIdea";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import { contactus } from "@/data/breadcrumsdata";
import React from "react";
import { pagesMeta } from "@/data/pagesMeta";
import { featurescontact, logos } from "@/data/home";
import TrustedAndCaseStudy from "@/components/ContactUs/TrustedAndCaseStudy";
import { projectdata } from "@/data/casestudy";

export const metadata = {
  title: pagesMeta.contactus.title,
  description: pagesMeta.contactus.description,
  keywords: pagesMeta.contactus.keywords,
  alternates: {
    canonical: pagesMeta.contactus.canonical,
  },
};

const ContactUsPage = () => {
  return (
    <div className="">
      <Innerhero
        padding="py-8 "
        breadcrumbs={contactus}
        title={"Contact Us"}
        content={
          "Our team is committed to providing personalized support and quick responses, ensuring a smooth, efficient experience. Whether you're looking to discuss a new project, have questions, or explore potential collaboration, we're here to assist you every step of the way. Ready to take the next step?"
        }
        btntext={"Book A Call"}
        link={"https://calendly.com/lemolite-sales/product-demo?month=2025-06"}
        targetBlank={true}
        src={"/contactbanner.webp"}
        alt={"Contact us"}
        features={featurescontact}
      />
      <TrustedAndCaseStudy logos={logos} steps={projectdata}  />
      {/* <HaveanIdea />
      <OurPresence /> */}
    </div>
  );
};

export default ContactUsPage;
