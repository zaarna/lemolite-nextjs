import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import Devlopmentprocess from "@/components/ReusableComponent/DevelopmentProcess/Devlopmentprocess";
import Dream_web_application from "@/components/ReusableComponent/DreamWebApplication/Dream_web_application";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import TechnologyWeUse from "@/components/ReusableComponent/TechnologyWeUse/TechnologyWeUse";
import { web } from "@/data/breadcrumsdata";
import {
  webdevlopmentfaqData,
  webexpert,
  weblistItems,
  webprocessSteps,
} from "@/data/services";
import { pagesMeta } from "@/data/pagesMeta";


export const metadata = {
  title: pagesMeta["web-development"].title,
  description: pagesMeta["web-development"].description,
  keywords: pagesMeta["web-development"].keywords,
  alternates: {
    canonical: pagesMeta["web-development"].canonical,
  },
};
const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={web}
        title={" Web Development Services"}
        content={
          "At Lemolite, we create dynamic and engaging websites tailored to your business objectives. Whether you are looking to enhance your digital presence or launch a full-scale web application, our web app development services focus on functionality, performance, and user experience."
        }
        btntext={" Code Your Dreams!"}
        link={"/contact-us"}
        src={"/webservices.webp"}
        alt={"Web Development Services"}
      />
      <WhyHireSection
        title={"Our Expertise"}
        content={
          "Our team of skilled developers specializes in a range of technologies and platforms to meet the diverse needs of our clients. Whether you are looking for a simple business website or a complex, feature-rich web application development, we have got you covered as a leading web application development company."
        }
        btntext={"Start Your Project Now"}
        link={"/contact-us"}
        features={webexpert}
        layoutType=""
        bg="bg-[#F1F1F1]"
      />
      <Dream_web_application
        title="Your Role in Building Your Dream Web Application"
        content="To deliver the best results, collaboration between all stakeholders is key. Here’s how you can help ensure your project stays on track and meets your needs:"
        listItems={weblistItems}
        image={"/role-image.webp"}
        alt={"Dream Web Application"}
        additionalText="By working together, we will ensure that your web application is delivered on time, within budget, and to your complete satisfaction."
      />
      <Devlopmentprocess
        title={"Our Development Process"}
        processSteps={webprocessSteps}
      />
      <Ctasection
        title={"Ready to build your next web project?"}
        text={"Contact us today"}
        link={"/contact-us"}
        image="/ctagreadiant.webp"
        bg="bg-white"
      />
      <FAQ questions={webdevlopmentfaqData} padding="top-bottom" />
      <TechnologyWeUse />
    </div>
  );
};

export default WebDevelopmentPage;
