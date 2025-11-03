import React from "react";

function Gallery({ images = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <div
          key={index}
          className={`border-img group image-overlay rounded-3xl overflow-hidden ${
            index === 1
              ? "md:col-span-2 md:row-span-2 w-full h-[250px] md:h-[520px]"
              : "w-full h-[250px]"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className={`transition-transform duration-300 ease-in-out group-hover:scale-105 w-full h-full ${
              index === 1 ? "object-fill" : "object-fill md:object-cover"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
