import Image from "next/image";
import Link from "next/link";
import React from "react";

const StatCard = ({ icon, number, label, suffix = "+" }) => {
  return (
    <div className="bg-white rounded-3xl py-2 sm:py-3 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-3 w-full sm:w-[240px] md:w-[260px] border border-[#CDCDCD] px-3 space-x-2">
      {/* Icon on the left */}
      <div className="flex-shrink-0">
        {typeof icon === "string" ? (
          <img src={icon} alt="" className="w-15 h-15 " />
        ) : (
          icon
        )}
      </div>

      {/* Number and Label on the right */}
      <div className="flex flex-col">
        {/* Bold Number with suffix */}
        <div className="text-2xl sm:text-3xl font-bold leading-tight text-left">
          {number}
          {suffix}
        </div>

        {/* Smaller Label */}
        <div className="text-xs sm:text-sm text-black mt-0.5 text-left">
          {label}
        </div>
      </div>
    </div>
  );
};

// Main Stats Section Component
const StatsSection = () => {
  const stats = [
    {
      icon: "/startup.svg", // Your SVG path in public folder
      number: "80",
      label: "Startups Built",
    },
    {
      icon: "/year.svg", // Your SVG path in public folder
      number: "9",
      label: "Years in Business",
    },
    {
      icon: "/countries.svg", // Your SVG path in public folder
      number: "4",
      label: "Countries",
    },
  ];

  return (
    <section className="relative my-3">
      <div className="px-0  relative z-10">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center lg:justify-between gap-4 sm:gap-6 md:gap-8 ">
          {/* Stats Cards */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full lg:w-auto">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
              />
            ))}
          </div>

          {/* Clutch Badge */}

          <Link
            href="https://clutch.co/profile/lemolite-technologies-llp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex sm:hidden md:hidden lg:flex flex-shrink-0 mt-6 lg:mt-0 cursor-pointer">
              <Image
                src="/Badgeblack.png"
                alt="Clutch review"
                width={110}
                height={40}
                className="object-contain"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
