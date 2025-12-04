"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";
import Gradientbutton from "@/components/ReusableComponent/Button/Grediantbutton";

export default function BlogCard({
  blogCards = [],
  bg = "bg-white",
  padding = "top-bottom",
}) {
  const sortedBlogCards = [...blogCards].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className={`${bg} ${padding}`}>
      <div className="container">
        <div className="blog_section">
          <div className="title--head md:pb-10 sm:pb-6 pb-5 text-center">
            <Titlecontent title="Our Blog" />
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Embla Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-5">
                {sortedBlogCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="flex-[0_0_100%] sm:flex-[0_0_48%] lg:flex-[0_0_32%] p-4 bg-white border-custom rounded-3xl  transition "
                  >
                    {/* <Link href={card.link}>
                      <div className="border-custom p-4 rounded-3xl bg-white h-full shadow-md hover:shadow-lg transition">
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={600}
                          height={400}
                          className="rounded-[10px] w-full object-cover mb-3"
                        />
                        <span className="text-[#BFD633] block mt-2">
                          {card.tag}
                        </span>
                        <h4 className="text-lg sm:text-xl font-semibold mt-1">
                          {card.title}
                        </h4>
                        <p className="text-base font-light mt-2 mb-4">
                          {card.excerpt}{" "}
                          <span className="underline text-black hover:text-gray-800 font-medium"
                          >
                            Read More
                          </span>
                        </p>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm">
                          <span className="capitalize">{card.author}</span>
                          <span className="flex items-center mt-2 sm:mt-0 text-gray-600">
                            <Calendar className="w-4 h-4 mr-2 text-[#BFD633]" />
                            {card.date}
                          </span>
                        </div>
                      </div>
                    </Link> */}
                    <Link href={card.link}>
                      <div className="h-full flex flex-col">
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={600}
                          height={400}
                          className="rounded-[10px] w-full object-cover mb-3"
                        />
                        <span className="text-[#BFD633] block mt-2">
                          {card.tag}
                        </span>

                        <h4 className="text-lg sm:text-xl font-semibold mt-1">
                          {card.title}
                        </h4>

                        <p className="text-base font-light mt-2 mb-4 flex-grow">
                          {card.excerpt}{" "}
                          <span className="underline text-black hover:text-gray-800 font-medium">
                            Read More
                          </span>
                        </p>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm">
                          <span className="capitalize">{card.author}</span>
                          <span className="flex items-center mt-2 sm:mt-0 text-gray-600">
                            <Calendar className="w-4 h-4 mr-2 text-[#BFD633]" />
                            {card.date}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* ⬇️ Custom Arrows Positioned Below Carousel */}
            <div className="flex justify-center items-center gap-6 mt-6">
              <button
                onClick={scrollPrev}
                disabled={selectedIndex === 0}
                className="bg-white/80 hover:bg-white rounded-full shadow p-3 disabled:opacity-40 transition"
              >
                <ArrowLeft className="w-6 h-6 text-gray-800" />
              </button>

              <button
                onClick={scrollNext}
                className="bg-white/80 hover:bg-white rounded-full shadow p-3 transition"
              >
                <ArrowRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10">
            <Gradientbutton btntext="Read More" link="/blog" />
          </div>
        </div>
      </div>
    </section>
  );
}
