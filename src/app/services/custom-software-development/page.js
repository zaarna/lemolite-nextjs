import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import Dream_web_application from "@/components/ReusableComponent/DreamWebApplication/Dream_web_application";
import Experties from "@/components/ReusableComponent/ExpertiseSection/Experties";
import VisionAndExpertise from "@/components/ReusableComponent/ExpertiseSection/VisionAndExpertise";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import Smartest_bussiness_operation from "@/components/ReusableComponent/SmartestBussinessOperation/Smartest_bussiness_operation";
import { softwere } from "@/data/breadcrumsdata";
import { custombexpert, softwereexpert } from "@/data/expertise";
import { customservices } from "@/data/home";
import { projectSteps, softwarefaqData } from "@/data/services";
import React from "react";

const CustomSoftwareDevelopmentPage = () => {
  return (
    <div className="min-h-screen ">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={softwere}
        title={"Custom Software Development Services"}
        content={
          "We provide custom software development services that focus on creating unique and reliable solutions to meet your needs. With a flexible and efficient approach, we aim to deliver software that aligns with your goals and helps you achieve seamless performance and growth."
        }
        btntext={"Innovate Beyond Limits"}
        link={"/contact-us"}
        src={"/custome.webp"}
        alt={"Custom Software Development Services"}
      />
      <WhyHireSection
        title={"Our Expertise"}
        content={
          "We provide comprehensive custom software development services tailored to your specific business needs. From designing custom solutions to modernizing existing systems, we focus on delivering innovative, scalable, and reliable software that drives your growth."
        }
        btntext={"Get Your Custom Solution Now!"}
        link={"/contact-us"}
        features={custombexpert}
        layoutType=""
      />
      <Experties
        maintitle="Custom Software Tailored for Every Business Level"
        contentData={softwereexpert}
      />
      <Ctasection
        bg="bg-[#F1F1F1]"
        image={"/ctagreadiant.webp"}
        title={"Custom Software That Moves You Forward"}
        text={"Create Yours Now"}
        link={"/contact-us"}
      />
      <Dream_web_application
        title="From Concept to Completion: Our Development Process"
        content="We take a structured yet creative approach to custom software development, ensuring every step delivers value and meets your needs. Here's how we work:"
        listItems={projectSteps}
        image={"/concept.webp"}
        alt={"Our Development Process"}
      />
      <Smartest_bussiness_operation />
      <VisionAndExpertise
        title={"Essential Features for Your Business Success"}
        service={customservices}
      />
      <FAQ padding="top-bottom" bg="bg-[#F1F1F1]" questions={softwarefaqData} />
    </div>
  );
};

export default CustomSoftwareDevelopmentPage;
