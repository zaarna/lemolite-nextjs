"use client";
import Grediantbutton from "@/components/ReusableComponent/Button/Grediantbutton";
import Contectinfo from "@/components/ReusableComponent/Contectinfo/Contectinfo";
import Cta_life from "@/components/ReusableComponent/Cta_Section/Cta_life";
import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import AllEvent from "@/components/ReusableComponent/Life/AllEvent";
import AwardSection from "@/components/ReusableComponent/Life/AwardSection";
import MainGallery from "@/components/ReusableComponent/Life/MainGallery";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";
import { addresses } from "@/data/home";
import { awd, imageUrls } from "@/data/imagesdata";
import React from "react";
import { useRef } from "react";

const LifeAtLemolitePage = () => {
  const footerRef = useRef(null); // Create a reference for the footer

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
  };
  return (
    <>
      <section className="top-bottom">
        <div className="container">
          <div className="title--head text-center sm:mb-12 mb-6 ">
            <Titlecontent
              title={"Experience Life at Lemolite "}
              content={
                "We are a team of thinkers, creators, and innovators. Challenges inspire us, collaboration fuels us, and technology empowers us. At Lemolite, we push boundaries and build solutions that drive real impact and make a lasting difference."
              }
            />
          </div>

          <MainGallery images={imageUrls} />
          <div className="text-center mt-7">
            <Grediantbutton btntext={"Join Us"} onClick={scrollToFooter} />
          </div>
        </div>
      </section>
      <AwardSection awdimages={awd} />
      <AllEvent />
      <Cta_life />
    </>
  );
};

export default LifeAtLemolitePage;
