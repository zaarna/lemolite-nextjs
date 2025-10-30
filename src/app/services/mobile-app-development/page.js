import Devlopmentprocess from "@/components/ReusableComponent/DevelopmentProcess/Devlopmentprocess";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import { mobile } from "@/data/breadcrumsdata";
import { mobileprocessSteps } from "@/data/services";

const MobileAppDevelopmentPage = () => {
  return (
    <div className="min-h-screen">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={mobile}
        title={" Mobile App Development Services  "}
        content={
          "Transform your business with innovative mobile solutions. As a top mobile app development company, we specialize in creating custom applications that drive growth and enhance customer experiences across iOS, Android, and cross-platform environments. "
        }
        btntext={"Launch Your App"}
        link={"/contact-us"}
        src={"/mobile.webp"}
        alt={"Mobile app development Services"}
      />
      <Devlopmentprocess
        title={"Our Development Process"}
        processSteps={mobileprocessSteps}
      />
    </div>
  );
};

export default MobileAppDevelopmentPage;
