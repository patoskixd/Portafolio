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

// Detectar si una imagen es de chatbot/widget
function isChatbotImage(imagePath: string): boolean {
  const lowerPath = imagePath.toLowerCase();
  return lowerPath.includes("chatbot") || lowerPath.includes("chat-");
}

export function ImageGallery({ images, title, layout = "auto" }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!images || images.length === 0) return null;

  // Detectar tipo de imagen actual
  const currentImage = images[selectedIndex];
  const isCurrentMobile = layout === "vertical" || (layout === "auto" && isMobileImage(currentImage));
  const isCurrentChatbot = isChatbotImage(currentImage);

  // Determinar el aspect ratio según el tipo de imagen actual
  const aspectClass = isCurrentMobile ? "aspect-[9/16]" : "aspect-video";
  const containerWidth = isCurrentMobile ? "w-full max-w-[280px]" : "w-full";

  return (
    <>
      {/* Gallery Grid */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="flex justify-center">
          {isCurrentMobile ? (
            /* Phone mockup for mobile images */
            <div
              className="group relative cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="relative w-56 sm:w-64 md:w-72">
                <div className="overflow-hidden rounded-[2.5rem] border-[6px] border-zinc-300 bg-zinc-200 shadow-2xl ring-2 ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:ring-zinc-700">
                  <div className="relative aspect-[9/19.5]">
                    <Image
                      src={images[selectedIndex]}
                      alt={`${title} - Imagen ${selectedIndex + 1}`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center rounded-[2.5rem] bg-black/0 transition-colors group-hover:bg-black/10">
                <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-900 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  Click para ampliar
                </span>
              </div>
            </div>
          ) : isCurrentChatbot ? (
            /* Chat widget mockup for chatbot images */
            <div
              className="group relative cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="relative w-72 sm:w-80 md:w-96">
                {/* Chat window frame - sin header ya que está en la imagen */}
                <div className="overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700">
                  {/* Chat content */}
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={images[selectedIndex]}
                      alt={`${title} - Imagen ${selectedIndex + 1}`}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                {/* Floating shadow effect */}
                <div className="absolute -bottom-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-black/20 blur-xl" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black/0 transition-colors group-hover:bg-black/10">
                <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-900 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  Click para ampliar
                </span>
              </div>
            </div>
          ) : (
            /* Safari browser mockup for web images */
            <div
              className="group relative cursor-pointer w-full"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="relative w-full">
                {/* Safari window frame */}
                <div className="overflow-hidden rounded-xl shadow-2xl">
                  {/* Safari header */}
                  <div className="flex items-center gap-2 bg-zinc-200 dark:bg-zinc-800 px-4 py-2.5">
                    {/* Traffic lights */}
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-[#ff5f57]"></div>
                      <div className="h-3 w-3 rounded-full bg-[#febc2e]"></div>
                      <div className="h-3 w-3 rounded-full bg-[#28c840]"></div>
                    </div>
                  </div>
                  {/* Browser content */}
                  <div className="relative aspect-video">
                    <Image
                      src={images[selectedIndex]}
                      alt={`${title} - Imagen ${selectedIndex + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 transition-colors group-hover:bg-black/10">
                <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-900 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  Click para ampliar
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex justify-center gap-3 overflow-x-auto pb-2">
            {images.map((image, index) => {
              const isThumbnailMobile = layout === "vertical" || (layout === "auto" && isMobileImage(image));
              const isThumbnailChatbot = isChatbotImage(image);
              return (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`relative flex-shrink-0 overflow-hidden bg-white dark:bg-zinc-800 transition-all ${
                    isThumbnailMobile 
                      ? "h-20 w-12 rounded-xl border-2 border-zinc-300 dark:border-zinc-600" 
                      : isThumbnailChatbot
                        ? "h-20 w-16 rounded-xl border-2 border-zinc-300 dark:border-zinc-600"
                        : "h-16 w-24 rounded-lg border-2 border-zinc-300 dark:border-zinc-600"
                  } ${
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
          {isCurrentMobile ? (
            /* Phone mockup for mobile images in lightbox */
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-72 sm:w-80 md:w-96">
                <div className="overflow-hidden rounded-[3rem] border-[8px] border-zinc-800 bg-zinc-900 shadow-2xl ring-2 ring-zinc-700/50">
                  <div className="relative aspect-[9/19.5]">
                    <Image
                      src={images[selectedIndex]}
                      alt={`${title} - Imagen ${selectedIndex + 1}`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-zinc-900" />
              </div>
            </div>
          ) : isCurrentChatbot ? (
            /* Chat widget mockup in lightbox - sin header */
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-80 sm:w-96 md:w-[28rem]">
                {/* Chat window frame */}
                <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
                  {/* Chat content */}
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={images[selectedIndex]}
                      alt={`${title} - Imagen ${selectedIndex + 1}`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                {/* Floating shadow */}
                <div className="absolute -bottom-6 left-1/2 h-12 w-3/4 -translate-x-1/2 rounded-full bg-black/30 blur-2xl" />
              </div>
            </div>
          ) : (
            /* Safari browser mockup in lightbox */
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-[95vw] max-w-6xl">
                {/* Safari window frame */}
                <div className="overflow-hidden rounded-xl shadow-2xl">
                  {/* Safari header */}
                  <div className="flex items-center gap-2 bg-zinc-800 px-4 py-3">
                    {/* Traffic lights */}
                    <div className="flex gap-2">
                      <div className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]"></div>
                      <div className="h-3.5 w-3.5 rounded-full bg-[#febc2e]"></div>
                      <div className="h-3.5 w-3.5 rounded-full bg-[#28c840]"></div>
                    </div>
                  </div>
                  {/* Browser content */}
                  <div className="relative aspect-video">
                    <Image
                      src={images[selectedIndex]}
                      alt={`${title} - Imagen ${selectedIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
