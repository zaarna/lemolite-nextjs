"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";

const OurPresence = () => {
  const locations = [
    {
      phone: "+44 7551 316937",
      email: "jainam@lemolite.com",
      address: "6 Denmark Road, Kingston Upon Thames, London, KT1 2RU",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.880196074434!2d-0.3052462235365343!3d51.405255971790204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760bc12971a819%3A0xefdd9756ac64718f!2s6%20Denmark%20Rd%2C%20Kingston%20upon%20Thames%20KT1%202RU%2C%20UK!5e0!3m2!1sen!2sin!4v1757678965223!5m2!1sen!2sin",
    },
    {
      phone: "+974 7794 0018",
      email: "abdul@lemolite.com",
      address: "Office No. 2045, Business Tower, Near Burjuman Mall, Dubai, U.A.E.",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5692895061125!2d55.29916227359832!3d25.25142802950538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43000ab4b8ed%3A0xb841c92a2428953c!2sBurjuman%20Business%20Tower!5e0!3m2!1sen!2sin!4v1762260084495!5m2!1sen!2sin%22",
    },
    {
      phone: "+974 7794 0018",
      email: "abdul@lemolite.com",
      address: "Al Nasser Tower, Corniche Westbay - Doha Qatar",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.7425606230045!2d51.51649847516752!3d25.312852077636588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c4cc37eab6c5%3A0xb7a7ede47961dd91!2sAl%20Nasr%20Tower%20A%2C%20Al%20Markhiya%20St%2C%20Doha%2C%20Qatar!5e0!3m2!1sen!2sin!4v1762259731379!5m2!1sen!2sin",
    },
    {
      phone: "+91 93138 34815",
      email: "sales@lemolite.com",
      address:
        "1101, 1103, 1104, Colonnade, Iskcon Cross Road, Satellite, Ahmedabad, Gujarat, INDIA - 380059",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8820533628696!2d72.50213257509196!3d23.02810247916982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b5f8771c567%3A0x3687e7298995f444!2sLemolite%20Technologies%20LLP!5e0!3m2!1sen!2sin!4v1757678857416!5m2!1sen!2sin",
    },
  ];

  return (
    <section className="top-bottom">
      <div className="container">
        <div className="title--head md:pb-10 sm:pb-6 pb-7 text-center">
          <Titlecontent title="Our Presence" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-black text-white rounded-2xl md:rounded-[32px] overflow-hidden"
            >
              {/* Map */}
              <div className="w-full relative overflow-hidden after:absolute after:content-[''] after:w-full after:h-full after:bg-gradient-to-r from-primary/20 to-secondary/20 after:pointer-events-none">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>

              {/* Contact Info */}
              <div className="w-full flex flex-col space-y-3 justify-center p-5">
                <div className="flex items-center space-x-3 md:space-x-5">
                  <Phone className="w-6 h-6 text-primary" />
                  <p className="text-base md:text-lg 2xl:text-xl">
                    {location.phone}
                  </p>
                </div>
                <div className="flex items-center space-x-3 md:space-x-5">
                  <Mail className="w-6 h-6 text-primary" />
                  <p className="text-base md:text-lg 2xl:text-xl">
                    {location.email}
                  </p>
                </div>
                <div className="flex items-start space-x-3 md:space-x-5">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-base md:text-lg 2xl:text-xl">
                    {location.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPresence;
