import Devlopmentprocess from "@/components/ReusableComponent/DevelopmentProcess/Devlopmentprocess";
import ExpertiseSection from "@/components/ReusableComponent/ExpertiseSection/ExpertiseSection";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import { uiux } from "@/data/breadcrumsdata";
import { uiuxprocessSteps } from "@/data/services";

const UIUXDesignPage = () => {
  return (
    <div className="min-h-screen">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={uiux}
        title={" UI/UX Design Services"}
        content={
          "Experience design that speaks to your audience. Our UI/UX design services combine deep user insights with sleek, purposeful design, crafting interfaces that not only look stunning but feel effortless to navigate."
        }
        btntext={"Boost Your Brand"}
        link={"/contact-us"}
        src={"/ui.webp"}
        alt={"UI/UX Design Services"}
      />
      <ExpertiseSection />
      <Devlopmentprocess
        title={"Our Design Process"}
        processSteps={uiuxprocessSteps}
      />
    </div>
  );
};

export default UIUXDesignPage;
