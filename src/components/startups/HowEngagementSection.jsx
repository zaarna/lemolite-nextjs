import Titlecontent from "../ReusableComponent/Titlecontent/Titlecontent";
import HowEngagementcards from "./HowEngagementcards";

function HowEngagementSection() {
  return (
    <section className="top-bottom">
      <div className="container">
        <div className="text-center mx-auto max-w-4xl">
          <Titlecontent
            title={"How Our Engagement Works"}
            content={
              "A transparent, structured process designed for speed, collaboration, and measurable outcomes:"
            }
          />
          <HowEngagementcards />
        </div>
      </div>
    </section>
  );
}

export default HowEngagementSection;
