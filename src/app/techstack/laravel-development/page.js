import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import InnerSlider from "@/components/ReusableComponent/Slider/InnerSlider";
import Better_option_section from "@/components/ReusableComponent/TechStack/Better_option_section";
import Librariescomponent from "@/components/ReusableComponent/TechStack/LibrariesComponent";
import { laraveltech } from "@/data/breadcrumsdata";
import {
  allStats,
  laraveldata,
  laravelfeatures,
  laravelkeydata,
  laravellibraries,
} from "@/data/techstack";
import { pagesMeta } from "@/data/pagesMeta";


export const metadata = {
  title: pagesMeta["laravel-development"].title,
  description: pagesMeta["laravel-development"].description,
  keywords: pagesMeta["laravel-development"].keywords,
  alternates: {
    canonical: pagesMeta["laravel-development"].canonical,
  },
};

const LaravelDevelopmentPage = () => {
  return (
    <div className="min-h-screen ">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={laraveltech}
        title={"Laravel Development Company"}
        content={
          "Effortlessly create dynamic and robust web applications with our Laravel development services. As a leading Laravel web development company, we simplify complex processes, enhance scalability, and deliver exceptional user experiences."
        }
        btntext={"Talk To A Laravel Expert"}
        link={"/contact-us"}
        src={"/laraveltech.webp"}
        alt={"Laravel Development Company"}
      />
      <Librariescomponent
        libraries={laravellibraries}
        title="Top Laravel Packages"
        stats={allStats}
      />
      <WhyHireSection
        title="What Makes Laravel the Perfect Choice for Your Next Project"
        content="Laravel is the ideal framework for your next project, offering a reliable, efficient, and cost-effective solution. With its strong community support and scalability, Laravel ensures smooth development and long-term success for businesses of all sizes."
        btntext="Hire Laravel Developer"
        link={"/services/hire-laravel-developer"}
        features={laravelfeatures}
      />
      <Better_option_section
        title={"Turn Challenges into Opportunities with Laravel’s Benefits"}
        content={
          "Laravel turns challenges into opportunities by simplifying development, ensuring scalability, and providing robust security. It’s a reliable solution designed to meet your needs and grow your business, making it easier to achieve your goals efficiently."
        }
        data={laravelkeydata}
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30"
        image={"/hirecta.webp"}
        title={"Ready to Hire Laravel Developers?"}
        text={"Find Your Developer"}
        link={"/contact-us"}
      />
      <InnerSlider
        data={laraveldata}
        title="Why Choose Lemolite for Your Laravel Development Services?"
      />
    </div>
  );
};

export default LaravelDevelopmentPage;
