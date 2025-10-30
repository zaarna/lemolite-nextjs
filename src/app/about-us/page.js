import Corevalue from "@/components/AboutUs/CoreValue";
import Idea from "@/components/AboutUs/Idea";
import MissionVission from "@/components/AboutUs/MissionVission";
import Ourstory from "@/components/AboutUs/Ourstory";
import OurWork from "@/components/AboutUs/OurWork";
import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import VisionAndExpertise from "@/components/ReusableComponent/ExpertiseSection/VisionAndExpertise";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import { about } from "@/data/breadcrumsdata";
import { projects, services } from "@/data/home";
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen ">
      <Innerhero
        padding="pb-8 md:pb-5 lg:pb-0"
        breadcrumbs={about}
        title={"Empowering Innovation, One Solution  at a Time"}
        content={"Where Technology Meets Vision"}
        src={"/about-banner.webp"}
        alt={"About Us"}
        btntext="Partner with Us in Your Digital Journey"
      />
      <MissionVission />
      <Corevalue />
      <Ourstory />
      <Idea />
      <VisionAndExpertise title={"Industries We Serve"} service={services} />
      <OurWork
        title={"Our Recent Work"}
        projects={projects}
        btntext={"View all work"}
        link={"/casestudy"}
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30"
        image={"/hirecta.webp"}
        title={"Take Your Project to the Next Level!"}
        text={"Start Now"}
        link={"/contact-us"}
      />
    </div>
  );
};

export default AboutUsPage;
