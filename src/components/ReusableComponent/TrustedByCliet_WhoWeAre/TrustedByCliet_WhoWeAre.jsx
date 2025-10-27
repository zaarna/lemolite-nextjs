"use client";

import React from "react";
import Trustedbyclient from "@/components/ReusableComponent/TrustedByClient/Trustedbyclient";
import Feature_Fact from "@/components/ReusableComponent/Feture_Fact/Feature_Fact";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";

function TrustedByCliet_WhoWeAre({ logo = [], title, content, features = [] }) {
  return (
    <section className="bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30 top-bottom">
      <div className="container mx-auto px-6">
        {/* Client Logos Section */}
        <Trustedbyclient clientLogos={logo} />

        {/* Who We Are Section */}
        <div className="flex lg:flex-row flex-col items-center bg-white lg:p-6 sm:p-6 p-4 rounded-[36px] shadow-sm space-x-4 mt-5">
          <div className="title--head text-center lg:text-left md:basis-1/2 basis-full">
            <Titlecontent title={title} content={content} />
          </div>

          <div className="md:basis-1/2 basis-full w-full lg:pt-0 sm:pt-8 pt-5">
            <Feature_Fact features={features} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedByCliet_WhoWeAre;
