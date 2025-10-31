import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import Devlopmentprocess from "@/components/ReusableComponent/DevelopmentProcess/Devlopmentprocess";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import TechnologyWeUse from "@/components/ReusableComponent/TechnologyWeUse/TechnologyWeUse";
import { web } from "@/data/breadcrumsdata";
import { webdevlopmentfaqData, webexpert, webprocessSteps } from "@/data/services";
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
      <Devlopmentprocess
        title={"Our Development Process"}
        processSteps={webprocessSteps}
      />
      <Ctasection
              title={"Ready to build your next web project?"}
              text={"Contact us today"}
              link={"/contact-us"}
              image="/ctagreadiant.webp"
              bg="bg-[#F1F1F1]"
            />
      <FAQ questions={webdevlopmentfaqData} padding="top-bottom" /> 
      <TechnologyWeUse />
    </div>
  );
};

export default WebDevelopmentPage;
