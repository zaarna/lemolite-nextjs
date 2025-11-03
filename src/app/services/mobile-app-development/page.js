import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import Devlopmentprocess from "@/components/ReusableComponent/DevelopmentProcess/Devlopmentprocess";
import Dream_web_application from "@/components/ReusableComponent/DreamWebApplication/Dream_web_application";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import Mobile_TechnologyWeUse from "@/components/ReusableComponent/TechnologyWeUse/Mobile_TechnologyWeUse";
import TechnologyWeUse from "@/components/ReusableComponent/TechnologyWeUse/TechnologyWeUse";
import { mobile } from "@/data/breadcrumsdata";
import {
  mobileappfaqData,
  mobilebexpert,
  mobilelistItems,
  mobileprocessSteps,
} from "@/data/services";

const MobileAppDevelopmentPage = () => {
  return (
    <div className="min-h-screen">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={mobile}
        title={" Mobile App Development Services  "}
        content={
          "Transform your business with innovative mobile solutions. As a top mobile app development company, we specialize in creating custom applications that drive growth and enhance customer experiences across iOS, Android, and cross-platform environments. "
        }
        btntext={"Launch Your App"}
        link={"/contact-us"}
        src={"/mobile.webp"}
        alt={"Mobile app development Services"}
      />
      <WhyHireSection
        title={"Our Expertise"}
        content={
          "Our e-commerce development services are designed to do more than just power online sales. We help businesses create impactful digital storefronts, improve customer engagement, and streamline operations, ensuring a strong foundation for long-term growth and success."
        }
        btntext={"Launch Your Digital Store"}
        link={"/contact-us"}
        features={mobilebexpert}
        layoutType=""
        bg="bg-[#F1F1F1]"
      />
      <Dream_web_application
        title="Your Role in Building Your Dream Mobile App"
        content="To achieve the best results, collaboration is key. Here is how you can contribute to ensuring your mobile app development stays on track"
        listItems={mobilelistItems}
        image={"/role-image.webp"}
        alt={"Dream Web Application"}
        additionalText="By working together, we will ensure that your mobile application is delivered on time, within budget, and to your complete satisfaction."
      />
      <Devlopmentprocess
        title={"Our Development Process"}
        processSteps={mobileprocessSteps}
      />
      <Ctasection
        image={"/ctagreadiant.webp"}
        title={"Ready to launch your dream app?"}
        text={"Contact us today"}
        link={"/contact-us"}
      />
      <Mobile_TechnologyWeUse bg="bg-[#F1F1F1]" />
      <FAQ questions={mobileappfaqData} padding="top-bottom" bg="bg-gray-50" />
    </div>
  );
};

export default MobileAppDevelopmentPage;
