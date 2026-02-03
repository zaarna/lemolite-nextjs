import Titlecontent from "../ReusableComponent/Titlecontent/Titlecontent";
import AgenciesWhytable from "./AgenciesWhytable";

function AgenciesWhySection() {
  return (
    <section className="bg-[#F1F1F1] top-bottom">
      <div className="container">
        <div className="text-center ">
          <Titlecontent
            title={" Why Founders Choose Lemolite Over Traditional Agencies"}
          />
        </div>
        <AgenciesWhytable />
      </div>
    </section>
  );
}

export default AgenciesWhySection;
