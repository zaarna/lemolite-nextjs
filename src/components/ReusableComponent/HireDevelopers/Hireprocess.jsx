"use client";
import React, { useState } from "react";
import Titlecontent from "../Titlecontent/Titlecontent";
import Image from "next/image";

function Hireproccess({ steps = [], title }) {
  const [hoveredId, setHoveredId] = useState(0);

  return (
    <section className="top-bottom bg-white">
      <div className="container">
        <div className="title--head text-center pb-6 sm:pb-8 md:pb-10">
          <Titlecontent title={title} />
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="space-y-2">
            {steps.map((step, index) => (
              <div
                key={index}
                // onMouseEnter={() => setHoveredId(index)}
                // onMouseLeave={() => setHoveredId(0)}
                onClick={() => {
                  setHoveredId(index);
                }}
                className={`flex flex-col gap-4 cursor-pointer transition-all duration-300 ${
                  hoveredId === index
                    ? "bg-white shadow-md rounded-xl"
                    : "bg-transparent"
                }`}
              >
                <div className="p-3 relative">
                  <div className="flex items-center">
                    {/* Step Number */}
                    <span className="text-[#BFD633] mr-6 font-bold text-[24px] ">
                      {step.num}.
                    </span>
                    {/* Step Title */}
                    <h3 className="font-semibold relative text-[20px] sm:text-[24px]">
                      {step.title}
                      {/* Horizontal Line */}
                    </h3>
                  </div>
                  {/* Content */}
                  <div
                    className={`pl-[58px] overflow-hidden transition-all duration-500 ease-in-out ${
                      hoveredId === index
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <span
                      className={`absolute w-[2px] left-[26px] bg-gradient-to-b from-[#BFD633] to-[#00BFFF]`}
                      style={{
                        height: hoveredId === index ? "50%" : "", // Starts at 50%, grows to 100%
                        top: 60,
                        transition: "height 0.3s ease",
                      }}
                    ></span>
                    <p className="mt-4 text-gray-600 text-[16px] md:text-lg font-light">
                      {step.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center">
            {hoveredId !== null ? (
              <Image
                src={steps[hoveredId].image}
                alt={steps[hoveredId].title}
                width={400}
                height={400}
                quality={100}
                className="w-full h-auto rounded-md transition-all duration-300"
              />
            ) : (
              <p className="text-gray-500">Hover over a step to see details.</p>
            )}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`border rounded-[22px] overflow-hidden bg-white shadow-md transition-all duration-300 ${
                hoveredId === index ? "max-h-full" : "max-h-[70px]"
              }`}
            >
              {/* Step Header */}
              <div
                className="p-3 flex items-center justify-between cursor-pointer"
                onClick={() => setHoveredId(hoveredId === index ? null : index)} // Toggle open/close
              >
                <div className="flex items-center">
                  {/* Step Number */}
                  <span className="text-[#BFD633] mr-4 font-bold text-[24px]">
                    {step.num}.
                  </span>
                  {/* Step Title */}
                  <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-medium relative">
                    {step.title}
                  </h3>
                </div>

                {/* Toggle Icon */}
                <span
                  className={`transform transition-transform duration-300 ${
                    hoveredId === index ? "rotate-180" : ""
                  }`}
                >
                  {/* Arrow Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </span>
              </div>
              {/* Horizontal Line */}
              <span
                className={`block h-[2px] bg-gradient-to-r from-primary to-secondry mt-2 ${
                  hoveredId === index ? "w-full" : "w-0"
                } transition-all duration-75`}
              ></span>
              {/* Step Content */}
              {hoveredId === index && (
                <div className="p-4">
                  <div className="flex items-center justify-center mb-4">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={400}
                      height={400}
                      quality={100}
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                  <p className="text-gray-600 text-[16px] md:text-[20px] font-light">
                    {step.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hireproccess;
