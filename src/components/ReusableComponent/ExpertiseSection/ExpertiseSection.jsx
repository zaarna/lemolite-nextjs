"use client";
import Image from "next/image";
import React from "react";

const ExpertiseSection = ({ services = [] }) => {
  return (
    <div className="experties">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 p-2 mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="h-28 sm:h-36 experties--box relative sm:rounded-[32px] rounded-[12px] p-3 pb-6 
                       flex flex-col items-center justify-around 
                       transition-all duration-300 
                       sm:bg-white border border-[#BFD633] 
                       sm:hover:bg-gradient-to-r from-[#2EC4F3]/10 to-[#BFD633]/10 hover:border-[#2EC4F3]"
          >
            {/* Service Icon */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 64px, 96px"
                priority={index < 3} // prioritize first few images
              />
            </div>

            {/* Service Title */}
            <h3 className="text-center text-base sm:text-[20px] md:text-[20px] lg:text-[28px] font-medium">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSection;
