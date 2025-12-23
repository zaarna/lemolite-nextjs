"use client";
import React from "react";
import Image from "next/image";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";
import Grediantbutton from "@/components/ReusableComponent/Button/Grediantbutton";

export default function SmartTechSolution({
  title,
  sections = [],
  variant = "option1",
}) {
  return (
    <section
      className={`top-bottom ${variant === "option2" ? "bg-[#F1F1F1]" : ""}`}
    >
      <div className="container">
        <div>
          {/* Section Title */}
          <div className="title--head pb-6 lg:pb-12 md:pb-10 sm:pb-8 text-center">
            <Titlecontent title={title} />
          </div>

          {/* Conditional Rendering based on Variant */}
          {variant === "option1" ? (
            <>
              {/* OPTION 1 */}
              {sections.map((section, index) => (
                <div
                  key={index}
                  className={`main-sections flex flex-col md:flex-row items-center justify-between ${
                    section.reverse ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* LEFT TEXT */}
                  <div className="md:w-1/2 text-left">
                    <div className="relative">
                      <h3 className="font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] whitespace-nowrap">
                        {section.title}
                      </h3>
                      <div className="absolute inset-x-0 -bottom-1.5 h-0.5 bg-gradient-to-r from-[#2ec4f3] to-[#bfd633]"></div>
                    </div>

                    <p className="text-[16px] md:text-[20px] font-light my-4">
                      {section.description}
                    </p>

                    {/* Buttons */}
                    {Array.isArray(section.buttons) &&
                      section.buttons.length > 0 && (
                        <div className="flex flex-wrap justify-left">
                          {section.buttons.map((button, btnIndex) => (
                            <div key={btnIndex} className="mt-3 mr-3">
                              <Grediantbutton
                                to={button.path}
                                link={button.path}
                                btntext={button.label}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                  </div>

                  {/* RIGHT IMAGE */}
                  <div
                    className={`md:w-1/2 flex ${
                      section.reverse ? "justify-start" : "justify-end"
                    }`}
                  >
                    <figure className="w-full md:w-[500px] h-auto">
                      <Image
                        src={section.image}
                        alt={section.title}
                        width={500}
                        height={400}
                        className="max-w-full h-auto object-contain"
                        priority={index === 0}
                      />
                    </figure>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {/* OPTION 2 */}
              {sections.map((section, index) => (
                <div
                  key={index}
                  className={`main-sections flex flex-col md:flex-row items-center justify-between mb-12 ${
                    section.reverse ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* LEFT TEXT COLUMN */}
                  <div className="md:w-1/2 text-left">
                    <div className="relative">
                      <h3 className="font-bold text-[20px] sm:text-[24px] md:text-[28px]">
                        {section.title}
                      </h3>
                      <div className="absolute inset-x-0 -bottom-3 h-0.5 bg-gradient-to-r from-primary to-secondry"></div>
                    </div>

                    <p className="text-[16px] md:text-[18px] font-light my-6">
                      {section.description}
                    </p>

                    {/* ✅ Optional Points Section */}
                    {section.points && section.points.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-[18px] md:text-[20px] text-primary mb-3">
                          {section.pointsTitle || "Key Highlights"}
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-[16px] md:text-[18px] text-gray-700">
                          {section.points.map((point, i) => (
                            <li key={i} className="leading-relaxed">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* RIGHT IMAGE COLUMN */}
                  <div
                    className={`md:w-1/2 flex ${
                      section.reverse ? "justify-start" : "justify-end"
                    }`}
                  >
                    <figure className="w-full md:w-[400px] h-auto">
                      <Image
                        src={section.image}
                        alt={section.title}
                        width={400}
                        height={300}
                        className="max-w-full h-auto object-contain"
                        priority={index === 0}
                      />
                    </figure>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
