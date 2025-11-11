import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import HireOurTeam from "@/components/ReusableComponent/HireDevelopers/HireOurTeam";
import Hireproccess from "@/components/ReusableComponent/HireDevelopers/Hireprocess";
import Key_benifit from "@/components/ReusableComponent/HireDevelopers/key_benifit";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import { node } from "@/data/breadcrumsdata";
import { hirefaqnodejs } from "@/data/faqhire";
import { hireprocessnodejs } from "@/data/hireprocess";
import { hireourteamnode } from "@/data/hiringDevelopers";
import { nodebenefit } from "@/data/keybenifit";
import { whyhirenodejs } from "@/data/whyhiredev";
import { pagesMeta } from "@/data/pagesMeta";


export const metadata = {
  title: pagesMeta["hire-nodejs-developer"].title,
  description: pagesMeta["hire-nodejs-developer"].description,
  keywords: pagesMeta["hire-nodejs-developer"].keywords,
  alternates: {
    canonical: pagesMeta["hire-nodejs-developer"].canonical,
  },
};

const HireNodJsDeveloperPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={node}
        title={"Hire Node Js Developers"}
        content={
          "Node JS developers are skilled in using the Node JS framework to develop a variety of web applications. They bring expertise and experience to ensure the successful delivery of your project, meeting your specific technical and business requirements."
        }
        btntext={"Get Started Today"}
        link={"/contact-us"}
        src={"/node.webp"}
        alt={"Hire Node Js Developers"}
      />
      <HireOurTeam hireourteam={hireourteamnode} />
      <Hireproccess
        title={"How We Connect You with the Node JS Development Team"}
        steps={hireprocessnodejs}
      />
      <WhyHireSection
        title={"Why Hire Node JS Developers From Lemolite?"}
        content={
          "Gain instant access to a global talent pool of elite developers, meticulously vetted for technical skills, experience, and adaptability. Whether your project requires full-stack, front-end, or back-end specialists, our experts integrate smoothly into your team. As a trusted Node JS development company, we handle hiring, onboarding, and management, eliminating recruitment burdens. Our flexible engagement models offer Node JS development services that are scalable and cost-effective, allowing you to focus on business growth and innovation."
        }
        btntext={"Hire Node JS Developers"}
        link={"/contact-us"}
        features={whyhirenodejs}
        bg="bg-[#F1F1F1]"
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30"
        image={"/ctawhite.webp"}
        title={"Ready To Node JS development team?"}
        text={"Start Your Project Today!"}
        link={"/contact-us"}
      />

      <Key_benifit
        title="Key Benefits Of Node Developers"
        benefits={nodebenefit}
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30"
        image={"/hirecta.webp"}
        title={"Take Your Project to the Next Level!"}
        text={"Start Now"}
        link={"/contact-us"}
      />
      <FAQ questions={hirefaqnodejs} />
    </div>
  );
};

export default HireNodJsDeveloperPage;
