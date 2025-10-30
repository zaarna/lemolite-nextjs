"use client";
import Image from "next/image";

export default function EventGallery({ images = [], alt = [] }) {
  console.log("images", images);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* Image 1 */}
      <div className="border-img group image-overlay rounded-3xl overflow-hidden w-full h-[250px]">
        <div className="relative w-full h-full">
          <Image
            src={images[0]}
            alt={alt}
            fill
            className="transition-transform duration-300 ease-in-out group-hover:scale-105 object-fill md:object-cover"
            // sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
