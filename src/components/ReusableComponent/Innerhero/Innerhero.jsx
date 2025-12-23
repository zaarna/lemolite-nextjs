"use client";
import Titlecontent from "../Titlecontent/Titlecontent";
import Grediantbutton from "../Button/Grediantbutton";
import Imagesection from "@/components/Imagesection";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { usePathname } from "next/navigation";
import PartnerPopup from "../PartnerPopup/PartnerPopup";
import ScrollReveal from "../Animations/ScrollReveal";
import Feature_Fact from "../Feture_Fact/Feature_Fact";

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
  features,
}) {
  const location = usePathname();

  // ✅ Dynamic layout classes
  const layoutClass =
    location === "/contact-us"
      ? "flex flex-col items-center text-left lg:flex-row"
      : "flex flex-col-reverse items-center text-left lg:flex-row";

  return (
    <section className={`${padding}`}>
      <div className="container">
        {/* ✅ Breadcrumb at top only for contact page */}
        {location === "/contact-us" && (
          <div className="mb-6">
            <Breadcrumb breadcrumbs={breadcrumbs} />
          </div>
        )}

        <div className={layoutClass}>
          {/* LEFT: TEXT */}
          <div className="w-full lg:w-1/2">
            <ScrollReveal direction="right" delay={0.1}>
              {/* Breadcrumb for all other pages (hidden on contact) */}
              {location !== "/contact-us" && (
                <div className="hidden lg:block">
                  <Breadcrumb breadcrumbs={breadcrumbs} />
                </div>
              )}

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

          {/* ✅ RIGHT: IMAGE or TEXT based on URL */}
          <div className="banner--image w-full lg:w-1/2 flex flex-col justify-end">
            <ScrollReveal direction="left" delay={0.2}>
              {/* Mobile breadcrumb only on non-contact pages */}
              {location !== "/contact-us" && (
                <div className="block lg:hidden">
                  <Breadcrumb breadcrumbs={breadcrumbs} />
                </div>
              )}

              {location === "/contact-us" ? (
                <div className="p-6 text-center lg:text-left">
                  <Feature_Fact features={features} />
                </div>
              ) : (
                <Imagesection src={src} alt={alt} />
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Innerhero;
