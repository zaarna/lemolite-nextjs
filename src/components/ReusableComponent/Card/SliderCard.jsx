"use client";
import React from "react";
import Image from "next/image";

export default function SliderCard({
  image,
  title,
  description,
  variant = "option1", // "option1" | "option2"
}) {
  // ---- OPTION 1 ----
  if (variant === "option1") {
    return (
      <div className="px-4 h-full">
        <div
          className="
            group flex flex-col items-start rounded-3xl px-6 py-8 h-full 
            bg-white border-2 border-gray-500
            transform transition-all duration-500 ease-in-out cursor-pointer
          "
        >
          {/* Icon */}
          <div className="relative mb-2">
            <div
              className="
                absolute inset-0 w-16 h-16 rounded-full opacity-20 blur-2xl
                transition-all duration-500 group-hover:opacity-40
              "
              style={{ backgroundColor: "rgb(191, 214, 51)" }}
            ></div>

            <div
              className="
                relative w-16 h-16 rounded-full flex items-center justify-center
                transition-all duration-500 group-hover:scale-110
                group-hover:shadow-[0_15px_35px_rgba(191,214,51,0.5)]
              "
              style={{
                background:
                  "linear-gradient(135deg, rgb(191, 214, 51), rgb(171, 194, 31))",
              }}
            >
              <Image
                src={image}
                alt={title}
                width={40}
                height={40}
                className="w-[32px] md:w-[36px] 2xl:w-[40px] object-contain"
              />
            </div>
          </div>

          <h4
            className="
              mt-4 text-lg md:text-xl
              font-bold text-gray-900 transition-all duration-300 ease-in-out
            "
          >
            {title}
          </h4>

          <p
            className="
              mt-2 text-base md:text-lg font-normal text-gray-500 leading-relaxed
              transition-all duration-300 ease-in-out
            "
          >
            {description}
          </p>
        </div>
      </div>
    );
  }

  // ---- OPTION 2 ----
  return (
    <div className=" h-full">
      <div
        className="
          group relative rounded-3xl p-4 h-full 
          transition-all duration-700 ease-in-out cursor-pointer overflow-hidden bg-[#f5f5f5] hover:bg-gradient-to-br from-[#A5D8E1] to-[#D4E4A6]
        "
     
      >
        {/* Icon / Image */}
        <div className="mb-2 transition-all duration-700">
          <div
            className="
              w-20 h-20 rounded-2xl flex items-center justify-center 
              bg-transparent group-hover:bg-white transition-all duration-700
            "
          >
            <Image
              src={image}
              alt={title}
              width={60}
              height={60}
              className="
                object-contain 
                transition-all duration-500 ease-in-out
              "
            />
          </div>
        </div>

        {/* Title */}
        <h3
          className="
            text-lg sm:text-xl font-bold text-gray-900 mb-0.5
            transition-all duration-300 ease-in-out
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            text-base sm:text-lg text-gray-700 leading-relaxed
            transition-all duration-300 ease-in-out
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
