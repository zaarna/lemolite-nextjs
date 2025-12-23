import React from "react";
import Titlecontent from "../../../components/ReusableComponent/Titlecontent/Titlecontent";
import FunFactTecjstack from "./FunFactTecjStack";

function Libraries({ src, srcname, text }) {
  return (
    <div className="h-full">
      <div className="group libraies--component text-center m-2 p-3 md:p-5 rounded-[24px] md:border-transparent border border-black ">
        <figure className="m-auto flex justify-center mb-3">
          <img src={src} alt={srcname} />
        </figure>

        <span>{text}</span>
      </div>
    </div>
  );
}

function Librariescomponent({ title, libraries, stats }) {
  return (
    <section className="pb-8 md:pb-16 lg:pb-20">
      <div className="container ">
        <div className="title--head text-center phython--libraries bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30 rounded-[20px] md:rounded-[32px] py-5 sm:py-8 md:py-10">
          <div className="">
            <Titlecontent title={title} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-7 justify-center items-center text-center sm:pt-10 pt-5">
            {libraries.map((lib, index) => (
              <Libraries
                key={index}
                src={lib.src}
                srcname={lib.srcname}
                text={lib.text}
              />
            ))}
          </div>
        </div>
        <div className="phython--funfact md:pt-10 pt-5 ">
          <FunFactTecjstack stats={stats} width={"md:w-1/4"} />
        </div>
      </div>
    </section>
  );
}

export default Librariescomponent;
