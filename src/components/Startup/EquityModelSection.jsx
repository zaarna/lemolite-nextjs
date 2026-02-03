import React from "react";
import Titlecontent from "../ReusableComponent/Titlecontent/Titlecontent";
import BottomSection from "./BottomSection";

function EquityModelSection() {
  return (
    <div className="bg-[#F1F1F1]">
      <div className="container py-16 text-center">
        <Titlecontent
          title="The 70–30 Equity Model for Long-Term Value Creation"
          textcolor="text-[#000000]"
          titleTag="h2"
        />
        <p className="max-w-4xl text-[15px] font-normal text-center mx-auto my-3">
          Early capital is best invested in building the right product. To
          maximize capital efficiency and reduce founder risk, we offer a
          flexible engagement model that blends cash investment with equity
          participation.
        </p>
        <BottomSection />
      </div>
    </div>
  );
}

export default EquityModelSection;
