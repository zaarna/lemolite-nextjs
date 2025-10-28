import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import HireOurTeam from "@/components/ReusableComponent/HireDevelopers/HireOurTeam";
import Hireproccess from "@/components/ReusableComponent/HireDevelopers/Hireprocess";
import Key_benifit from "@/components/ReusableComponent/HireDevelopers/key_benifit";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import { mern } from "@/data/breadcrumsdata";
import { hirefaqmern } from "@/data/faqhire";
import { hireprocessmern } from "@/data/hireprocess";
import { hireourteammern } from "@/data/hiringDevelopers";
import { mernbenefit } from "@/data/keybenifit";
import { whyhiremern } from "@/data/whyhiredev";
import React from "react";

const HireMERNDeveloperPage = () => {
  return (
    <div className="min-h-screen ">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={mern}
        title={"Hire Mern Developers"}
        content={
          "Our dedicated MERN stack developers specialize in creating modern web applications using MongoDB, Express, React, and Node.js. As a leading MERN stack development company, we deliver scalable, efficient, and high-performing solutions tailored to your project needs."
        }
        btntext={"Get Started Today"}
        link={"/contact-us"}
        src={"/mern.webp"}
        alt={"Hire Mern Developers"}
      />
      <HireOurTeam hireourteam={hireourteammern} />
      <Hireproccess
        title={"How We Connect You with Top Mern Developers"}
        steps={hireprocessmern}
      />
      <WhyHireSection
        title={"Why Hire MERN Developers from Lemolite?"}
        content={
          "We provide access to an exclusive global network of top-tier MERN stack developers, thoroughly vetted for their technical proficiency, experience, and cultural compatibility. Our experts, proficient in full-stack, front-end, and back-end technologies, adapt quickly to your team’s workflow, ensuring seamless collaboration and project success. As a trusted MERN stack development company, we handle the recruitment, onboarding, and management process, offering flexible and cost-efficient engagement models."
        }
        btntext={"Hire MERN Stack Developer"}
        link={"/contact-us"}
        features={whyhiremern}
      />
      <Ctasection
        bg="bg-gradient-to-r from-primary/30 to-secondry/30"
        image={"/ctawhite.webp"}
        title={"Ready to Hire MERN Stack Developers?"}
        text={"Start Your Project Today!"}
        link={"/contact-us"}
      />

      <Key_benifit
        title={"Key Benefits Of Mern Developers"}
        benefits={mernbenefit}
      />
      <Ctasection
        bg="bg-gradient-to-r from-primary/30 to-secondry/30"
        image={"/hirecta.webp"}
        title={"Take Your Project to the Next Level!"}
        text={"Start Now"}
        link={"/contact-us"}
      />
      <FAQ questions={hirefaqmern} />
      {/* <Testimonial
        title="Hear from Our Happy Clients"
        testimonials={testimonials}
      /> */}
      {/* <Contectinfo
        maintitle={"Let’s Transform Your Vision into Reality"}
        subtitle={"Get in Touch!"}
        content={
          "Working on something big? Let’s chat! We’re excited to hear about your project and see how we can help."
        }
        addresses={addresses}
      /> */}
    </div>
  );
};

export default HireMERNDeveloperPage;
