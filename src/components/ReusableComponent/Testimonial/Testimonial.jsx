"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Titlecontent from "../../ReusableComponent/Titlecontent/Titlecontent";
import Image from "next/image";

export default function Testimonial({ testimonials = [], title }) {
  const pathname = usePathname();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Pages where testimonials should NOT appear
  const excludedPaths = [
    // "/contact-us",
    "/careers",
    "/life-at-lemolite",
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

  if (excludedPaths.includes(pathname) || isBlogInner || isCareerInner) {
    return null;
  }

  const showControls = testimonials.length > 3;

  const onSwiper = (swiper) => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    });
  };

  return (
    <section className="top-bottom relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <Titlecontent title={title || "What Our Clients Say"} />
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            loop={false}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={
              showControls
                ? { clickable: true, el: ".custom-pagination" }
                : false
            }
            navigation={
              showControls
                ? { nextEl: ".custom-next", prevEl: ".custom-prev" }
                : false
            }
            onSwiper={onSwiper}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            className=""
          >
            {testimonials.map((testimonial, i) => (
              <SwiperSlide key={i}>
                <div className="relative bg-white rounded-2xl shadow-[0_0px_10px_rgba(0,0,0,0.25)] p-4 text-center h-full flex flex-col min-h-[350px]">
                  {/* Decorative Background */}
                  <div className="absolute inset-0 transform rotate-[10deg] -z-10 flex justify-center items-center">
                    <div className="w-[95%] h-[320px] bg-gradient-to-r from-[#2EC4F3] to-[#BFD633] rounded-2xl opacity-60"></div>
                  </div>

                  {/* Profile Image */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100">
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
                  <div className="mt-16 flex-1 flex flex-col">
                    <div>
                      <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                        {testimonial.name}
                      </h2>
                      <p className="text-gray-500 italic text-base mb-3">
                        {testimonial.title}
                      </p>
                    </div>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Centered Arrows */}
          {showControls && (
            <>
              <button
                className={`custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 shadow-md transition-all duration-300 ${
                  isBeginning
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed opacity-50"
                    : "bg-black text-white"
                }`}
                aria-label="Previous"
                disabled={isBeginning}
              >
                <ChevronLeft size={28} />
              </button>

              <button
                className={`custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 shadow-md transition-all duration-300 ${
                  isEnd
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed opacity-50"
                    : "bg-black text-white"
                }`}
                aria-label="Next"
                disabled={isEnd}
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          {/* Dots */}
          {showControls && (
            <div className="custom-pagination flex justify-center gap-2 mt-10"></div>
          )}
        </div>
      </div>

      {/* Dot styles */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #bcbcbc; /* gray */
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #000; /* black */
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
}
