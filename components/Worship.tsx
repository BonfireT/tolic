"use client";

import { useState, useEffect } from "react";

const images = Array.from({ length: 15 }, (_, i) => `/slide-${i + 1}.jpg`);

export default function Worship() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [playing]);

  const goNext = () => setCurrent((prev) => (prev + 1) % images.length);
  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="bg-black px-6 py-12 text-center text-white">
      <div className="mx-auto max-w-md border-t border-gray-700 pt-6">
        <h2 className="font-serif text-2xl italic">Worship!</h2>
      </div>

      <div className="relative mx-auto mt-8 max-w-xl">
        <button
          onClick={() => setPlaying((p) => !p)}
          className="absolute left-2 top-2 z-10 rounded bg-black/60 px-2 py-1 text-xs"
        >
          {playing ? "Pause" : "Play"}
        </button>

        <img
          src={images[current]}
          alt={`Worship slide ${current + 1}`}
          className="h-80 w-full object-cover"
        />

        <button
          onClick={goPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 text-xl"
        >
          ‹
        </button>
        <button
          onClick={goNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 text-xl"
        >
          ›
        </button>
      </div>
    </section>
  );
}