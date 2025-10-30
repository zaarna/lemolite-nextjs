"use client";
import { useState, useEffect } from "react";

const Ourstory = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/office1.webp",
    "/office2.webp",
    "/office3.webp",
    "/office4.webp",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentImage]);

  return (
    <section className="ourstory top-bottom bg--gray">
      <div className="container">
        <div className="">
          {/* Title */}
          <h2 className="text-story  font-bold text-left mb-6">Our Journey</h2>

          {/* Main Content */}
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6">
            {/* Content */}
            <div className="space-y-4 w-full md:w-1/2">
              <p className="text-para mt-0">
                Founded in 2016, Lemolite Technologies began its journey with
                the development of Helpie, a mobile app that marked our entry
                into the tech world. By 2019, our dedication to innovation and
                excellence earned us the prestigious Startup India certificate,
                a testament to our commitment to making a difference.
              </p>
              <p className="text-para mt-5">
                In 2021, we expanded our horizons by establishing Lemolite
                Technologies as a leader in e-commerce solutions. Leveraging
                platforms like Shopify, Laravel, and WordPress, we have
                successfully designed and developed over 150 e-commerce stores
                across the globe. Our efforts have empowered more than 200
                entrepreneurs in the e-commerce and marketing sectors to achieve
                their business goals.
              </p>
            </div>

            {/* Image with transition */}
            <div className="w-full md:w-1/2 h-[500px] flex justify-center items-center">
              <img
                src={images[currentImage]}
                alt="Office"
                className="rounded-lg shadow-lg transition-opacity duration-1000 ease-in-out"
                style={{
                  opacity: currentImage === 0 ? 1 : 1, // Adjust the opacity as needed
                  objectFit: "cover", // Ensure the image fits the div
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          </div>
          <div></div>
          <p className="text-para mt-5">
            Our growth didn’t stop there. In 2023, we ventured into the realm of
            Artificial Intelligence (AI) and Machine Learning (ML), continually
            expanding our service offerings. Today, Lemolite Technologies is
            proud to provide a wide range of services, including custom software
            development, web development, mobile app development, UI/UX design,
            and more. As we continue to grow, our commitment to innovation and
            excellence remains unwavering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ourstory;
