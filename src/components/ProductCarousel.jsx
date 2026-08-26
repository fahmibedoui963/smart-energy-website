"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const labels = {
  fr: { prev: "Carte précédente", next: "Carte suivante" },
  en: { prev: "Previous card", next: "Next card" },
};

const FLIP_MS = 900;

export default function ProductCarousel({ items = [], locale = "fr" }) {
  const n = items.length;
  const isRTL = false;
  const t = labels[locale] || labels.fr;

  const [current, setCurrent] = useState(0);
  const [pending, setPending] = useState(0);
  const [angle, setAngle] = useState(0);
  const [turning, setTurning] = useState(false);

  const reducedRef = useRef(false);
  const hoverRef = useRef(false);
  const turningRef = useRef(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    turningRef.current = turning;
  }, [turning]);

  const goTo = useCallback(
    (target) => {
      if (n === 0) return;
      const safe = ((target % n) + n) % n;
      if (safe === current) return;
      if (reducedRef.current) {
        setCurrent(safe);
        setPending(safe);
        return;
      }
      if (turningRef.current) return;
      const diff = (safe - current + n) % n;
      const forward = diff > 0 && diff <= Math.floor(n / 2);
      setPending(safe);
      setTurning(true);
      setAngle(isRTL ? (forward ? 180 : -180) : forward ? -180 : 180);
    },
    [current, isRTL, n]
  );

  const commit = () => {
    setCurrent(pending);
    setTurning(false);
    setAngle(0);
  };

  const next = useCallback(() => goTo((current + 1) % n), [current, goTo, n]);
  const prev = useCallback(() => goTo((current - 1 + n) % n), [current, goTo, n]);

  useEffect(() => {
    if (reducedRef.current) return;
    intervalRef.current = setInterval(() => {
      if (!hoverRef.current && !turningRef.current) next();
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, [next]);

  const Card = ({ product }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 h-full flex flex-col justify-center text-center">
      <div className="text-4xl mb-4">{product.icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-gray-600 text-base">{product.desc}</p>
    </div>
  );

  return (
    <div className="max-w-md mx-auto" onMouseEnter={() => (hoverRef.current = true)} onMouseLeave={() => (hoverRef.current = false)}>
      <div className="relative h-56" style={{ perspective: "1200px" }}>
        <div className="absolute inset-0">
          <Card product={items[pending]} />
        </div>
        <div
          className="absolute inset-0"
          style={{
            transform: `rotateY(${angle}deg)`,
            transformOrigin: isRTL ? "right center" : "left center",
            transition: turning ? `transform ${FLIP_MS}ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms ease-in-out` : "none",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            boxShadow: turning ? "12px 0 28px rgba(0,0,0,0.25)" : "0 1px 3px rgba(0,0,0,0.1)",
          }}
          onTransitionEnd={(e) => {
            if (e.propertyName === "transform") commit();
          }}
        >
          <Card product={items[current]} />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={prev}
          aria-label={t.prev}
          className="h-10 w-10 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Carte ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${i === current ? "w-6 bg-green-600" : "w-2.5 bg-gray-300 hover:bg-gray-400"}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label={t.next}
          className="h-10 w-10 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
          </svg>
        </button>
      </div>
    </div>
  );
}
