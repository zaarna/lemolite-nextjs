import OurWork from "@/components/AboutUs/OurWork";
import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import Nextgencard from "@/components/ReusableComponent/TechStack/Nextgencard";
import WhyChooseLemolite from "@/components/ReusableComponent/TechStack/Why_choose_lemolite";
import TrustByClient_Stats from "@/components/ReusableComponent/TrustedByCliet_WhoWeAre/TrustedByClient_Stats";
import TrustedByCliet_WhoWeAre from "@/components/ReusableComponent/TrustedByCliet_WhoWeAre/TrustedByCliet_WhoWeAre";
import { techstack } from "@/data/breadcrumsdata";
import { techstackmainfaqData } from "@/data/faqhire";
import { logos, projects } from "@/data/home";
import { allStats } from "@/data/techstack";
import { pagesMeta } from "@/data/pagesMeta";


export const metadata = {
  title: pagesMeta.techstack.title,
  description: pagesMeta.techstack.description,
  keywords: pagesMeta.techstack.keywords,
  alternates: {
    canonical: pagesMeta.techstack.canonical,
  },
};

function TechStack() {
  return (
    <div>
      <Innerhero
        breadcrumbs={techstack}
        title={"Build Smarter with Future Tech"}
        content={
          "Selecting the right tech stack is crucial for the success of any software project. It impacts everything from performance and scalability to team productivity. Our full stack development company is here to guide you through every stage of the process, ensuring your project is built with the most suitable technologies."
        }
        btntext={"Get Expert Consultation"}
        link={"/contact-us"}
        src={"/techstackmain.webp"}
        alt={"Techstack solutions"}
      />
      <TrustByClient_Stats clientLogos={logos} stats={allStats} />
      <Nextgencard />
      <WhyChooseLemolite />
      <Ctasection
        bg="bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30"
        image={"/hirecta.webp"}
        title={"Transform Dreams into Reality Today!"}
        text={"Talk to Our Expert"}
        link={"/contact-us"}
      />
      <FAQ questions={techstackmainfaqData} padding="top-bottom" />
      <OurWork
        title={"Our Recent Work"}
        projects={projects}
        btntext={"View all work"}
        link={"/casestudy"}
      />
    </div>
  );
}

export default TechStack;
