"use client";

import { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import parsePhoneNumber from "libphonenumber-js";
import { toast } from "react-toastify";
import { Paperclip, Upload, X } from "lucide-react";
// import Image from "next/image";

// import Attach_file from "@/assets/image/attach-file.svg";
// import Up_arrow from "@/assets/image/up-submit.svg";
// import closeicon from "@/assets/closeicon.svg";

export default function Form_career({ data = [] }) {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [imageName, setImageName] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    countrycode: "",
    phone: "",
    message: "",
    position: "",
    pageurl: "",
    image: null,
  });

  // ✅ Set page URL after mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setFormData((prev) => ({ ...prev, pageurl: window.location.href }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const imagefile = e.target.files[0];
    if (imagefile) {
      setFormData((prev) => ({ ...prev, image: imagefile }));
      setImageName(imagefile.name);
    }
  };

  const handleFileDelete = () => {
    setFormData((prev) => ({ ...prev, image: null }));
    setImageName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      setIsLoading(true);
      const res = await fetch(
        "https://devdemo.peliswan.com/api/send-career-email",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "An error occurred");
      }

      const data = await res.json();
      toast.success(data.message || "Form submitted successfully!");

      setFormData({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
        position: "",
        pageurl: window.location.href,
        image: null,
      });
      setValue("");
      setImageName("");
    } catch (error) {
      toast.error(error.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-black text-white rounded-2xl sm:p-14 p-5 w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* First Name */}
          <div className="relative group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 bg-transparent py-2 text-[#D9D9D9] focus:outline-none"
            />
            <label
              htmlFor="name"
              className={`absolute left-0 top-0 h-full flex items-center text-sm text-[#D9D9D9] transition-all transform ${
                formData.name ? "text-xs h-1/4 -translate-y-full" : ""
              }`}
            >
              First Name
            </label>
          </div>

          {/* Last Name */}
          <div className="relative group">
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 bg-transparent py-2 text-[#D9D9D9] focus:outline-none"
            />
            <label
              htmlFor="lastname"
              className={`absolute left-0 top-0 h-full flex items-center text-sm text-[#D9D9D9] transition-all transform ${
                formData.lastname ? "text-xs h-1/4 -translate-y-full" : ""
              }`}
            >
              Last Name
            </label>
          </div>

          {/* Email */}
          <div className="relative group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 bg-transparent py-2 text-[#D9D9D9] focus:outline-none"
            />
            <label
              htmlFor="email"
              className={`absolute left-0 top-0 h-full flex items-center text-sm text-[#D9D9D9] transition-all transform ${
                formData.email ? "text-xs h-1/4 -translate-y-full" : ""
              }`}
            >
              Email Address
            </label>
          </div>

          {/* Phone */}
          <div className="relative group">
            <PhoneInput
              id="phone"
              placeholder=""
              value={value}
              onChange={(phone) => {
                setValue(phone);
                const phoneNumber = phone ? parsePhoneNumber(phone) : null;
                const countrycode = phoneNumber?.country || "";
                setFormData((prev) => ({
                  ...prev,
                  phone: phone || "",
                  countrycode,
                }));
              }}
              defaultCountry="US"
              className="w-full border-b border-gray-300 py-2 text-black  focus:outline-none"
            />
            <label
              htmlFor="phone"
              className={`absolute left-0 top-0 h-full flex items-center text-sm text-[#D9D9D9] transition-all transform ${
                value ? "text-xs h-1/4 -translate-y-full" : "left-12"
              }`}
            >
              Phone Number
            </label>
          </div>

          {/* Message */}
          <div className="relative group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="1"
              className="w-full border-b border-gray-300 bg-transparent py-2 text-[#D9D9D9] focus:outline-none"
            />
            <label
              htmlFor="message"
              className={`absolute left-0 top-0 h-full flex items-center text-sm text-[#D9D9D9] transition-all transform ${
                formData.message ? "text-xs h-1/4 -translate-y-full" : ""
              }`}
            >
              Message
            </label>
          </div>

          {/* Apply Position */}
          <div className="relative group">
            <label htmlFor="position" className="text-sm text-[#D9D9D9] mb-2">
              Apply Position
            </label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none"
            >
              <option value="" className="text-black">
                Select Position
              </option>
              {data.map((position, index) => (
                <option
                  key={index}
                  value={position.title}
                  className="text-black"
                >
                  {position.title} - {position.hire}
                </option>
              ))}
            </select>
          </div>

          {/* File Upload */}
          <div className="relative group">
            <div className="relative text-[#D9D9D9] py-2 px-3 border-b border-gray-300 bg-transparent w-full flex justify-between items-center">
              {imageName ? (
                <div className="flex justify-between w-full">
                  <span>{imageName}</span>
                  <button
                    onClick={handleFileDelete}
                    type="button"
                    className="absolute right-0 bottom-1 text-white w-6 h-6"
                  >
                    {/* <Image
                      src={closeicon}
                      alt="remove"
                      width={22}
                      height={22}
                    /> */}
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              ) : (
                <div className="flex justify-between w-full items-center">
                  {/* <label htmlFor="image" className="cursor-pointer flex items-center">
                    <Image src={Attach_file} alt="Attach" width={20} height={20} className="mr-3" />
                    <span>Attach File</span>
                  </label> */}
                  <label
                    htmlFor="image"
                    className="cursor-pointer flex items-center"
                  >
                    <Paperclip className="w-5 h-5 mr-3 text-[#D9D9D9]" />
                    <span className="text-[#D9D9D9]">Attach File</span>
                  </label>

                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {/* <label htmlFor="image" className="cursor-pointer">
                    <Image src={Up_arrow} alt="Upload" width={28} height={28} />
                  </label> */}
                  <label htmlFor="image" className="cursor-pointer">
                    <Upload className="w-6 h-6 text-[#D9D9D9]" />
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="block w-full text-center py-5 bg-[#D8E8C5] text-black rounded-md font-bold cursor-pointer"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
