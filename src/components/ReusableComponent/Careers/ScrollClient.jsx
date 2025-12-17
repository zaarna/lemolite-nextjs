"use client";

import { career } from "@/data/breadcrumsdata";
import React, { useRef } from "react";
import Innerhero from "../Innerhero/Innerhero";
import WhyLemolite from "../WhyLemolite/WhyLemolite";
import Position_card from "../Card/Position_card";
import LifeatLemolite from "./LifeAtLemolite";

const CareersScrollWrapper = () => {
  const data = [
    {
      title: "SEO / Digital Marketing Executive",
      hire: "1+ YEARS",
      link: "/current-openings/seo",
    },
    {
      title: "MERN Stack Developer",
      hire: "1+ YEARS",
      link: "/current-openings/mern",
    },
    {
      title: "Flutter Developer",
      hire: "2+ YEARS",
      link: "/current-openings/flutter",
    },
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
        <Position_card data={data} />
      </div>
    </div>
  );
};

export default CareersScrollWrapper;
