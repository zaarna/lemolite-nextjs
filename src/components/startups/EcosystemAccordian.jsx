"use client";

import { useState } from "react";
import { ChevronUp } from "lucide-react";
export default function EcosystemAccordian() {
  const [active, setActive] = useState(0);
  const accordionColors = [
    {
      bg: "bg-[#2EC4F3]",
      dot: "bg-[#2EC4F3]",
      line: "bg-[#2EC4F3]",
      bullet: "#2EC4F3",
    },
    {
      bg: "bg-[#BFD633]",
      dot: "bg-[#BFD633]",
      line: "bg-[#BFD633]",
      bullet: "#BFD633",
    },
    {
      bg: "bg-[#2EC4F3]",
      dot: "bg-[#2EC4F3]",
      line: "bg-[#2EC4F3]",
      bullet: "#2EC4F3",
    },
  ];

  const sections = [
    {
      title: "A. Technical Excellence",
      content: (color) => (
        <>
          <Item
            title="CTO as a Service:"
            desc="Get senior-level technical leadership without the long-term cost of a $200k-per-year hire. We define your roadmap, architecture, and technology stack to ensure scalability and investor readiness. Fast MVP Development"
            color={color.bullet}
          />
          <Item
            title="Fast MVP Development:"
            desc="Production-grade, scalable code delivered at speed, helping you validate faster and outpace competitors."
            color={color.bullet}
          />
          <Item
            title="Post-Launch Support:"
            desc="We remain actively involved post-launch, continuously improving, optimizing, and scaling your product as user data evolves."
            color={color.bullet}
          />
        </>
      ),
    },
    {
      title: "B. Strategic Mentoring & Validation",
      content: (color) => (
        <>
          <Item
            title="Idea Validation:"
            desc="We check your ideas against real market needs to make sure people actually want your product."
            color={color.bullet}
          />
          <Item
            title="Expert Guidance:"
            desc="Direct access to experienced founders and senior technologists who bring pattern recognition, foresight, and execution clarity."
            color={color.bullet}
          />
        </>
      ),
    },
    {
      title: "C. The Legal & Structural Safety Net",
      content: (color) => (
        <>
          <Item
            title="In-House Legal Team:"
            desc="We ensure your startup is legally secure and investor-ready, covering founder agreements, IP protection, and Terms of Service."
            color={color.bullet}
          />
        </>
      ),
    },
  ];

  return (
    <div className="">
      {sections.map((section, index) => {
        const isActive = active === index;
        const color = accordionColors[index % accordionColors.length];

        return (
          <div key={index} className="mb-6">
            {/* Header */}
            <button
              onClick={() => setActive(isActive ? null : index)}
              className="flex items-center gap-3 w-full text-left text-black cursor-pointer"
            >
              {/* Chevron */}
              <span
                className={`w-7 h-7 flex items-center justify-center rounded-full
    transition-all duration-300
    ${isActive ? `${color.bg}` : "bg-white border border-[#000000]"}`}
              >
                <ChevronUp
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isActive ? "rotate-180 text-white" : "rotate-0 text-black"
                  }`}
                />
              </span>

              {/* Title */}
              <h3 className="text-[#111] text-lg md:text-xl font-bold">
                {section.title}
              </h3>
            </button>

            {/* Animated Content */}
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                isActive
                  ? "grid-rows-[1fr] opacity-100 mt-6"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden space-y-5">
                {typeof section.content === "function"
                  ? section.content(color)
                  : section.content}
                <div className={`h-[2px] ${color.line}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Item({ title, desc, color = "#1CB0F6" }) {
  return (
    <div className="flex flex-col gap-1.5 pl-9">
      <h4 className="text-[#444] leading-relaxed flex items-center gap-3">
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: color }}
        />
        <strong className="text-[#111]">{title}</strong>
      </h4>
      <p className="text-[#444] leading-relaxed pl-5">{desc}</p>
    </div>
  );
}
