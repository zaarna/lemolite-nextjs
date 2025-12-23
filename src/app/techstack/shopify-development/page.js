import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import InnerSlider from "@/components/ReusableComponent/Slider/InnerSlider";
import Better_option_section from "@/components/ReusableComponent/TechStack/Better_option_section";
import Librariescomponent from "@/components/ReusableComponent/TechStack/LibrariesComponent";
import { shopifytech } from "@/data/breadcrumsdata";
import {
  allStats,
  shopifydata,
  shopifyfeatures,
  shopifykeydata,
  shopifylibraries,
} from "@/data/techstack";
import { pagesMeta } from "@/data/pagesMeta";


export const metadata = {
  title: pagesMeta["shopify-development"].title,
  description: pagesMeta["shopify-development"].description,
  keywords: pagesMeta["shopify-development"].keywords,
  alternates: {
    canonical: pagesMeta["shopify-development"].canonical,
  },
};

const ShopifyDevelopmentPage = () => {
  return (
    <div className="min-h-screen ">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={shopifytech}
        title={"Shopify Development Company"}
        content={
          "Transform your e-commerce business with custom Shopify development. Our expert team offers scalable, tailored solutions to create a seamless online store that drives growth and success."
        }
        btntext={"Talk To A Shopify Expert"}
        link={"/contact-us"}
        src={"/techstackshopify.webp"}
        alt={"Shopify Development Company"}
      />
      <Librariescomponent
        libraries={shopifylibraries}
        title="Top Shopify Libraries"
        stats={allStats}
      />
      <WhyHireSection
        title="Transform Your E-Commerce with Powerful Features"
        content="Unlock the full potential of your Shopify store with powerful features designed for growth. From seamless integrations to advanced customization options, our expert team ensures you maximize every tool Shopify offers to boost your business success and drive results."
        btntext="Hire A Shopify Expert"
        link={"/services/hire-shopify-developer"}
        features={shopifyfeatures}
      />
      <Better_option_section
        title="Key Benefits of Shopify for Your E-Commerce Success"
        content="Shopify provides a reliable and user-friendly platform to build and manage your online store. With easy setup, secure payment options, and excellent support, it helps streamline your e-commerce journey, making it easier to grow and succeed in the digital marketplace."
        data={shopifykeydata}
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30"
        image={"/hirecta.webp"}
        title={"Ready to Hire Shopify Developers?"}
        text={"Find Your Developer"}
        link={"/contact-us"}
      />
      <InnerSlider
        data={shopifydata}
        title="Why Choose Lemolite for Your Shopify Development Services?"
      />
    </div>
  );
};

export default ShopifyDevelopmentPage;
