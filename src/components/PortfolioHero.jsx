"use client";

import React from "react";
import Link from "next/link";

const stats = [
  { value: "08+", label: "Projects delivered" },
  { value: "08", label: "Industries served" },
  { value: "04+", label: "Countries worldwide" },
];

export default function PortfolioHero() {
  return (
    <header className="relative container mx-auto px-4 pt-16 pb-4">
      {/* Headline */}
      <h1 className="m-0 font-bold leading-[0.98] tracking-[-0.03em] max-w-[16ch] text-[clamp(32px,8.4vw,78px)]">
        Work that ships, scales, and{" "}
        <span className="bg-gradient-to-r from-[#8aa30f] to-[#2ec4f3] bg-clip-text text-transparent">
          earns trust.
        </span>
      </h1>

      {/* Intro */}
      <p className="mt-6 mb-0 font-normal text-[#4b5563] max-w-[60ch] leading-relaxed text-[clamp(18px,2.4vw,22px)]">
        Custom software, AI &amp; PWAs, web and mobile products we&apos;ve
        designed and delivered for clients across fintech, logistics,
        healthcare, real estate and beyond. Explore the case studies below.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3.5 mt-8">
        <Link
          href="#work"
          className="inline-flex items-center gap-2.5 whitespace-nowrap bg-gray-900 text-white no-underline px-6 py-3.5 rounded-full text-base font-semibold hover:-translate-y-0.5 hover:shadow-xl transition-all duration-150"
        >
          Explore case studies <span aria-hidden="true">↓</span>
        </Link>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2.5 whitespace-nowrap bg-white text-gray-900 no-underline px-6 py-3.5 rounded-full text-base font-semibold border border-[#dbe0cf] hover:border-[#2ec4f3] hover:text-[#0b6a82] transition-colors duration-150"
        >
          Start a project <span aria-hidden="true">↗</span>
        </Link>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap items-center gap-7 mt-10">
        {stats.map((s, i) => (
          <React.Fragment key={s.label}>
            {i > 0 && (
              <span aria-hidden="true" className="w-px h-[34px] bg-[#e2e6d6]" />
            )}
            <div className="flex items-baseline gap-2">
              <span className="text-[38px] font-bold tracking-[-0.02em] text-gray-900 leading-none">
                {s.value}
              </span>
              <span className="text-sm font-medium text-[#5b6270]">
                {s.label}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </header>
  );
}
