import React, { useState } from "react";

const ProblemCard = ({
  title,
  content,
  hoverGradient,
  isMobile,
  gradientOrigin,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const shouldShowGradient = isMobile || isHovered;

  return (
    <div
      className="rounded-3xl p-8 border-2 border-[#F2F2F2] relative overflow-hidden h-full"
      style={{
        background: "#f5f5f5",
      }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 rounded-3xl transition-all duration-700 ease-in-out"
        style={{
          background: hoverGradient,
          clipPath: shouldShowGradient
            ? "circle(150% at " + gradientOrigin + ")"
            : "circle(0% at " + gradientOrigin + ")",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <h3
          className="font-bold mb-4 transition-colors duration-700"
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            color: shouldShowGradient ? "#ffffff" : "#000000",
          }}
        >
          {title}
        </h3>
        <p
          className="leading-relaxed transition-colors duration-700"
          style={{
            fontSize: "clamp(0.875rem, 2vw, 1rem)",
            color: shouldShowGradient ? "#ffffff" : "#333333",
          }}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default ProblemCard;
