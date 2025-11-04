"use client";

import Image from "next/image";

export default function WhyHire({ features = [], layoutType = "first" }) {
  return (
    <div className="md:max-h-[550px] max-h-none h-full overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none]">
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} layoutType={layoutType} />
      ))}
    </div>
  );
}

function FeatureCard({ feature, layoutType }) {
  return (
    <div className="group before-image relative p-[0.12rem] my-3 sm:my-5 transition duration-300">
      <div className="relative  bg-gradient-to-r from-[#2EC4F3]/10 to-[#BFD633]/10 p-4 border rounded-[16px] md:rounded-[32px] border-[#BFD633] md:border-transparent md:hover:border-[#BFD633]">
        {/* Conditional Layout */}
        {layoutType === "first" ? (
          <>
            <div className="flex justify-start mb-1">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={64}
                height={64}
                className="w-10 md:w-12 lg:w-16 h-auto"
              />
            </div>
            <div>
              <h3 className="text-[20px] md:text-[24px] font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-[16px] md:text-lg ">{feature.description}</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-start items-center mb-3 space-x-3">
              <div className="">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={70}
                  height={70}
                  className="w-12"
                />
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold">
                {feature.title}
              </h3>
            </div>
            <div>
              <p className="text-[16px] md:text-lg ">{feature.description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
