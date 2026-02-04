import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import InnerSlider from "@/components/ReusableComponent/Slider/InnerSlider";
import Better_option_section from "@/components/ReusableComponent/TechStack/Better_option_section";
import Librariescomponent from "@/components/ReusableComponent/TechStack/LibrariesComponent";
import { fluttertech } from "@/data/breadcrumsdata";
import {
  allStats,
  angulardata,
  flutterdata,
  flutterfeatures,
  flutterkeydata,
  flutterlibraries,
} from "@/data/techstack";
import { pagesMeta } from "@/data/pagesMeta";

export const metadata = {
  title: pagesMeta["flutter-development"].title,
  description: pagesMeta["flutter-development"].description,
  keywords: pagesMeta["flutter-development"].keywords,
  alternates: {
    canonical: pagesMeta["flutter-development"].canonical,
  },
};

const FlutterDevelopmentPage = () => {
  return (
    <div className="min-h-screen ">
      <Innerhero
        padding="top-bottom"
        breadcrumbs={fluttertech}
        title={"Flutter App Development Company"}
        content={
          "Flutter is a cross-platform framework for building fast, scalable, and visually consistent apps. This tech stack supports mobile and web development using a single codebase, ensuring performance, flexible UI design, and long-term scalability."
        }
        btntext={"Talk To A Flutter Expert"}
        link={"/contact-us"}
        src={"/flutterhero.webp"}
        alt={"Flutter App Development Company"}
      />
      <Librariescomponent
        libraries={flutterlibraries}
        title="Top Flutter Libraries"
        stats={allStats}
      />
      <WhyHireSection
        title={"Behind the Scenes of Flutter App Development"}
        content={
          "This Flutter technology stack is built on reliable tools and frameworks that support faster development, stable performance, and scalable application architecture across mobile and web platforms."
        }
        btntext={"Hire A Flutter Expert"}
        link={"/services/hire-flutter-developer"}
        features={flutterfeatures}
      />
      <Better_option_section
        title="Key Benefits of Choosing Flutter"
        content="Flutter enables efficient cross-platform application development by combining a single codebase with high-performance rendering. This technology supports faster delivery, consistent UI, and scalable architecture for modern digital products."
        data={flutterkeydata}
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30"
        image={"/hirecta.webp"}
        title={"Ready to Hire Flutter Developers?"}
        text={"Find Your Developer"}
        link={"/contact-us"}
      />
      <InnerSlider
        data={flutterdata}
        title="Why Choose Lemolite for Your Flutter Development Services?"
      />
    </div>
  );
};

export default FlutterDevelopmentPage;
