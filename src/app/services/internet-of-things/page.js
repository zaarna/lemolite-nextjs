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
    <div className="min-h-screen">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={iot}
        title={"IoT App Development Services"}
        content={
          "Connect your world effortlessly with our smart IoT solutions. Simplify your business, enhance user experiences, and trust us to deliver secure, reliable technology that works for you."
        }
        btntext={"Innovate with IoT"}
        link={"/contact-us"}
        src={"/iot.webp"}
        alt={"IoT App Development Services"}
      />
      <WhatWeOfferAccordion title={"What We Offer"} stepDeta={iotdata} bg="bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30" />
      <InnerSlider
        data={slidesiot}
        title="Why Lemolite?"
      />
      <Why_choose_us title={"Benefits of IoT Systems"} data={iotsystem} columns={2} />
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
