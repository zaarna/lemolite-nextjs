
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Grediantbutton from "./ReusableComponent/Button/Grediantbutton";

export default function GradientScrollSection() {
  return (
    <section className="relative min-h-[50vh] max-h-[60vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30 -z-10"></div>

      <div className="container mx-auto px-6">
        <div className=" bg-white/40 backdrop-blur-md shadow-xl flex flex-col xl:flex-row items-center overflow-hidden relative h-[50vh]">

          {/* Text Section */}
          <motion.div
            className="w-full xl:w-1/2 p-8 xl:p-12 text-center xl:text-left flex flex-col justify-center h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight mb-3">
              Transform Your Business with Innovation
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              Unlock the potential of automation and smart digital solutions to
              grow faster, smarter, and stronger.
            </p>
            <div>
              <Grediantbutton btntext={"Let’s Talk Strategy"} link={"/contact-us"} variant="black" />
            </div>
          </motion.div>

          {/* Animated Image Section */}
          <div className="w-full xl:w-1/2 flex justify-center relative h-full">
            {/* Floating image 1 */}
            <motion.div
              className="absolute top-6 left-8"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/scrollimage1.webp"
                alt="Creative Innovation"
                width={180}
                height={180}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>

            {/* Floating image 2 */}
            <motion.div
              className="absolute bottom-6 right-8"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/scrollimage2.webp"
                alt="Tech Growth"
                width={200}
                height={200}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>

            {/* Center Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/scrollimage1.webp"
                alt="Digital Solutions"
                width={280}
                height={280}
                className="rounded-3xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
