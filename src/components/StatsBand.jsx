"use client";

import { useEffect, useState } from "react";

const statsContent = {
  fr: [
    { value: 1000, prefix: "+", suffix: "", label: "Installations réalisées", delay: 0 },
    { value: 25, prefix: "", suffix: " ans", label: "Garantie panneaux", delay: 75 },
    { value: 98, prefix: "", suffix: "%", label: "Clients satisfaits", delay: 150 },
    { value: 12, prefix: "+", suffix: " ans", label: "Expérience", delay: 225 },
    { value: 24, prefix: "", suffix: "", label: "Gouvernorats couverts", delay: 300 },
  ],
  en: [
    { value: 1000, prefix: "+", suffix: "", label: "Installations completed", delay: 0 },
    { value: 25, prefix: "", suffix: " yrs", label: "Panel warranty", delay: 75 },
    { value: 98, prefix: "", suffix: "%", label: "Satisfied clients", delay: 150 },
    { value: 12, prefix: "+", suffix: " yrs", label: "Experience", delay: 225 },
    { value: 24, prefix: "", suffix: "", label: "Governorates covered", delay: 300 },
  ],
};

function AnimatedNumber({ value, prefix = "", suffix = "", duration = 2000, delay = 0, triggered = false }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    const timer = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(value * eased));
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };
      animate();
    }, delay);
    return () => clearTimeout(timer);
  }, [triggered, value, duration, delay]);

  return (
    <span className="text-3xl md:text-4xl font-bold text-green-600" aria-hidden="true">
      {prefix}{triggered ? count : 0}{suffix}
    </span>
  );
}

export default function StatsBand({ locale = "fr" }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const stats = statsContent[locale] || statsContent.fr;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsSection = document.getElementById("stats-band");
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-band" className="py-12 bg-white border-y border-gray-100" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="stats-heading" className="sr-only">Our key figures</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} delay={stat.delay} triggered={hasAnimated} />
              <div className="mt-2 text-gray-600 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
