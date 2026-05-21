"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import "swiper/css";
import "swiper/css/mousewheel";
import styles from "../../../app/page.module.css";
function InnerHeroSlider() {
  const logos = [
    { src: "/color_bootroom.svg", alt: "Bootroom" },
    { src: "/botButlerlogo.svg", alt: "Bot Butler" },
    { src: "/color_forSent.svg", alt: "ForSent" },
    { src: "/color_vomax.png", alt: "VOMax" },
    { src: "/color_Gdd.svg", alt: "GDD" },
    { src: "/color_laboucle.svg", alt: "La Boucle" },
    { src: "/color_maya.svg", alt: "Maya" },
    { src: "/color_napchief.svg", alt: "NapChief" },
    { src: "/color_nexstaff.svg", alt: "NexStaff" },
    { src: "/color_nikben.svg", alt: "Nikben" },
    { src: "/color_obm.svg", alt: "OBM" },
    { src: "/color_rs.png", alt: "RS" },
    { src: "/color_s2h.svg", alt: "S2H" },
    // { src: "/color_secrure.svg", alt: "Secrure" },
    { src: "/relybluesvg.svg", alt: "RelyBlue" },
    // { src: "/color_zirotix.svg", alt: "Zirotix" },
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
                {[...logos, ...logos].map((logo, index) => (
                  <div className={styles.slide} key={index}>
                    <img src={logo.src} alt={logo.alt} />
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
