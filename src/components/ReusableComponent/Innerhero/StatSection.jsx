import React from "react";

const StatCard = ({ icon, number, label, suffix = "+" }) => {
  return (
    <div className="bg-white rounded-2xl py-3 sm:py-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-3 w-full sm:w-[240px] md:w-[260px] border border-[#CDCDCD] px-3">
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
        <div className="text-2xl sm:text-3xl font-bold leading-tight">
          {number}
          {suffix}
        </div>

        {/* Smaller Label */}
        <div className="text-xs sm:text-sm text-gray-600 mt-0.5">{label}</div>
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
      number: "09",
      label: "Years in Business",
    },
    {
      icon: "/countries.svg", // Your SVG path in public folder
      number: "04",
      label: "Countries",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16">
      <div className="px-0 container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-8 max-w-6xl ">
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
          <div className="flex-shrink-0 mt-6 lg:mt-0">
            <img
              src="/Badgeblack.svg"
              alt="Clutch review"
              width={110}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
