"use client";

import Image from "next/image";

const ProcessStep = ({
  stepNumber,
  title,
  description,
  image,
  arrowImage,
  isReversed,
  isFirst,
}) => {
  return (
    <div className={`outer--box ${isReversed ? "alt--box" : ""}`}>
      <div
        className={`flex ${
          isReversed ? "flex-col-reverse" : "flex-col"
        } md:flex-row items-center relative inner-section bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30`}
      >
        {/* Left Side (Number & Image) */}
        {!isReversed && (
          <div className="logo-step flex flex-initial w-full md:w-1/4 items-center justify-center md:py-4 md:px-6">
            {!isFirst && <div className="suqre--box left--side"></div>}
            <Image
              src={image}
              alt="step icon"
              width={80}
              height={80}
              className="w-12 sm:w-16 md:w-16 lg:w-20 h-auto"
            />
            <span className="font-bold number text-[28px] sm:text-4xl md:text-3xl lg:text-5xl md:p-2 lg:p-3 pl-4 md:pl-6 lg:pl-10">
              {stepNumber}
            </span>
          </div>
        )}

        {/* Arrow Image */}
        <div className={isReversed ? "right-arrow-img" : "left-arrow-img"}>
          <img
            src={arrowImage}
            alt="arrow vector"
            className="
    w-[41px] h-[228px]
    md:w-[50px] md:h-[275px]
    lg:w-[41px] lg:h-[228px]
    object-contain
  "
          />
        </div>

        {/* Detail Section */}
        <div
          className={`w-full md:w-3/4 detail-process px-6 md:px-10 ${
            isReversed
              ? "md:pr-16 text-center md:text-right"
              : "text-center md:text-left md:pl-16"
          }`}
        >
          <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-medium mb-2">
            {title}
          </h3>
          <p className="text-[16px] md:text-[20px] font-light">{description}</p>
        </div>

        {/* Right Side (Reversed Layout) */}
        {isReversed && (
          <div className="logo-step flex flex-initial w-full md:w-1/4 items-center justify-center md:py-4 md:px-6 md:justify-end">
            <div className="suqre--box right--side"></div>
            <span className="font-bold number text-[28px] sm:text-4xl md:text-3xl lg:text-5xl md:p-2 lg:p-3 pr-3 md:pr-6 lg:pr-10">
              {stepNumber}
            </span>
            <Image
              src={image}
              alt="step icon"
              width={80}
              height={80}
              className="w-12 sm:w-16 md:w-16 lg:w-20 h-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessStep;
