"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Trustedbyclient({ clientLogos }) {
  return (
    <div className="rounded-3xl lg:grid lg:grid-cols-[15%_85%] flex flex-col gap-0 overflow-hidden">
      <div className="flex items-center justify-center bg-[#f2f7d6] lg:rounded-tl-3xl lg:rounded-bl-3xl rounded-0">
        <h2 className="text-base md:text-xl 2xl:text-2xl font-bold p-[25px] text-center" >Trusted by Clients</h2>
      </div>

      <div className="overflow-hidden py-6 bg-white">
        {/* Outer wrapper */}
        <motion.div
          className="flex space-x-5 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 50, // adjust speed
            ease: "linear",
          }}
        >
          {/* Duplicate logos for continuous loop */}
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={171}
                height={80}
                style={{ objectFit: "contain" }}
                className="h-20 w-[171px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
