"use client";
import React from "react";
import Link from "next/link";

export default function Grediantbutton({
  link,
  btntext,
  onClick,
  targetBlank = false,
  variant = "gradient", // "gradient" or "black"
}) {
  // Style presets for both variants
  const variants = {
    gradient: {
      text: "text-[#2EC4F3]",
      border: "border-[#2EC4F3]",
      hoverBg: "bg-gradient-to-r from-[#2EC4F3] to-[#BFD633]",
    },
    black: {
      text: "text-black",
      border: "border-black",
      hoverBg: "bg-black",
    },
  };

  const current = variants[variant] || variants.gradient;

  const ButtonContent = (
    <button
      onClick={onClick}
      className={`relative overflow-hidden px-8 py-3 font-semibold rounded-full 
                  bg-white ${current.text} border ${current.border}
                  transition-all duration-500 shadow-md group`}
    >
      {/* Hover overlay */}
      <span
        className={`absolute inset-0 ${current.hoverBg}
                    translate-x-[-100%] group-hover:translate-x-0 
                    transition-transform duration-500 ease-out rounded-full`}
      ></span>

      {/* Text always above overlay */}
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        {btntext}
      </span>
    </button>
  );

  // Handle links
  if (link) {
    if (targetBlank) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {ButtonContent}
        </a>
      );
    } else {
      return <Link href={link}>{ButtonContent}</Link>;
    }
  }

  // Default: onClick only
  return ButtonContent;
}
