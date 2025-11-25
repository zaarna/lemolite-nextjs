"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import "swiper/css";
import "swiper/css/mousewheel";
import styles from "../../../app/page.module.css";
function InnerHeroSlider() {
  const logos = [
    "/Hero_ Zioritix.svg",
    "/Hero_Shift.svg",
    "/Hero_Napchief.svg",
    "/Hero_GDD.svg",
    "/Hero_Nexstaff.svg",
  ];
  const containerRef = useRef(null);
  const x = useRef(0);

  useAnimationFrame((t, delta) => {
    if (containerRef.current) {
      x.current -= 0.04 * delta; // speed control
      containerRef.current.style.transform = `translateX(${x.current}px)`;

      // Reset position for infinite loop
      const scrollWidth = containerRef.current.scrollWidth / 2;
      if (Math.abs(x.current) >= scrollWidth) {
        x.current = 0;
      }
    }
  });
  return (
    <section className={`container-fluid `}>
      {/* <div className="container">
        <div className={`row ${styles.titletext} ${styles.logosection}`}>
          <div className="col-12 col-md-6 offset-md-3">
            <h2>Incredible Brands, Incredible Support</h2>
          </div>
        </div>
      </div> */}
      <div className={`row ${styles.brandsection}`}>
        <div className="col-12 ">
          <div className={styles.sliderWrapper}>
            <div className={styles.sliderMask}>
              <div className={styles.sliderTrack} ref={containerRef}>
                {[...logos, ...logos].map((src, index) => (
                  <div className={styles.slide} key={index}>
                    <img src={src} alt={`logo-${index}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InnerHeroSlider;
