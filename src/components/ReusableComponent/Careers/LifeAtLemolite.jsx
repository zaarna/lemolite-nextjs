import { imageUrls } from "@/data/imagesdata";
import Grediantbutton from "../Button/Grediantbutton";
import Gallery from "../Life/Gallery";
import Titlecontent from "../Titlecontent/Titlecontent";

function LifeatLemolite() {
  return (
    <section className="life_lemolite top-bottom bg--gray">
      <div className="container">
        <div className="title--head sm:pb-6 xsm:pb-5 text-center">
          <Titlecontent title="Life@Lemolite" />
        </div>
        <div className="mx-auto">
          <Gallery images={imageUrls} />
          <div className="text-center mt-8 ">
            <Grediantbutton btntext="Know More" link={"/life-at-lemolite"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LifeatLemolite;
