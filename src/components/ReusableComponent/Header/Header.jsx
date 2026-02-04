"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Grediantbutton from "../Button/Grediantbutton";
import PartnerPopup from "../PartnerPopup/PartnerPopup";
import { usePopup } from "@/components/PopupTimer";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [navPos, setNavPos] = useState("static");
  const menuRef = useRef();

  const { openPopup } = usePopup();

  const pathname = usePathname();
  const [headerBg, setHeaderBg] = useState("white");
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    setHeaderBg(pathname.includes("startups") ? "transparent" : "white");
    setNavPos(pathname.includes("startups") && "absolute");
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (menu) => {
    ("Toggle Menu", menu);
    ("activeMenu Menu", activeMenu);
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const closeDropdown = () => setActiveMenu(null);

  const closePopup = () => {
    setShowPopup(false);
  };

  const menus = [
    { title: "Startups", href: "/startups", isHighlighted: true },

    {
      title: "Services",
      description:
        "Expert support for improving your digital presence and efficiency, from building custom platforms to enhancing user experiences and automating tasks.",
      href: "/services",
      columns: [
        {
          heading: "Offerings",
          items: [
            { title: "UI/UX Design", href: "/services/ui-ux-design" },
            { title: "E-Commerce", href: "/services/e-commerce" },
            { title: "Web Development", href: "/services/web-development" },
            {
              title: "Mobile App Development",
              href: "/services/mobile-app-development",
            },
            {
              title: "Custom Software Development",
              href: "/services/custom-software-development",
            },
            {
              title: "Secure Product Lifestyle Solution",
              href: "/services/ot-cybersecurity",
            },
          ],
        },
        {
          heading: "Intelligent Automation",
          items: [
            {
              title: "AI & ML Development",
              href: "/services/ai-ml-development",
            },
            {
              title: "Internet of Things",
              href: "/services/internet-of-things",
            },
            {
              title: "Chatbot Development",
              href: "/services/chatbot-development",
            },
            {
              title: "Voicebot Development",
              href: "/services/voicebot-development",
            },
          ],
        },
        {
          heading: "Staff Augmentation",
          items: [
            {
              title: "Hire Python Developers",
              href: "/services/hire-python-developer",
            },
            {
              title: "Hire MERN Developers",
              href: "/services/hire-mern-developer",
            },
            {
              title: "Hire React JS Developers",
              href: "/services/hire-reactjs-developer",
            },
            {
              title: "Hire Node JS Developers",
              href: "/services/hire-nodejs-developer",
            },
            {
              title: "Hire PHP Developers",
              href: "/services/hire-php-developer",
            },
            {
              title: "Hire Laravel Developers",
              href: "/services/hire-laravel-developer",
            },
            {
              title: "Hire Angular Developers",
              href: "/services/hire-angular-developer",
            },
            {
              title: "Hire Vue JS Developers",
              href: "/services/hire-vuejs-developer",
            },
            {
              title: "Hire Flutter Developers",
              href: "/services/hire-flutter-developer",
            },
            {
              title: "Hire Shopify Developers",
              href: "/services/hire-shopify-developer",
            },
          ],
        },
      ],
      footerText: "Explore Our Services to Meet Your Needs",
    },
    {
      title: "Tech Stack",
      href: "/techstack",
      description:
        "We use various tech stacks to build engaging websites and handle the behind-the-scenes work, making your digital experience smooth and effective.",
      footerText: "Discover the Technologies We Use",
      columns: [
        {
          heading: "Frontend",
          items: [
            {
              title: "React JS Development ",
              href: "/techstack/reactjs-development",
            },
            {
              title: "Angular Development",
              href: "/techstack/angular-development",
            },
            {
              title: "Vue JS Development ",
              href: "/techstack/vuejs-development",
            },
            {
              title: "Flutter Development",
              href: "/techstack/flutter-development",
            },
          ],
        },
        {
          heading: "Backend",
          items: [
            {
              title: "Node JS Development",
              href: "/techstack/nodejs-development",
            },
            {
              title: "Laravel Development",
              href: "/techstack/laravel-development",
            },
            { title: "PHP Development", href: "/techstack/php-development" },
            { title: "MERN Development", href: "/techstack/mern-development" },
            {
              title: "Python Development",
              href: "/techstack/python-development",
            },
            {
              title: "Shopify Development",
              href: "/techstack/shopify-development",
            },
          ],
        },
      ],
    },
    {
      title: "Company",
      href: "#",
      description:
        "Explore our mission, values, and the skilled team that makes our success possible. See how our commitment to quality impacts every project we take on.",
      footerText: "Learn More About Our Company",
      columns: [
        {
          heading: "Company Info",
          items: [
            { title: "About us", href: "/about-us" },
            {
              title: "Blog",
              href: "/blog",
            },
            { title: "Careers", href: "/careers" },
            { title: "Life@Lemolite", href: "/life-at-lemolite" },
          ],
        },
      ],
    },
    { title: "Case Study", href: "/casestudy" },
    { title: "Contact Us", href: "/contact-us" },
  ];

  const columnHeadings = {
    Services: ["Offerings", "Intelligent Automation", "Staff Augmentation"],
    "Tech Stack": ["Frontend", "Backend"],
    Company: ["Company Info"],
  };

  const renderMegaMenu = (menu) => {
    const headings = columnHeadings[menu.title] || [
      "Category 1",

      "Category 2",

      "Category 3",
    ];
    return (
      <div
        className={`absolute left-0 right-0 m-auto top-full bg-white overflow-hidden shadow-xl md:w-[700px] lg:w-[850px] xl:w-[1100px] rounded-bl-lg rounded-br-lg border-t-[1px] border-[#f1f1f1] z-50`}
      >
        {/* Content Section */}

        <div className="grid grid-cols-4 gap-6 p-4">
          {/* Column 1: Description */}
          <div className="col-span-1 pr-4 border-r border-gray-200">
            <h6 className="font-bold text-black mb-2">{menu.title}</h6>
            <p className="text-gray-700">{menu.description}</p>
          </div>

          {/* Columns 2–4: Dynamic mapping */}
          {menu.columns?.map((col, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h6 className="font-semibold text-gray-800 mb-2">
                {col.heading}
              </h6>
              {col.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={closeDropdown}
                  className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-600 transition transform hover:translate-x-1"
                >
                  {/* <ArrowRight size={14} />  */}
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="col-span-4 bg-gradient-to-r from-[#2ec4f3]/70 to-[#bfd633]/70 flex p-2  lg:p-4 items-center justify-between">
          <p className="text-black font-bold">{menu.footerText}</p>

          {/* Conditional Button or Social Icons */}
          {menu.title !== "Company" ? (
            <Link
              href={menu.href}
              onClick={closeDropdown}
              className="flex items-center gap-2 bg-white hover:bg-black font-semibold w-8 h-8 justify-center rounded-full group transition-all"
            >
              <ArrowRight
                size={14}
                className="-rotate-45 text-[#2ec4f3] cursor-pointer"
              />
            </Link>
          ) : (
            <div className="flex items-center gap-3 text-white">
              <Link
                href="https://www.linkedin.com/company/lemolite-technologies-llp"
                target="_blank"
                className="hover:text-gray-300 transition"
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:scale-105 transition-transform w-8 h-8"
                >
                  <rect width="60" height="60" rx="30" fill="#2D6C8C" />
                  <path
                    d="M18.75 21.3636C18.75 20.606 19.0152 19.981 19.5455 19.4886C20.0757 18.9962 20.7652 18.75 21.6136 18.75C22.447 18.75 23.1212 18.9924 23.6364 19.4773C24.1667 19.9773 24.4318 20.6288 24.4318 21.4318C24.4318 22.1591 24.1743 22.7651 23.6591 23.25C23.1288 23.75 22.4318 24 21.5682 24H21.5455C20.7121 24 20.0379 23.75 19.5227 23.25C19.0076 22.75 18.75 22.1212 18.75 21.3636ZM19.0455 41.25V26.0682H24.0909V41.25H19.0455ZM26.8864 41.25H31.9318V32.7727C31.9318 32.2424 31.9924 31.8333 32.1136 31.5455C32.3258 31.0303 32.6477 30.5947 33.0795 30.2386C33.5114 29.8826 34.053 29.7045 34.7045 29.7045C36.4015 29.7045 37.25 30.8485 37.25 33.1364V41.25H42.2955V32.5455C42.2955 30.303 41.7652 28.6023 40.7045 27.4432C39.6439 26.2841 38.2424 25.7045 36.5 25.7045C34.5455 25.7045 33.0227 26.5455 31.9318 28.2273V28.2727H31.9091L31.9318 28.2273V26.0682H26.8864C26.9167 26.553 26.9318 28.0606 26.9318 30.5909C26.9318 33.1212 26.9167 36.6742 26.8864 41.25Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/lemolitetech"
                target="_blank"
                className="hover:text-gray-300 transition"
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:scale-105 transition-transform w-8 h-8"
                >
                  <rect width="60" height="60" rx="30" fill="#1877F2" />
                  <path
                    d="M34.9471 18.75H31.3511C29.2172 18.75 26.8437 19.6475 26.8437 22.7407C26.8541 23.8185 26.8437 24.8507 26.8437 26.0124H24.375V29.9408H26.9201V41.25H31.5968V29.8662H34.6835L34.9628 26.0014H31.5162C31.5162 26.0014 31.5239 24.2822 31.5162 23.7829C31.5162 22.5605 32.7881 22.6305 32.8646 22.6305C33.4699 22.6305 34.6467 22.6323 34.9488 22.6305V18.75H34.9471Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/lemolite.tech/"
                target="_blank"
                className="hover:text-gray-300 transition"
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:scale-105 transition-transform w-8 h-8"
                >
                  <rect
                    width="60"
                    height="60"
                    rx="30"
                    fill="url(#paint0_radial_306_3626)"
                  />
                  <path
                    d="M25.668 30.001C25.668 27.6076 27.6076 25.667 30.001 25.667C32.3943 25.667 34.335 27.6076 34.335 30.001C34.335 32.3943 32.3943 34.335 30.001 34.335C27.6076 34.335 25.668 32.3943 25.668 30.001ZM23.3251 30.001C23.3251 33.688 26.3139 36.6768 30.001 36.6768C33.688 36.6768 36.6768 33.688 36.6768 30.001C36.6768 26.3139 33.688 23.3251 30.001 23.3251C26.3139 23.3251 23.3251 26.3139 23.3251 30.001ZM35.381 23.0604C35.3809 23.369 35.4722 23.6707 35.6436 23.9273C35.8149 24.1839 36.0585 24.384 36.3435 24.5022C36.6285 24.6204 36.9422 24.6514 37.2449 24.5913C37.5475 24.5312 37.8256 24.3828 38.0438 24.1647C38.2621 23.9466 38.4108 23.6686 38.4711 23.366C38.5314 23.0634 38.5007 22.7497 38.3827 22.4646C38.2647 22.1795 38.0649 21.9357 37.8084 21.7642C37.5519 21.5927 37.2503 21.5011 36.9417 21.5009H36.9411C36.5275 21.5011 36.1309 21.6655 35.8384 21.9579C35.5458 22.2503 35.3813 22.6468 35.381 23.0604ZM24.7486 40.5835C23.481 40.5257 22.7921 40.3146 22.3342 40.1362C21.7273 39.8999 21.2942 39.6185 20.8388 39.1637C20.3835 38.709 20.1016 38.2764 19.8664 37.6694C19.6879 37.2117 19.4767 36.5226 19.4191 35.255C19.3561 33.8846 19.3435 33.473 19.3435 30.0011C19.3435 26.5292 19.3571 26.1187 19.4191 24.7471C19.4768 23.4796 19.6895 22.7918 19.8664 22.3328C20.1027 21.7258 20.3841 21.2927 20.8388 20.8374C21.2935 20.382 21.7262 20.1002 22.3342 19.8649C22.7919 19.6864 23.481 19.4753 24.7486 19.4177C26.119 19.3546 26.5306 19.342 30.001 19.342C33.4713 19.342 33.8834 19.3557 35.2549 19.4177C36.5225 19.4754 37.2103 19.6881 37.6693 19.8649C38.2762 20.1002 38.7093 20.3826 39.1647 20.8374C39.62 21.2921 39.9008 21.7258 40.1372 22.3328C40.3156 22.7904 40.5268 23.4796 40.5844 24.7471C40.6474 26.1187 40.66 26.5292 40.66 30.0011C40.66 33.473 40.6474 33.8835 40.5844 35.255C40.5267 36.5226 40.3145 37.2115 40.1372 37.6694C39.9008 38.2764 39.6194 38.7094 39.1647 39.1637C38.71 39.6181 38.2762 39.8999 37.6693 40.1362C37.2116 40.3147 36.5225 40.5258 35.2549 40.5835C33.8845 40.6465 33.4729 40.6591 30.001 40.6591C26.5291 40.6591 26.1186 40.6465 24.7486 40.5835ZM24.6409 17.0787C23.2569 17.1418 22.3112 17.3612 21.4852 17.6826C20.6299 18.0145 19.9058 18.4597 19.1822 19.1822C18.4586 19.9046 18.0145 20.6299 17.6826 21.4852C17.3612 22.3117 17.1418 23.2569 17.0787 24.6409C17.0147 26.0271 17 26.4703 17 30.001C17 33.5316 17.0147 33.9748 17.0787 35.361C17.1418 36.7451 17.3612 37.6903 17.6826 38.5167C18.0145 39.3716 18.4587 40.0976 19.1822 40.8198C19.9057 41.5419 20.6299 41.9865 21.4852 42.3193C22.3127 42.6407 23.2569 42.8602 24.6409 42.9232C26.0279 42.9862 26.4703 43.0019 30.001 43.0019C33.5316 43.0019 33.9748 42.9873 35.361 42.9232C36.7451 42.8602 37.6903 42.6407 38.5167 42.3193C39.3716 41.9865 40.0962 41.5422 40.8198 40.8198C41.5433 40.0973 41.9865 39.3716 42.3193 38.5167C42.6407 37.6903 42.8612 36.745 42.9232 35.361C42.9862 33.9738 43.0009 33.5316 43.0009 30.001C43.0009 26.4703 42.9862 26.0271 42.9232 24.6409C42.8602 23.2568 42.6407 22.3112 42.3193 21.4852C41.9865 20.6304 41.5422 19.9058 40.8198 19.1822C40.0973 18.4586 39.3716 18.0145 38.5178 17.6826C37.6903 17.3612 36.745 17.1407 35.3621 17.0787C33.9758 17.0157 33.5327 17 30.002 17C26.4714 17 26.0279 17.0147 24.6409 17.0787Z"
                    fill="white"
                  />
                  <path
                    d="M25.668 30.001C25.668 27.6076 27.6076 25.667 30.001 25.667C32.3943 25.667 34.335 27.6076 34.335 30.001C34.335 32.3943 32.3943 34.335 30.001 34.335C27.6076 34.335 25.668 32.3943 25.668 30.001ZM23.3251 30.001C23.3251 33.688 26.3139 36.6768 30.001 36.6768C33.688 36.6768 36.6768 33.688 36.6768 30.001C36.6768 26.3139 33.688 23.3251 30.001 23.3251C26.3139 23.3251 23.3251 26.3139 23.3251 30.001ZM35.381 23.0604C35.3809 23.369 35.4722 23.6707 35.6436 23.9273C35.8149 24.1839 36.0585 24.384 36.3435 24.5022C36.6285 24.6204 36.9422 24.6514 37.2449 24.5913C37.5475 24.5312 37.8256 24.3828 38.0438 24.1647C38.2621 23.9466 38.4108 23.6686 38.4711 23.366C38.5314 23.0634 38.5007 22.7497 38.3827 22.4646C38.2647 22.1795 38.0649 21.9357 37.8084 21.7642C37.5519 21.5927 37.2503 21.5011 36.9417 21.5009H36.9411C36.5275 21.5011 36.1309 21.6655 35.8384 21.9579C35.5458 22.2503 35.3813 22.6468 35.381 23.0604ZM24.7486 40.5835C23.481 40.5257 22.7921 40.3146 22.3342 40.1362C21.7273 39.8999 21.2942 39.6185 20.8388 39.1637C20.3835 38.709 20.1016 38.2764 19.8664 37.6694C19.6879 37.2117 19.4767 36.5226 19.4191 35.255C19.3561 33.8846 19.3435 33.473 19.3435 30.0011C19.3435 26.5292 19.3571 26.1187 19.4191 24.7471C19.4768 23.4796 19.6895 22.7918 19.8664 22.3328C20.1027 21.7258 20.3841 21.2927 20.8388 20.8374C21.2935 20.382 21.7262 20.1002 22.3342 19.8649C22.7919 19.6864 23.481 19.4753 24.7486 19.4177C26.119 19.3546 26.5306 19.342 30.001 19.342C33.4713 19.342 33.8834 19.3557 35.2549 19.4177C36.5225 19.4754 37.2103 19.6881 37.6693 19.8649C38.2762 20.1002 38.7093 20.3826 39.1647 20.8374C39.62 21.2921 39.9008 21.7258 40.1372 22.3328C40.3156 22.7904 40.5268 23.4796 40.5844 24.7471C40.6474 26.1187 40.66 26.5292 40.66 30.0011C40.66 33.473 40.6474 33.8835 40.5844 35.255C40.5267 36.5226 40.3145 37.2115 40.1372 37.6694C39.9008 38.2764 39.6194 38.7094 39.1647 39.1637C38.71 39.6181 38.2762 39.8999 37.6693 40.1362C37.2116 40.3147 36.5225 40.5258 35.2549 40.5835C33.8845 40.6465 33.4729 40.6591 30.001 40.6591C26.5291 40.6591 26.1186 40.6465 24.7486 40.5835ZM24.6409 17.0787C23.2569 17.1418 22.3112 17.3612 21.4852 17.6826C20.6299 18.0145 19.9058 18.4597 19.1822 19.1822C18.4586 19.9046 18.0145 20.6299 17.6826 21.4852C17.3612 22.3117 17.1418 23.2569 17.0787 24.6409C17.0147 26.0271 17 26.4703 17 30.001C17 33.5316 17.0147 33.9748 17.0787 35.361C17.1418 36.7451 17.3612 37.6903 17.6826 38.5167C18.0145 39.3716 18.4587 40.0976 19.1822 40.8198C19.9057 41.5419 20.6299 41.9865 21.4852 42.3193C22.3127 42.6407 23.2569 42.8602 24.6409 42.9232C26.0279 42.9862 26.4703 43.0019 30.001 43.0019C33.5316 43.0019 33.9748 42.9873 35.361 42.9232C36.7451 42.8602 37.6903 42.6407 38.5167 42.3193C39.3716 41.9865 40.0962 41.5422 40.8198 40.8198C41.5433 40.0973 41.9865 39.3716 42.3193 38.5167C42.6407 37.6903 42.8612 36.745 42.9232 35.361C42.9862 33.9738 43.0009 33.5316 43.0009 30.001C43.0009 26.4703 42.9862 26.0271 42.9232 24.6409C42.8602 23.2568 42.6407 22.3112 42.3193 21.4852C41.9865 20.6304 41.5422 19.9058 40.8198 19.1822C40.0973 18.4586 39.3716 18.0145 38.5178 17.6826C37.6903 17.3612 36.745 17.1407 35.3621 17.0787C33.9758 17.0157 33.5327 17 30.002 17C26.4714 17 26.0279 17.0147 24.6409 17.0787Z"
                    fill="white"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_306_3626"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(15.9376 64.6213) rotate(-90) scale(59.4644 55.3066)"
                    >
                      <stop stopColor="#FFDD55" />
                      <stop offset="0.1" stopColor="#FFDD55" />
                      <stop offset="0.5" stopColor="#FF543E" />
                      <stop offset="1" stopColor="#C837AB" />
                    </radialGradient>
                  </defs>
                </svg>
              </Link>
              <Link
                href="https://x.com/lemolite_tech"
                target="_blank"
                className="hover:text-gray-300 transition"
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:scale-105 transition-transform w-8 h-8"
                >
                  <rect width="60" height="60" rx="30" fill="white" />
                  <path
                    d="M37.6038 19H41.4208L33.0819 28.5308L42.8919 41.5H35.2108L29.1946 33.6342L22.3108 41.5H18.4915L27.4108 31.3058L18 19H25.8761L31.3142 26.1896L37.6038 19ZM36.2642 39.2154H38.3792L24.7269 21.1646H22.4573L36.2642 39.2154Z"
                    fill="black"
                  />
                </svg>
              </Link>
              <Link
                href="https://dribbble.com/lemolitetechnologies"
                target="_blank"
                className="hover:text-gray-300 transition"
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:scale-105 transition-transform w-8 h-8"
                >
                  <rect width="60" height="60" rx="30" fill="#EA4C89" />
                  <path
                    d="M17 30C17 27.6427 17.5807 25.4673 18.742 23.474C19.9033 21.4807 21.4807 19.9033 23.474 18.742C25.4673 17.5807 27.6427 17 30 17C32.3573 17 34.5327 17.5807 36.526 18.742C38.5193 19.9033 40.0967 21.4807 41.258 23.474C42.4193 25.4673 43 27.6427 43 30C43 32.3573 42.4193 34.5327 41.258 36.526C40.0967 38.5193 38.5193 40.0967 36.526 41.258C34.5327 42.4193 32.3573 43 30 43C27.6427 43 25.4673 42.4193 23.474 41.258C21.4807 40.0967 19.9033 38.5193 18.742 36.526C17.5807 34.5327 17 32.3573 17 30ZM19.158 30C19.158 32.704 20.068 35.0873 21.888 37.15C22.72 35.5207 24.0373 33.9693 25.84 32.496C27.6427 31.0227 29.402 30.0953 31.118 29.714C30.858 29.1073 30.6067 28.5613 30.364 28.076C27.3827 29.0293 24.1587 29.506 20.692 29.506C20.016 29.506 19.5133 29.4973 19.184 29.48C19.184 29.5493 19.1797 29.636 19.171 29.74C19.1623 29.844 19.158 29.9307 19.158 30ZM19.496 27.322C19.8773 27.3567 20.4407 27.374 21.186 27.374C24.0807 27.374 26.828 26.984 29.428 26.204C28.1107 23.864 26.6633 21.914 25.086 20.354C23.7167 21.0473 22.5423 22.0093 21.563 23.24C20.5837 24.4707 19.8947 25.8313 19.496 27.322ZM23.37 38.554C25.3287 40.0793 27.5387 40.842 30 40.842C31.2827 40.842 32.5567 40.5993 33.822 40.114C33.4753 37.15 32.7993 34.2813 31.794 31.508C30.1993 31.8547 28.5917 32.73 26.971 34.134C25.3503 35.538 24.15 37.0113 23.37 38.554ZM27.348 19.522C28.8733 21.0993 30.286 23.0667 31.586 25.424C33.9433 24.436 35.72 23.1793 36.916 21.654C34.9053 19.99 32.6 19.158 30 19.158C29.116 19.158 28.232 19.2793 27.348 19.522ZM32.522 27.27C32.782 27.8247 33.0767 28.5267 33.406 29.376C34.6887 29.2547 36.084 29.194 37.592 29.194C38.6667 29.194 39.7327 29.22 40.79 29.272C40.6513 26.9147 39.802 24.8173 38.242 22.98C37.1153 24.6613 35.2087 26.0913 32.522 27.27ZM34.056 31.196C34.94 33.7613 35.538 36.396 35.85 39.1C37.2193 38.216 38.3373 37.0807 39.204 35.694C40.0707 34.3073 40.5907 32.808 40.764 31.196C39.4987 31.1093 38.346 31.066 37.306 31.066C36.3527 31.066 35.2693 31.1093 34.056 31.196Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link
                href="https://x.com/lemolite_tech"
                target="_blank"
                className="hover:text-gray-300 transition"
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:scale-105 transition-transform w-8 h-8"
                >
                  <rect width="60" height="60" rx="30" fill="#1769FF" />
                  <path
                    d="M27.493 29.3616C27.493 29.3616 29.9535 29.1789 29.9535 26.2937C29.9535 23.4082 27.9405 22 25.3907 22H17V38.1245H25.3907C25.3907 38.1245 30.5129 38.2863 30.5129 33.3653C30.5129 33.3653 30.7362 29.3616 27.493 29.3616ZM24.7867 24.866H25.3907C25.3907 24.866 26.5312 24.8659 26.5312 26.5436C26.5312 28.2211 25.8604 28.4643 25.0996 28.4643H20.697V24.866H24.7867ZM25.1536 35.2587H20.697V30.9496H25.3907C25.3907 30.9496 27.0906 30.9273 27.0906 33.164C27.0906 35.0501 25.8209 35.2444 25.1536 35.2587ZM37.3442 26.1026C31.1432 26.1026 31.1487 32.2981 31.1487 32.2981C31.1487 32.2981 30.7233 38.4618 37.3442 38.4618C37.3442 38.4618 42.8616 38.777 42.8616 34.174H40.0241C40.0241 34.174 40.1187 35.9074 37.4388 35.9074C37.4388 35.9074 34.6009 36.0976 34.6009 33.1021H42.9562C42.9562 33.1021 43.8704 26.1026 37.3442 26.1026ZM34.5697 30.9496C34.5697 30.9496 34.9162 28.4643 37.4072 28.4643C39.8978 28.4643 39.8666 30.9496 39.8666 30.9496H34.5697ZM40.5276 24.9356H33.875V22.9499H40.5276V24.9356Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <nav
      ref={menuRef}
      className={`w-full top-0 z-50 transition-all duration-500 pb-4 md:p-0 ${
        isSticky
          ? "sticky bg-white backdrop-blur-md shadow-md"
          : `relative bg-${headerBg} ${navPos}`
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center py-4 transition-all duration-500">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Lemolite Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>
        {/* Desktop Menu */}
        {/* <div className="hidden md:flex space-x-8 text-gray-700 font-medium justify-center flex-1"> */}
        <div className="hidden lg:flex space-x-8 text-gray-700 font-medium justify-center flex-1">
          <ul className="flex space-x-8 text-gray-700 font-medium static">
            {menus.map((menu) => {
              const hasDropdown =
                (menu.items && menu.items.length > 0) ||
                (menu.columns && menu.columns.length > 0);

              return (
                <li key={menu.title} className="static group relative">
                  {/* Main menu link + dropdown toggle */}
                  <div className="flex items-center gap-1">
                    <Link
                      href={menu.href}
                      onClick={closeDropdown}
                      className={`relative inline-block pb-1 transition-colors duration-200
                ${menu.isHighlighted ? "is-highlighted" : ""}
              `}
                    >
                      {menu.title}

                      {/* Animated bottom line */}
                      <span className="menu-underline" />
                    </Link>

                    {hasDropdown && (
                      <button
                        onClick={() => toggleMenu(menu.title)}
                        className="p-1 text-[#212121]/80 hover:text-black transition"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform cursor-pointer ${
                            activeMenu === menu.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mega Menu Rendering */}
                  {hasDropdown &&
                    activeMenu === menu.title &&
                    ["Services", "Tech Stack", "Company"].includes(
                      menu.title,
                    ) &&
                    renderMegaMenu(menu)}
                </li>
              );
            })}
          </ul>
        </div>
        {/* CTA Button */}

        <div className="hidden lg:block">
          <Grediantbutton
            variant="green"
            btntext=" Book a call"
            targetBlank="true"
            onClick={() => {
              openPopup();
            }}
          />
        </div>
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          // className="md:hidden text-gray-800 focus:outline-none"
          className="lg:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pl-4 mt-2 space-y-4 border-l border-gray-200 max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
          >
            <ul className="space-y-3 pt-2">
              {menus.map((menu) => {
                const hasDropdown =
                  (menu.items && menu.items.length > 0) ||
                  (menu.columns && menu.columns.length > 0);

                return (
                  <li key={menu.title}>
                    <div className="flex justify-between items-center">
                      <Link
                        href={menu.href}
                        onClick={() => setIsOpen(false)}
                        className="font-semibold capitalize text-[#212121]/80 hover:text-black transition"
                      >
                        {menu.title}
                      </Link>

                      {hasDropdown && (
                        <button
                          onClick={() => toggleMenu(menu.title)}
                          className="p-1 text-[#212121]/80 hover:text-black transition"
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform ${
                              activeMenu === menu.title ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {hasDropdown && activeMenu === menu.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="pl-4 mt-2 space-y-4 border-l border-gray-200"
                        >
                          {/* If using new columns format (for Services / Techstack / Company) */}
                          {menu.columns ? (
                            menu.columns.map((col, colIndex) => (
                              <div key={colIndex}>
                                <h6 className="font-semibold text-gray-800 mb-2">
                                  {col.heading}
                                </h6>
                                <ul className="space-y-1 list-disc list-inside marker:text-[#bfd633]">
                                  {col.items.map((item) => (
                                    <li
                                      key={item.title}
                                      className="flex items-center gap-2"
                                    >
                                      <span className="w-1.5 h-1.5 bg-[#bfd633] rounded-full flex-shrink-0" />
                                      <Link
                                        href={item.href}
                                        onClick={() => {
                                          setIsOpen(false);
                                          setActiveMenu(null);
                                        }}
                                        className="block text-[#212121]/80 hover:text-black transition"
                                      >
                                        {item.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))
                          ) : (
                            /* For simple dropdowns */
                            <ul className="space-y-2">
                              {menu.items?.map((item) => (
                                <li key={item.title}>
                                  <Link
                                    href={item.href}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setActiveMenu(null);
                                    }}
                                    className="block text-[#212121]/80 hover:text-black transition"
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>

            {/* Mobile CTA Button */}
            <div className="mt-6">
              {/* <Link
                target="blank"
                href="https://calendly.com/lemolite-sales/product-demo?month=2025-06"
                className="block w-full relative overflow-hidden text-center border-2 border-[#bfd633] text-black font-semibold px-5 py-2 rounded-full transition-all duration-500 group"
              >
                <span className="relative z-10 transition-all duration-300 capitalize text-center group-hover:text-white">
                  Book a call
                </span>
                <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-[#2ec4f3] to-[#bfd633] transition-all duration-500 group-hover:w-full"></span>
              </Link> */}
              <Grediantbutton
                variant="green"
                btntext=" Book a call"
                targetBlank="true"
                onClick={() => {
                  openPopup();
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
