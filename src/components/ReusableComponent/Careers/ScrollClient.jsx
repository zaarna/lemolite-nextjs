"use client";

import { career } from "@/data/breadcrumsdata";
import React, { useRef } from "react";
import Innerhero from "../Innerhero/Innerhero";
import WhyLemolite from "../WhyLemolite/WhyLemolite";
import Position_card from "../Card/Position_card";
import LifeatLemolite from "./LifeAtLemolite";

const CareersScrollWrapper = () => {
  const data = [
    // {
    //   title: "SEO / Digital Marketing Executive",
    //   hire: "1+ YEARS",
    //   link: "/current-openings/seo",
    // },
    // {
    //   title: "MERN Stack Developer",
    //   hire: "1+ YEARS",
    //   link: "/current-openings/mern",
    // },
    // {
    //   title: "Flutter Developer",
    //   hire: "2+ YEARS",
    //   link: "/current-openings/flutter",
    // },
  ];
  const footerRef = useRef(null); // Create a reference for the footer

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
  };
  return (
    <div className="min-h-screen ">
      <Innerhero
        padding="py-8 md:py-16 lg:py-20"
        breadcrumbs={career}
        title={"Shape the Future with Us at Lemolite Technologies"}
        content={"Your Next Career Starts Here"}
        btntext={"See Openings"}
        clickit={scrollToFooter}
        src={"/careerpage (2).webp"}
        alt={"Career at Lemoloite Technologies"}
      />
      <WhyLemolite />
      <LifeatLemolite />
      <div ref={footerRef}>
        {data?.length ? (
          <Position_card data={data} />
        ) : (
          <div className="mx-auto w-full max-w-xl px-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-10">
            <div className="p-[1px] rounded-xl bg-gradient-to-r from-[#2EC4F3] to-[#BFD634] shadow-lg">
              <div className="flex flex-col items-center justify-center rounded-xl bg-white  text-center p-2.5 md:p-5 ">
                <h4 className="text-lg font-semibold text-gray-800 sm:text-xl">
                  No Current Openings
                </h4>
                <p className="mt-2 max-w-md text-sm text-gray-500 sm:text-base">
                  Oops! You caught us at a quiet moment. No openings right now,
                  but do check back soon.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareersScrollWrapper;
