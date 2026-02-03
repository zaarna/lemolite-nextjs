import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";

import EquityModelSection from "@/components/Startup/EquityModelSection";
import InnerBanner from "@/components/Startup/InnerBanner";
import ProblemSolutionSection from "@/components/Startup/ProblemSolutionSection";
import React from "react";
import { pagesMeta } from "@/data/pagesMeta";
import HowEngagementSection from "@/components/startups/HowEngagementSection";
import AgenciesWhySection from "@/components/startups/AgenciesWhySection";
import StartupEcosystemSection from "@/components/startups/StartupEcosystemSection";

// export const metadata = {
//   title: pagesMeta["ai-ml-development"].title,
//   description: pagesMeta["ai-ml-development"].description,
//   keywords: pagesMeta["ai-ml-development"].keywords,
//   alternates: {
//     canonical: pagesMeta["ai-ml-development"].canonical,
//   },
// };

const startupsPage = () => {
  return (
    <div className="min-h-screen">
      <InnerBanner />
      <ProblemSolutionSection />
      <EquityModelSection />
      <StartupEcosystemSection />
      <AgenciesWhySection />
      <HowEngagementSection />
      <Ctasection
        title={"Struggling to Launch Your MVP Fast?"}
        content={
          "Partner with a team that is invested in your success, providing hands-on support and fast MVP delivery, limited to just three startups per quarter."
        }
        text={"Apply for Your Free Consultation"}
        link={"/contact-us"}
        image="/ctagreadiant.webp"
        bg="bg-[#F1F1F1]"
      />
    </div>
  );
};

export default startupsPage;
