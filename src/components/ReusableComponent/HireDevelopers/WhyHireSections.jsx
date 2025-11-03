import React from "react";
import Titlecontent from "../Titlecontent/Titlecontent";
import Grediantbutton from "../Button/Grediantbutton";
import WhyHire from "../WhyHire/WhyHire";

function WhyHireSection({
  bg = "bg-[#F1F1F1]",
  padding = "top-bottom",
  title,
  content,
  btntext,
  link,
  features,
  layoutType = "first",
}) {
  return (
    <>
      <section className={`${bg} ${padding}`}>
        <div className="container">
          <div className=" flex flex-col md:flex-row items-center">
            {/* Left Content */}
            <div className="lg:w-1/2 w-full md:mr-10 mr-0  lg:mb-0 title--head">
              <Titlecontent title={title} content={content} />
              <div className="pt-4 md:pt-5 lg:pt-7 2xl:pt-10">
                <Grediantbutton btntext={btntext} link={link} />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 w-full grid grid-cols-1 gap-6 mt-4 md:mt-0">
              <WhyHire features={features} layoutType={layoutType} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyHireSection;
