"use client";

import { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import parsePhoneNumber from "libphonenumber-js";
import { toast } from "react-toastify";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    compnay: "",
    countrycode: "",
    phone: "",
    message: "",
    services: [],
    pageurl: "",
  });

  // ✅ Capture current page URL on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setFormData((prevData) => ({
        ...prevData,
        pageurl: window.location.href,
      }));
    }
  }, []);

  // ✅ Handle simple input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ✅ Toggle services
  const handleServiceChange = (service) => {
    setFormData((prevData) => {
      const { services } = prevData;
      if (services.includes(service)) {
        return { ...prevData, services: services.filter((s) => s !== service) };
      } else {
        return { ...prevData, services: [...services, service] };
      }
    });
  };

  // ✅ Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // const response = await fetch(
      //   "https://devdemo.peliswan.com/api/send-email",
      //   {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(formData),
      //   }
      // );

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "An error occurred");
      if (typeof window !== "undefined" && window.rdt) {
        window.rdt("track", "Lead");
      } else {
        console.log("❌ Reddit Pixel not loaded");
      }

      toast.success(data.message || "Form submitted successfully!");
      "Form submitted successfully:", data;

      setFormData({
        name: "",
        email: "",
        compnay: "",
        countrycode: "",
        phone: "",
        message: "",
        services: [],
        pageurl: window.location.href,
      });
      setValue("");
    } catch (error) {
      toast.error(error.message);
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-black text-white rounded-2xl sm:p-14 p-5 w-full">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="relative group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 bg-transparent py-2 text-[#D9D9D9] placeholder-transparent focus:outline-none"
            />
            <label
              htmlFor="name"
              className={`absolute left-0 top-0 h-full flex items-center pl-0 text-sm text-[#D9D9D9] transition-all transform ${
                formData.name ? "text-xs h-1/4 -translate-y-full" : ""
              }`}
            >
              Your Name
            </label>
          </div>

          {/* Email Field */}
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
              className={`absolute left-0 top-0 h-full flex items-center pl-0 text-sm text-[#D9D9D9] transition-all transform ${
                formData.email ? "text-xs h-1/4 -translate-y-full" : ""
              }`}
            >
              Your Email ID
            </label>
          </div>

          {/* Company Field */}
          <div className="relative group">
            <input
              type="text"
              id="compnay"
              name="compnay"
              value={formData.compnay}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 bg-transparent py-2 text-[#D9D9D9] focus:outline-none"
            />
            <label
              htmlFor="compnay"
              className={`absolute left-0 top-0 h-full flex items-center pl-0 text-sm text-[#D9D9D9] transition-all transform ${
                formData.compnay ? "text-xs h-1/4 -translate-y-full" : ""
              }`}
            >
              Your Company
            </label>
          </div>

          {/* Phone Number Field */}
          <div className="relative group">
            <PhoneInput
              id="phone"
              placeholder=""
              value={value}
              onChange={(phone) => {
                setValue(phone);
                const phoneNumber = phone ? parsePhoneNumber(phone) : null;
                const countrycode = phoneNumber?.country || "";
                setFormData((prevData) => ({
                  ...prevData,
                  phone: phone || "",
                  countrycode,
                }));
              }}
              defaultCountry="US"
              className="w-full border-b text-black  border-gray-300 py-2 focus:outline-none"
            />
            <label
              htmlFor="phone"
              className={`text-[#D9D9D9] absolute top-0 h-full flex items-center text-sm transition-all transform ${
                value ? "text-xs h-1/4 -translate-y-full left-0" : "left-12"
              }`}
            >
              Phone Number
            </label>
          </div>

          {/* Message Field */}
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
              Your Message (optional)
            </label>
          </div>

          {/* Select Service */}

          <div>
            <label className="block text-lg font-medium mb-3 text-white">
              Select Service
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "AI/ML Development",
                "Software Development",
                "UI/UX Design",
                "Mobile App Development",
                "Web Development",
                "Other Services",
              ].map((service) => {
                const isChecked = formData.services.includes(service);
                return (
                  <label
                    key={service}
                    className="flex items-center gap-3 cursor-pointer select-none"
                    onClick={() => handleServiceChange(service)}
                  >
                    {/* Custom Checkbox */}
                    <div
                      className={`w-5 h-5 flex items-center justify-center rounded-md border-2 transition-all duration-300 ${
                        isChecked
                          ? "bg-[#D8E8C5] border-[#D8E8C5]"
                          : "border-gray-400 bg-transparent"
                      }`}
                    >
                      {isChecked && (
                        <svg
                          className="w-3 h-3 text-black"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>

                    {/* Label Text */}
                    <span className="text-[#D9D9D9] text-sm">{service}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="block text-center py-5 w-full bg-[#D8E8C5] text-black rounded-md font-bold cursor-pointer"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
