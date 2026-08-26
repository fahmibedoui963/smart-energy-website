"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import Marquee from "@/components/Marquee";
import StatsBand from "@/components/StatsBand";
import HeroSlideshow from "@/components/HeroSlideshow";
import ProductsSection from "@/components/ProductsSection";

const content = {
  fr: {
    hero: {
      title: "Votre énergie solaire,",
      highlight: "partout en Tunisie",
      desc: "Installation professionnelle de panneaux photovoltaïques pour particuliers et professionnels. Raccordé au réseau, site isolé, pompage solaire, éclairage public.",
    },
    video: { title: "Pourquoi le solaire en Tunisie ?" },
    why: {
      title: "Pourquoi choisir Smart Energy ?",
      desc: "Une expertise locale, des équipements de qualité, un accompagnement complet.",
      items: [
        { title: "Expertise certifiée", desc: "Équipe qualifiée et certifiée, conforme aux normes STEG et ANME." },
        { title: "Matériel de qualité", desc: "Panneaux, onduleurs et batteries des meilleures marques mondiales." },
        { title: "Accompagnement complet", desc: "Étude, démarches administratives, installation, mise en service et SAV." },
      ],
    },
    solutions: {
      title: "Nos Solutions",
      items: [
        { title: "Système raccordé aux réseaux STEG", image: "/photos/solution-1.png", slug: "raccorde-au-reseau" },
        { title: "Système de pompage solaire", image: "/photos/solution-2.png", slug: "pompage-solaire" },
        { title: "Site isolé", image: "/photos/solution-3.png", slug: "site-isole" },
        { title: "Éclairage public", image: "/photos/solution-4.png", slug: "eclairage-public" },
      ],
    },
    products: {
      title: "Nos produits",
      desc: "Équipements sélectionnés pour performance et durabilité.",
      cta: "Voir tout",
      items: [
        { name: "Onduleur", image: "/photos/produit-1.png", anchor: "onduleurs" },
        { name: "Batteries", image: "/photos/produit-2.png", anchor: "batteries" },
        { name: "Panneaux solaires", image: "/photos/produit-3.png", anchor: "panneaux" },
      ],
    },
    partners: {
      label: "Marques de confiance",
      title: "Nos Partenaires",
      brands: ["AE Solar", "Trina Solar", "LONGi Solar", "JinkoSolar", "Huawei", "Sungrow", "SMA", "Solax Power", "Growatt", "Must Solar", "Sunbond", "BYD", "ASAD"],
    },
  },
  en: {
    hero: {
      title: "Your solar energy,",
      highlight: "everywhere in Tunisia",
      desc: "Professional photovoltaic panel installation for homes and businesses. Grid-connected, off-grid, solar pumping, street lighting.",
    },
    video: { title: "Why solar energy in Tunisia?" },
    why: {
      title: "Why choose Smart Energy?",
      desc: "Local expertise, quality equipment, and full support.",
      items: [
        { title: "Certified expertise", desc: "Qualified, certified team compliant with STEG and ANME standards." },
        { title: "Quality equipment", desc: "Panels, inverters and batteries from the world's best brands." },
        { title: "Full support", desc: "Study, paperwork, installation, commissioning and after-sales service." },
      ],
    },
    solutions: {
      title: "Our Solutions",
      items: [
        { title: "Grid-connected system", image: "/photos/solution-1.png", slug: "raccorde-au-reseau" },
        { title: "Solar pumping system", image: "/photos/solution-2.png", slug: "pompage-solaire" },
        { title: "Off-grid system", image: "/photos/solution-3.png", slug: "site-isole" },
        { title: "Street lighting", image: "/photos/solution-4.png", slug: "eclairage-public" },
      ],
    },
    products: {
      title: "Our products",
      desc: "Equipment selected for performance and durability.",
      cta: "View all",
      items: [
        { name: "Inverter", image: "/photos/produit-1.png", anchor: "onduleurs" },
        { name: "Batteries", image: "/photos/produit-2.png", anchor: "batteries" },
        { name: "Solar panels", image: "/photos/produit-3.png", anchor: "panneaux" },
      ],
    },
    partners: {
      label: "Trusted brands",
      title: "Our Partners",
      brands: ["AE Solar", "Trina Solar", "LONGi Solar", "JinkoSolar", "Huawei", "Sungrow", "SMA", "Solax Power", "Growatt", "Must Solar", "Sunbond", "BYD", "ASAD"],
    },
  },
};

export default function Home() {
  const params = useParams();
  const locale = params.locale || "fr";
  const t = content[locale] || content.fr;

  const [whyInView, setWhyInView] = useState(false);
  const whyRef = useRef(null);
  const [solutionsInView, setSolutionsInView] = useState(false);
  const solutionsRef = useRef(null);
  const [partnersInView, setPartnersInView] = useState(false);
  const partnersRef = useRef(null);

  const observeSection = (ref, setter) => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setter(true);
      return () => {};
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  };

  useEffect(() => observeSection(whyRef, setWhyInView), []);
  useEffect(() => observeSection(solutionsRef, setSolutionsInView), []);
  useEffect(() => observeSection(partnersRef, setPartnersInView), []);

  return (
    <main className="flex flex-col">
      <section className="relative -mt-16 py-20 md:py-32 overflow-hidden min-h-[500px] flex items-center">
        <HeroSlideshow />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="animate-hero-drop text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ animationDelay: "0.2s" }}
            >
              {t.hero.title}<br />
              <span className="text-green-300">{t.hero.highlight}</span>
            </h1>
            <p
              className="animate-hero-drop text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto"
              style={{ animationDelay: "0.5s" }}
            >
              {t.hero.desc}
            </p>
          </div>
        </div>
      </section>

      <Marquee locale={locale} />

      <section className="bg-white" aria-labelledby="video-heading">
        <VideoPlaceholder />
      </section>

      <StatsBand locale={locale} />

      <section ref={whyRef} className="py-20 bg-gray-50" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              id="why-heading"
              className={`${whyInView ? "animate-why-slide-left" : "opacity-0"} text-4xl md:text-5xl font-bold text-gray-900 mb-4`}
            >
              {t.why.title}
            </h2>
            <p
              className={`${whyInView ? "animate-why-slide-left" : "opacity-0"} text-xl text-gray-600 max-w-2xl mx-auto`}
              style={{ animationDelay: "0.15s" }}
            >
              {t.why.desc}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.why.items.map((item, index) => (
              <div
                key={index}
                className={`${whyInView ? "animate-why-card" : "opacity-0"} group bg-white p-8 rounded-xl border border-transparent shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:border-orange-400 hover:shadow-xl`}
                style={whyInView ? { animationDelay: `${0.3 + index * 0.15}s` } : undefined}
              >
                <div className="mb-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-green-600 transition-colors duration-300 ease-in-out group-hover:bg-orange-500">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={solutionsRef} className="py-20 bg-white" aria-labelledby="solutions-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="solutions-heading"
            className={`${solutionsInView ? "animate-why-slide-left" : "opacity-0"} text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center`}
          >
            {t.solutions.title}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.solutions.items.map((item, index) => (
              <Link
                key={index}
                href={`/${locale}/prestations/${item.slug}`}
                className={`${solutionsInView ? "animate-sol-card" : "opacity-0"} group relative h-72 md:h-80 rounded-xl overflow-hidden shadow-sm block`}
                style={solutionsInView ? { animationDelay: `${0.3 + index * 0.3}s` } : undefined}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-14 text-white font-bold text-xl md:text-2xl leading-snug">{item.title}</h3>
                <div className="absolute bottom-4 right-4 h-9 w-9 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ease-out group-hover:bg-orange-500 group-hover:scale-110">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProductsSection locale={locale} t={t.products} />

      <section ref={partnersRef} className="py-24 bg-gray-50" aria-labelledby="partners-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`${partnersInView ? "animate-why-slide-left" : "opacity-0"} inline-block text-xs font-semibold uppercase tracking-widest text-green-600 mb-3`}>
              {t.partners.label}
            </span>
            <h2
              id="partners-heading"
              className={`${partnersInView ? "animate-why-slide-left" : "opacity-0"} text-4xl md:text-5xl font-bold text-gray-900`}
              style={partnersInView ? { animationDelay: "0.1s" } : undefined}
            >
              {t.partners.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.partners.brands.map((brand, index) => (
              <div
                key={brand}
                className={`${partnersInView ? "animate-why-card" : "opacity-0"} bg-white border border-gray-200 rounded-xl py-7 px-6 text-center transition-all duration-300 ease-in-out hover:shadow-lg hover:border-green-400`}
                style={partnersInView ? { animationDelay: `${0.2 + index * 0.07}s` } : undefined}
              >
                <span className="text-xl md:text-2xl font-bold text-gray-900">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}