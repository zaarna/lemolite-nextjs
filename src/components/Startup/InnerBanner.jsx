import React from "react";
import Grediantbutton from "../ReusableComponent/Button/Grediantbutton";
import Image from "next/image";

function InnerBanner() {
  return (
    <div className="relative overflow-hidden max-h-screen">
      {/* Background Image - Line pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url(/linebg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4  relative flex items-center h-auto md:h-[calc(100vh-80px)]">
        <div className="max-w-5xl mx-auto text-center w-full py-12 md:py-0">
          {/* Blue Badge */}
          <div className="inline-block mb-4 md:mb-6">
            <div
              className="rounded-full px-6 md:px-8 py-2 md:py-3"
              style={{ backgroundColor: "#2EC4F3" }}
            >
              <p
                className="text-black font-medium"
                style={{ fontSize: "clamp(0.75rem, 1.8vw, 1rem)" }}
              >
                Build Your Vision With A Tech Partner Who Invests In You.
              </p>
            </div>
          </div>

          {/* Main Title */}
          <h1
            className="font-bold mb-4 md:mb-5 leading-tight"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
          >
            We Help Founders Turn Ideas Into Real Products.
          </h1>

          {/* Subtitle/Description */}
          <p
            className="text-gray-700 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(0.9rem, 2.2vw, 1.25rem)" }}
          >
            From early concepts to market-ready MVPs, we provide the technical
            build, strategic guidance, and legal foundations needed to launch
            with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Grediantbutton
              variant="gradient"
              btntext="Book a Strategy Session"
              targetBlank="true"
              link="https://calendly.com/lemolite-sales/product-demo?month=2025-06"
            />
            <Grediantbutton
              variant="gradient"
              btntext="Apply for Equity Partnership"
              targetBlank="true"
              link="/contact-us"
            />
          </div>
        </div>

        {/* Lemolite Text Background - Only visible on desktop */}
        {/* <div
          className="absolute bottom-0 left-0 w-full h-[150px] md:h-[180px] lg:h-[170px] -z-10 hidden md:block pointer-events-none"
          style={{
            backgroundImage: "url(/lemolitetext.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center ",
            backgroundRepeat: "no-repeat",
          }}
        /> */}
        <div className="absolute bottom-0 left-0 w-full h-[150px] md:h-[180px] lg:h-[170px] -z-10 hidden md:block pointer-events-none">
          <Image src="/lemolitetext.webp" alt="Lemolite Text" fill />
        </div>
      </div>
    </div>
  );
}

export default InnerBanner;
