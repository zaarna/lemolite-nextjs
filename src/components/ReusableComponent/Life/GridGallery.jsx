import React from "react";

function GridGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div class="grid gap-4">
        <div className="border-img group image-overlay overflow-hidden rounded-3xl">
          <img
            class="h-auto max-w-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            src="/photos2.webp"
            alt=""
          />
        </div>
        <div className="border-img group image-overlay overflow-hidden rounded-3xl">
          <img
            class="h-auto max-w-full  transition-transform duration-300 ease-in-out group-hover:scale-105"
            src="/photos3.webp"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div className="border-img group image-overlay overflow-hidden rounded-3xl">
          <img
            class="h-auto max-w-full  transition-transform duration-300 ease-in-out group-hover:scale-105"
            src="/photos1.webp"
            alt=""
          />
        </div>
        <div className="border-img group image-overlay overflow-hidden rounded-3xl">
          <img
            class="h-auto max-w-full  transition-transform duration-300 ease-in-out group-hover:scale-105"
            src="/photos4.webp"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div className="border-img group image-overlay overflow-hidden rounded-3xl">
          <img
            class="h-auto max-w-full  transition-transform duration-300 ease-in-out group-hover:scale-105"
            src="/photos5.webp"
            alt=""
          />
        </div>
        <div className="border-img group image-overlay overflow-hidden rounded-3xl">
          <img
            class="h-auto max-w-full  transition-transform duration-300 ease-in-out group-hover:scale-105"
            src="/photos6.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default GridGallery;
