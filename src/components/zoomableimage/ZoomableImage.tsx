"use client";
import { useState } from "react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
}

export default function ZoomableImage({
  src,
  alt,
  thumbnailWidth = 200,
  thumbnailHeight = 120,
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:opacity-90 transition"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          width={thumbnailWidth}
          height={thumbnailHeight}
          className="object-cover"
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={src}
              alt={alt}
              className="rounded-lg object-contain max-h-[90vh] w-auto"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 bg-black/60 text-white rounded-full px-3 py-1 text-sm hover:bg-black/80"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
