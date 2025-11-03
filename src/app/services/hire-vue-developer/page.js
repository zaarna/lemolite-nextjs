import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import HireOurTeam from "@/components/ReusableComponent/HireDevelopers/HireOurTeam";
import Hireproccess from "@/components/ReusableComponent/HireDevelopers/Hireprocess";
import Key_benifit from "@/components/ReusableComponent/HireDevelopers/key_benifit";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import { vue } from "@/data/breadcrumsdata";
import { hirefaqvuejs } from "@/data/faqhire";
import { hireprocessvuejs } from "@/data/hireprocess";
import { hireourteamvue } from "@/data/hiringDevelopers";
import { vuebenefit } from "@/data/keybenifit";
import { whyhirevuejs } from "@/data/whyhiredev";

const HireVueDeveloperPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={vue}
        title={"Hire Vue JS Developers"}
        content={
          "Hire dedicated Vue.JS developers to manage everything from building dynamic user interfaces to seamless integration with existing systems. With expertise in creating scalable and user-friendly applications, they deliver high-quality solutions tailored to your business needs."
        }
        btntext={"Get Started Today"}
        link={"/contact-us"}
        src={"/vue-services.webp"}
        alt={"Hire Vue JS Developers"}
      />
      <HireOurTeam hireourteam={hireourteamvue} />
      <Hireproccess
        title={"How We Connect You with Top Vue JS Developers"}
        steps={hireprocessvuejs}
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30"
        image={"/ctawhite.webp"}
        title={"Ready To Hire Dedicated Vue JS Developers?"}
        text={"Start Your Project Today!"}
        link={"/contact-us"}
      />
      <WhyHireSection
        title={"Why Hire Vue JS Developers From Lemolite?"}
        content={
          "We provide direct access to an exclusive global network of elite developers, carefully evaluated for their skills, experience, and adaptability. Whether your project requires full-stack, front-end, or back-end specialists, our developers integrate smoothly into your workflow. We take care of recruitment, onboarding, and management, ensuring you can scale efficiently. Our flexible engagement models provide cost-effective solutions, allowing you to prioritize business expansion and innovation."
        }
        btntext={"Hire Vue JS Developers"}
        link={"/contact-us"}
        features={whyhirevuejs}
      />

      <Key_benifit
        title={"Key Benefits of Vue JS Developers"}
        benefits={vuebenefit}
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30"
        image={"/hirecta.webp"}
        title={"Take Your Project to the Next Level!"}
        text={"Start Now"}
        link={"/contact-us"}
      />
      <FAQ questions={hirefaqvuejs} />
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

export default HireVueDeveloperPage;
