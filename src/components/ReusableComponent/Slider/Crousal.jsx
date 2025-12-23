"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SliderCard from "../Card/SliderCard";

export default function Crousal({ slides = [] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full">
      <div className="container mx-auto">
        {/* Embla Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="
                  flex-[0_0_100%]
                  sm:flex-[0_0_50%]
                  lg:flex-[0_0_33.333%]
                "
              >
                <SliderCard
                  image={slide.image}
                  title={slide.title}
                  description={slide.description}
                  variant="option1"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Arrows centered below the carousel */}
        {slides.length > 1 && (
          <div className="flex justify-center items-center gap-8 mt-10">
            {/* Previous */}
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={`bg-white shadow-md rounded-full p-3 transition-all duration-300
                ${canScrollPrev ? "hover:bg-gray-100" : "opacity-40 cursor-not-allowed"}`}
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            {/* Next */}
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={`bg-white shadow-md rounded-full p-3 transition-all duration-300
                ${canScrollNext ? "hover:bg-gray-100" : "opacity-40 cursor-not-allowed"}`}
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
