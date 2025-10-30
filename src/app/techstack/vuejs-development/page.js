import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import InnerSlider from "@/components/ReusableComponent/Slider/InnerSlider";
import Better_option_section from "@/components/ReusableComponent/TechStack/Better_option_section";
import Librariescomponent from "@/components/ReusableComponent/TechStack/LibrariesComponent";
import { vuetech } from "@/data/breadcrumsdata";
import {
  allStats,
  vuedata,
  vuefeatures,
  vuekeydata,
  vuelibraries,
} from "@/data/techstack";
import React from "react";

const VueJSDevelopmentPage = () => {
  return (
    <div className="min-h-screen ">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={vuetech}
        title={" Vue JS Development Company "}
        content={
          "Vue JS is a lightweight, flexible framework for building interactive web applications that are easy to scale and maintain. As a top Vue.js development company, we specialize in delivering high-performance, scalable solutions for businesses of all sizes."
        }
        btntext={"Talk to a Vue JS Expert"}
        link={"/contact-us"}
        src={"/vuetech.webp"}
        alt={"Vue JS Development Company"}
      />
      <Librariescomponent
        libraries={vuelibraries}
        title="Top Vue Libraries"
        stats={allStats}
      />
      <WhyHireSection
        title="Innovative and Custom Vue.JS Development Services"
        content=" Vue JS development is supported by a set of modern technologies that streamline the creation of responsive, dynamic, and scalable web applications. From its component-based architecture to flexible state  management, Vue JS ensures fast and smooth performance for all types of web solutions."
        btntext="Hire Vue JS Developer"
        link={"/services/hire-vuejs-developer"}
        features={vuefeatures}
      />
      <Better_option_section
        title={"Experience the Benefits of Using Vue JS"}
        content={
          "Vue.JS is a flexible and powerful framework for building modern web applications. Its easy-to-learn syntax and modular design simplify the creation of responsive user interfaces. Additionally, Vue.JS integrates seamlessly with existing projects, making it an ideal choice for businesses aiming to innovate and adapt to today’s digital landscape."
        }
        data={vuekeydata}
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30"
        image={"/hirecta.webp"}
        title={"Ready to Hire Vue JS Developers?"}
        text={"Find Your Developer"}
        link={"/contact-us"}
      />
      <InnerSlider
        data={vuedata}
        title="Why Choose Lemolite for Vue JS Development Services?"
      />
    </div>
  );
};

export default VueJSDevelopmentPage;
