import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import HireOurTeam from "@/components/ReusableComponent/HireDevelopers/HireOurTeam";
import Hireproccess from "@/components/ReusableComponent/HireDevelopers/Hireprocess";
import Key_benifit from "@/components/ReusableComponent/HireDevelopers/key_benifit";
import WhyHireSection from "@/components/ReusableComponent/HireDevelopers/WhyHireSections";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import { flutter } from "@/data/breadcrumsdata";
import { hirefaqflutter } from "@/data/faqhire";
import { hireprocessflutter } from "@/data/hireprocess";
import { hireourteamflutter } from "@/data/hiringDevelopers";
import { flutterbenefit } from "@/data/keybenifit";
import { whyhireflutter } from "@/data/whyhiredev";
import { pagesMeta } from "@/data/pagesMeta";


export const metadata = {
  title: pagesMeta["hire-flutter-developer"].title,
  description: pagesMeta["hire-flutter-developer"].description,
  keywords: pagesMeta["hire-flutter-developer"].keywords,
  alternates: {
    canonical: pagesMeta["hire-flutter-developer"].canonical,
  },
};

const HireAngularDeveloperPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={flutter}
        title={"Hire Flutter Developers"}
        content={
          "Work with our dedicated flutter app developers to create stable cross-platform apps. At Lemolite our Flutter experts provide high-performance and seamlessly designed applications. Whether you need to hire Flutter developers or want Dedicated Flutter App Developers for Hire and looking for the Best Flutter Developers for Hire. We make it easy and fool proof."
        }
        btntext={"Get Started Today"}
        link={"/contact-us"}
        src={"/flutterheroimage.webp"}
        alt={"Hire Flutter Developers"}
      />
      <HireOurTeam hireourteam={hireourteamflutter} />
      <Hireproccess
        title={"How We Connect You with the Best Flutter Developers"}
        steps={hireprocessflutter}
      />
      <WhyHireSection
        title={"Why Hire Flutter Developers from Lemolite?"}
        content={
          "High-quality Flutter experts can be hard to find. Lemolite advances the way by allowing you a pool of dedicated Flutter app developers that has been tested for capacity, reliability and adaptability. We easily adapt to your work process and produce results at scale even if you are looking to hire Flutter developers for web app, mobile app or MVP."
        }
        btntext={"Hire Flutter Developers"}
        link={"/contact-us"}
        features={whyhireflutter}
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30"
        image={"/ctawhite.webp"}
        title={"Ready to Hire Dedicated Flutter Developers?"}
        text={"Start Your Project Now"}
        link={"/contact-us"}
      />
      <Key_benifit
        title="Key Benefits of Hiring Flutter Developers"
        benefits={flutterbenefit}
      />
      <Ctasection
        bg="bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30"
        image={"/hirecta.webp"}
        title={"Take Your Mobile App to the Next Level!"}
        text={"Start Now"}
        link={"/contact-us"}
      />
      <FAQ questions={hirefaqflutter} />
    </div>
  );
};

export default HireAngularDeveloperPage;
