"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import Grediantbutton from "@/components/ReusableComponent/Button/Grediantbutton";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";

export default function Hire({
  developers = [],
  title,
  content,
  btntext,
  link,
}) {
  return (
    <section className="top-bottom bg--gray">
      <div className="container">
        <div className="hire-innovators">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section */}
            <div className="flex flex-col justify-center">
              <div className="">
                <Titlecontent title={title} content={content} />
                <div className="mt-10">
                  <Grediantbutton btntext={btntext} link={link} />
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="right_blog overflow-y-scroll max-h-auto md:max-h-[480px] scrollbar-none">
              {developers.map((dev, index) => (
                <div
                  key={index}
                  className="p-3 hire_card pt-5 pb-5 group border-t-0 border-l-0 border-r-0"
                  style={{
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderImageSource:
                      "linear-gradient(100.63deg, #2EC4F3 9.94%, #BFD633 86.86%)",
                    borderImageSlice: 1,
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                >
                  <div className="mb-4 flex flex-row items-center gap-4">
                    <div className="rounded flex justify-center items-center">
                      <Image
                        src={dev.img}
                        alt={dev.alt || dev.title}
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>

                    <h3 className="text-[22px] font-semibold text-black">
                      {dev.title}
                    </h3>

                    <div className="ml-auto overflow-hidden">
                      <Link
                        href={dev.link}
                        className="w-[35px] md:w-[40px] overflow-hidden block"
                      >
                        <div className="transition-all duration-700 ease-out translate-x-0 md:-translate-x-[69px] md:group-hover:translate-x-0 flex">
                          <MoveRight className="w-8 h-8 text-black" />
                        </div>
                      </Link>
                    </div>
                  </div>

                  <p className="paragraph content-font text-black mt-2">
                    {dev.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
