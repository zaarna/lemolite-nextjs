"use client";
import React from "react";
import ScrollReveal from "../ReusableComponent/Animations/ScrollReveal";
import Grediantbutton from "../ReusableComponent/Button/Grediantbutton";
import AnimatedImage from "./AnimatedImage";
import StatsSection from "../ReusableComponent/Innerhero/StatSection";
import InnerHeroSlider from "../ReusableComponent/Innerhero/InnerHeroSlider";
import Link from "next/link";
import { usePopup } from "../PopupTimer";

function Main_bannerUpdated() {
  const { openPopup } = usePopup();
  return (
    <section className="relative h-[1050px] sm:h-[850px] md:h-[1000px] lg:h-[650px] overflow-hidden">
      <AnimatedImage />
      <div className="text-center absolute top-0 bottom-0 left-0 right-0 m-auto h-auto w-[300px] sm:w-[550px] md:w-[700px] lg:w-[90%] max-w-7xl flex flex-col justify-center sm:justify-start md:justify-center lg:justify-center pt-6 sm:pt-8 md:pt-12 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-8 items-center lg:mt-[20px]">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 order-first">
            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                We Build{" "}
                <span className="relative inline-block font-bold">
                  Your Startup
                  <img
                    src="./Crown.svg"
                    className="absolute -top-1.5 -right-2 sm:-top-2 sm:-right-3 md:-top-1 md:-right-4 w-4 h-7 sm:w-5 sm:h-9 md:w-6 md:h-10 lg:w-6 lg:h-11"
                    alt=""
                  />
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
                As a dedicated technology partner, we consult, design, build,
                and scale your Startup to become a Unicorn.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col items-center lg:items-start mt-6 sm:mt-0 md:mt-0 lg:mt-0 ">
                <b className="mb-2 md:mb-3 font-normal text-base sm:text-lg md:text-xl lg:text-[19px]">
                  Mad ideas? Perfect. Let's build them.
                </b>
                <Grediantbutton
                  variant="green"
                  btntext="Book Your Free 30-Minute Call"
                  targetBlank="true"
                  // link="https://calendly.com/lemolite-sales/product-demo?month=2025-06"
                  onClick={() => {
                    openPopup();
                  }}
                />
                <p className="font-inter font-extralight italic text-base sm:text-lg md:text-xl lg:text-[20px] leading-[100%] tracking-[0] mt-2 md:mt-3">
                  We don't bite. Promise.
                </p>
              </div>

              {/* Yellow accent line */}
              <div className="w-32 md:w-40 h-1 bg-[#BFD633] mt-4 sm:mt-6 md:mt-8 lg:mt-[50px] mx-auto lg:mx-0"></div>
            </ScrollReveal>
          </div>

          {/* Right side - Illustration */}
          <div className="flex justify-center lg:justify-end items-center order-last mt-4 sm:mt-6 md:mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg">
              {/* Person illustration */}
              <div className="relative z-10 flex justify-center lg:justify-end">
                <img
                  src="/Hero_Updated_Vector.svg"
                  alt="Developer working on laptop"
                  className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - STAYS INSIDE */}
        <StatsSection />
        <InnerHeroSlider />
      </div>
    </section>
  );
}

export default Main_bannerUpdated;
