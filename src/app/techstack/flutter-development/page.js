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
        title={"Flutter Development Company"}
        content={
          "One of the best Flutter app development company, Lemolite, can assist you in producing seamless, effective cross-platform apps. Our expertise in Flutter App Development Services allows businesses to create visually stunning, feature-rich, and scalable desktop, web, and mobile applications using a single codebase."
        }
        btntext={"Speak With A Flutter Specialist "}
        link={"/contact-us"}
        src={"/flutterhero.webp"}
        alt={"Flutter Development Company"}
      />
      <Librariescomponent
        libraries={flutterlibraries}
        title="Top Flutter Libraries"
        stats={allStats}
      />
      <WhyHireSection
        title={"Unlock Next-Level App Development with Flutter"}
        content={
          "Take advantage of our Flutter app development team's ability to combine technical know-how with creative problem-solving to create dependable, visually stunning, and speedy mobile solutions."
        }
        btntext={"Hire A Flutter Expert"}
        // link={"/services/hire-angular-developer"}
        features={flutterfeatures}
      />
      <Better_option_section
        title="Key Benefits of Choosing Flutter"
        content="Our Flutter development team creates robust cross-platform Flutter solutions by fusing
        technical know-how with innovative problem-solving techniques recognized as a Top
        Flutter App Development Company"
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
        title="Why Choose Lemolite for Flutter Development?"
      />
    </div>
  );
};

export default FlutterDevelopmentPage;
