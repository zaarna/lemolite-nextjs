"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import "swiper/css";
import "swiper/css/mousewheel";
import styles from "../../../app/page.module.css";
function InnerHeroSlider() {
  const logos = [
    "/color_bootroom.svg",
    "/color_botButler.svg",
    "/color_forSent.svg",
    "/color_Gdd.svg",
    "/color_laboucle.svg",
    "/color_maya.svg",
    "/color_napchief.svg",
    "/color_nexstaff.svg",
    "/color_nikben.svg",
    "/color_obm.svg",
    "/color_rs.svg",
    "/color_s2h.svg",
    "/color_secrure.svg",
    "/color_shift.svg",
    "/color_vomax.svg",
    "/color_zirotix.svg",
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
    <section className="container-fluid mx-1">
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
