"use client";

import React, { useState } from "react";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent"; // ✅ Adjust import path

export default function WhatWeOfferAccordion({
  stepDeta = [],
  title,
  bg = "bg--gray",
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`${bg} top-bottom`}>
      <div className="container flex flex-wrap justify-center items-center">
        {/* Title Section */}
        <div className="w-full gradient-section text-center">
          <Titlecontent title={title} />
        </div>

        {/* Accordion Section */}
        <div className="w-full mt-5">
          <div id="accordions-flushs" className="we_offer_accordions">
            {stepDeta.map((item, index) => (
              <div
                key={index}
                className={`mb-3 rounded-2xl transition ease-linear duration-200 accordion-item ${
                  openIndex === index ? "open" : ""
                }`}
              >
                {/* Accordion Header */}
                <div id={`accordion-flush-heading-${index}`}>
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className={`flex justify-between items-center w-full px-4 py-4 font-medium text-left border-none bg-white hover:border-none focus:outline-none rounded-2xl ${
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

                    {/* Toggle Icon */}
                    <svg
                      className={`w-6 h-6 shrink-0 transition-transform ease-linear duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>

                  {/* Horizontal line (active only when open) */}
                  {openIndex === index && <div className="horizontal-line"></div>}
                </div>

                {/* Accordion Body */}
                <div>
                  <div
                    id={`accordion-flush-body-${index}`}
                    aria-labelledby={`accordion-flush-heading-${index}`}
                    className={`overflow-hidden transition-all ease-linear duration-200 ${
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

                    {/* Vertical line (active only when open) */}
                    {openIndex === index && <div className="vertical-line"></div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
