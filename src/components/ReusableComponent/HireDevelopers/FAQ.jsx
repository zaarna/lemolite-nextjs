"use client";
import React, { useState } from "react";
import Titlecontent from "../../ReusableComponent/Titlecontent/Titlecontent";

function FAQ({
  questions = [],
  padding = "pt-8 md:pt-16 lg:pt-20",
  bg = "bg-white",
}) {
  const [openIndex, setOpenIndex] = useState(null); // Set initial state to null

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`faq-accordion ${padding} ${bg}`}>
      <div className="container">
        <div className="title--head md:pb-10 sm:pb-6 pb-7 text-center">
          <Titlecontent title="Frequently Asked Questions" />
        </div>
        <div className=" mx-auto max-w-screen-xl">
          <div id="accordion-flush" className="accordion">
            {questions.map((item, index) => (
              <div
                key={index}
                className={`border-[#D2D2D2] border-[1px] mb-5 rounded-lg md:rounded-2xl transition ease-linear duration-75 ${
                  openIndex === index ? "bg-white border-0 drop-shadow-md" : " "
                }`}
              >
                <div id={`accordion-flush-heading-${index}`}>
                  <button
                    type="button"
                    className={`flex justify-between items-center rounded-lg md:rounded-2xl w-full p-3 md:p-4 lg:px-6 lg:py-4 2xl:px-8 2xl:py-6 font-medium text-left focus:outline-none bg-[#F5F5F5] border-black ${
                      openIndex === index ? "bg-white" : " dark:text-gray-400"
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-medium">
                      {item.question}
                    </span>
                    <svg
                      className={`w-6 h-6 shrink-0  transition ease-linear duration-200 ${
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
                </div>
                <div
                  id={`accordion-flush-body-${index}`}
                  className={`mx-3 md:mx-4 lg:mx-6 overflow-hidden transition-max-height transition ease-linear duration-75  ${
                    openIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                  aria-labelledby={`accordion-flush-heading-${index}`}
                >
                  <div className=" py-2 text-left border-t-[#D0D0D0] border-t">
                    <p className="text-[16px] md:text-[20px] font-light content-start">
                      {item.answer}
                    </p>
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

export default FAQ;
