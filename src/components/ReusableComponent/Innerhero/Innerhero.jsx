"use client";
import Titlecontent from "../Titlecontent/Titlecontent";
import Grediantbutton from "../Button/Grediantbutton";
import Imagesection from "@/components/Imagesection";
// import "../../ReusableComponent/Innerhero/Innerhero.css";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

import { usePathname } from "next/navigation";
import PartnerPopup from "../PartnerPopup/PartnerPopup";

function Innerhero({
  breadcrumbs,
  title,
  content,
  btntext,
  link,
  src,
  alt,
  padding = "top-bottom",
  btnHide,
  clickit,
  targetBlank,
}) {
  const location = usePathname(); // Get current page path
  return (
    <section className={`${padding} `}>
      <div className="container">
        <div className="flex flex-col-reverse items-center text-left lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="hidden lg:block">
              <Breadcrumb breadcrumbs={breadcrumbs} />
            </div>

            <div className="inner-banner-title pb-5 md:pb-7 lg:pb-10">
              <Titlecontent titleTag="h1" title={title} content={content} />
            </div>
            {!btnHide && (
              <div className="btn--inner">
                {location.pathname === "/about-us" ? (
                  <PartnerPopup />
                ) : (
                  <Grediantbutton
                    btntext={btntext}
                    link={link}
                    onClick={clickit}
                    targetBlank={targetBlank}
                  />
                )}
              </div>
            )}
          </div>
          <div className="banner--iamge w-full lg:w-1/2 flex flex-col justify-end">
            <div className="block lg:hidden">
              <Breadcrumb breadcrumbs={breadcrumbs} />
            </div>
            <Imagesection src={src} alt={alt} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Innerhero;
