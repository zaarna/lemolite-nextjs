"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";
import { useResponsive } from "@/hooks/useResponsive";
import Link from "next/link";
import Grediantbutton from "../Button/Grediantbutton";
// import Grediantbutton from "@/components/ReusableComponent/Button/Grediantbutton";

export default function TailoredSolutions({ solutions = [] }) {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(null);
  const { isDesktop, isTablet, isMobile } = useResponsive();

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleNavigation = (link) => {
    if (link) router.push(link);
  };

  // Early return if no solutions provided
  if (!solutions || solutions.length === 0) {
    return (
      <section className="tailored_solutions_sec top-bottom">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6 title--head">
            <Titlecontent title="Tailored Solutions to Power Your Business" />
          </div>
          <div className="text-center py-8">
            <p className="text-gray-500">
              No solutions available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="tailored_solutions_sec top-bottom">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div className="text-center">
          <Titlecontent title="Tailored Solutions to Power Your Business" />
        </div>

        {/* ✅ Desktop View - Enhanced with smooth transitions */}
        {isDesktop && (
          <div className="sm:mt-12 mt-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="relative group flex items-center justify-between py-4 transition-all duration-500 ease-in-out transform"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderImageSource:
                    "linear-gradient(100.63deg, #2EC4F3 9.94%, #BFD633 86.86%)",
                  borderImageSlice: 1,
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              >
                <h3 className="relative w-1/2 ml-6 font-semibold transition-colors duration-300 group-hover:text-[#2EC4F3] before:absolute before:left-[-20px] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-r before:from-[#2EC4F3] before:to-[#BFD633]">
                  {solution.title}
                </h3>
                <p className="opacity-0 flex-1 group-hover:opacity-100 transition-all duration-700 ease-in-out transform translate-y-2 group-hover:translate-y-0 md:w-[540px]">
                  {solution.description}
                </p>

                <div className="relative">
                  <div className="opacity-0 flex-1 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-x-4 group-hover:translate-x-0">
                    <Link href={solution.link}>
                      <ArrowRight className="text-black transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ✅ Mobile & Tablet Accordion - Enhanced with smooth transitions */}
        {(isMobile || isTablet) && (
          <div className="space-y-3">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-[1.01]"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderImageSource:
                    "linear-gradient(100.63deg, #2EC4F3 9.94%, #BFD633 86.86%)",
                  borderImageSlice: 1,
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              >
                <button
                  className="w-full flex justify-between items-center px-4 py-4 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#2EC4F3]/5 hover:to-[#BFD633]/5"
                  onClick={() => handleToggle(index)}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-4 h-4 rounded-full transition-all duration-300 ease-in-out"
                      style={{
                        background:
                          "linear-gradient(100.63deg, #2EC4F3 9.94%, #BFD633 86.86%)",
                      }}
                    ></div>
                    <h3 className="font-semibold text-left transition-colors duration-300 hover:text-[#2EC4F3]">
                      {solution.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 transition-all duration-500 ease-in-out transform ${
                      openIndex === index
                        ? "rotate-180 text-[#2EC4F3]"
                        : "text-gray-600"
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className={`px-4 pb-4 transition-all duration-700 ease-in-out transform ${
                      openIndex === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: openIndex === index ? "200ms" : "0ms",
                    }}
                  >
                    <p className="text-start text-gray-700 leading-relaxed mb-3">
                      {solution.description}
                    </p>
                    <button
                      onClick={() => handleNavigation(solution.link)}
                      className="inline-flex items-center space-x-2 text-[#BFD633] font-medium hover:text-[#2EC4F3] transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                      <span className="underline underline-offset-4">
                        Know More
                      </span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 hover:translate-x-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ✅ CTA Button */}
        <div className="flex items-center justify-center h-full mt-10 md:mt-12">
          <Grediantbutton btntext="View All Services" link="/services" />
        </div>
      </div>
    </section>
  );
}
