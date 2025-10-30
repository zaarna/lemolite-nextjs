import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import InnerSlider from "@/components/ReusableComponent/Slider/InnerSlider";
import Better_option_section from "@/components/ReusableComponent/TechStack/Better_option_section";
import Librariescomponent from "@/components/ReusableComponent/TechStack/LibrariesComponent";
import { phythontech } from "@/data/breadcrumsdata";
import {
  allStats,
  phythondata,
  phythonfeatures,
  phythonkeydata,
  phythonlibraries,
} from "@/data/techstack";

const PythonDevelopmentPage = () => {
  return (
    <div className="min-h-screen ">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={phythontech}
        title={"Python Development Company"}
        content={
          "Discover the power of Python for building scalable, efficient, and versatile applications. Our experts are here to help you harness Python's full potential for your business needs."
        }
        btntext={"Talk to a Python Expert"}
        link={"/contact-us"}
        src={"/techstackphython.webp"}
        alt={"Python Development Company"}
      />
      <Librariescomponent
        libraries={phythonlibraries}
        title="Top Python Libraries"
        stats={allStats}
      />
      <WhyHireSection
        title="Unlock the Power of Python Development"
        content="Build robust and scalable applications with Python's versatility. From Python web development services to AI solutions, achieve your goals efficiently with expert guidance. Let Python elevate your projects with its simplicity and power!"
        btntext="Hire a Python Expert"
        link={"/services/hire-python-developer"}
        features={phythonfeatures}
      />
      <Better_option_section
        title={"Maximize Efficiency with Python Development Services"}
        content="Python simplifies development with its versatility, vast libraries, and easy syntax. Whether building simple apps or complex systems, Python helps create scalable solutions quickly. It’s ideal for tasks like web development, data analysis, and machine learning, making it a top choice for businesses."
        data={phythonkeydata}
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30"
        image={"/hirecta.webp"}
        title={"Ready to Hire Python Developers?"}
        text={"Find Your Developer"}
        link={"/contact-us"}
      />
      <InnerSlider
        data={phythondata}
        title="Why Choose Lemolite for Your Python Development Services?"
      />
    </div>
  );
};

export default PythonDevelopmentPage;
