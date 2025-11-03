"use client";

import Image from "next/image";

export default function HireOurTeam({ hireourteam = [] }) {
  return (
    <section className="top-bottom bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30">
      <div className="container">
        <div className="mx-auto px-4 grid md:gap-8 lg:grid-cols-3">
          {hireourteam.map((feature, index) => (
            <div key={index} className="sm:mt-0 mt-8">
              {/* Feature Card */}
              <div className="bg-white shadow-md rounded-lg p-7 lg:h-4/5 xl:h-3/4">
                <div className="sm:pb-3 pb-2">
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    width={64}
                    height={64}
                    className="w-16 h-auto"
                  />
                </div>
                <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-medium mb-2 leading-7 md:leading-10">
                  {feature.title}
                </h3>
                <p className="text-[16px] md:text-[20px] font-light">
                  {feature.description}
                </p>
              </div>

              {/* Stats Card */}
              <div className="count-status md:mt-8 lg:mt-10 mt-5 bg-white shadow-md rounded-lg p-7">
                <span className="font-extrabold text-xl">{feature.number}</span>
                <p>{feature.stats}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
