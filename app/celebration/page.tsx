"use client";

import { useState } from "react";

const TOTAL_IMAGES = 94;
const PER_PAGE = 12;

const images = Array.from(
  { length: TOTAL_IMAGES },
  (_, i) => `/celebration/celebration-${i + 1}.jpg`
);

export default function CelebrationPage() {
  const [page, setPage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const totalPages = Math.ceil(images.length / PER_PAGE);
  const start = page * PER_PAGE;
  const currentImages = images.slice(start, start + PER_PAGE);

  const openLightbox = (indexOnPage: number) => {
    setLightboxIndex(start + indexOnPage);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const showNext = () => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % images.length
    );
  };

  const showPrev = () => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length
    );
  };

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Banner */}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-[280px] overflow-hidden">
        <img
          src="/celebration-banner.jpg"
          alt="Celebration"
          className="h-full w-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-gray-100 text-3xl sm:text-4xl md:text-5xl font-serif">
            Celebration
          </h1>
        </div>
      </section>

      {/* Thumbnail Grid */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {currentImages.map((src, i) => (
            <button
              key={start + i}
              onClick={() => openLightbox(i)}
              className="relative aspect-[4/3] overflow-hidden border border-gray-700 hover:opacity-80 transition-opacity"
            >
              <img
                src={src}
                alt={`Celebration photo ${start + i + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-10 text-sm">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="px-3 py-1.5 border border-gray-600 disabled:opacity-30 hover:bg-white/10"
          >
            Prev
          </button>

          <span className="text-gray-300">
            Page {page + 1} of {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            className="px-3 py-1.5 border border-gray-600 disabled:opacity-30 hover:bg-white/10"
          >
            Next
          </button>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-6 text-white text-3xl leading-none hover:text-gray-300"
            aria-label="Close"
          >
            &times;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 sm:left-6 text-white text-4xl px-3 py-2 hover:text-gray-300"
            aria-label="Previous photo"
          >
            &lsaquo;
          </button>

          <img
            src={images[lightboxIndex]}
            alt={`Celebration photo ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] object-contain"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 sm:right-6 text-white text-4xl px-3 py-2 hover:text-gray-300"
            aria-label="Next photo"
          >
            &rsaquo;
          </button>

          <span className="absolute bottom-6 text-gray-300 text-sm">
            {lightboxIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </main>
  );
}