"use client";
import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import parsePhoneNumber from "libphonenumber-js";
// import closeicon from "../../../assets/closeicon.svg";
// import tickmark from "../../../assets/tick-mark.svg";
// import rightarrow from "../../../assets/right-arrow.svg";
import { ArrowRight, CircleX, Check, X } from "lucide-react";
import { toast } from "react-toastify";
import Grediantbutton from "../Button/Grediantbutton";

function PartnerPopup({ isPopupOpen, closePopup }) {
  "isPopupOpen", isPopupOpen;
  const [isOpen, setIsOpen] = useState(isPopupOpen || false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Disable body scroll when popup is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [isOpen]);

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    companyname: "",
    email: "",
    countrycode: "",
    phone: "",
    aboutus: "",
    message: "",
    pageurl: "",
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
    fetch("https://devdemo.peliswan.com/api/send-partner-with-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success(data.message);
        setFormData({
          name: "",
          lastname: "",
          companyname: "",
          email: "",
          countrycode: "",
          phone: "",
          aboutus: "",
          message: "",
          pageurl: "",
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
      onClose={() =>
        // setIsOpen(false);
        // closePopup();
        closePopupOutside()
      }
      trigger={
        // <button className="gradient-button">
        //   <span> Partner with Us in Your Digital Journey</span>
        //   {/* <img
        //     src={rightarrow}
        //     alt="right-arrow"
        //     width={26}
        //     className="transition-transform duration-500 group-hover:rotate-30"
        //   /> */}
        //   <ArrowRight
        //     width={26}
        //     className="transition-transform duration-500 group-hover:rotate-30"
        //   />
        // </button>
        <Grediantbutton btntext={"Partner With Us In Your Digital Journey"} />
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal relative bg-black rounded-[30px] overflow-scroll h-[400px] lg:overflow-auto lg:h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] px-5 md:px-10 py-5 md:py-10">
          <button
            className="close absolute flex items-center justify-center right-5 md:right-[30px] top-4 md:top-6 text-white w-6 md:w-8 h-6 md:h-8 border border-white rounded-full cursor-pointer"
            onClick={() => {
              close();
              if (typeof closePopup == "function") {
                closePopup();
              }
            }}
          >
            <X width={14} />
          </button>
          <div className="header text-white text-center text-2xl mb-8">
            {" "}
            Partner with Us!{" "}
          </div>
          <div className="content">
            <div className="">
              <form className=" " onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row flex-nowrap md:flex-wrap w-full">
                  {/*First Name Field */}
                  <div className="w-fll md:w-1/2 mb-7">
                    <div className="relative group mx-3 ">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-gray-300 bg-transparent py-2 text-[#D9D9D9] placeholder-transparent focus:outline-none "
                        placeholder="First Name*"
                      />
                      <label
                        htmlFor="name"
                        className={`absolute left-0 top-0 h-full flex items-center pl-0 text-sm text-[#D9D9D9] transition-all transform ${
                          formData.name ? "h-1/4 -translate-y-full" : ""
                        }`}
                      >
                        First Name*
                      </label>
                    </div>
                  </div>
                  {/*Last Name Field */}
                  <div className="w-fll md:w-1/2 mb-7">
                    <div className="relative group mx-3">
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-gray-300 bg-transparent py-2 text-[#D9D9D9] placeholder-transparent focus:outline-none "
                        placeholder="Last Name*"
                      />
                      <label
                        htmlFor="last name"
                        className={`absolute left-0 top-0 h-full flex items-center pl-0 text-sm text-[#D9D9D9] transition-all transform ${
                          formData.lastname ? " h-1/4 -translate-y-full" : ""
                        }`}
                      >
                        Last Name*
                      </label>
                    </div>
                  </div>
                  {/*Company Name Field */}
                  <div className="w-fll md:w-1/2 mb-7">
                    <div className="relative group mx-3">
                      <input
                        type="text"
                        id="companyname"
                        name="companyname"
                        value={formData.companyname}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-gray-300 bg-transparent py-2 text-[#D9D9D9] placeholder-transparent focus:outline-none "
                        placeholder="Company Name*"
                      />
                      <label
                        htmlFor="Company name"
                        className={`absolute left-0 top-0 h-full flex items-center pl-0 text-sm text-[#D9D9D9] transition-all transform ${
                          formData.companyname ? " h-1/4 -translate-y-full" : ""
                        }`}
                      >
                        Company Name*
                      </label>
                    </div>
                  </div>
                  {/* Email Field */}
                  <div className="w-fll md:w-1/2 mb-7">
                    <div className="relative group mx-3">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-gray-300 bg-transparent py-2 text-[#D9D9D9] placeholder-transparent focus:outline-none "
                        placeholder="Email ID*"
                      />
                      <label
                        htmlFor="email"
                        className={`absolute left-0 top-0 h-full flex items-center pl-0 text-sm text-[#D9D9D9] transition-all transform ${
                          formData.email ? " h-1/4 -translate-y-full" : ""
                        }`}
                      >
                        Email ID*
                      </label>
                    </div>
                  </div>
                  {/* Phone Number Field */}
                  <div className="w-fll md:w-1/2 mb-7">
                    <div className="relative group mx-3">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <PhoneInput
                          id="phone"
                          placeholder=""
                          value={value}
                          onChange={(phone) => {
                            setValue(phone);
                            // Parse phone number for country code
                            const phoneNumber = phone
                              ? parsePhoneNumber(phone)
                              : null;
                            const countrycode = phoneNumber?.country || "";
                            // Update formData state
                            setFormData((prevData) => ({
                              ...prevData,
                              phone: phone || "",
                              countrycode: countrycode,
                            }));
                          }}
                          defaultCountry="US"
                          className="w-full border-b border-gray-300 py-2 text-black focus:outline-none"
                        />
                        <label
                          htmlFor="number"
                          className={`text-[#D9D9D9] absolute  top-0 h-full flex items-center text-sm transition-all transform ${
                            formData.phone
                              ? "left-0 text-sm  -translate-y-8 pl-0"
                              : "left-12"
                          }`}
                        >
                          Phone Number*
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Social account Dropdown */}
                  <div className="w-fll md:w-1/2 mb-7">
                    <div className="relative group mx-3">
                      <label
                        htmlFor="aboutus"
                        className={`text-[#D9D9D9] -translate-y-8 absolute top-0 h-full flex items-center text-sm transition-all transform `}
                      >
                        How did you hear about us? *
                      </label>
                      <select
                        id="aboutus"
                        name="aboutus"
                        value={formData.aboutus}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-gray-300 bg-transparent py-2 text-[#D9D9D9] focus:outline-none bg-black "
                      >
                        <option className="bg-black" value="LinkedIn">
                          LinkedIn
                        </option>
                        <option className="bg-black" value="Instagram">
                          Instagram
                        </option>
                        <option className="bg-black" value="Whatsapp">
                          Whatsapp
                        </option>
                        <option className="bg-black" value="Other">
                          Other
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="pb-10">
                  <h5 className="text-left font-medium text-xl text-white">
                    Why Partner with Us?
                  </h5>
                  <div className="flex items-start flex-wrap justify-between pt-4 space-y-1">
                    <div className="text-white flex items-center md:w-1/2 lg:w-1/3 ">
                      <Check width={20} />
                      <label className="pl-3 font-light text-base">
                        White Label Partnership
                      </label>
                    </div>
                    <div className="text-white flex items-center md:w-1/2 lg:w-1/3">
                      <Check width={20} />
                      <label className="pl-3 font-light text-base">
                        Joint Marketing
                      </label>
                    </div>
                    <div className="text-white flex items-center md:w-1/2 lg:w-1/3">
                      <Check width={20} />
                      <label className="pl-3 font-light text-base">
                        Remarkable Kickbacks
                      </label>
                    </div>
                    <div className="text-white flex items-center md:w-1/2 lg:w-1/3">
                      <Check width={20} />
                      <label className="pl-3 font-light text-base">
                        Dedicated Support
                      </label>
                    </div>
                    <div className="text-white flex items-center md:w-1/2 lg:w-1/3">
                      <Check width={20} />
                      <label className="pl-3 font-light text-base">
                        Rewarding Opportunities
                      </label>
                    </div>
                    <div className="text-white flex items-center md:w-1/2 lg:w-1/3">
                      <Check width={20} />
                      <label className="pl-3 font-light text-base">
                        Continuous Training
                      </label>
                    </div>
                  </div>
                </div>
                {/* Message Field */}
                <div className="relative group">
                  <textarea
                    rows="1"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-gray-300 bg-transparent py-2 text-[#D9D9D9] placeholder-transparent focus:outline-none "
                    placeholder="Add Description"
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-0 top-0 h-full flex items-center text-sm text-[#D9D9D9] transition-all transform ${
                      formData.message ? "h-1/4 -translate-y-full" : ""
                    }`}
                  >
                    Add Description
                  </label>
                </div>
                {/* Submit Button */}
                <div className="flex items-center justify-center mt-5">
                  <button
                    href={null}
                    type="submit"
                    disabled={isLoading}
                    className="block max-w-[300px] text-center py-3 w-full bg-[#D8E8C5] text-black rounded-[16px] font-medium"
                  >
                    {isLoading ? "Submitting..." : "Become a Partner"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="actions">
            <Popup
              trigger={<button className="button"> Trigger </button>}
              position="top center"
              nested
            ></Popup>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default PartnerPopup;
