import Innerhero from "@/components/ReusableComponent/Innerhero/Innerhero";
import React from "react";
import { python } from "@/data/breadcrumsdata";
import { hireourteamphython } from "@/data/hiringDevelopers";
import HireOurTeam from "@/components/ReusableComponent/HireDevelopers/HireOurTeam";

const HirePythonDeveloperPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Innerhero
        padding="py-8 md:py-10 lg:py-20"
        breadcrumbs={python}
        title={"Hire Python Developers"}
        content={
          "Unlock the potential of your projects with our best Python developers, skilled in frameworks such as Django, Flask, and FastAPI. They specialize in creating scalable web applications and innovative AI/ML solutions, ensuring you receive robust, data-driven results."
        }
        btntext={"Get Started Today"}
        link={"/contact-us"}
        src={"/python.webp"}
        alt={"Hire Python Developers"}
      />
      <HireOurTeam hireourteam={hireourteamphython} />
    </div>
  );
};

export default HirePythonDeveloperPage;
