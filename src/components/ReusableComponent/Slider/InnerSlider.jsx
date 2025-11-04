import React from "react";

import Crousal from "./Crousal";
import Titlecontent from "../Titlecontent/Titlecontent";

function InnerSlider({ padding = "pt-8 md:pt-16 lg:pt-20", data, title, bg = "bg-white" }) {
  return (
    <section className={`${padding} ${bg}`}>
      <div className="container">
        <div className="inner_sliders">
          <div className="title--head md:pb-10 sm:pb-6 pb-7 text-center">
            <Titlecontent title={title} />
          </div>
        </div>
      </div>
      <Crousal slides={data} />
    </section>
  );
}

export default InnerSlider;
