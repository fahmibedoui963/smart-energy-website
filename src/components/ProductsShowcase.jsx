"use client";

import { useEffect, useRef, useState } from "react";

export default function ProductsShowcase({ t, locale }) {
  const catRefs = useRef([]);
  const observersRef = useRef([]);
  const [visible, setVisible] = useState(() => t.categories.map(() => false));

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setVisible(t.categories.map(() => true));
      return () => {};
    }
    catRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible((prev) => {
                if (prev[i]) return prev;
                const next = [...prev];
                next[i] = true;
                return next;
              });
              obs.disconnect();
            }
          });
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      observersRef.current.push(obs);
    });
    return () => observersRef.current.forEach((obs) => obs.disconnect());
  }, [t]);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {t.categories.map((cat, ci) => (
          <div key={cat.anchor} id={cat.anchor} ref={(el) => (catRefs.current[ci] = el)} className="scroll-mt-24">
            <h2 className={`${visible[ci] ? "animate-brand-drop" : "opacity-0"} text-4xl md:text-5xl font-extrabold mb-6 text-center bg-gradient-to-r ${cat.gradient} bg-clip-text text-transparent`}>
              {cat.category}
            </h2>
            <p
              className={`${visible[ci] ? "animate-brand-drop" : "opacity-0"} text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-12 text-center leading-relaxed`}
              style={visible[ci] ? { animationDelay: "0.18s" } : undefined}
            >
              {cat.intro.map((seg, si) =>
                seg.b ? (
                  <strong key={si} className="font-bold">{seg.t}</strong>
                ) : (
                  <span key={si}>{seg.t}</span>
                )
              )}
            </p>
            <div className={`grid gap-6 sm:grid-cols-2 ${cat.cols}`}>
              {cat.items.map((item, i) => (
                <div
                  key={item.name}
                  className={`${visible[ci] ? "animate-brand-drop" : "opacity-0"} brand-card h-64 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                  style={visible[ci] ? { animationDelay: `${0.36 + i * 0.12}s` } : undefined}
                >
                  <div className="brand-inner">
                    <div className={`brand-face brand-front rounded-xl bg-white border border-gray-200 border-t-4 ${cat.cardBorder} shadow-md flex flex-col items-center justify-center p-6 text-center`}>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">{item.name}</h3>
                    </div>
                    <div className="brand-face brand-back rounded-xl bg-gray-50 border border-gray-200 border-t-4 p-6 flex flex-col justify-center shadow-lg">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
