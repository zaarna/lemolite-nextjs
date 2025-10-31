import Our_Expertise_ui_ux from "@/components/Our_Expertise_ui_ux";
import Ctasection from "@/components/ReusableComponent/Cta_Section/CtaSection";
import Devlopmentprocess from "@/components/ReusableComponent/DevelopmentProcess/Devlopmentprocess";
import FAQ from "@/components/ReusableComponent/HireDevelopers/FAQ";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import { uiux } from "@/data/breadcrumsdata";
import { uiuxfaqData, uiuxprocessSteps } from "@/data/services";

const ECommercePage = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          E-Commerce Development
        </h1>
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">
            Online stores and e-commerce solutions
          </p>
          <p className="text-gray-500">
            This is a placeholder for your E_commerce component.
            <br />
            Migrate your E_commerce component from React.js to replace this.
          </p>
        </div>
      </div>
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
      <Our_Expertise_ui_ux />
      <Devlopmentprocess
        title={"Our Design Process"}
        processSteps={uiuxprocessSteps}
      />
      <Ctasection
        title={"Ready to Elevate Your Design?"}
        text={"Let's Create Together"}
        link={"/contact-us"}
        image="/ctagreadiant.webp"
        bg="bg-[#F1F1F1]"
      />
      <FAQ questions={uiuxfaqData} />
    </div>
  );
};

export default ECommercePage;
