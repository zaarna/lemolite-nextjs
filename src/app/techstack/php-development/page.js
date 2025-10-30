import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import InnerSlider from "@/components/ReusableComponent/Slider/InnerSlider";
import Better_option_section from "@/components/ReusableComponent/TechStack/Better_option_section";
import Librariescomponent from "@/components/ReusableComponent/TechStack/LibrariesComponent";
import { phptech } from "@/data/breadcrumsdata";
import {
  allStats,
  phpdata,
  phpfeatures,
  phpkeydata,
  phplibraries,
} from "@/data/techstack";

const PhpDevelopmentPage = () => {
  return (
    <div className="min-h-screen ">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={phptech}
        title={"PHP Development Company"}
        content={
          "PHP transforms web development with scalable and flexible solutions, delivering efficiency and reliability to meet diverse business needs and achieve exceptional results."
        }
        btntext={"Hire a PHP Developer"}
        link={"/contact-us"}
        src={"/techstackphp.webp"}
        alt={"services image"}
      />
      <Librariescomponent
        libraries={phplibraries}
        title="Top PHP Libraries"
        stats={allStats}
      />
      <WhyHireSection
        title="Elevate Your Web Experience with PHP"
        content="PHP is a popular open-source scripting language designed for web development. It has evolved into a powerful, efficient, and feature-rich tool, enabling developers to build dynamic, interactive websites with ease and reliability."
        btntext="Hire Skilled PHP Developers"
        link={"/services/hire-php-developer"}
        features={phpfeatures}
      />
      <Better_option_section
        title="Empower Your Web Presence with PHP Edge"
        content="Enhance your online presence with PHP web development services. Perfect for creating dynamic, scalable, and efficient web solutions, PHP ensures a seamless experience for both developers and users, making it a trusted choice for modern web development."
        data={phpkeydata}
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30"
        image={"/hirecta.webp"}
        title={"Ready to Hire Php Developers?"}
        text={"Find Your Developer"}
        link={"/contact-us"}
      />
      <InnerSlider
        data={phpdata}
        title="Why Choose Lemolite for Your Laravel Development Services?"
      />
    </div>
  );
};

export default PhpDevelopmentPage;
