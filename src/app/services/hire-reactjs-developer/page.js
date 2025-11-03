import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import HireOurTeam from "@/components/ReusableComponent/HireDevelopers/HireOurTeam";
import Hireproccess from "@/components/ReusableComponent/HireDevelopers/Hireprocess";
import Key_benifit from "@/components/ReusableComponent/HireDevelopers/key_benifit";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import { react } from "@/data/breadcrumsdata";
import { hirefaqreactjs } from "@/data/faqhire";
import { hireprocessreactjs } from "@/data/hireprocess";
import { hireourteamreact } from "@/data/hiringDevelopers";
import { reactbenefit } from "@/data/keybenifit";
import { whyhirereactjs } from "@/data/whyhiredev";
import React from "react";

const HireReactJSDeveloperPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={react}
        title={"Hire React Js Developers"}
        content={
          "Elevate your web development projects by hiring React JS developers who specialize in building high-performance applications. Whether you need dedicated ReactJS developers or a custom ReactJS development team, we provide tailored solutions that align with your unique business needs."
        }
        btntext={"Get Started Today"}
        link={"/contact-us"}
        src={"/react.webp"}
        alt={"Hire React Js Developers"}
      />
      <HireOurTeam hireourteam={hireourteamreact} />
      <Hireproccess
        title={"How We Connect You with Top React JS Developers"}
        steps={hireprocessreactjs}
      />
      <WhyHireSection
        title={"Why Hire React JS Developers From Lemolite?"}
        content={
          "Partner with a leading ReactJS development company and gain access to an exclusive network of highly skilled ReactJS developers. Whether you need custom ReactJS developers, a dedicated React development team, or a remote React developer, we handle recruitment, onboarding, and management—eliminating hiring complexity. Our flexible engagement models ensure scalable, cost-efficient solutions, allowing you to focus on innovation and business growth."
        }
        btntext={"Hire React JS Developers"}
        link={"/contact-us"}
        features={whyhirereactjs}
        bg="bg-[#F1F1F1]"
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30"
        image={"/ctawhite.webp"}
        title={"Ready To Hire React developer?"}
        text={"Start Your Project Today!"}
        link={"/contact-us"}
      />
      <Key_benifit
        title="Key Benefits Of React Js Developers"
        benefits={reactbenefit}
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30"
        image={"/hirecta.webp"}
        title={"Take Your Project to the Next Level!"}
        text={"Start Now"}
        link={"/contact-us"}
      />
      <FAQ questions={hirefaqreactjs} />
    </div>
  );
};

export default HireReactJSDeveloperPage;
