import React from "react";

function BottomSection() {
  const infoPoints = [
    "Lower upfront costs, preserving capital for growth and traction.",
    "Shared incentives that align us with your long-term market success.",
    "A true partnership model where value is created together, not billed hourly.",
  ];
  return (
    <div className="flex flex-col md:flex-row gap-8 mt-8">
      {/* First Card - How It Works */}
      <div className="flex-1 rounded-3xl border border-[#000] bg-white p-6">
        {/* Image Container with gray background */}
        <div className="bg-[#D9D9D9] rounded-2xl px-8 py-4 mb-6 flex items-center justify-center">
          <img
            src="/howitworks.svg"
            alt="How It Works"
            className="w-full h-[300] max-w-md"
          />
        </div>

        <div className="px-3">
          <h3
            className="font-semibold mb-4 text-left"
            style={{ fontSize: "clamp(1.25rem, 3.3vw, 2rem)" }}
          >
            How It Works:
          </h3>
          <p
            className="text-gray-700 leading-relaxed text-left p"
            style={{ fontSize: "clamp(0.875rem, 2vw, 1.3rem)" }}
          >
            You choose the mix of cash and equity that works for your startup.
            For example, it could be 70% cash and 30% equity, or any combination
            that fits your runway and goals.
          </p>
        </div>
      </div>

      {/* Second Card - Why It Matters */}
      <div className="flex-1 rounded-3xl border border-[#000] bg-white p-6">
        {/* Image Container with gray background - shorter */}
        <div
          className="bg-[#D9D9D9] rounded-2xl pt-3 px-6 pb-0 mb-6 flex items-center justify-center"
          style={{ minHeight: "130px" }}
        >
          <img
            src="/whymatters.svg"
            alt="Why It Matters"
            className="w-full h-auto max-w-sm"
          />
        </div>

        {/* Content */}
        <h3
          className="font-bold mb-6 text-left"
          style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}
        >
          Why It Matters:
        </h3>

        {/* List of points with light blue background */}
        <div className="flex flex-col gap-4">
          {infoPoints.map((point, index) => (
            <InfoCard key={index} text={point} />
          ))}
        </div>
      </div>
    </div>
  );
}

const InfoCard = ({ text }) => {
  return (
    <div
      className="rounded-2xl p-4 border border-[#10617B]"
      style={{ backgroundColor: "#CCF3FF" }}
    >
      <p
        className="text-[#000000] text-left "
        style={{ fontSize: "clamp(0.875rem, 2vw, 1.2rem)" }}
      >
        {text}
      </p>
    </div>
  );
};

export default BottomSection;
