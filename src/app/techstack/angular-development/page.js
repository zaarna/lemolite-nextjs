import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import InnerSlider from "@/components/ReusableComponent/Slider/InnerSlider";
import Better_option_section from "@/components/ReusableComponent/TechStack/Better_option_section";
import Librariescomponent from "@/components/ReusableComponent/TechStack/LibrariesComponent";
import { angulartech } from "@/data/breadcrumsdata";
import {
  allStats,
  angulardata,
  angularfeatures,
  angularkeydata,
  angularlibraries,
} from "@/data/techstack";

const AngularDevelopmentPage = () => {
  return (
    <div className="min-h-screen ">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={angulartech}
        title={"Angular Development Company"}
        content={
          "Our Angular development company specializes in delivering high-performance, scalable, and robust web applications. As a leading AngularJS development company, we help businesses create dynamic, feature-rich applications with a focus on speed and user experience."
        }
        btntext={" Talk To An Angular Expert"}
        link={"/contact-us"}
        src={"/angulartech.webp"}
        alt={"Angular Development Company"}
      />
      <Librariescomponent
        libraries={angularlibraries}
        title="Top Angular Libraries"
        stats={allStats}
      />
      <WhyHireSection
        title={"Core Technologies Powering Angular Development"}
        content={
          "Our AngularJS developers leverage a wide range of modern technologies and frameworks, ensuring high-quality, scalable, and efficient applications tailored to your specific business needs."
        }
        btntext={"Hire An Angular Expert"}
        link={"/services/hire-angular-developer"}
        features={angularfeatures}
      />
      <Better_option_section
        title="How Angular Enhances Modern Web Development"
        content="Angular is a leading framework for building dynamic, scalable, and high-performance web applications. Its wide array of features enables faster development, enhanced efficiency, and seamless scalability, making it a top choice for enterprise-grade solutions. "
        data={angularkeydata}
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30"
        image={"/hirecta.webp"}
        title={"Ready to Hire Angular Developers?"}
        text={"Find Your Developer"}
        link={"/contact-us"}
      />
      <InnerSlider
        data={angulardata}
        title="Why Choose Lemolite for Angular Development Services?"
      />
    </div>
  );
};

export default AngularDevelopmentPage;
