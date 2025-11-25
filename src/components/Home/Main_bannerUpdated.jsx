import React from "react";
import ScrollReveal from "../ReusableComponent/Animations/ScrollReveal";
import Grediantbutton from "../ReusableComponent/Button/Grediantbutton";
import AnimatedImage from "./AnimatedImage";
import StatsSection from "../ReusableComponent/Innerhero/StatSection";
import InnerHeroSlider from "../ReusableComponent/Innerhero/InnerHeroSlider";
import Link from "next/link";

function Main_bannerUpdated() {
  return (
    <section className="relative h-[500px] sm:h-5/6 md:h-4/6 lg:h-[750px] overflow-hidden">
      <AnimatedImage />
      <div className="text-center absolute top-0 bottom-0 left-0 right-0 m-auto h-auto w-[300px] sm:w-[550px] md:w-3/4 lg:w-[90%] max-w-7xl flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="text-left space-y-6 pt-12 lg:pt-0">
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                We Build{" "}
                <span className="relative inline-block">
                  Your Startup
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 5 Q 50 0, 100 5 T 200 5"
                      stroke="#000"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="text-base sm:text-lg text-gray-700 max-w-xl">
                As a dedicated technology partner, we consult, design, build,
                and scale your Startup to become a Unicorn.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col">
                <b className="mb-2">Mad ideas? Perfect. Let’s build them.</b>
                <Grediantbutton
                  variant="green"
                  btntext="Book Your Free 30-Minute Call"
                  link="https://calendly.com/lemolite-sales/product-demo?month=2025-06"
                />
                <p className="font-inter font-normal italic text-[22px] leading-[100%] tracking-[0] mt-2">
                  We don’t bite. Promise.
                </p>
              </div>

              {/* Yellow accent line */}
              <div className="w-32 h-1 bg-[#BFD633] mt-8"></div>
            </ScrollReveal>
          </div>

          {/* Right side - Illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Person illustration placeholder */}
              <div className="relative z-10 flex justify-center">
                <img
                  src="/Hero_Updated_Vector.svg"
                  alt="Developer working on laptop"
                  className="w-full max-w-lg"
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
