import Titlecontent from "../ReusableComponent/Titlecontent/Titlecontent";
import EcosystemAccordian from "./EcosystemAccordian";

function StartupEcosystemSection() {
  return (
    <section className="top-bottom">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="text-left lg:w-5/12">
            <Titlecontent
              title={"The 360° Startup Ecosystem"}
              content={
                "Our equity-led model is powered by a full-stack startup ecosystem designed to reduce execution risk and accelerate time to market."
              }
            />
          </div>
          <div className="lg:w-7/12">
            <EcosystemAccordian />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartupEcosystemSection;
