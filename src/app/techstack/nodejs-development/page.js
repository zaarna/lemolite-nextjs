import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import InnerSlider from "@/components/ReusableComponent/Slider/InnerSlider";
import Better_option_section from "@/components/ReusableComponent/TechStack/Better_option_section";
import Librariescomponent from "@/components/ReusableComponent/TechStack/LibrariesComponent";
import { angulartech, nodetech } from "@/data/breadcrumsdata";
import {
  allStats,
  nodedata,
  nodefeatures,
  nodekeydata,
  nodelibraries,
} from "@/data/techstack";
import { pagesMeta } from "@/data/pagesMeta";


export const metadata = {
  title: pagesMeta["nodejs-development"].title,
  description: pagesMeta["nodejs-development"].description,
  keywords: pagesMeta["nodejs-development"].keywords,
  alternates: {
    canonical: pagesMeta["nodejs-development"].canonical,
  },
};

const AngularDevelopmentPage = () => {
  return (
    <div className="min-h-screen ">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={nodetech}
        title={"Node JS Development Company"}
        content={
          "Node JS is a versatile platform known for its speed and scalability. It helps create efficient, real-time applications that perform well even under heavy loads, offering businesses a reliable solution to meet growing demands."
        }
        btntext={"Talk To A Node JS Expert"}
        link={"/contact-us"}
        src={"/nodetech.webp"}
        alt={"Node JS Development Company"}
      />
      <Librariescomponent
        libraries={nodelibraries}
        title="Top Node Libraries"
        stats={allStats}
      />
      <WhyHireSection
        title="Future-Proof Your Web Development with Node.JS"
        content=" Node.js is a powerful and scalable platform that enables developers to build fast, efficient, and real-time applications. Its versatility supports a wide range of use cases, making it an ideal choice for modern web development projects."
        btntext="Hire Node JS Developer"
        link={"/services/hire-nodejs-developer"}
        features={nodefeatures}
      />
      <Better_option_section
        title={"Unlock the Potential of Web Development with Node JS"}
        content={
          "Node JS development solutions offers unmatched speed, scalability, and versatility for modern applications. From real-time communication to efficient microservices, explore how this powerful technology enhances web development with seamless performance, lightweight architecture, and support for innovative solutions."
        }
        data={nodekeydata}
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30"
        image={"/hirecta.webp"}
        title={"Ready to Hire Node JS Developers?"}
        text={"Find Your Developer"}
        link={"/contact-us"}
      />
      <InnerSlider
        data={nodedata}
        title="Why Choose Lemolite for Your Node JS Development Services?"
      />
    </div>
  );
};

export default AngularDevelopmentPage;
