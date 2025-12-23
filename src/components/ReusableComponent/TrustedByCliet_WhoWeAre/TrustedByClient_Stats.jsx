import React from "react";
import Trustedbyclient from "../Trustedbyclient/Trustedbyclient";
import FunFactTecjstack from "../TechStack/FunFactTecjStack";

function TrustByClient_Stats({ clientLogos, stats }) {
  return (
    <section className="pb-8 md:pb-16 lg:pb-20">
      <div className="container">
        <div className="pb-6 md:pb-7 xl:pb-10 2xl:pb-14">
          <Trustedbyclient clientLogos={clientLogos} />
        </div>
        <div className="">
          <FunFactTecjstack stats={stats} width={"md:w-1/4"} />
        </div>
      </div>
    </section>
  );
}

export default TrustByClient_Stats;
