import ReinventWheelSection from "@/components/ReinventWheelSection";
import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import SmartTechSolution from "@/components/ReusableComponent/SmartTechSolution/Smart_tech_solution";
import Why_choose_us from "@/components/ReusableComponent/WhyChooseUs/WhyChooseUs";
import { cybersecurity } from "@/data/breadcrumsdata";
import { otcybersecurity, securitySections } from "@/data/services";
import React from "react";

function Cybersecurity() {
  return (
    <div className="min-h-screen">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={cybersecurity}
        title={"Secure Product Lifecycle Solutions"}
        content={
          "Achieving IEC 62443 compliance can be a complex journey. Whether you're just starting or need to level-up your security practices, we offer a comprehensive suite of services designed to guide you through every stage of the secure product development lifecycle. From gap assessments to full implementation and training, we ensure your products meet the highest standards of cybersecurity while aligning with the IEC 62443-4-1 and IEC 62443-4-2 frameworks."
        }
        btntext={"Secure Your Product Lifecycle"}
        link={"/contact-us"}
        src={"/lifecycle-solutions.webp"}
        alt={"E-commerce Services"}
      />
      <SmartTechSolution
        title="Shaping the Future of Your Business with Smart Tech Solutions"
        sections={securitySections}
        variant="option2"
      />
      <ReinventWheelSection />
      <Why_choose_us
        title={"Why Lemolite?"}
        data={otcybersecurity}
        columns={2}
      />
      <Ctasection
        title={"Ready to Achieve IEC 62443 Compliance?"}
        text={"Get Started Today"}
        link={"/contact-us"}
        image="/ctagreadiant.webp"
        bg="bg-[#F1F1F1]"
      />
    </div>
  );
}

export default Cybersecurity;
