"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Grediantbutton from "@/components/ReusableComponent/Button/Grediantbutton";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";
import Image from "next/image";
const nextgencards = [
  {
    title: "React JS Development",
    icon: "/React.png",
    link: "/techstack/reactjs-development",
  },
  {
    title: "Angular Development",
    icon: "/angular.png",
    link: "/techstack/angular-development",
  },
  {
    title: "Vue JS Development",
    icon: "/vue-js.png",
    link: "/techstack/vuejs-development",
  },
  {
    title: "Node JS Development",
    icon: "/node-js.png",
    link: "/techstack/nodejs-development",
  },
  {
    title: "Laravel Development",
    icon: "/laravale.png",
    link: "/techstack/laravel-development",
  },
  {
    title: "PHP Development",
    icon: "/php.png",
    link: "/techstack/php-development",
  },
  {
    title: "Mern Development",
    icon: "/mern.png",
    link: "/techstack/mern-development",
  },
  {
    title: "Python Development",
    icon: "/python.png",
    link: "/techstack/python-development",
  },
  {
    title: "Shopify Development",
    icon: "/shopify.png",
    link: "/techstack/shopify-development",
  },
];
const Nextgencard = () => {
  return (
    <section className="bg--gray top-bottom">
      <div className="container">
        <div className="flex flex-row items-center justify-center md:justify-between">
          <div className="text-center md:text-left basis-full md:basis-3/4 title--head">
            <Titlecontent title="Tech Stack That Drives Success" />
          </div>
          <div className="btn--gen--card basis-1/4 md:block hidden text-end">
            <Grediantbutton
              btntext="Hire Dedicated Expert"
              link="/contact-us"
            />
          </div>
        </div>

        <div className="pt-10 sm:pt-20">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {nextgencards.map((card, index) => (
              <div
                key={index}
                className="group transition-colors ease-in-out duration-300 next-gen p-5 lg:p-6 xl:p-8 2xl:p-10 text-left rounded-[10px] md:rounded-[32px] bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30 hover:bg-gradient-to-bl"
              >
                <Link href={card.link}>
                  <div className="w-8 md:w-10 lg:w-12 xl:w-16 h-8 md:h-10 lg:h-12 xl:h-16 transform group-hover:scale-110 transition-all duration-500">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-row items-center lg:items-end pt-2 sm:pt-5 md:pt-5 lg:pt-6 xl:pt-10 justify-between">
                    <h5 className="break-words max-w-32 md:max-w-40 lg:max-w-48 xl:max-w-60 w-full capitalize">
                      {card.title}
                    </h5>
                    <ArrowRight className="w-6 sm:w-8 lg:w-0 h-4 sm:h-5 lg:h-9 group-hover:lg:w-14 transition-[width] ease-in-out duration-300" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nextgencard;
