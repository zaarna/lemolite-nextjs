"use client";
import React from "react";
import Link from "next/link";

export default function Grediantbutton({
  link,
  btntext,
  onClick,
  targetBlank = false,
  variant = "gradient", // "gradient" or "black"
  id = "",
}) {
  // Style presets for both variants
  const variants = {
    gradient: {
      text: "text-[#2EC4F3]",
      border: "border border-[#2EC4F3]",
      hoverBg: "bg-gradient-to-r from-[#2EC4F3] to-[#BFD633]",
      bg: "bg-white",
      border_radius: "full",
      text_weight: "font-bold",
    },
    black: {
      text: "text-black",
      border: "border border-black",
      hoverBg: "bg-black",
      bg: "bg-white",
      border_radius: "full",
      text_weight: "font-bold",
    },
    green: {
      text: "text-black",
      border: "",
      hoverBg: "bg-black",
      bg: "#BFD633",
      // border_radius: "[10px]",
      border_radius: "full",
      text_weight: "font-medium",
    },
  };

  const current = variants[variant] || variants.gradient;

  const ButtonContent = (
    <button
      onClick={onClick}
      className={`relative overflow-hidden px-8 py-3 font-bold rounded-${current.border_radius} cursor-pointer
                  bg-[${current.bg}] ${current.text} ${current.border} ${current.border}
                  transition-all duration-500 shadow-md group`}
      id={id}
    >
      {/* Hover overlay */}
      <span
        className={`absolute inset-0 ${current.hoverBg}  
                    translate-x-[-101%] group-hover:translate-x-0 
                    transition-transform duration-500 ease-out rounded-${current.border_radius}`}
      ></span>

      {/* Text always above overlay */}
      <span
        className={`relative z-10 ${current.text_weight} group-hover:text-white transition-colors duration-300 left-0`}
      >
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
