import React from "react";
import Grediantbutton from "../ReusableComponent/Button/Grediantbutton";
import Titlecontent from "../ReusableComponent/Titlecontent/Titlecontent";

const OurWork = ({ title, btntext, link, projects = [] }) => {
  return (
    <section className="our_work  bg-[#F1F1F1] top-bottom">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="title--head grid col-span-10 col-start-2 text-center">
            <Titlecontent title={title} />
          </div>
        </div>

        <div className="flex flex-wrap justify-between pb-6 sm:mt-12 mt-6">
          {projects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className={`${project.widthClass} cards mt-6 sm:mt-0 xsm:mt-4`}
            >
              <div
                className={`work_image_1 ${project.bgColor} rounded-xl px-8 relative overflow-hidden ${project.imgWrapper} transition-transform duration-900`}
              >
                <h3
                  className={`head_1 ${project.headingColor} font-bold ${project.textAlign} mb-0 ${project.textPadding}`}
                >
                  {project.title}
                </h3>
                <div
                  className={`up_heading ${project.upHeadingColor} text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90`}
                >
                  {project.upHeading}
                </div>
                <div>
                  <img
                    loading="lazy"
                    src={project.imgSrc}
                    alt={project.imgAlt}
                    className={`${project.imgClass} object-contain sm:ml-12 transition-transform duration-500 hover:scale-105 mt-4`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap mt-4 md:mt-0 justify-between h-full">
          {projects.slice(2, 4).map((project) => (
            <div
              key={project.id}
              className={`${project.widthClass} cards mt-6 sm:mt-0 xsm:mt-4`}
            >
              <div
                className={`work_image_1 ${project.bgColor} rounded-xl px-8 relative overflow-hidden ${project.imgWrapper} transition-transform duration-900`}
              >
                <h3
                  className={`head_1 ${project.headingColor} font-bold ${project.textAlign} mb-0 ${project.textPadding}`}
                >
                  {project.title}
                </h3>
                <div
                  className={`up_heading ${project.upHeadingColor} text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90`}
                >
                  {project.upHeading}
                </div>
                <div>
                  <img
                    loading="lazy"
                    src={project.imgSrc}
                    alt={project.imgAlt}
                    className={`${project.imgClass} object-contain sm:ml-12 transition-transform duration-500 hover:scale-105 mt-4`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-5 md:pt-10">
          <Grediantbutton btntext={btntext} link={link} />
        </div>
      </div>
    </section>
  );
};

export default OurWork;
