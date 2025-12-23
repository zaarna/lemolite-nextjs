import E_Commerce_Success from "@/components/E_Commerce_Success";
import E_empower from "@/components/E_empower";
import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import Experties from "@/components/ReusableComponent/ExpertiseSection/Experties";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import Why_choose_us from "@/components/ReusableComponent/WhyChooseUs/WhyChooseUs";
import { commarce } from "@/data/breadcrumsdata";
import { ecommerceexpert } from "@/data/expertise";
import {
  commerceexpert,
  ecommercefaqData,
  InnovativeTechnologies,
  servicesempower,
} from "@/data/services";
import { pagesMeta } from "@/data/pagesMeta";


export const metadata = {
  title: pagesMeta["e-commerce"].title,
  description: pagesMeta["e-commerce"].description,
  keywords: pagesMeta["e-commerce"].keywords,
  alternates: {
    canonical: pagesMeta["e-commerce"].canonical,
  },
};

const ECommercePage = () => {
  return (
    <div className="min-h-screen">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={commarce}
        title={"E-Commerce Services"}
        content={
          "Build a smooth, fast, and secure online store with the right features for your business. Whether you're just starting or looking to grow, we focus on making your e-commerce platform easy to use, efficient, and ready for success. Let’s make shopping simpler for your customers."
        }
        btntext={"Sell Smarter Today!"}
        link={"/contact-us"}
        src={"/ecom.webp"}
        alt={"E-commerce Services"}
      />
      <WhyHireSection
        title={"Our Expertise"}
        content={
          "Our e-commerce development services are designed to do more than just power online sales. We help businesses create impactful digital storefronts, improve customer engagement, and streamline operations, ensuring a strong foundation for long-term growth and success."
        }
        btntext={"Launch Your Digital Store"}
        link={"/contact-us"}
        features={commerceexpert}
        layoutType=""
        bg="bg-[#F1F1F1]"
      />
      <E_Commerce_Success />
      <Ctasection
        title={"Don’t Just Sell Online"}
        text={"Excel Online!"}
        link={"/contact-us"}
        image="/ctagreadiant.webp"
        bg="bg-[#F1F1F1]"
      />
      <E_empower servicesempower={servicesempower} />
      <Experties
        bg="bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30"
        maintitle="3 Reasons Why We’re the Right Choice for You"
        contentData={ecommerceexpert}
      />
      <Why_choose_us
        title={"Transform Your Store with Innovative Technologies"}
        data={InnovativeTechnologies}
      />
      <FAQ
        questions={ecommercefaqData}
        padding="top-bottom"
        bg="bg-[#F1F1F1]"
      />
    </div>
  );
};

export default ECommercePage;
