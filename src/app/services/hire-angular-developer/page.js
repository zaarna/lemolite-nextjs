import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import HireOurTeam from "@/components/ReusableComponent/HireDevelopers/HireOurTeam";
import Hireproccess from "@/components/ReusableComponent/HireDevelopers/Hireprocess";
import Key_benifit from "@/components/ReusableComponent/HireDevelopers/key_benifit";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import { angular } from "@/data/breadcrumsdata";
import { hirefaqangular } from "@/data/faqhire";
import { hireprocessangular } from "@/data/hireprocess";
import { hireourteamangular } from "@/data/hiringDevelopers";
import { angularbenefit } from "@/data/keybenifit";
import { whyhireangular } from "@/data/whyhiredev";

const HireAngularDeveloperPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={angular}
        title={"Hire Angular Developers"}
        content={
          "Angular developers specialize in crafting modern web applications using the Angular framework. Whether it's front-end development or ensuring smooth functionality, our dedicated AngularJS developers bring expertise and experience to meet your project requirements with precision and quality."
        }
        btntext={"Get Started Today"}
        link={"/contact-us"}
        src={"/angular.webp"}
        alt={"Hire Angular Developers"}
      />
      <HireOurTeam hireourteam={hireourteamangular} />
      <Hireproccess
        title={"How We Connect You with Top Angular Developers"}
        steps={hireprocessangular}
      />
      <WhyHireSection
        title={"Why Hire Angular Developers From Lemolite?"}
        content={
          "We offer a carefully curated network of top-tier developers, thoroughly screened for their expertise, experience, and seamless team integration. Whether you need full-stack, front-end, or back-end talent, our developers blend effortlessly into your workflow. We handle hiring, onboarding, and management, streamlining team expansion without full-time hiring burdens. Our tailored engagement models provide cost-effective solutions, so you can prioritize growth, innovation, and business efficiency."
        }
        btntext={"Hire Angular Developers"}
        link={"/contact-us"}
        features={whyhireangular}
      />
      <Ctasection
        bg="bg-gradient-to-r from-primary/30 to-secondry/30"
        image={"/ctawhite.webp"}
        title={"Ready to Hire Angular Development Team?"}
        text={"Start Your Project Today!"}
        link={"/contact-us"}
      />
      <Key_benifit
        title="Key Benefits Of Angular Developers"
        benefits={angularbenefit}
      />
      <Ctasection
        bg="bg-gradient-to-r from-primary/30 to-secondry/30"
        image={"/hirecta.webp"}
        title={"Take Your Project to the Next Level!"}
        text={"Start Now"}
        link={"/contact-us"}
      />
      <FAQ questions={hirefaqangular} />
      {/* <Testimonial
        title="Hear from Our Happy Clients"
        testimonials={testimonials}
      /> */}
      {/* <Contectinfo
        maintitle={"Let’s Transform Your Vision into Reality"}
        subtitle={"Get in Touch!"}
        content={
          "Working on something big? Let’s chat! We’re excited to hear about your project and see how we can help."
        }
        addresses={addresses}
      /> */}
    </div>
  );
};

export default HireAngularDeveloperPage;
