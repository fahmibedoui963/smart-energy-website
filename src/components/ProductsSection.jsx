"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function ProductCard({ product, href, index, inView, tiltEnabled, reducedMotion }) {
  const cardRef = useRef(null);

  const applyTilt = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = ((y - 0.5) * -12).toFixed(2);
    const rotateY = ((x - 0.5) * 12).toFixed(2);
    card.style.transition = "transform 0.1s ease-out";
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    card.style.setProperty("--mouse-x", `${(x * 100).toFixed(1)}%`);
    card.style.setProperty("--mouse-y", `${(y * 100).toFixed(1)}%`);
  };

  const resetTilt = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");
  };

  const entranceStyle = reducedMotion
    ? { opacity: inView ? 1 : 0, transition: `opacity 0.6s ease ${index * 0.15}s` }
    : {
        clipPath: inView ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
        transition: `clip-path 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${0.15 * index}s`,
      };

  return (
    <Link
      ref={cardRef}
      href={href}
      onMouseMove={tiltEnabled ? applyTilt : undefined}
      onMouseLeave={tiltEnabled ? resetTilt : undefined}
      className="group relative h-72 md:h-80 rounded-xl overflow-hidden shadow-sm block bg-gray-200 will-change-transform"
      style={entranceStyle}
    >
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.08]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.16), transparent 60%)",
        }}
      />
      <h3 className="absolute bottom-4 left-4 right-14 text-white font-bold text-xl md:text-2xl leading-snug">
        {product.name}
      </h3>
      <div className="absolute bottom-4 right-4 h-9 w-9 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ease-out group-hover:bg-orange-500 group-hover:scale-110">
        <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </Link>
  );
}

export default function ProductsSection({ locale, t }) {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const [tiltEnabled] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  });

  const [reducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const el = sectionRef.current;
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

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="products-heading"
          className={`${inView ? "animate-why-slide-left" : "opacity-0"} text-center text-4xl md:text-5xl font-bold text-gray-900 mb-12`}
        >
          {t.title}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {t.items.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              href={`/${locale}/produits#${product.anchor}`}
              index={index}
              inView={inView}
              tiltEnabled={tiltEnabled}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
