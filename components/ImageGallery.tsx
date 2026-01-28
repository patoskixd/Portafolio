"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  title: string;
  layout?: "horizontal" | "vertical" | "auto"; // Tipo de imágenes por defecto
}

// Detectar si una imagen es de móvil basándose en el nombre
function isMobileImage(imagePath: string): boolean {
  const lowerPath = imagePath.toLowerCase();
  return lowerPath.includes("telegram") || 
         lowerPath.includes("mobile") || 
         lowerPath.includes("movil") ||
         lowerPath.includes("medilab");
}

export function ImageGallery({ images, title, layout = "auto" }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!images || images.length === 0) return null;

  // Detectar si la imagen actual es de móvil
  const currentImage = images[selectedIndex];
  const isCurrentMobile = layout === "vertical" || (layout === "auto" && isMobileImage(currentImage));

  // Determinar el aspect ratio según el tipo de imagen actual
  const aspectClass = isCurrentMobile ? "aspect-[9/16]" : "aspect-video";
  const containerWidth = isCurrentMobile ? "w-full max-w-[280px]" : "w-full";

  return (
    <>
      {/* Gallery Grid */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="flex justify-center">
          <div
            className={`group relative ${aspectClass} ${containerWidth} max-h-[550px] cursor-pointer overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800`}
            onClick={() => setIsModalOpen(true)}
          >
            <Image
              src={images[selectedIndex]}
              alt={`${title} - Imagen ${selectedIndex + 1}`}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
              <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-900 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                Click para ampliar
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex justify-center gap-3 overflow-x-auto pb-2">
            {images.map((image, index) => {
              const isThumbnailMobile = layout === "vertical" || (layout === "auto" && isMobileImage(image));
              return (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`relative ${isThumbnailMobile ? "h-20 w-12" : "h-16 w-24"} flex-shrink-0 overflow-hidden rounded-lg transition-all ${
                    index === selectedIndex
                      ? "ring-2 ring-zinc-900 ring-offset-2 dark:ring-zinc-100"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${title} - Miniatura ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal Lightbox */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Close Button */}
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={() => setIsModalOpen(false)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                }}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                }}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image */}
          <div className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[selectedIndex]}
              alt={`${title} - Imagen ${selectedIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
