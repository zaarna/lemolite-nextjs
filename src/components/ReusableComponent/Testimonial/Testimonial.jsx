"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Titlecontent from "../../ReusableComponent/Titlecontent/Titlecontent";

export default function Testimonial({ testimonials = [], title }) {
  const pathname = usePathname();

  // ❌ Define excluded pages (no testimonial)
  const excludedPaths = [
    "/contact-us",
    "/careers",
    // "/blog",
    "/life-at-lemolite",

    // Services without testimonial 👇

    "/services/e-commerce",
    "/services/web-development",
    "/services/mobile-app-development",
    "/services/custom-software-development",
    "/services/ot-cybersecurity",
    "/services/ai-ml-development",
    "/services/chatbot-development",
    "/services/voicebot-development",
  ];

  const isBlogInner = pathname.startsWith("/blog/") && pathname !== "/blog";
  const isCareerInner =
    pathname.startsWith("/careers/") && pathname !== "/careers";

  // ✅ Show testimonial only on specific pages
  if (excludedPaths.includes(pathname) || isBlogInner || isCareerInner) {
    return null;
  }

  // --- Carousel setup ---
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
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
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const showArrows =
    (typeof window !== "undefined" &&
      ((window.innerWidth >= 1024 && testimonials.length > 3) ||
        (window.innerWidth >= 640 &&
          window.innerWidth < 1024 &&
          testimonials.length > 2) ||
        (window.innerWidth < 640 && testimonials.length > 1))) ??
    false;

  // --- Render Section ---
  return (
    <section className="top-bottom">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 col-span-6 mx-auto">
          <Titlecontent title={title || "What Our Clients Say"} />
        </div>

        <div className="relative overflow-hidden py-14">
          {/* Carousel */}
          <div className="px-5 lg:px-20 " ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="
                    flex-[0_0_100%]
                    sm:flex-[0_0_50%]
                    lg:flex-[0_0_33.333%]
                    px-4
                    flex justify-center
                  "
                >
                  {/* --- Testimonial Card --- */}
                  <div className="relative w-[95%] text-center h-auto flex flex-col justify-between">
                    {/* Green Decorative Glow Background */}
                    <div className="absolute inset-0 transform rotate-[9deg] -z-10 flex justify-center items-center">
                      <div className="w-[95%] h-[300px] bg-gradient-to-r from-[#2EC4F3] to-[#BFD633] rounded-2xl opacity-60 "></div>
                    </div>

                    {/* Main White Card */}
                    <div className="relative bg-white rounded-3xl shadow-2xl p-5 w-[95%] mx-auto flex flex-col justify-between h-full">
                      {/* Profile Image */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                        <div className="w-32 h-32 rounded-full flex justify-center overflow-hidden bg-black border-4 border-white shadow-lg">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={115}
                            height={115}
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mt-20 flex-1 flex flex-col justify-between">
                        <div>
                          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                            {testimonial.name}
                          </h2>
                          <p className="text-gray-500 italic text-base mb-4">
                            {testimonial.title}
                          </p>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {testimonial.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* --- End Card --- */}
                </div>
              ))}
            </div>
          </div>

          {/* Arrows (Desktop Only) */}
          {showArrows && (
            <>
              <button
                className="hidden lg:flex absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100"
                onClick={scrollPrev}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100"
                onClick={scrollNext}
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Dots */}
          {showArrows && (
            <div className="flex justify-center mt-8 gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-gradient-to-r from-[#2EC4F3] to-[#BFD633]"
                      : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
