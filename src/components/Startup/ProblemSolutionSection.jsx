"use client";
import React, { useState, useEffect } from "react";
import ProblemCard from "./ProblemCard";
import { problemcards } from "@/data/startup";
const ProblemSolutionSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="container py-16">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Problem/Solution label with line */}
        <div className="flex items-start gap-3 md:w-1/4 flex-shrink-0">
          <div className="w-10 h-0.5 bg-gray-600 mt-5"></div>
          <h2
            className="text-[#000000] font-normal whitespace-nowrap ml-3"
            style={{ fontSize: "clamp(1rem, 2.8vw, 1.6rem)" }}
          >
            Problem/Solution
          </h2>
        </div>

        {/* Cards section */}
        <div className="flex flex-col md:flex-row gap-6 flex-1">
          {problemcards.map((card, index) => (
            <div key={index} className="flex-1">
              <ProblemCard
                title={card.title}
                content={card.content}
                hoverGradient={card.hoverGradient}
                gradientOrigin={card.gradientOrigin}
                isMobile={isMobile}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionSection;
