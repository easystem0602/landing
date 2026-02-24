"use client";

import Image from "next/image";

type ProtectedImageProps = {
  src: string;
  alt: string;
  sizes?: string;
};

export default function ProtectedImage({ src, alt, sizes = "(max-width: 640px) 100vw, 20vw" }: ProtectedImageProps) {
  return (
    <div
      className="no-download relative mt-4 aspect-video w-full overflow-hidden rounded-lg bg-slate-100"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} draggable={false} />
    </div>
  );
}
