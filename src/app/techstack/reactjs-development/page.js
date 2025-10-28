import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import Librariescomponent from "@/components/ReusableComponent/TechStack/LibrariesComponent";
import { reacttech } from "@/data/breadcrumsdata";
import { angularlibraries, allStats } from "../../../Datafolder/librariesdata";
import React from "react";

const ReactJSDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={reacttech}
        title={"React JS Development Company"}
        content={
          "Build interactive applications such as  SPAs, PWAs, dynamic websites, and social media platforms using the React.JS library, ensuring smooth performance and a seamless user experience."
        }
        btntext={"Talk to a React.JS Expert"}
        link={"/contact-us"}
        src={"/reactech.webp"}
        alt={"React JS Development Company"}
      />
      <Librariescomponent
        libraries={angularlibraries}
        title="Top Angular Libraries"
        stats={allStats}
      />
    </div>
  );
};

export default ReactJSDevelopmentPage;
