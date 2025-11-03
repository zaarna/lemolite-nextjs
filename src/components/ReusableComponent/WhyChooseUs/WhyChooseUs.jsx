"use client";

import React from "react";
import Image from "next/image";
import SliderCard from "@/components/ReusableComponent/Card/SliderCard";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";


export default function Why_choose_us({data , title, columns = 3}) {
  const gridColsClass =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="why_choose_us top-bottom">
      <div className="container">
        {/* Section Title */}
        <div className="title--head pb-6 lg:pb-12 md:pb-10 sm:pb-8 text-center">
          <Titlecontent title={title} />
        </div>

        {/* Grid Layout */}
        <div className={`grid ${gridColsClass} gap-4`}>
          {(data || []).map((item, index) => (
            <SliderCard
              key={index}
              variant="option2"
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
