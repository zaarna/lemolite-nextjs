"use client";
import Image from "next/image";
import Titlecontent from "../Titlecontent/Titlecontent";
import Grediantbutton from "../Button/Grediantbutton";

export default function Ctasection({
  bg = "bg-white",
  padding = "top-bottom",
  paddinginner = "top-bottom",
  title,
  text,
  link,
  image,
}) {
  return (
    <section className={`${bg} ${padding}`}>
      <div className="container">
        <div
          className={`relative max-w-[1144px] w-full m-auto overflow-hidden flex flex-col items-center justify-center text-center rounded-3xl ${paddinginner}`}
        >
          {/* Background image */}
          {image && (
            <Image
              src={image}
              alt={title || "CTA background"}
              fill
              priority
              className="object-cover object-center rounded-3xl"
            />
          )}

          {/* Content */}
          <div className="sm:max-w-[1144px] w-full max-w-[350px] z-[1]">
            <Titlecontent title={title} />
          </div>

          <div className="pt-4">
            <Grediantbutton btntext={text} link={link} variant="black" />
          </div>
        </div>
      </div>
    </section>
  );
}
