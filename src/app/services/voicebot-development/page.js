import BetterOption from "@/components/BetterOption";
import OfferVoicebot from "@/components/OfferVoicebot";
import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import WhatWeOfferAccordion from "@/components/ReusableComponent/What_we_Offer_accordian/What_we_Offer_accordian";
import Why_choose_us from "@/components/ReusableComponent/WhyChooseUs/WhyChooseUs";
import { Voicebot } from "@/data/breadcrumsdata";
import { voicebotstep, voicespecialize } from "@/data/services";
import React from "react";
import { pagesMeta } from "@/data/pagesMeta";


export const metadata = {
  title: pagesMeta["voicebot-development"].title,
  description: pagesMeta["voicebot-development"].description,
  keywords: pagesMeta["voicebot-development"].keywords,
  alternates: {
    canonical: pagesMeta["voicebot-development"].canonical,
  },
};

const VoiceBotDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={Voicebot}
        title={"AI Voicebot Development Services"}
        content={
          "We specialize in developing custom voicebots that seamlessly integrate with your business. As a leading AI voicebot development company, we create custom voicebots designed to meet your unique needs and drive innovation."
        }
        btntext={"Voice Your Vision"}
        link={"/contact-us"}
        src={"/voice.webp"}
        alt={"AI Voicebot Development Services"}
      />
      <OfferVoicebot />
      <WhatWeOfferAccordion bg="bg-[#F1F1F1]" layout="split" title={"Choose the Right Voicebot for Your Business Need"} content={"You may assume all voicebots are the same, but that's not the case. While they all provide voice interaction, their features and use cases differ significantly. Let’s break down the various types of voice bots, each designed for specific needs and offering distinct advantages:"} stepData={voicebotstep} />
      <Ctasection
        title={"Take Your Customer Experience to the Next Level"}
        text={"Create Your Voicebot"}
        link={"/contact-us"}
        image="/ctawhite.webp"
        bg="bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30"
      />
      <Why_choose_us title={"Capabilities of Our Voicebot Solutions"}
      columns={3}
      data={voicespecialize} />
      <BetterOption />
    </div>
  );
};

export default VoiceBotDevelopmentPage;
