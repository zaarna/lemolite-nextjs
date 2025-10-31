import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import Devlopmentprocess from "@/components/ReusableComponent/DevelopmentProcess/Devlopmentprocess";
import Experties from "@/components/ReusableComponent/ExpertiseSection/Experties";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import WhatWeOfferAccordion from "@/components/ReusableComponent/What_we_Offer_accordian/What_we_Offer_accordian";
import Why_choose_us from "@/components/ReusableComponent/WhyChooseUs/WhyChooseUs";
import { aiml } from "@/data/breadcrumsdata";
import { aimalexpert, aimlchoosedata, aimlData, aimlfaqData, aimlprocessSteps } from "@/data/services";
import React from "react";

const AIMLDevelopmentPage = () => {
  return (
    <div className="min-h-screen">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={aiml}
        title={"AI & ML Development Services"}
        content={
          "Unlock the potential of Artificial Intelligence and Machine Learning to streamline operations, enhance decision-making, and create a smarter, more efficient future for your business."
        }
        btntext={"Start Your AI Journey"}
        link={"/contact-us"}
        src={"/aiml.webp"}
        alt={"AI & ML Development Services"}
      />
      <Experties bg='bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30'
      maintitle={"Expertise You Can Trust"}
      contentData={aimalexpert}/>
      <WhatWeOfferAccordion title={"What We Offer"} stepDeta={aimlData} bg="bg-[#F1F1F1]" />
      <Why_choose_us title={"Why Lemolite?"} data={aimlchoosedata} columns={2} />
      <Devlopmentprocess
        title={"Our Development Process"}
        processSteps={aimlprocessSteps}
      />
      <Ctasection
        title={"Ready to Transform Your Business with AI & ML?"}
        text={"Get Started Today"}
        link={"/contact-us"}
        image="/ctagreadiant.webp"
        bg="bg-[#F1F1F1]"
      />
      <FAQ questions={aimlfaqData} padding="top-bottom" /> 
    </div>
  );
};

export default AIMLDevelopmentPage;
