"use client";

import React from "react";

export default function CaseStudyHead() {
  return (
    <section className="top-bottom text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3">
            CASE STUDY
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-xl font-light text-gray-700">
            A case study is about the saying, “A picture is worth a thousand
            words,” by telling compelling stories from our clients' perspectives.
            It highlights development processes, challenges, and solutions. We
            take pride in creating various apps and web portals for our valued
            clients.
          </p>
        </div>
      </div>
    </section>
  );
}
