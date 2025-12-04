import React from "react";
// import errorimg from "../../assets/errorimg.webp";
import Grediantbutton from "@/components/ReusableComponent/Button/Grediantbutton";

function Notfound() {
  return (
    <section className="bg-gradient-to-r from-primary/50 to-secondry/50 h-lvh">
      <div className="container top-bottom">
        <div className="max-w-[200px] sm:max-w-[420px] m-auto">
          <div className="">
            <figure>
              <img src="/errorimg.webp" alt="404-error" />
            </figure>
          </div>
          <div className="text-center pt-10">
            <Grediantbutton btntext={"Back to Home"} link={"/"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Notfound;
