import Image from "next/image";
import React from "react";

function Imagesection({ src, alt }) {
  return (
    <div className="comman--iamge m-auto">
      <Image
        height={400}
        width={400}
        src={src}
        alt={alt}
        className="w-full h-auto"
      />
    </div>
  );
}

export default Imagesection;
