"use client";
import React from "react";
import Image from "next/image";
import Titlecontent from "../Titlecontent/Titlecontent";

const whychoosetech = [
  {
    icon: "/key1.svg",
    title: "Identify Your Needs",
    description:
      "Begin by outlining your project requirements. Consider the features you want and the problems you aim to solve. Understanding your needs is crucial to selecting the right technology for your software development process.",
  },
  {
    icon: "/key2.svg",
    title: "Evaluate the Project Scale",
    description:
      "Assess the scope and complexity of your project. Smaller projects may benefit from lightweight frameworks, while larger, more complex applications often need robust, scalable solutions to ensure long-term success.",
  },
  {
    icon: "/key3.svg",
    title: "Consider Team Expertise",
    description:
      "Factor in your development team’s skills and experience. Choosing a tech stack that aligns with their expertise will lead to faster development times, fewer errors, and a smoother project workflow overall.",
  },
  {
    icon: "/key4.svg",
    title: "Analyze Performance Requirements",
    description:
      "Performance is vital for any application. Assess how different tech stacks handle processing loads and responsiveness. Select technologies that can ensure optimal performance for your project, even under peak demand.",
  },
  {
    icon: "/key5.svg",
    title: "Look for Community Support",
    description:
      "A tech stack with a strong community can offer invaluable resources. Ensure your chosen stack has robust documentation, regular updates, and support forums to help overcome challenges throughout the development process.",
  },
  {
    icon: "/key6.svg",
    title: "Plan for Future Growth",
    description:
      "Choose a tech stack that will accommodate future growth. Flexibility and scalability are essential as your project evolves. Opt for technologies that can easily adapt to new features and increased user demands.",
  },
];

export default function WhyChooseLemolite() {
  return (
    <section className="top-bottom">
      <div className="container">
        <div className="title--head grid text-center">
          <div className="col-span-2 grid-cols-8 pb-10 sm:pb-20">
            <Titlecontent title="What’s the Key to Choosing a Tech Stack?" />
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whychoosetech.map((item, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] shadow-md rounded-[32px] p-10 hover:shadow-lg transition hover:bg-gradient-to-r from-primary/30 to-secondry/30"
            >
              <div className="flex justify-start">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="w-16 mb-3"
                />
              </div>
              <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-medium">
                {item.title}
              </h3>
              <p className="text-[16px] md:text-[20px] font-light text-start">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
