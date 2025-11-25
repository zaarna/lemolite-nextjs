import BlogCard from "@/components/ReusableComponent/blog/BlogCard";
import CtaSection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import VisionAndExpertise from "@/components/ReusableComponent/ExpertiseSection/VisionAndExpertise";
import Hire from "@/components/ReusableComponent/HireSection/Hire";
import TailoredSolutions from "@/components/ReusableComponent/TailoredSolutions/TailoredSolutions";
import TechnologyWeUse from "@/components/ReusableComponent/TechnologyWeUse/TechnologyWeUse";
import TrustedByCliet_WhoWeAre from "@/components/ReusableComponent/TrustedByCliet_WhoWeAre/TrustedByCliet_WhoWeAre";
import { blogCards } from "@/data/blogCards";
import OurWork from "@/components/AboutUs/OurWork";
import Main_banner from "@/components/Home/Main_banner";
import { pagesMeta } from "@/data/pagesMeta";
import {
  logos,
  features,
  solutions,
  services,
  developers,
  projects,
} from "@/data/home";
import React from "react";
import Main_bannerUpdated from "@/components/Home/Main_bannerUpdated";

export const metadata = {
  title: pagesMeta.home.title,
  description: pagesMeta.home.description,
  keywords: pagesMeta.home.keywords,
  alternates: {
    canonical: pagesMeta.home.canonical,
  },
};

// This will be replaced with your actual HomePage component when migrated
const HomePage = () => {
  return (
    <div className="min-h-screen ">
      {/* <Main_banner /> */}
      <Main_bannerUpdated />
      {/* <TrustedByCliet_WhoWeAre
        logo={logos}
        title={"Who We Are"}
        content={
          "We provide tailored custom software development services to meet your specific business requirements. From full-stack development to machine learning, our experience helps you reach your objectives. As a leading custom software development company, we are more than just service providers—we transform your ideas into the best possible designs and developments. Our custom web application development company delivers innovative solutions that help your business grow into a successful brand."
        }
        features={features}
      /> */}
      <TailoredSolutions solutions={solutions} />
      <CtaSection
        title={"Ready to Transform Your Business?"}
        text={"Take the First Step Today"}
        link={"/contact-us"}
        image="/ctagreadiant.webp"
        bg="bg-[#F1F1F1]"
      />
      <VisionAndExpertise
        title="Your Vision, Our Expertise!"
        content="We provide tailored custom software development services to drive innovation, improve efficiency, enhance customer experience, and support digital transformation, helping you achieve success and stay competitive."
        service={services}
      />
      <Hire
        developers={developers}
        title={"Hire Innovators Who Build the Future"}
        content={
          "Elevate your business with innovative, custom-built digital solutions designed to meet today's challenges and drive future growth and success."
        }
        btntext="Talk To An Expert"
        link={"/contact-us"}
        bg="bg-[#F1F1F1]"
      />
      <TechnologyWeUse />
      <OurWork
        title={"Our Recent Work"}
        projects={projects}
        btntext={"View All Work"}
        link={"/casestudy"}
      />
      <CtaSection
        bg="bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30"
        image={"/ctawhite.webp"}
        title={"Take Your Project to the Next Level!"}
        text={"Start Now"}
        link={"/contact-us"}
      />
      <BlogCard blogCards={blogCards} bg="bg-[#F1F1F1]" padding="top-bottom" />
    </div>
  );
};

export default HomePage;
