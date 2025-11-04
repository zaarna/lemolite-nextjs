"use client";

import Image from "next/image";
import React from "react";

export default function AllCaseStudy() {
  const steps = [
    {
      image: "/iot-case.webp",
      title: "IoT Predictive Maintenance",
      list: [
        "Predictive Insights",
        "Enhanced Productivity",
        "Reduced Downtime",
      ],
      color: "bg-gradient-to-br from-red-500 to-red-600",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      numberPosition: "left"
    },
    {
      image: "/next-staff-case.webp",
      title: "NexStaff",
      list: [
        "Smart Time Tracking",
        "Smart Hiring",
        "Seamless Integration",
      ],
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      numberPosition: "right"
    },
    {
      image: "/godindin-case.webp",
      title: "GO DinDin",
      list: [
        "Me- Commerce",
        "One-Tap Checkout",
        "Swipe & Buy",
      ],
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      numberPosition: "left"
    },
    {
      image: "/bot.webp",
      title: "Botbutler",
      list: [
        "Restaurant Management Systems",
        "Drive-thru and dine-in ordering flows",
        "QR-based PWA for customer access",
      ],
      color: "bg-gradient-to-br from-lime-500 to-lime-600",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      numberPosition: "right"
    },
    {
      image: "/jc-case.webp",
      title: "JC Jewels",
      list: [
        "User-Centric UI",
        "E-Commerce Integration",
        "Mobile Responsive",
      ],
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      numberPosition: "left"
    }
  ];

  return (
    <div className="min-h-screen top-bottom bg-[#f1f1f1]">
      <div className="container mx-auto space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex ${
              step.numberPosition === "right" ? "flex-row-reverse" : "flex-row"
            } gap-6 items-stretch`}
          >
            {/* Number Card */}
            <div
              className={`${step.color} rounded-2xl shadow-xl  flex flex-col items-center justify-center w-48 relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
            >
              {/* Decorative Background Icons */}
              <div className="absolute inset-0 opacity-10">
                <svg className="absolute top-4 right-4 w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
                <svg className="absolute bottom-4 left-4 w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d={step.icon} />
                </svg>
              </div>

              {/* Replace number with image */}
            <div className="relative z-10">
              <Image
                src={step.image}
                alt={step.title}
                width={500}
                height={500}
                className="object-cover"
              />
           
            </div>
            </div>

            {/* Content Card */}
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              {/* Decorative Background Icon */}
              <div className="absolute top-4 right-4 opacity-5">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Icon in background */}
              <div className="absolute bottom-6 left-6 opacity-5">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d={step.icon} />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Title with Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                </div>

                {/* Replace paragraph with bullet list */}
              {step.list && step.list.length > 0 && (
                <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                  {step.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}