import Image from "next/image";
import React from "react";

const steps = [
  {
    title: "Discovery & Validation",
    desc: "We audit your idea and validate the use case.",
    image: "/discovery.png",
  },
  {
    title: "The Agreement",
    desc: "We settle on the Cash/Equity ratio that fits your stage.",
    image: "/agreement.png",
  },
  {
    title: "Development & CTO Oversight",
    desc: "Our team builds the MVP while our CTO sets the technical vision.",
    image: "/development.png",
  },
  {
    title: "Legal Foundations",
    desc: "Our legal team secures your IP and corporate structure.",
    image: "/legal.png",
  },
  {
    title: "Launch & Beyond",
    desc: "We support the launch and help you iterate based on real user data.",
    image: "/launch.png",
  },
];

export default function HowEngagementcards() {
  return (
    <div className="sm:mt-12 mt-6">
      <div className="flex flex-wrap justify-center gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="
                border rounded-2xl p-6 text-center bg-white
                w-full
                sm:w-[calc(50%-1rem)]
                lg:w-[calc(33.333%-1.25rem)]
              "
          >
            {/* Icon Image */}
            <div className="w-20 h-20 mx-auto flex items-center justify-center">
              <Image
                src={step.image}
                alt={step.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="mt-4 text-lg md:text-xl   font-bold text-gray-900">
              {step.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-base md:text-lg font-normal text-gray-500 leading-relaxed ">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
