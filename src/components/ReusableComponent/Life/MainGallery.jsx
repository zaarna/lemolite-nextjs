"use client";

import Image from "next/image";
import React from "react";

function MainGallery() {
  const images = [
    ["/photos2.webp", "/photos3.webp"],
    ["/photos1.webp", "/photos4.webp"],
    ["/photos5.webp", "/photos6.webp"],
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((column, colIndex) => (
        <div key={colIndex} className="grid gap-4">
          {column.map((src, imgIndex) => (
            <div
              key={imgIndex}
              className="border-img group image-overlay overflow-hidden rounded-3xl"
            >
              <div className="relative w-full h-auto aspect-[4/3]">
                <Image
                  src={src}
                  alt={`Gallery image ${colIndex}-${imgIndex}`}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MainGallery;
