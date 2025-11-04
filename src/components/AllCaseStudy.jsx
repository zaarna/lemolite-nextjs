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
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    //   numberPosition: "left"
    },
    {
      image: "/next-staff-case.webp",
      title: "NexStaff",
      list: [
        "Smart Time Tracking",
        "Smart Hiring",
        "Seamless Integration",
      ],
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    //   numberPosition: "right"
    },
    {
      image: "/godindin-case.webp",
      title: "GO DinDin",
      list: [
        "Me- Commerce",
        "One-Tap Checkout",
        "Swipe & Buy",
      ],
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    //   numberPosition: "left"
    },
    {
      image: "/bot.webp",
      title: "Botbutler",
      list: [
        "Restaurant Management Systems",
        "Drive-thru and dine-in ordering flows",
        "QR-based PWA for customer access",
      ],
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    //   numberPosition: "right"
    },
    {
      image: "/jc-case.webp",
      title: "JC Jewels",
      list: [
        "User-Centric UI",
        "E-Commerce Integration",
        "Mobile Responsive",
      ],
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    //   numberPosition: "left"
    }
  ];

  return (
    <div className="min-h-screen top-bottom bg-[#f1f1f1]">
      <div className="container mx-auto space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Image Section */}
              <div className="relative w-full h-64">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title with small icon */}
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

                  {/* Bullet list instead of description */}
                  {step.list && step.list.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
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
    </div>
  );
}