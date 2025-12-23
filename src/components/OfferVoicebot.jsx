"use client";

import React from "react";
import Image from "next/image";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";
// import "@/components/what_we_offer_voicebot.css";

// Importing images (Next.js will optimize these)


export default function OfferVoicebot() {
  return (
    <section className="bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30 top-bottom">
      <div className="container">
        <div className="what-we-offer-voicebot">
          {/* Title Section */}
          <div className="title--head pb-10 md:pb-8 text-center">
            <Titlecontent title="What We Offer" />
          </div>

          {/* Voicebot Cards */}
          <div className="voice-bot-cards relative">
            {/* Card 1 */}
            <div className="voicebot--card">
              <div className="voicebot--content--card">
                <h4 className="text-[20px] sm:text-[24px] font-medium">
                  Custom Voicebot Development
                </h4>
                <p className="text-[16px] md:text-[20px] font-light">
                  We build voicebots tailored just for your business. Whether
                  you need a bot for customer support, sales, or internal
                  operations, we ensure it matches your brand and solves your
                  unique challenges.
                </p>
              </div>
              <div className="voicebot--img--card">
                <div className="voicebot--innerimg--card">
                  <Image
                    src="/voiceoffer1.svg"
                    alt="Custom Voicebot Development"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </div>

            {/* Connector lines (left side) */}
            {/* <Image src="/horizontal-line.svg" width={100} height={100} alt="" className="top" />
            <Image src="/vertical-line.svg" width={100} height={100} alt="" className="middle" />
            <Image src="/horizontal-line.svg" width={100} height={100} alt="" className="bottom" /> */}

            {/* Card 2 */}
            <div className="voicebot--card even-card">
              <div className="voicebot--img--card">
                <div className="voicebot--innerimg--card">
                  <Image
                    src="/voiceoffer2.svg"
                    alt="Omnichannel Deployment"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
              <div className="voicebot--content--card">
                <h4 className="text-[20px] sm:text-[24px] font-medium">
                  Omnichannel Deployment
                </h4>
                <p className="text-[16px] md:text-[20px] font-light">
                  Our voicebots can work on websites, mobile apps, and smart
                  devices. We make sure they integrate seamlessly across all
                  platforms for a smooth experience.
                </p>
              </div>
            </div>

            {/* Connector lines (right side) */}
            {/* <Image src="/horizontal-line.svg" width={100} height={100} alt="" className="top-right" />
            <Image src="/vertical-line.svg" width={100} height={100} alt=""  className="middle-right" />
            <Image src="/horizontal-line.svg" width={100} height={100} alt="" className="bottom-right" /> */}

            {/* Card 3 */}
            <div className="voicebot--card">
              <div className="voicebot--content--card">
                <h4 className="text-[20px] sm:text-[24px] font-medium">
                  Third-Party Integration
                </h4>
                <p className="text-[16px] md:text-[20px] font-light">
                  Enhance your bot’s capabilities by connecting it with tools
                  like CRMs, APIs, or any other software you rely on.
                </p>
              </div>
              <div className="voicebot--img--card">
                <div className="voicebot--innerimg--card">
                  <Image
                    src="/voiceoffer3.svg"
                    alt="Third-Party Integration"
                    width={150}
                    height={150}
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
