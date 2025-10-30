import React from "react";

import Grediantbutton from "../Button/Grediantbutton";
import Titlecontent from "../Titlecontent/Titlecontent";

function Cta_life() {
  return (
    <section className="top-bottom cta--section--life">
      <div className="container">
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="w-full  text-center">
            <div className="title--head mb-4 ">
              <Titlecontent
                title={"Be Part of Something Bigger"}
                textcolor="text-white"
              />
            </div>
            <div className="flex justify-center">
              <Grediantbutton
                btntext={"Explore Opportunities"}
                link={"/career"}
                variant="black"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta_life;
