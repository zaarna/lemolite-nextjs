import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import InnerSlider from "@/components/ReusableComponent/Slider/InnerSlider";
import Better_option_section from "@/components/ReusableComponent/TechStack/Better_option_section";
import Librariescomponent from "@/components/ReusableComponent/TechStack/LibrariesComponent";
import { merntech } from "@/data/breadcrumsdata";
import {
  allStats,
  merndata,
  mernfeatures,
  mernkeydata,
  mernlibraries,
} from "@/data/techstack";

const MernDevelopmentPage = () => {
  return (
    <div className="min-h-screen ">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={merntech}
        title={"MERN Stack Development Company"}
        content={
          "Unlock the potential of MERN Stack development to build dynamic, scalable, and high-performance web applications. Our expert developers specialize in crafting custom solutions tailored to your business needs, from dynamic frontends to seamless backends."
        }
        btntext={"Talk To A MERN Expert"}
        link={"/contact-us"}
        src={"/techstackmern.webp"}
        alt={"MERN Stack Development Company"}
      />
      <Librariescomponent
        libraries={mernlibraries}
        title="Top MERN Libraries"
        stats={allStats}
      />
      <WhyHireSection
        title="Discover Why MERN Stack is a Developer’s Choice"
        content="The MERN Stack offers the perfect balance of speed, scalability, and flexibility for your web development needs. With proven success in creating high-performing applications, it’s the ideal choice for businesses looking to stay ahead in today’s competitive market."
        btntext="Hire MERN stack developer"
        link={"/services/hire-mern-developer"}
        features={mernfeatures}
      />
      <Better_option_section
        title="How MERN Stack Benefits Your Web Development"
        content="The MERN Stack is a powerhouse for modern web development, offering flexibility, scalability, and a unified JavaScript environment. From faster development cycles to seamless integration, explore how MERN can elevate your applications to the next level."
        data={mernkeydata}
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30"
        image={"/hirecta.webp"}
        title={"Ready to Hire MERN Full Stack Developer"}
        text={"Find Your Developer"}
        link={"/contact-us"}
      />
      <InnerSlider
        data={merndata}
        title="Why Choose Lemolite for Your MERN Stack Development Services?"
      />
    </div>
  );
};

export default MernDevelopmentPage;
