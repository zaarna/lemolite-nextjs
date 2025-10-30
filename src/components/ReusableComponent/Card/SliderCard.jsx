import React, { useState } from "react";

function SliderCard({
  image,
  title,
  description,
  bg = "bg-[#F5F5F5]",
  hoverbg,
  color = "text-black",
  hovercolor,
}) {
  return (
    <div>
      <div
        className={`card flex-1 flex flex-col items-start rounded-3xl px-5 py-5 ${bg} mx-4 h-full group group-hover:${hoverbg} transition delay-150 duration-300 ease-in-out`}
      >
        <figure className={` transition delay-150 duration-300 ease-in-out`}>
          <img
            src={image}
            alt={title}
            className="w-[50px] md:w-[60px] 2xl:w-[70px]"
          />
        </figure>
        <h4
          className={`text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-medium  ${color} group-hover:${hovercolor} transition delay-150 duration-300 ease-in-out`}
        >
          {title}
        </h4>
        <p
          className={`text-[16px] md:text-[20px] font-light content-start ${color} group-hover:${hovercolor} transition delay-150 duration-300 ease-in-out`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default SliderCard;
