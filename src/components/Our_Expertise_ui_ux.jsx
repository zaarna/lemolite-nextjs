"use client";

import Image from "next/image";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";
import Grediantbutton from "../components/ReusableComponent/Button/Grediantbutton";


export default function Our_Expertise_ui_ux() {
  const expertiseData = [
    {
      img: "/ui-colorful.webp",
      title: "User Interface (UI)",
      description:
        "Our UI/UX developers create engaging and smooth digital experiences. We design interfaces that are easy to navigate, visually appealing, and blend professionalism with an approachable, user-friendly touch.",
    },
    {
      img: "/ux-transperent.webp",
      title: "User Experience (UX)",
      description:
        "Our UX design combines empathy, creativity, and technical expertise. We strive to understand your unique needs, crafting intuitive, seamless experiences that feel natural and empower users.",
    },
  ];

  const services = [
    { img: "/ui-ux-box-1.webp", text: "Web UI/UX Design" },
    { img: "/ui-ux-box-2.webp", text: "App and Website Redesign" },
    { img: "/ui-ux-box-3.webp", text: "Mobile UI/UX Design" },
    { img: "/ui-ux-box-4.webp", text: "Design Prototyping Development" },
    { img: "/ui-ux-box-5.webp", text: "PSD to HTML Development" },
    { img: "/ui-ux-box-6.webp", text: "Responsive Design Development" },
  ];

  return (
    <section className="bg-[#F1F1F1] top-bottom">
      <div className="container">
        <div className="ui-ux-expertise">
          {/* Title */}
          <div className="title--head lg:pb-14 md:pb-10 pb-7 text-center">
            <Titlecontent title="Our Expertise" />
          </div>

          {/* Top UI/UX Boxes */}
          <div className="flex flex-wrap justify-center gap-5 mx-auto">
            {expertiseData.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] bg-white my-4 rounded-3xl px-4 py-8 shadow-md hover:shadow-lg transition"
              >
                <div className="w-full sm:w-[200px] lg:w-[350px] md:w-[250px] block m-auto">
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="mx-auto"
                    width={350}
                    height={350}
                  />
                </div>
                <div className="text-center pt-6">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-700 text-[16px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom service boxes */}
          <div className="mt-4 flex flex-wrap justify-center items-center mx-auto bg-white rounded-3xl">
            {services.map((service, index) => (
              <div
                key={index}
                className="ui-ux-card w-full sm:w-5/12 md:w-4/12 rounded-3xl py-4"
              >
                <div className="p-1">
                  <Image
                    src={service.img}
                    alt={service.text}
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
                <div className="text-center py-4 font-semibold">
                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="text-center pt-9">
            <Grediantbutton
              btntext="Get Your Custom Design"
              link="/contact-us"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
