"use client";

import Image from "next/image";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";
import Form from "./Form";
import Form_career from "./Form_career";
import { usePathname } from "next/navigation";

export default function Contectinfo({
  maintitle,
  subtitle,
  content,
  addresses = [],
}) {
  const openings = [
    {
      title: "SEO / Digital Marketing Executive",
      hire: "1+ YEARS",
      link: "/current-openings/seo",
    },
    {
      title: "MERN Stack Developer",
      hire: "1+ YEARS",
      link: "/current-openings/mern",
    },
    {
      title: "Flutter Developer",
      hire: "2+ YEARS",
      link: "/current-openings/flutter",
    },
  ];

  const pathname = usePathname();

  // Detect Career Page
  const isCareerPage =
    pathname.startsWith("/career") || pathname.startsWith("/current-openings");

  // Detect Contact Page — update to match your route name
  const isContactPage = pathname === "/contact" || pathname === "/contact-us";

  // ✅ Don’t render anything if this is the contact page
  if (isContactPage) return null;

  return (
    <section
      className="top-bottom visitor-section animated--background"
      id="contact-info-section"
    >
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-8">
          <Titlecontent title={maintitle} />
        </div>

        {/* Contact Info and Form */}
        <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-between gap-8 mt-6">
          {/* Left Side - Office Info */}
          <div className="w-full lg:w-1/2">
            <div className="pb-7">
              <Titlecontent title={subtitle} content={content} titleTag="h3" />
            </div>

            {/* Offices Section */}
            <div>
              <h4 className="font-semibold text-xl mb-4">Our Offices</h4>

              <div className="flex flex-wrap text-gray-800 space-y-6">
                {addresses.map((address) => (
                  <div key={address.id} className="w-full md:w-1/2">
                    {/* Country */}
                    <div className="flex items-center gap-3 mb-3 ">
                      <Image
                        src={address.flag}
                        alt={`${address.country} flag`}
                        width={30}
                        height={30}
                        className="rounded-full object-cover"
                      />
                      <span className="font-semibold text-lg">
                        {address.country}
                      </span>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3">
                      {/* Phone */}
                      <div className="flex items-center gap-3">
                        <Image
                          src="/call.png"
                          alt="Call icon"
                          width={25}
                          height={25}
                        />
                        <a
                          href={address.phoneLink}
                          className="text-base hover:text-green-600 transition-colors"
                        >
                          {address.phone}
                        </a>
                      </div>

                      {/* Email */}
                      <div className="flex items-center gap-3">
                        <Image
                          src="/email.png"
                          alt="Email icon"
                          width={25}
                          height={25}
                        />
                        <a
                          href={address.emailLink}
                          className="text-base hover:text-green-600 transition-colors"
                        >
                          {address.email}
                        </a>
                      </div>

                      {/* Location */}
                      <div className="flex items-start gap-3">
                        <Image
                          src="/location.png"
                          alt="Location icon"
                          width={25}
                          height={25}
                        />
                        <a
                          href={address.locationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base hover:text-green-600 transition-colors"
                          dangerouslySetInnerHTML={{
                            __html: address.location,
                          }}
                        ></a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2">
            {isCareerPage ? <Form_career data={openings} /> : <Form />}
          </div>
        </div>
      </div>
    </section>
  );
}
