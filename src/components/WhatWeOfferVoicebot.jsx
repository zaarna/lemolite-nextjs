"use client";

import React from "react";
import Image from "next/image";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent"; // ✅ Adjust path to match your structure

export default function WhatWeOfferVoicebot() {
  return (
    <section className="bg-gradient-to-r from-primary/30 to-secondry/30 top-bottom">
      <div className="container">
        <div className="what-we-offer-voicebot relative">
          {/* Title */}
          <div className="title--head pb-10 md:pb-8 text-center">
            <Titlecontent title="What We Offer" />
          </div>

          {/* Voicebot Cards */}
          <div className="voice-bot-cards flex space-x-6 relative">
            {/* Card 1 */}
            <div className="voicebot--card flex md:flex-col flex-row items-center justify-between bg-gray-700/50 rounded-3xl p-6 gap-6">
              <div className="voicebot--content--card">
                <h4 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-medium">
                  Custom Voicebot Development
                </h4>
                <p className="text-[16px] md:text-[20px] font-light">
                  We build voicebots tailored just for your business. Whether
                  you need a bot for customer support, sales, or internal
                  operations, we ensure it matches your brand and solves your
                  unique challenges.
                </p>
              </div>
              <div className=" flex justify-center relative">
                <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-28 h-28">
                  <Image
                    src="/voiceoffer1.svg"
                    alt="Custom Voicebot Development"
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>

            {/* Connecting Lines */}
            {/* <Image
              src="/horizontal-line.svg"
              alt="line"
              width={400}
              height={10}
              className="absolute top-20 left-1/2 -translate-x-1/2 hidden md:block"
            />
            <Image
              src="/vertical-line.svg"
              alt="line"
              width={10}
              height={200}
              className="absolute top-40 left-1/2 -translate-x-1/2 hidden md:block"
            /> */}

            {/* Card 2 */}
            <div className="voicebot--card even-card flex md:flex-col flex-row-reverse items-center justify-between bg-white/50 rounded-3xl p-6 gap-6 mt-10">
              <div className="voicebot--img--card md:w-1/3 flex justify-center">
                <div className="voicebot--innerimg--card">
                  <Image
                    src="/voiceoffer2.svg"
                    alt="Omnichannel Deployment"
                    width={10}
                    height={10}
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className="voicebot--content--card md:w-2/3">
                <h4 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-medium">
                  Omnichannel Deployment
                </h4>
                <p className="text-[16px] md:text-[20px] font-light">
                  Our voicebots can work on websites, mobile apps, and smart
                  devices. We make sure they integrate seamlessly across all
                  platforms for a smooth experience.
                </p>
              </div>
            </div>

            {/* Connecting Lines (right side) */}
            {/* <Image
              src="/horizontal-line.svg"
              alt="line"
              width={400}
              height={10}
              className="absolute right-0 top-[55%] hidden md:block"
            />
            <Image
              src="/vertical-line.svg"
              alt="line"
              width={10}
              height={200}
              className="absolute right-[20%] top-[65%] hidden md:block"
            /> */}

            {/* Card 3 */}
            <div className="voicebot--card flex md:flex-col flex-row items-center justify-between bg-white/50 rounded-3xl p-6 gap-6 mt-10">
              <div className="voicebot--content--card md:w-2/3">
                <h4 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-medium">
                  Third-Party Integration
                </h4>
                <p className="text-[16px] md:text-[20px] font-light">
                  Enhance your bot’s capabilities by connecting it with tools
                  like CRMs, APIs, or any other software you rely on.
                </p>
              </div>
              <div className="voicebot--img--card md:w-1/3 flex justify-center">
                <div className="voicebot--innerimg--card">
                  <Image
                    src="/voiceoffer3.svg"
                    alt="Third-Party Integration"
                    width={150}
                    height={150}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
