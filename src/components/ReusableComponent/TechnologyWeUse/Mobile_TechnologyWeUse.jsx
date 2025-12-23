"use client";

import { useState } from "react";
import Image from "next/image";
import Titlecontent from "../Titlecontent/Titlecontent";
import { MoveRight } from "lucide-react";

const Mobile_TechnologyWeUse = ({
  padding = "top-bottom",
  bg = "bg-white",
}) => {
  const [activeCategory, setActiveCategory] = useState("ios");
  const [isOpen, setIsOpen] = useState({
    aiml: false,
    backend: false,
    frontend: false,
    cloud: false,
    ecommerce: false,
    design: false,
  });

  const toggleAccordion = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const technologyCategories = [
    {
      id: "ios",
      name: "ios",
      icon: "/techno_apple.png",
      technologies: [
        { name: "Swift", img: "/Swift.svg" },
        { name: "SwiftUI", img: "/Swiftui.svg" },
        { name: "Objective-C", img: "/Objective.svg" },
        { name: "X-Code", img: "/XCode.svg" },
      ],
    },

    {
      id: "android",
      name: "Android Development",
      icon: "/tec2.svg",
      technologies: [
        { name: "Kotlin", img: "/Kotlin.svg" },
        { name: "Android Studio", img: "/Android.svg" },
        { name: "Version control tools (Git, GitLab, Bit Bucket)", img: null },
      ],
    },

    {
      id: "cross",
      name: "Cross Platform",
      icon: "/tec4.svg",
      technologies: [
        { name: "Flutter", img: "/Flutter.svg" },
        { name: "React Native", img: "/Reactnative.svg" },
        { name: "Ionic", img: "/Ionic.svg" },
      ],
    },

    {
      id: "database",
      name: "Database",
      icon: "/tec5.svg",
      technologies: [
        { name: "Firebase", img: "/Firebase.svg" },
        { name: "Redis", img: "/PostgreSQL.svg" },
        { name: "PostgreSQL", img: "/MySQL.svg" },
        { name: "MongoDB", img: "/SQLite.svg" },
        { name: "MySQL", img: "/DynamoDB.svg" },
        { name: "DynamoDB", img: "/MongoDB.svg" },
        { name: "SQLite", img: "/Redis.svg" },
      ],
    },

    {
      id: "Design",
      name: "Design Tools",
      icon: "/tec6.svg",
      technologies: [
        { name: "Adobe XD", img: "/design1.svg" },
        { name: "Figma", img: "/design2.svg" },
        { name: "Adobe Photoshop", img: "/design3.svg" },
        { name: "Illustrator", img: "/design4.svg" },
        { name: "After effects", img: "/design5.svg" },
      ],
    },
  ];

  const currentCategory = technologyCategories.find(
    (cat) => cat.id === activeCategory
  );

  const renderTechnologyCards = (technologies, gridCols = "md:w-1/2") => {
    return technologies.map((tech, index) => (
      <div key={index} className={`${tech?.img ? gridCols : ""} `}>
        <div className="flex items-center justify-between p-2 rounded-[20px] bg-gray-200 mx-2 mb-2">
          {tech?.img && (
            <div className="basis-1/2 text-left">
              <Image src={tech.img} width={100} height={100} alt={tech.name} />
            </div>
          )}
          <div className="basis-1/2 text-left">{tech.name}</div>
        </div>
      </div>
    ));
  };

  return (
    <section className={`${bg} ${padding}`}>
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center justify-center">
            <Titlecontent
              title="Technology We Use"
              content="Leverage our proficiency in cutting-edge tools and technologies to enhance development speed, ensure accurate coding, and achieve lasting success for your business."
            />
          </div>
        </div>

        {/* Desktop */}
        <div className="technologyweuse lg:block hidden">
          <div className="flex flex-col md:flex-row pt-10">
            {/* Left Section */}
            <div className="p-4 md:w-1/2 bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30 rounded-l-[36px]">
              <ul className="space-y-2 text-left">
                {technologyCategories.map((category) => (
                  <li
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`group cursor-pointer flex items-center justify-between p-3 rounded-[15px] transition-all duration-300 
                    ${
                      activeCategory === category.id
                        ? "bg-white shadow-md border border-gray-200"
                        : "hover:bg-white/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={category.icon}
                        width={60}
                        height={60}
                        alt={category.name}
                      />
                      {category.name}
                    </div>

                    {/* Arrow */}
                    <MoveRight
                      className={`transition-all duration-500 ease-out
          ${
            activeCategory === category.id
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
          }`}
                      size={28} // ← Larger to look like a long arrow
                      strokeWidth={1.8}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section */}
            <div className="right-side md:w-1/2 p-4 bg-white rounded-tr-[36px] rounded-br-[36px]">
              <div className="">
                <div className="tabing-big-screen flex flex-wrap">
                  {currentCategory &&
                    renderTechnologyCards(
                      currentCategory.technologies,
                      currentCategory.id === "Cloud" ? "w-full" : "md:w-1/2"
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="technologyweuse lg:hidden block ">
          {technologyCategories.map((category) => {
            const key = category.id.toLowerCase();
            return (
              <div key={category.id}>
                <div
                  className="flex items-center justify-between px-4 py-3 border-b cursor-pointer"
                  onClick={() => toggleAccordion(key)}
                >
                  <Image
                    src={category.icon}
                    width={40}
                    height={40}
                    alt={category.name}
                  />
                  <span className="text-lg font-bold">{category.name}</span>
                </div>

                {isOpen[key] && (
                  <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50">
                    {category.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="p-3 bg-white border rounded-[20px] text-center"
                      >
                        {tech?.img && (
                          <Image
                            src={tech.img}
                            width={40}
                            height={40}
                            alt={tech.name}
                          />
                        )}

                        <p className="text-sm mt-2">{tech.name}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mobile_TechnologyWeUse;
