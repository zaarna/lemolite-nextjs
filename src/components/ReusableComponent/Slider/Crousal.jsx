"use client";

import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SliderCard from "../Card/SliderCard";

export default function Crousal({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1140 },
      items: 3,
      centerMode: false,
      partialVisibilityGutter: 50,
    },
    tablet: {
      breakpoint: { max: 1140, min: 678 },
      items: 2,
      centerMode: false,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 678, min: 0 },
      items: 1,
      centerMode: false,
      partialVisibilityGutter: 0,
    },
  };

  const totalSlides = slides.length;

  const ButtonGroup = ({ next, previous, carouselState }) => {
    const { currentSlide } = carouselState;
    const maxSlideIndex = totalSlides - carouselState.slidesToShow;

    return (
      <div className="techstack-slider flex justify-between items-center">
        {/* Left Arrow */}
        <button
          className={`custom--arrow arrow-left ${
            currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={currentSlide > 0 ? previous : null}
          aria-label="Previous Slide"
        >
          <ChevronLeft
            className={`m-auto block md:w-8 w-5 ${
              currentSlide === 0 ? "opacity-40" : "text-gray-800"
            }`}
          />
        </button>

        {/* Right Arrow */}
        <button
          className={`custom--arrow arrow-right ${
            currentSlide >= maxSlideIndex ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={currentSlide < maxSlideIndex ? next : null}
          aria-label="Next Slide"
        >
          <ChevronRight
            className={`m-auto block md:w-8 w-5 ${
              currentSlide >= maxSlideIndex ? "opacity-40" : "text-gray-800"
            }`}
          />
        </button>
      </div>
    );
  };

  return (
    <Carousel
      responsive={responsive}
      containerClass="teck-padding-slide"
      arrows={false}
      customButtonGroup={<ButtonGroup />}
      afterChange={(previousSlide, { currentSlide }) =>
        setCurrentSlide(currentSlide)
      }
    >
      {slides.map((slide, index) => (
        <div key={index} className="h-full flex items-stretch">
          <SliderCard
            image={slide.image}
            title={slide.title}
            description={slide.description}
            hoverbg="bg-[#2EC4F3]"
            hovercolor="text-white"
            hoverinvert="invert"
          />
        </div>
      ))}
    </Carousel>
  );
}
