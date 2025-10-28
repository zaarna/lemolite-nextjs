import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import HireOurTeam from "@/components/ReusableComponent/HireDevelopers/HireOurTeam";
import Hireproccess from "@/components/ReusableComponent/HireDevelopers/Hireprocess";
import Key_benifit from "@/components/ReusableComponent/HireDevelopers/key_benifit";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import { php } from "@/data/breadcrumsdata";
import { hirefaqphp } from "@/data/faqhire";
import { hireprocessphp } from "@/data/hireprocess";
import { hireourteamphp } from "@/data/hiringDevelopers";
import { phpbenefit } from "@/data/keybenifit";
import { whyhirephp } from "@/data/whyhiredev";

const HirePhpDeveloperPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={php}
        title={"Hire PHP  Developers"}
        content={
          "Accessing skilled PHP developers enables the creation of dynamic web applications tailored to your unique business needs. Their expertise ensures timely project delivery and fosters innovation, helping your organization stay competitive and responsive in a fast-paced digital landscape."
        }
        btntext={"Get Started Today"}
        link={"/contact-us"}
        src={"/php.webp"}
        alt={"Hire PHP Developers"}
      />
      <HireOurTeam hireourteam={hireourteamphp} />
      <Hireproccess
        title={"How We Connect You with Top PHP Developers"}
        steps={hireprocessphp}
      />
      <WhyHireSection
        title={"Why Hire PHP Developers From Lemolite?"}
        content={
          "As a leading PHP development company, we connect you with top PHP developers for hire from a global network, meticulously vetted for technical expertise, experience, and cultural compatibility. Whether you need front-end, back-end, or full-stack specialists, our experts integrate seamlessly into your team. As a leading PHP development company, we handle recruitment, onboarding, and management, ensuring smooth scalability without full-time hiring complexities. Our tailored engagement models offer cost-effective flexibility, allowing you to focus on business growth and innovation."
        }
        btntext={"Hire PHP Developers ("}
        link={"/contact-us"}
        features={whyhirephp}
      />
      <Ctasection
        bg="bg-gradient-to-r from-primary/30 to-secondry/30"
        image={"/ctawhite.webp"}
        title={"Ready To Hire Skilled PHP Developers?"}
        text={"Start Your Project Today!"}
        link={"/contact-us"}
      />
      <Key_benifit
        title={"Key Benefits Of Php Developers"}
        benefits={phpbenefit}
      />
      <Ctasection
        bg="bg-gradient-to-r from-primary/30 to-secondry/30"
        image={"/hirecta.webp"}
        title={"Take Your Project to the Next Level!"}
        text={"Start Now"}
        link={"/contact-us"}
      />
      <FAQ questions={hirefaqphp} />
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

export default HirePhpDeveloperPage;
