import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import InnerSlider from "@/components/ReusableComponent/Slider/InnerSlider";
import WhatWeOfferAccordion from "@/components/ReusableComponent/What_we_Offer_accordian/What_we_Offer_accordian";
import Why_choose_us from "@/components/ReusableComponent/WhyChooseUs/WhyChooseUs";
import { iot } from "@/data/breadcrumsdata";
import { iotdata, iotfaqData, iotsystem, slidesiot } from "@/data/services";
import React from "react";

const IoTDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Internet of Things (IoT)
        </h1>
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">
            Connected devices and IoT solutions
          </p>
          <p className="text-gray-500">
            This is a placeholder for your IOT_Development component.
            <br />
            Migrate your IOT_Development component from React.js to replace
            this.
          </p>
        </div>
      </div>
      <Why_choose_us
        title={"Benefits of IoT Systems"}
        data={iotsystem}
        columns={2}
      />
      <Ctasection
        title={"Make Your Systems Smarter with IoT"}
        text={"Build Smarter Today"}
        link={"/contact-us"}
        image="/ctagreadiant.webp"
        bg="bg-[#F1F1F1]"
      />
      <FAQ questions={iotfaqData} />
    </div>
  );
};

export default IoTDevelopmentPage;
