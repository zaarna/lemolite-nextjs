import BetterOption from "@/components/BetterOption";
import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import Why_choose_us from "@/components/ReusableComponent/WhyChooseUs/WhyChooseUs";
import WhatWeOfferVoicebot from "@/components/WhatWeOfferVoicebot";
import { Voicebot } from "@/data/breadcrumsdata";
import React from "react";

const VoiceBotDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Voicebot Development
        </h1>
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">
            Voice-enabled AI assistants and voicebots
          </p>
          <p className="text-gray-500">
            This is a placeholder for your VoiceBotDevelopment component.
            <br />
            Migrate your VoiceBotDevelopment component from React.js to replace
            this.
          </p>
        </div>
      </div>
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
      <WhatWeOfferVoicebot />
      <Ctasection
        title={"Take Your Customer Experience to the Next Level"}
        text={"Create Your Voicebot"}
        link={"/contact-us"}
        image="/ctawhite.webp"
        bg="bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30"
      />
      <Why_choose_us title={"Capabilities of Our Voicebot Solutions"} />
      <BetterOption />
    </div>
  );
};

export default VoiceBotDevelopmentPage;
