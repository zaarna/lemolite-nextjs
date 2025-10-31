"use client";

import Image from "next/image";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";

export default function E_empower({servicesempower}) {


  return (
    <section className="experties top-bottom">
      <div className="container">
        {/* Section Title */}
        <div className="title--head pb-10 md:pb-8 text-center">
          <Titlecontent title="Empower Your Online Store with Next-Gen Features" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
          {servicesempower.map((service, index) => (
            <div
              key={index}
              className="text-center rounded-2xl flex flex-col justify-center items-center bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30 p-4 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#2ec4f3]/60 hover:to-[#bfd633]/60 hover:shadow-lg"
            >
              <div className="icon-next mb-4 transition-transform duration-300 hover:scale-105">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-gray-800">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
