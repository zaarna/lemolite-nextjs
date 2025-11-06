"use client";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import Why_choose_us from "@/components/ReusableComponent/WhyChooseUs/WhyChooseUs";
import WhyLemolite from "@/components/ReusableComponent/WhyLemolite/WhyLemolite";
import { career } from "@/data/breadcrumsdata";
import React, { useRef } from "react";
import LifeAtLemolitePage from "../life-at-lemolite/page";
import Position_card from "@/components/ReusableComponent/Card/Position_card";

const CareersPage = () => {
  // const data = [
  //   {
  //     title: "Lead Generation",
  //     hire: "1+ YEARS",
  //     link: "/current-openings/lead-generation",
  //     // link: "/openings/lead-generation",
  //   },
  //   {
  //     title: "Business Development Executive",
  //     hire: "1-3 YEARS",
  //     link: "/current-openings/business-development-executive",
  //     // link: "/openings/business-development-executive",
  //   },
  //   {
  //     title: "Full Stack Developer",
  //     hire: "3-4 YEARS",
  //     link: "/current-openings/full-stack-developer",
  //     // link: "/openings/full-stack-developer",
  //   },
  // ];

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
        src={"/careerpage.webp"}
        alt={"Career at Lemoloite Technologies"}
      />
      <WhyLemolite />
      <LifeAtLemolitePage />
      <div ref={footerRef}>
        <Position_card data={data} />
      </div>
    </div>
  );
};

export default CareersPage;
