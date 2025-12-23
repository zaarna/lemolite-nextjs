"use client";

import React, { useState } from "react";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";

export default function WhatWeOfferAccordion({ layout = "split", stepData = [], title, content, bg = "bg-white", padding = "top-bottom"  }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`${bg} ${padding}`}>
      <div className="container">
        {/* FULL WIDTH LAYOUT */}
        {layout === "full" && (
          <>
            <div className="text-center mx-auto pb-10">
              <Titlecontent
                title={title}
                content={content}
              />
            </div>

            <div id="accordions-full" className="we_offer_accordions">
              {stepData.map((item, index) => (
                <div
                  key={index}
                  className={`mb-3 rounded-2xl transition ease-linear duration-75 accordion-item ${
                    openIndex === index ? "open" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className={`flex bg-white justify-between items-center rounded-2xl w-full px-4 py-4 font-medium text-left border-none hover:border-none focus:outline-none ${
                      openIndex === index ? "rounded-b-none" : ""
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-[#BFD633] mr-6 font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px]">
                        {item.step}
                      </span>
                      <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px]">
                        {item.question}
                      </h3>
                    </div>

                    <svg
                      className={`w-6 h-6 shrink-0 transition-transform ease-linear duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-max-height ease-linear duration-75 ${
                      openIndex === index
                        ? "max-h-screen bg-white rounded-b-2xl"
                        : "max-h-0"
                    }`}
                  >
                    <div className="px-5 sm:pl-20 pt-4 mb-5">
                      <p className="text-[16px] md:text-[20px] font-light">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* SPLIT LAYOUT */}
        {layout === "split" && (
          <div className="flex flex-wrap justify-center items-center">
            {/* Left Column */}
            <div className="w-full md:w-[40%]">
              <div className="title--head pb-10 md:pb-8">
                <Titlecontent
                  title={title}
                content={content}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-[60%] mt-5 pl-5">
              <div id="accordions-flushs" className="we_offer_accordions">
                {stepData.map((item, index) => (
                  <div
                    key={index}
                    className={`mb-3 rounded-2xl transition ease-linear duration-75 accordion-item ${
                      openIndex === index ? "open" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className={`flex bg-white justify-between items-center rounded-2xl w-full px-4 py-4 font-medium text-left border-none hover:border-none focus:outline-none ${
                        openIndex === index ? "rounded-b-none" : ""
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="text-[#BFD633] mr-6 font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px]">
                          {item.step}
                        </span>
                        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px]">
                          {item.question}
                        </h3>
                      </div>

                      <svg
                        className={`w-6 h-6 shrink-0 transition-transform ease-linear duration-200 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-max-height ease-linear duration-75 ${
                        openIndex === index
                          ? "max-h-screen bg-white rounded-b-2xl"
                          : "max-h-0"
                      }`}
                    >
                      <div className="px-5 sm:pl-20 pt-4 mb-5">
                        <p className="text-[16px] md:text-[20px] font-light">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
