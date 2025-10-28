import React from "react";

function FunFactCard({ value, label, bgColor, collumWidth }) {
  return (
    <div className={`w-1/2 ${collumWidth} my-2`}>
      <div
        className={`mx-2 h-auto md:h-full px-3 py-4 md:py-6 md:px-6 flex flex-col justify-center items-center md:rounded-[36px] rounded-[12px] shadow-md ${bgColor}`}
      >
        <h2 className="text-[22px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] font-bold">
          {value}
        </h2>
        <p className="text-[16px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] text-black text-center">
          {label}
        </p>
      </div>
    </div>
  );
}

export default FunFactCard;
