"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { serviceImages } from "@/data/prestations";

const labels = {
  fr: {
    definitionTitle: "Qu'est-ce que c'est ?",
    inBrief: "En bref",
    stepsTitle: "Comment ça se passe ?",
    steps: ["Étude gratuite et dimensionnement", "Démarches administratives (STEG/ANME)", "Installation certifiée", "Mise en service et suivi"],
    benefits: "Avantages en un coup d'œil",
  },
  en: {
    definitionTitle: "What is it?",
    inBrief: "In brief",
    stepsTitle: "How does it work?",
    steps: ["Free study and sizing", "Administrative procedures (STEG/ANME)", "Certified installation", "Commissioning and follow-up"],
    benefits: "Benefits at a glance",
  },
};

const stepIcons = [
  <svg key="1" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>,
  <svg key="2" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  <svg key="3" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
  <svg key="4" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
];

export default function PrestationDetail({ service, locale = "fr" }) {
  const t = labels[locale] || labels.fr;
  const [imageVisible, setImageVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const imageRef = useRef(null);
  const benefitsRef = useRef(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setImageVisible(true);
      return () => {};
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = benefitsRef.current;
    if (!el) return () => {};
    if (!("IntersectionObserver" in window)) {
      setBenefitsVisible(true);
      return () => {};
    }
    let scrolled = false;
    const onScroll = () => {
      if (window.scrollY > 0) scrolled = true;
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && scrolled) {
            setBenefitsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="flex flex-col bg-[#faf6ef]">
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={imageRef} className={`${imageVisible ? "animate-hero-drop" : "opacity-0"} bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-6`}>
            <Image
              src={serviceImages[service.slug]}
              alt={service.title}
              width={800}
              height={450}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section ref={benefitsRef} className="py-14 border-b border-gray-100" aria-label={t.benefits}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${benefitsVisible ? "animate-why-slide-left" : "opacity-0"} text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center`}>
            {t.benefits}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.highlights.map((highlight, index) => (
              <div
                key={index}
                className={`${benefitsVisible ? "animate-sol-card" : "opacity-0"} flex flex-col items-center text-center bg-green-50/60 rounded-2xl p-6 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300`}
                style={benefitsVisible ? { animationDelay: `${0.15 + index * 0.12}s` } : undefined}
              >
                <div className="h-10 w-10 rounded-full bg-green-600 text-white flex items-center justify-center mb-4">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium text-gray-900 leading-snug">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border-l-4 border-green-600 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 rounded-full bg-green-100 text-green-700 items-center justify-center">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                {t.definitionTitle}
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">{service.definition}</p>
            </div>

            <article className="bg-white rounded-2xl shadow-sm p-8 prose-invert [&_p]:mb-4 [&_p]:text-gray-700 [&_p]:leading-relaxed [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-gray-900 [&_h4]:mb-2 [&_h4]:mt-6 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2 [&_ul]:mb-4 [&_ul]:text-gray-600 [&_ul]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-gray-900">
              <div dangerouslySetInnerHTML={{ __html: service.description }} />
            </article>
          </div>

          <aside className="lg:sticky lg:top-24 space-y-6">
            <div className="bg-gray-50 border-l-4 border-green-600 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 rounded-full bg-green-100 text-green-700 items-center justify-center">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                {t.inBrief}
              </h3>
              <p className="text-gray-700 leading-relaxed">{service.shortDesc}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t.stepsTitle}</h3>
              <ol className="space-y-4">
                {t.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white ${index === t.steps.length - 1 ? "bg-green-600" : "bg-gray-300"}`}>
                      {stepIcons[index] || index + 1}
                    </span>
                    <span className="text-sm text-gray-700 pt-1.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
