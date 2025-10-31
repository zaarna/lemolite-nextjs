import React from "react";
import Titlecontent from "../Titlecontent/Titlecontent";

function Experties({
  bg = "bg-white",
  padding = "top-bottom",
  maintitle,
  contentData = [],
}) {
  return (
    <section className={`${bg} ${padding} `}>
      <div className="container">
        <div className="title--head md:pb-10 sm:pb-6 pb-5 text-center">
          <Titlecontent title={maintitle} />
        </div>
        <div className="mx-auto">
          {contentData.map((item, index) => (
            <div
              key={index}
              className="border-custom p-5 md:p-7 lg:p-10 rounded-3xl flex flex-col-reverse lg:flex-row items-center justify-between mb-6 sm:mb-8 md:mb-12 bg-white last:mb-0"
            >
              <div className="lg:w-3/5 w-full text-left">
                <div className="content-section lg:w-4/5 w-full">
                  <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-medium mb-2">
                    {item.texttitle}
                  </h3>
                  <p className="text-[16px] md:text-[20px] font-light">
                    {item.textcontent}
                  </p>
                </div>
              </div>
              <div className="lg:w-2/5 w-full flex justify-center">
                <figure className="w-full md:w-[500px] h-auto">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full"
                  />
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experties;
