"use client";
import { awd, imageUrls } from "@/data/imagesdata";
import { useRef } from "react";
import Titlecontent from "../Titlecontent/Titlecontent";
import Grediantbutton from "../Button/Grediantbutton";
import GridGallery from "./GridGallery";
import AwardSection from "./AwardSection";
import AllEvent from "./AllEvent";
import Cta_life from "../Cta_Section/Cta_life";

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

          <GridGallery images={imageUrls} />
          <div className="text-center mt-7">
            <Grediantbutton btntext={"Join Us"} onClick={scrollToFooter} />
          </div>
        </div>
      </section>
      <AwardSection awdimages={awd} />
      <AllEvent />

      <div ref={footerRef}>
        <Cta_life />
      </div>
    </>
  );
};

export default LifeAtLemolitePage;
