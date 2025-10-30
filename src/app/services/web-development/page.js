import Devlopmentprocess from "@/components/ReusableComponent/DevelopmentProcess/Devlopmentprocess";
import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import { web } from "@/data/breadcrumsdata";
import { webprocessSteps } from "@/data/services";
const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={web}
        title={" Web Development Services"}
        content={
          "At Lemolite, we create dynamic and engaging websites tailored to your business objectives. Whether you are looking to enhance your digital presence or launch a full-scale web application, our web app development services focus on functionality, performance, and user experience."
        }
        btntext={" Code Your Dreams!"}
        link={"/contact-us"}
        src={"/webservices.webp"}
        alt={"Web Development Services"}
      />
      <Devlopmentprocess
        title={"Our Development Process"}
        processSteps={webprocessSteps}
      />
    </div>
  );
};

export default WebDevelopmentPage;
