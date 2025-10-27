"use client";

import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

export default function Feature_Fact({ features = [] }) {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  // 🛡️ Ensure features is always an array
  const safeFeatures = Array.isArray(features) ? features : [];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible =
          rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        setStartCount(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef}>
        <div className="grid grid-cols-2 gap-4">
          {safeFeatures.map((feature, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center ${feature.bgColor} p-3 lg:p-4 xl:p-6 2xl:p-7 rounded-3xl text-center`}
            >
              {startCount && (
                <CountUp
                  start={0}
                  end={feature.value}
                  duration={3}
                  suffix={feature.suffix}
                  key={feature.text}
                  className="font-bold text-xl sm:text-[22px] md:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]"
                />
              )}
              <p className="text-base lg:text-lg 2xl:text-xl">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
    </div>
  );
}
