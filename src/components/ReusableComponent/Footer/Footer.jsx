"use client";

import Link from "next/link";
import Image from "next/image";
import Followus from "./Followus";

export default function Footer() {
  const sections = [
    {
      title: "Services",
      links: [
        { href: "/services/ui-ux-design", label: "UI/UX Design" },
        { href: "/services/e-commerce", label: "E-Commerce" },
        { href: "/services/web-development", label: "Web Development" },
        {
          href: "/services/mobile-app-development",
          label: "Mobile App Development",
        },
        {
          href: "/services/custom-software-development",
          label: "Custom Software Development",
        },
        {
          href: "/services/ot-cybersecurity",
          label: "Secure Product Lifecycle Solutions",
        },
      ],
    },
    {
      title: "Intelligent Automation",
      links: [
        { href: "/services/ai-ml-development", label: "AI & ML Development" },
        { href: "/services/internet-of-things", label: "Internet of Things" },
        { href: "/services/chatbot-development", label: "Chatbot Development" },
        {
          href: "/services/voicebot-development",
          label: "Voicebot Development",
        },
      ],
    },
    {
      title: "Hire Resources",
      links: [
        {
          href: "/services/hire-python-developer",
          label: "Hire Python Developers",
        },
        {
          href: "/services/hire-mern-developer",
          label: "Hire MERN Developers",
        },
        {
          href: "/services/hire-reactjs-developer",
          label: "Hire React JS Developers",
        },
        {
          href: "/services/hire-nodejs-developer",
          label: "Hire Node JS Developers",
        },
        { href: "/services/hire-php-developer", label: "Hire PHP Developers" },
        {
          href: "/services/hire-laravel-developer",
          label: "Hire Laravel Developers",
        },
        {
          href: "/services/hire-angular-developer",
          label: "Hire Angular Developers",
        },
        {
          href: "/services/hire-vuejs-developer",
          label: "Hire Vue JS Developers",
        },
        {
          href: "/services/hire-shopify-developer",
          label: "Hire Shopify Developers",
        },
      ],
    },
    {
      title: "Tech Stack",
      links: [
        {
          href: "/techstack/reactjs-development",
          label: "React JS Development",
        },
        {
          href: "/techstack/angular-development",
          label: "Angular Development",
        },
        { href: "/techstack/vuejs-development", label: "Vue JS Development" },
        // { href: "/techstack/flutter-development", label: "Flutter Development" },
        { href: "/techstack/nodejs-development", label: "Node JS Development" },
        {
          href: "/techstack/laravel-development",
          label: "Laravel Development",
        },
        { href: "/techstack/php-development", label: "PHP Development" },
        { href: "/techstack/mern-development", label: "MERN Development" },
        { href: "/techstack/python-development", label: "Python Development" },
        {
          href: "/techstack/shopify-development",
          label: "Shopify Development",
        },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/blog", label: "Blog" },
        { href: "/careers", label: "Careers" },
        { href: "/about-us", label: "About Us" },
        { href: "/contact-us", label: "Contact Us" },
        { href: "/life-at-lemolite", label: "Life@Lemolite" },
        // { href: '/sitemap', label: 'Sitemap' },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white" id="black-section">
      <div className="container mx-auto px-4 pt-10 pb-6">
        {/* --- Link Sections --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {sections.map(({ title, links }) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2 text-[15px] font-light capitalize">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="hover:text-gray-300 transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-gray-700 mt-6 mb-4" />

        {/* --- Bottom Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          {/* Social Icons */}
          <Followus />

          {/* Copyright + Links */}
          <div className="text-center md:text-center">
            <p>
              © Lemolite Technologies LLP {new Date().getFullYear()} — All
              rights reserved
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Link href="/terms-conditions" className="hover:underline">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Reviews */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.google.com/search?q=Lemolite+Technologies+LLP+Reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/googlereview.svg"
                alt="Google review"
                width={96}
                height={40}
                className="object-contain"
              />
            </Link>
            <Link
              href="https://clutch.co/profile/lemolite-technologies-llp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/clutchreview.svg"
                alt="Clutch review"
                width={96}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Metricool pixel */}
      <img
        src="https://tracker.metricool.com/c3po.jpg?hash=f2262c22e03264dd900d58da0715c45f"
        alt=""
        className="hidden"
      />
    </footer>
  );
}
