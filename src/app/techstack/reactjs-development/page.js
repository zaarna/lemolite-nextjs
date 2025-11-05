import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import InnerSlider from "@/components/ReusableComponent/Slider/InnerSlider";
import Better_option_section from "@/components/ReusableComponent/TechStack/Better_option_section";
import Librariescomponent from "@/components/ReusableComponent/TechStack/LibrariesComponent";
import { reacttech } from "@/data/breadcrumsdata";
import {
  allStats,
  reactfeatures,
  reactkeydata,
  reactlibraries,
  reactdata,
} from "@/data/techstack";

const ReactJSDevelopmentPage = () => {
  return (
    <div className="min-h-screen ">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={reacttech}
        title={"React JS Development Company"}
        content={
          "Build interactive applications such as  SPAs, PWAs, dynamic websites, and social media platforms using the React.JS library, ensuring smooth performance and a seamless user experience."
        }
        btntext={"Talk To A React.JS Expert"}
        link={"/contact-us"}
        src={"/reactech.webp"}
        alt={"React JS Development Company"}
      />
      <Librariescomponent
        libraries={reactlibraries}
        title="Top React Libraries"
        stats={allStats}
      />
      <WhyHireSection
        title={"Key Features of Custom React JS Development"}
        content={
          "Explore custom React JS development features that enhance performance, scalability, and user experience, empowering your web applications to be future-ready and stand out in today’s competitive world."
        }
        btntext={"Hire Dedicated ReactJS Developer"}
        link={"/services/hire-reactjs-developer"}
        features={reactfeatures}
      />
      <Better_option_section
        title="Transform Your Front-End with ReactJS Expertise"
        content="React.JS is a top framework for modern web applications. Its component-based design and tools like Redux enable fast, dynamic apps with optimal load times and effective state management. Ideal for SPAs, PWAs, and dynamic sites, React simplifies development and enhances cross-platform compatibility. "
        data={reactkeydata}
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30"
        image={"/hirecta.webp"}
        title={"Ready to Hire React JS Developers?"}
        text={"Find Your Developer"}
        link={"/contact-us"}
      />
      <InnerSlider
        data={reactdata}
        title="Why Choose Lemolite for React JS Development Services?"
      />
    </div>
  );
};

export default ReactJSDevelopmentPage;
