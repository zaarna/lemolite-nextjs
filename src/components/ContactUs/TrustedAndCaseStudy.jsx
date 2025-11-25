"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Titlecontent from "../ReusableComponent/Titlecontent/Titlecontent";

export default function TrustedAndCaseStudy({ logos = [], steps = [] }) {
  return (
    <section className="top-bottom bg-[#f1f1f1]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT: Swiper Slider */}
        <div className="relative casestudy">
          <h2 className="text-center mb-4 font-bold text-[22px] md:text-[26px] lg:text-[30px] xl:text-[36px] 2xl:text-[40px]">
            Our Work
          </h2>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            slidesPerView={1}
            spaceBetween={20}
            loop={false}
            speed={700}
            autoplay={false}
            className="rounded-2xl"
          >
            {steps.map((step, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col">
                  {/* ✅ FIXED: Image now fully visible */}
                  <div className="relative w-full h-72">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {step.title}
                        </h3>
                      </div>

                      {step.list?.length > 0 && (
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                          {step.list.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ CUSTOM ARROWS BELOW & CENTERED */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button className="swiper-button-prev-custom bg-black text-white w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button className="swiper-button-next-custom bg-black text-white w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT: Masonry / Collage Grid */}
        <div className="">
          <h2 className="text-center mb-4 font-bold text-[22px] md:text-[26px] lg:text-[30px] xl:text-[36px] 2xl:text-[40px]">
            Trusted by Clients
          </h2>
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl break-inside-avoid bg-white p-4 flex items-center justify-center hover:scale-105 transition-transform duration-500 shadow-sm"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={100}
                  className="object-contain w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
