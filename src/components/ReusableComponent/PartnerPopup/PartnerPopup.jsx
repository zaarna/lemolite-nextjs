"use client";
import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import parsePhoneNumber from "libphonenumber-js";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import Grediantbutton from "../Button/Grediantbutton";
import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";

function PartnerPopup({ isPopupOpen, closePopup }) {
  const [isOpen, setIsOpen] = useState(isPopupOpen || false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const [formData, setFormData] = useState({
    name: "",
    companyname: "",
    email: "",
    countrycode: "",
    phone: "",
    aboutus: "",
    pageurl: "",
    message: "",
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      pageurl: window.location.href,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // fetch("https://devdemo.peliswan.com/api/send-partner-with-us", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    fetch("/api/partner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success(data.message);
        if (typeof window !== "undefined" && window.rdt) {
          window.rdt("track", "Partner");
        } else {
          console.log("❌ Reddit Pixel not loaded");
        }
        setFormData({
          name: "",
          companyname: "",
          email: "",
          countrycode: "",
          phone: "",
          aboutus: "",
          pageurl: "",
          message: "",
        });
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const closePopupOutside = () => {
    setIsOpen(false);
    if (typeof closePopup == "function") {
      closePopup();
    }
  };

  const [value, setValue] = useState("");

  return (
    <Popup
      open={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => closePopupOutside()}
      trigger={
        <Grediantbutton btntext={"Partner With Us In Your Digital Journey"} />
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal relative bg-white drop-shadow-2xl rounded-[32px] overflow-y-auto max-h-[90vh] max-w-[90vw] sm:max-w-[75vw] ">
          <button
            className="close absolute flex items-center justify-center right-5 md:right-[30px] top-4 md:top-6 text-black lg:text-white w-8 h-8 rounded-full cursor-pointer z-50 "
            onClick={() => {
              close();
              if (typeof closePopup == "function") {
                closePopup();
              }
            }}
          >
            <X width={26} />
          </button>

          <div className="flex flex-col lg:flex-row">
            {/* Left Section - Form - Full width on mobile */}
            <div className="w-full lg:w-2/3 px-5 md:px-10 py-8 md:py-10">
              <div className="header text-black text-left mb-6">
                <h2 className="text-2xl md:text-3xl mb-3 font-bold">
                  Share the Madness You Believe In
                </h2>
                <p className="text-sm md:text-base font-light text-gray-600">
                  Got a vision that refuses to sit still? Drop it in, and our
                  team will help you shape it into something powerful, scalable,
                  and market-ready.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  {/* Full Name and Email */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative group flex-1">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-900"
                        placeholder="Full Name*"
                      />
                      <label
                        htmlFor="name"
                        className={`absolute left-0 top-0 h-full flex items-center text-sm text-gray-500 transition-all transform ${
                          formData.name ? "text-xs -translate-y-6" : ""
                        }`}
                      >
                        Full Name*
                      </label>
                    </div>

                    <div className="relative group flex-1">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-900"
                        placeholder="Email Address*"
                      />
                      <label
                        htmlFor="email"
                        className={`absolute left-0 top-0 h-full flex items-center text-sm text-gray-500 transition-all transform ${
                          formData.email ? "text-xs -translate-y-6" : ""
                        }`}
                      >
                        Email Address*
                      </label>
                    </div>
                  </div>

                  {/* Company + Phone */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative group flex-1">
                      <input
                        type="text"
                        id="companyname"
                        name="companyname"
                        value={formData.companyname}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-900"
                        placeholder="Company Name"
                      />
                      <label
                        htmlFor="companyname"
                        className={`absolute left-0 top-0 h-full flex items-center text-sm text-gray-500 transition-all transform ${
                          formData.companyname ? "text-xs -translate-y-6" : ""
                        }`}
                      >
                        Company Name
                      </label>
                    </div>

                    <div className="relative group flex-1">
                      <PhoneInput
                        id="phoneno"
                        placeholder=""
                        value={formData.phone}
                        onChange={(phone) => {
                          const phoneNumber = phone
                            ? parsePhoneNumber(phone)
                            : null;
                          setFormData((prev) => ({
                            ...prev,
                            phone: phone,
                            countrycode: phoneNumber?.countryCallingCode,
                          }));
                        }}
                        defaultCountry="US"
                        className="w-full border-b border-gray-300 py-2 text-gray-900 focus:outline-none"
                      />
                      <label
                        htmlFor="phone"
                        className={`text-gray-500 absolute top-0 h-full flex items-center text-sm transition-all transform ${
                          formData.phone
                            ? "left-0 text-xs -translate-y-6"
                            : "left-12"
                        }`}
                      >
                        Phone Number
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative group">
                    <textarea
                      rows="3"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-900 resize-none"
                      placeholder="Tell Us About Your Project"
                    />
                    <label
                      htmlFor="message"
                      className={`absolute left-0 top-0 flex items-start pt-2 text-sm text-gray-500 transition-all transform ${
                        formData.message ? "text-xs -translate-y-6" : ""
                      }`}
                    >
                      Tell Us About Your Project
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-x-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 cursor-pointer hover:bg-black hover:text-white border-2 border-black bg-white text-black rounded-2xl font-medium transition-colors disabled:bg-gray-400"
                    >
                      {isLoading ? "Submitting..." : "Submit"}
                    </button>

                    <p className="text-sm text-gray-500 text-left">
                      By submitting this form, I confirm that I have reviewed
                      and agree to the{" "}
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        className="underline text-[#065CDC]"
                      >
                        Lemolite privacy policy.
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Section - Contact Info - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block w-full lg:w-1/3 bg-[url('/backgroundimg.webp')] bg-cover bg-center bg-no-repeat text-white px-5 md:px-10 py-8 md:py-10 rounded-tr-[30px] rounded-br-[30px']">
              <h2 className="text-2xl font-bold mb-2">Pass the Brief</h2>
              <p className="text-base">
                Just fill out the form or contact us via email or phone.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 my-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#BFD633] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <a
                      href="mailto:sales@lemolite.com"
                      className="text-sm md:text-base font-normal"
                    >
                      sales@lemolite.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Image src="/uk.png" alt="flag" width={32} height={32} />
                  </div>
                  <div className="flex space-x-2 items-center">
                    <Phone className="w-5 h-5 text-white" />
                    <a
                      href="tel:+447551316937"
                      className="text-sm md:text-base font-normal"
                    >
                      +44 75513 16937
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Image src="/Dubai.png" alt="flag" width={32} height={32} />
                  </div>
                  <div className="flex space-x-2 items-center">
                    <Phone className="w-5 h-5 text-white" />
                    <a
                      href="tel:+97477940018"
                      className="text-sm md:text-base font-normal"
                    >
                      +974 7794 0018
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Image src="/india.png" alt="flag" width={32} height={32} />
                  </div>
                  <div className="flex space-x-2 items-center">
                    <Phone className="w-5 h-5 text-white" />
                    <a
                      href="tel:+919313834815"
                      className="text-sm md:text-base font-normal"
                    >
                      +91 93138 34815
                    </a>
                  </div>
                </div>
              </div>

              {/* Book Call Button */}

              <Link
                target="blank"
                href="https://calendly.com/lemolite-sales/product-demo?month=2025-06"
                className="block w-full py-3 text-center cursor-pointer bg-[#BFD633] text-gray-900 rounded-2xl font-bold transition-colors mb-4"
              >
                Book 30-Min Call-calendly
              </Link>

              {/* Trusted Brands */}
              <div>
                <h3 className="text-lg font-bold mb-4">
                  Trusted by Leading Brands
                </h3>
                <div className="flex items-center space-x-1">
                  <div className="px-2">
                    <Image
                      src="/botform.svg"
                      alt="logo"
                      width={90}
                      height={32}
                    />
                  </div>
                  <div className="px-2">
                    <Image
                      src="/shiftform.svg"
                      alt="logo"
                      width={58}
                      height={40}
                    />
                  </div>
                  <div className="px-2">
                    <Image
                      src="/depoterform.svg"
                      alt="logo"
                      width={90}
                      height={17}
                    />
                  </div>
                  <div className="px-2">
                    <Image
                      src="/botroomform.svg"
                      alt="logo"
                      width={85}
                      height={30}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default PartnerPopup;
