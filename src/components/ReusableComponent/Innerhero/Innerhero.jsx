
"use client";
import Titlecontent from "../Titlecontent/Titlecontent";
import Grediantbutton from "../Button/Grediantbutton";
import Imagesection from "@/components/Imagesection";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { usePathname } from "next/navigation";
import PartnerPopup from "../PartnerPopup/PartnerPopup";
import ScrollReveal from "../Animations/ScrollReveal";

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
  const location = usePathname();

  return (
    <section className={`${padding}`}>
      <div className="container">
        <div className="flex flex-col-reverse items-center text-left lg:flex-row">

          {/* LEFT: TEXT */}
          
            <div className="w-full lg:w-1/2">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="hidden lg:block">
                <Breadcrumb breadcrumbs={breadcrumbs} />
              </div>

              <div className="inner-banner-title pb-5 md:pb-7 lg:pb-10">
                <Titlecontent titleTag="h1" title={title} content={content} />
              </div>

              {!btnHide && (
                <div className="btn--inner">
                  {location === "/about-us" ? (
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
              </ScrollReveal>
            </div>
          

          {/* RIGHT: IMAGE */}
          
            <div className="banner--iamge w-full lg:w-1/2 flex flex-col justify-end">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="block lg:hidden">
                <Breadcrumb breadcrumbs={breadcrumbs} />
              </div>
              <Imagesection src={src} alt={alt} />
               </ScrollReveal>
            </div>
         

        </div>
      </div>
    </section>
  );
}

export default Innerhero;
