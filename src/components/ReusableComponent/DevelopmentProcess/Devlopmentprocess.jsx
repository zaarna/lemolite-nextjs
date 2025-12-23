import React from "react";
import ProcessStep from "./ProcessStep";
import Titlecontent from "../Titlecontent/Titlecontent";

function Devlopmentprocess({ processSteps = [], title }) {
  return (
    <section className="bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30 top-bottom">
      <div className="container">
        <div className="title--head text-center ">
          <Titlecontent title={title} />
        </div>
        <div className="devlopment--process w-full max-w-screen-xl m-auto sm:mt-12 mt-6">
          {processSteps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Devlopmentprocess;
