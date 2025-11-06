"use client";
import Grediantbutton from "@/components/ReusableComponent/Button/Grediantbutton";
import Cta_life from "@/components/ReusableComponent/Cta_Section/Cta_life";
import AllEvent from "@/components/ReusableComponent/Life/AllEvent";
import AwardSection from "@/components/ReusableComponent/Life/AwardSection";
import Gallery from "@/components/ReusableComponent/Life/Gallery";
import GridGallery from "@/components/ReusableComponent/Life/GridGallery";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";
import { awd, imageUrls } from "@/data/imagesdata";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const LifeAtLemolitePage = () => {
  const footerRef = useRef(null); // Create a reference for the footer

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
  };
  const pathName = usePathname();
  ("PathName");
  if (pathName == "/careers")
    return (
      <section className="top-bottom">
        <div className="container">
          <div className="title--head text-center sm:mb-12 mb-6 ">
            <Titlecontent title={"Life@Lemolite "} />
          </div>

          <Gallery images={imageUrls} />
          <div className="text-center mt-7">
            <Grediantbutton btntext={"Know More"} link={"/life-at-lemolite"} />
          </div>
        </div>
      </section>
    );
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
      <Cta_life />
    </>
  );
};

export default LifeAtLemolitePage;
