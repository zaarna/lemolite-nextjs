import React from "react";

function MissionVission() {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30">
        <div className="container top-bottom  flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {/* Mission Card */}
            <div className="bg-white p-6 shadow-md rounded-[32px]">
              <h2 className=" font-bold mb-1 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px]">
                Our Mission
              </h2>
              <p className="text-[16px] md:text-[20px] font-normal">
                We are on a mission to help businesses grow by making technology
                simple, accessible, and effective. Our goal is to turn ideas
                into real, impactful digital solutions that empower businesses
                to succeed. With a focus on innovation and problem-solving, we
                are here to make the digital world easier to navigate for
                everyone.
              </p>
            </div>
            {/* Vision Card */}
            <div className="bg-white p-6 shadow-md rounded-[32px]">
              <h2 className="font-bold mb-1 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px]">
                Our Vision
              </h2>
              <p className="text-[16px] md:text-[20px] font-normal">
                We see a future where every business, no matter its size, can
                use technology to achieve its dreams. Our vision is to break
                down barriers to innovation, making digital tools easy to access
                and use. As we grow, we remain committed to supporting
                businesses on their journey, helping them turn possibilities
                into success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MissionVission;
