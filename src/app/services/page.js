import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import VisionAndExpertise from "@/components/ReusableComponent/ExpertiseSection/VisionAndExpertise";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import SmartTechSolution from "@/components/ReusableComponent/SmartTechSolution/Smart_tech_solution";
import TechnologyWeUse from "@/components/ReusableComponent/TechnologyWeUse/TechnologyWeUse";
import TrustedByCliet_WhoWeAre from "@/components/ReusableComponent/TrustedByCliet_WhoWeAre/TrustedByCliet_WhoWeAre";
import Why_choose_us from "@/components/ReusableComponent/WhyChooseUs/WhyChooseUs";
import { servicespage } from "@/data/breadcrumsdata";
import { features, logos, services } from "@/data/home";
import { sections, serviesfaqData, whychoosedata } from "@/data/services";
import React from "react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={servicespage}
        title={"Uncover Our Elite Services & Technology"}
        content={
          "We specialize in creating custom software that fits your needs. With our expert team, we’ll help you grow through smart automation and unique software solutions."
        }
        btntext={"Let’s innovate together"}
        link={"/contact-us"}
        src={"/uncover.webp"}
        alt={"Explore our Services"}
      />
      <TrustedByCliet_WhoWeAre
        logo={logos}
        title={"Who We Are"}
        content={
          "We provide tailored custom software development services to meet your specific business requirements. From full-stack development to machine learning, our experience helps you reach your objectives. As a leading custom software development company, we are more than just service providers—we transform your ideas into the best possible designs and developments. Our custom web application development company delivers innovative solutions that help your business grow into a successful brand."
        }
        features={features}
      />
      <SmartTechSolution 
      sections={sections}/>
      <Ctasection
        title={"Ready to Transform Your Business?"}
        text={"Take the First Step Today"}
        link={"/contact-us"}
        image="/ctagreadiant.webp"
        bg="bg-[#F1F1F1]"
      />
      <Why_choose_us data={whychoosedata} />
      <TechnologyWeUse 
      bg="bg-[#F1F1F1]"/>
      <VisionAndExpertise
        title="Your Vision, Our Expertise!"
        content="We provide tailored custom software development services to drive innovation, improve efficiency, enhance customer experience, and support digital transformation, helping you achieve success and stay competitive."
        service={services}
      />
      <FAQ questions={serviesfaqData}
      padding="top-bottom"
      bg="bg-gray-50" />
    </div>
  );
};

export default ServicesPage;
