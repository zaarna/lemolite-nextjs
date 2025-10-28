import React from "react";

function Imagesection({ src, alt }) {
  return (
    <div className="comman--iamge m-auto">
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
}

export default Imagesection;
