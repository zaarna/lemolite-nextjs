"use client";

import Image from "next/image";
import Link from "next/link";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Custom Software Development",
    img: "/customsoftware.svg",
    link: "/services/custom-software-development",
  },
  {
    id: 2,
    title: "Web Development",
    img: "/webdev.svg",
    link: "/services/web-development",
  },
  {
    id: 3,
    title: "Mobile Development",
    img: "/mobile.svg",
    link: "/services/mobile-app-development",
  },
  {
    id: 4,
    title: "UI/UX Design",
    img: "/ux.svg",
    link: "/services/ui-ux-design",
  },
  {
    id: 5,
    title: "E-Commerce Solutions",
    img: "/ecommerce.svg",
    link: "/services/e-commerce",
  },
  {
    id: 6,
    title: "Chatbot Development",
    img: "/chatbot.svg",
    link: "/services/chatbot-development",
  },
  {
    id: 7,
    title: "AI & ML Development",
    img: "/aiml.svg",
    link: "/services/ai-ml-development",
  },
  {
    id: 8,
    title: "Internet of Things",
    img: "/iot.svg",
    link: "/services/internet-of-things",
  },
  {
    id: 9,
    title: "Voicebot Development",
    img: "/voicebot.svg",
    link: "/services/voicebot-development",
  },
  {
    id: 10,
    title: "Hire Python Developers",
    img: "/pythondev.svg",
    link: "/services/hire-python-developer",
  },
  {
    id: 11,
    title: "Hire MERN Developers",
    img: "/mern.svg",
    link: "/services/hire-mern-developer",
  },
  {
    id: 12,
    title: "Hire PHP Developers",
    img: "/phpdeveloper.svg",
    link: "/services/hire-php-developer",
  },
];

const Idea = () => {
  return (
    <section className="pt-8 md:pt-16 xl:pt-20">
      <div className="container">
        {/* Title Section */}
        <div className="pb-10 md:pb-10 sm:pb-6 xsm:pb-5 text-center">
          <div className="max-w-[1000px] mx-auto text-center title--head">
            <Titlecontent
              title="Where Creativity Fuels Technological Evolution"
              content="Bringing ideas to life through a wide array of technology services designed to meet diverse needs. Whether it’s custom software, web development, or innovative AI solutions, our team is dedicated to delivering results that drive growth and success."
            />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center md:pb-10 sm:pb-6 pb-7">
          <Link href={"/services"} link="/services">
            <button className="py-2 px-4 sm:py-4 sm:px-8 flex text-black rounded-full relative overflow-hidden border border-black hover:border-black bg-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full group">
              <span className="relative z-10">Explore Our Services </span>
              <span className="right-arrow pl-5 pt-1">
                <ArrowRight size={26} />
              </span>
            </button>
          </Link>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link href={service.link} key={service.id} className="w-full">
              <div className="group h-full flex flex-col items-start justify-evenly p-6 bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30 rounded-lg shadow py-5 transition-all duration-300 hover:shadow-lg">
                {/* Icon */}
                <div className="w-12 xl:w-16 h-12 xl:h-16 transform group-hover:scale-125 transition-all duration-500">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="object-fill mb-4"
                  />
                </div>

                {/* Text */}
                <div className="w-full relative">
                  <div className="break-words max-w-48 md:max-w-44 lg:max-w-48 xl:max-w-[14.55rem] w-full">
                    <h3 className="font-medium text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px]">
                      {service.title}
                    </h3>

                    {/* Arrow */}
                    <div className="w-12 md:w-20 absolute bottom-0 right-6 transition-all duration-300 md:opacity-0 md:-translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0">
                      <ArrowRight size={26} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Idea;
