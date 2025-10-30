import OurPresence from "@/components/ContactUs/OurPresence";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import { contactus } from "@/data/breadcrumsdata";
import React from "react";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen">
      <Innerhero
        padding="py-8 md:py-10 lg:py-0 "
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
      />
      <OurPresence />
    </div>
  );
};

export default ContactUsPage;
