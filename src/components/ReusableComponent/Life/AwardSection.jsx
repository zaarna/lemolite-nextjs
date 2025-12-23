
import Image from "next/image";
import Titlecontent from "../Titlecontent/Titlecontent";

export default function AwardSection({ awdimages = [] }) {
  return (
    <section className="bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30 top-bottom">
      <div className="container">
        <div className="flex md:flex-row flex-col bg-white rounded-[32px] p-6 md:px-8">
          {/* Left Text Section */}
          <div className="title--head md:pb-10 sm:pb-6 pb-5 sm:w-full md:w-2/4 title md:justify-center md:items-center md:content-center md:text-left sm:text-center">
            <Titlecontent
              title="Your Work Wins"
              content="Your hard work and dedication never go unnoticed! We celebrate achievements with prestigious awards, exclusive perks, and endless opportunities for growth and success."
            />
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-2/4 content sm:pt-8 md:pt-0">
            <div className="relative flex flex-col md:flex-row overflow-hidden w-full h-[600px] gap-4">
              {/* Left Column - Scroll Up */}
              <div className="w-full md:w-1/2 flex flex-row md:flex-col gap-4 animate-scroll-up">
                {awdimages.concat(awdimages).map((img, index) => (
                  <Image
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    className="object-cover rounded-xl"
                    height={300}
                    width={300}
                  />
                ))}
              </div>

              {/* Right Column - Scroll Down */}
              <div className="w-full md:w-1/2 flex flex-row md:flex-col gap-4 animate-scroll-down">
                {awdimages.concat(awdimages).map((img, index) => (
                  <Image
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    height={300}
                    width={300}
                    className="object-cover rounded-xl"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
