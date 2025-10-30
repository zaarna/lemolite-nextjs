import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import React from "react";
import { python } from "@/data/breadcrumsdata";
import { hireourteamphython } from "@/data/hiringDevelopers";
import HireOurTeam from "@/components/ReusableComponent/HireDevelopers/HireOurTeam";
import Hireproccess from "@/components/ReusableComponent/HireDevelopers/Hireprocess";
import { hireprocesspython } from "@/data/hireprocess";
import { whyhirepython } from "@/data/whyhiredev";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import { pythonbenifit } from "@/data/keybenifit";
import Key_benifit from "@/components/ReusableComponent/HireDevelopers/key_benifit";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import { hirefaqpython } from "@/data/faqhire";
// import Testimonial from "@/components/ReusableComponent/HireDevelopers/Testimonial";
import { testimonials } from "@/data/home";

const HirePythonDeveloperPage = () => {
  return (
    <div className="min-h-screen">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={python}
        title={"Hire Python Developers"}
        content={
          "Unlock the potential of your projects with our best Python developers, skilled in frameworks such as Django, Flask, and FastAPI. They specialize in creating scalable web applications and innovative AI/ML solutions, ensuring you receive robust, data-driven results."
        }
        btntext={"Get Started Today"}
        link={"/contact-us"}
        src={"/python.webp"}
        alt={"Hire Python Developers"}
      />
      <HireOurTeam hireourteam={hireourteamphython} />
      <Hireproccess
        title={"How We Connect You with the Best Python Developers"}
        steps={hireprocesspython}
      />
      <WhyHireSection
        title={"Why Hire Python Developers from Lemolite?"}
        content={
          "Finding the right development talent can be challenging, but we simplify the process by connecting you with highly skilled Python developers, rigorously evaluated for technical expertise and project adaptability. Whether you require front-end, back-end, or full-stack specialists, our professionals seamlessly integrate into your workflow. From recruitment to onboarding and ongoing management, we handle every aspect, allowing you to focus on driving business success with scalable and cost-efficient development solutions."
        }
        btntext={"Hire Python Developers"}
        link={"/contact-us"}
        features={whyhirepython}
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30"
        image={"/ctawhite.webp"}
        title={" Ready to Work with Dedicated Python Developers?"}
        text={"Start Your Project Today!"}
        link={"/contact-us"}
      />
      <Key_benifit
        title={"Key Benefits of Our Python Developers"}
        benefits={pythonbenifit}
      />
      <Ctasection
        image={"/hirecta.webp"}
        title={"Take Your Project to the Next Level!"}
        text={"Start Now"}
        link={"/contact-us"}
        bg="bg-[#F1F1F1]"
      />
      <FAQ questions={hirefaqpython} />
      {/* <Testimonial
        title="Hear from Our Happy Clients"
        testimonials={testimonials}
      /> */}
    </div>
  );
};

export default HirePythonDeveloperPage;
