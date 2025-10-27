"use client";

import React from "react";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";
import ExpertiseSection from "./ExpertiseSection";

export default function VisionAndExpertise({ title, content, service = [] }) {
  return (
    <section className="top-bottom">
      <div className="container">
        {/* Title Section */}
        <div className="grid grid-cols-12">
          <div className="title--head col-span-10 col-start-2 text-center">
            <Titlecontent title={title} content={content} />
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mt-5">
          <ExpertiseSection services={service} />
        </div>
      </div>
    </section>
  );
}
