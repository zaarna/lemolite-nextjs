import React from "react";
import Titlecontent from "../../../components/ReusableComponent/Titlecontent/Titlecontent";
import Grediantbutton from "../../../components/ReusableComponent/Button/Grediantbutton";

function Position_card({ data }) {
  return (
    <div className="top-bottom">
      <section className="position-card w-full">
        <div className="container">
          <div className="title--head pb-20 md:pb-10 sm:pb-6 xsm:pb-5 text-center">
            <Titlecontent
              title=" Explore Our Open Positions"
              content="We are always looking for passionate and talented individuals to join our team. Check out our current job openings and take the next step in your career."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="h-full items-start justify-between flex flex-col items-left p-4 md:p-6 rounded-3xl bg-[#F5F5F5] transition duration-300 ease-in-out hover:bg-gradient-to-r from-primary/20 to-secondry/20 "
              >
                <h3 className="mb-3 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-medium leading-none">
                  {item.title}
                </h3>
                <div className="flex items-center">
                  <img
                    src="/bag-image.webp"
                    alt=""
                    className="w-[22px] h-[22px]"
                  />
                  <p className="pl-2 text-[16px] md:text-[20px] font-light">
                    {item.hire}
                  </p>
                </div>
                <div className="text-left mt-4">
                  <Grediantbutton btntext="Apply" link={item.link} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Position_card;
