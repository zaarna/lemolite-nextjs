"use client";

import Image from "next/image";
import Titlecontent from "../Titlecontent/Titlecontent";

export default function Key_benifit({
  title,
  benefits = [],
  padding = "top-bottom",
}) {
  return (
    <section className={`${padding}`}>
      <div className="container">
        <div className="title--head grid text-center">
          <div className="col-span-2 grid-cols-8 pb-6 sm:pb-10">
            <Titlecontent title={title} />
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] shadow-md rounded-lg px-5 py-7 hover:shadow-lg transition hover:bg-white"
            >
              <div className="flex justify-start mb-4">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={60}
                  height={60}
                  className="w-[60px] h-auto"
                />
              </div>

              <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-medium mb-2">
                {benefit.title}
              </h3>

              <p className="text-[16px] md:text-[20px] font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
