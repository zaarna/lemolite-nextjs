import Breadcrumb from "./Breadcrumb/Breadcrumb";
import Grediantbutton from "./Button/Grediantbutton";
import FunFactTecjstack from "./TechStack/FunFactTecjStack";
import Titlecontent from "./Titlecontent/Titlecontent";

function CareerBanner({ breddata, title, btntext, stats, onclick }) {
  return (
    <section className="top-bottom">
      <div className="container">
        <Breadcrumb breadcrumbs={breddata} />
        <div className="flex flex-col text-center items-center lg:text-left lg:flex-row">
          <div className="basis-1/2 content-center">
            <div className="inner-banner-title pb-5 md:pb-7 lg:pb-10">
              <div className="all-title-content text-black">
                <Titlecontent title={title} />
              </div>
            </div>
            <div className="btn--inner">
              <Grediantbutton btntext={btntext} onClick={onclick} />
            </div>
          </div>
          <div className="banner--iamge ">
            <FunFactTecjstack stats={stats} width={"md:w-1/2"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerBanner;
