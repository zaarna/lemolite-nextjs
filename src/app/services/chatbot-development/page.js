import Chatbot_into_Website from "@/components/ReusableComponent/ChatBot/Chatbot_into_Website";
import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import WhatWeOfferAccordion from "@/components/ReusableComponent/What_we_Offer_accordian/What_we_Offer_accordian";
import Why_choose_us from "@/components/ReusableComponent/WhyChooseUs/WhyChooseUs";
import { Chatbot } from "@/data/breadcrumsdata";
import { chatbotstep, iotsystem, specialize } from "@/data/services";
import React from "react";
import { pagesMeta } from "@/data/pagesMeta";


export const metadata = {
  title: pagesMeta["chatbot-development"].title,
  description: pagesMeta["chatbot-development"].description,
  keywords: pagesMeta["chatbot-development"].keywords,
  alternates: {
    canonical: pagesMeta["chatbot-development"].canonical,
  },
};

const ChatBotDevelopmentPage = () => {
  return (
    <div className="min-h-screen">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={Chatbot}
        title={"Chatbot Development Services"}
        content={
          " As a leading AI chatbot development company, we create scalable, secure, and personalized solutions that enhance customer interactions, streamline operations, and deliver measurable results."
        }
        btntext={"AI That Chats"}
        link={"/contact-us"}
        src={"/chatbot.webp"}
        alt={"Chatbot Development Services"}
      />
      <Why_choose_us
        title={"What We Offer"}
        data={iotsystem}
        columns={2}
        bg="bg-[#F1F1F1]"
      />
      <Why_choose_us
        title={"Chatbots We Specialize in Developing"}
        data={specialize}
        columns={3}
      />
      <Ctasection
        bg="bg-[#F1F1F1]"
        image={"/ctagreadiant.webp"}
        title={"Chatbots That Work Like Magic"}
        text={"Create Yours Today"}
        link={"/contact-us"}
      />
      <WhatWeOfferAccordion layout="split" title={"Capabilities of Our Chatbot Solutions"} bg="bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30" padding="top-bottom" stepData={chatbotstep}/>
      <Chatbot_into_Website />
    </div>
  );
};

export default ChatBotDevelopmentPage;
