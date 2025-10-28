import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import HireOurTeam from "@/components/ReusableComponent/HireDevelopers/HireOurTeam";
import Hireproccess from "@/components/ReusableComponent/HireDevelopers/Hireprocess";
import Key_benifit from "@/components/ReusableComponent/HireDevelopers/key_benifit";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import { shopify } from "@/data/breadcrumsdata";
import { hirefaqshopify } from "@/data/faqhire";
import { hireprocessshopify } from "@/data/hireprocess";
import { hireourteamshopify } from "@/data/hiringDevelopers";
import { shopifybenefit } from "@/data/keybenifit";
import { whyhireshopify } from "@/data/whyhiredev";

const HireShopifyDeveloperPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={shopify}
        title={"Hire Shopify Developers"}
        content={
          "Elevate your eCommerce business by hiring dedicated Shopify developers. Their expertise allows you to focus on growth and strategy while they handle the technical aspects of your online store, ensuring it operates smoothly and efficiently to meet your business goals."
        }
        btntext={"Get Started Today"}
        link={"/contact-us"}
        src={"/shopify.webp"}
        alt={"Hire Shopify Developers"}
      />
      <HireOurTeam hireourteam={hireourteamshopify} />
      <Hireproccess
        title={"How We Connect You with Top Shopify Developers"}
        steps={hireprocessshopify}
      />
      <WhyHireSection
        title={"Why Hire Shopify Developers From Lemolite?"}
        content={
          "We provide access to a global network of elite Shopify experts, carefully vetted for technical expertise, experience, and cultural fit. Whether you are looking to hire Shopify programmers for back-end development or a custom Shopify developer for tailored store solutions, our professionals integrate effortlessly into your team. We handle recruitment, onboarding, and management, ensuring seamless scalability without hiring complexities. Our flexible engagement models offer cost-effective solutions, allowing you to focus on accelerating business growth and innovation."
        }
        btntext={"Hire Shopify Developers "}
        link={"/contact-us"}
        features={whyhireshopify}
      />
      <Ctasection
        bg="bg-gradient-to-r from-primary/30 to-secondry/30"
        image={"/ctawhite.webp"}
        title={"Ready to Hire Dedicated Shopify Developers?"}
        text={"Start Your Project Today!"}
        link={"/contact-us"}
      />
      <Key_benifit
        title="Key Benefits of Shopify Developers"
        benefits={shopifybenefit}
      />
      <Ctasection
        bg="bg-gradient-to-r from-primary/30 to-secondry/30"
        image={"/hirecta.webp"}
        title={"Take Your Project to the Next Level!"}
        text={"Start Now"}
        link={"/contact-us"}
      />
      <FAQ questions={hirefaqshopify} />
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

export default HireShopifyDeveloperPage;
