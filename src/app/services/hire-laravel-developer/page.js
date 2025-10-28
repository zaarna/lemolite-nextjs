import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import HireOurTeam from "@/components/ReusableComponent/HireDevelopers/HireOurTeam";
import Hireproccess from "@/components/ReusableComponent/HireDevelopers/Hireprocess";
import Key_benifit from "@/components/ReusableComponent/HireDevelopers/key_benifit";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import { laravel } from "@/data/breadcrumsdata";
import { hirefaqlaravel } from "@/data/faqhire";
import { hireprocesslaravel } from "@/data/hireprocess";
import { hireourteamlaravel } from "@/data/hiringDevelopers";
import { laravelbenefit } from "@/data/keybenifit";
import { whyhirelaravel } from "@/data/whyhiredev";

const HireLaravelDeveloperPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={laravel}
        title={"Hire Laravel Developers"}
        content={
          "Hiring dedicated Laravel developers can significantly enhance your web development projects. Their expertise enables the creation of robust and efficient applications tailored to diverse business needs, ensuring timely and effective delivery."
        }
        btntext={"Get Started Today"}
        link={"/contact-us"}
        src={"/laravel.webp"}
        alt={"Hire Laravel Developers"}
      />
      <HireOurTeam hireourteam={hireourteamlaravel} />
      <Hireproccess
        title={"How We Connect You with the Best Laravel Developers"}
        steps={hireprocesslaravel}
      />
      <WhyHireSection
        title={"Why Hire Laravel Developers From Lemolite?"}
        content={
          "Gain access to a world-class network of rigorously screened Laravel developers with expertise in front-end, back-end, and full-stack development. Whether you need a dedicated Laravel developer for a specific project or an entire team for long-term collaboration, our professionals integrate seamlessly into your workflow. We manage recruitment, onboarding, and oversight, allowing you to scale effortlessly without the burdens of full-time hiring. Our engagement models provide flexibility and cost savings, ensuring you can focus on innovation and business growth."
        }
        btntext={"Hire Laravel Developers"}
        link={"/contact-us"}
        features={whyhirelaravel}
      />
      <Ctasection
        bg="bg-gradient-to-r from-primary/30 to-secondry/30"
        image={"/ctawhite.webp"}
        title={"Ready To Hire certified Laravel developers?"}
        text={"Start Your Project Today!"}
        link={"/contact-us"}
      />
      <Key_benifit
        title="Key Benefits Of Laravel Developers"
        benefits={laravelbenefit}
      />
      <Ctasection
        bg="bg-gradient-to-r from-primary/30 to-secondry/30"
        image={"/hirecta.webp"}
        title={"Take Your Project to the Next Level!"}
        text={"Start Now"}
        link={"/contact-us"}
      />
      <FAQ questions={hirefaqlaravel} />
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

export default HireLaravelDeveloperPage;
