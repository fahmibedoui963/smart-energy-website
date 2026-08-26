"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const PHOTOS = [
  "/photos/video-1.png",
  "/photos/video-2.png",
  "/photos/video-3.png",
  "/photos/video-4.png",
  "/photos/slide-5.png",
];

const INTERVAL = 5000;

export default function VideoPlaceholder() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const goTo = useCallback((idx) => {
    setSlideIndex(idx);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setSlideIndex((prev) => (prev + 1) % PHOTOS.length);
    }, INTERVAL);
  }, []);

  const goNext = useCallback(() => {
    goTo((slideIndex + 1) % PHOTOS.length);
  }, [slideIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((slideIndex - 1 + PHOTOS.length) % PHOTOS.length);
  }, [slideIndex, goTo]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    timerRef.current = setTimeout(() => {
      setSlideIndex((prev) => (prev + 1) % PHOTOS.length);
    }, INTERVAL);
    return () => clearTimeout(timerRef.current);
  }, [inView, slideIndex]);

  return (
    <div ref={containerRef} className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden select-none group" dir="ltr">
      <div aria-hidden="true" className="hidden lg:block absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-green-100/70 to-transparent pointer-events-none" />
      <div aria-hidden="true" className="hidden lg:block absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-green-100/70 to-transparent pointer-events-none" />

      <div className={`relative z-10 mx-auto h-full w-full max-w-5xl xl:max-w-6xl overflow-hidden ${inView ? "animate-video-slide-in" : "opacity-0"}`}>
        {PHOTOS.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
            className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
              i === slideIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/10 pointer-events-none"
        />

        <button
          type="button"
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Slide précédent"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <button
          type="button"
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Slide suivant"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-2">
          {PHOTOS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === slideIndex
                  ? "w-3 h-3 bg-white shadow-lg"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
