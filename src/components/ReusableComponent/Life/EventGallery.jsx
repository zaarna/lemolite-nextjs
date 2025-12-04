
import Image from "next/image";

export default function EventGallery({ images = [], alt = [] }) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <div className="border-img rounded-3xl overflow-hidden w-full">
        <Image
          src={images[0]}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
}
