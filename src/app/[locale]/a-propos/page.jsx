"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";

const content = {
  fr: {
    title: "À propos de Smart Energy",
    desc: "L'expert tunisien de l'installation photovoltaïque. Étude, fourniture, pose, démarches, SAV : votre projet solaire clé en main, partout en Tunisie.",
    mission: {
      title: "Notre mission",
      desc: [
        "Rendre l'énergie solaire accessible, rentable et sans souci pour chaque Tunisien : particulier, agriculteur, industriel, collectivité.",
        "La Tunisie bénéficie de plus de 3000 heures d'ensoleillement par an, l'une des meilleures ressources solaires au monde. Pourtant, beaucoup paient encore des factures STEG élevées ou dépendent du gasoil.",
        "Notre rôle : transformer ce potentiel gratuit en économies concrètes, avec une installation fiable, certifiée et accompagnée de A à Z."
      ]
    },
    stats: [
      { value: 1000, prefix: "+", suffix: "", label: "Installations réalisées", delay: 0 },
      { value: 12, prefix: "+", suffix: " ans", label: "Ans d'expérience", delay: 75 },
      { value: 24, prefix: "", suffix: "", label: "Gouvernorats couverts", delay: 150 },
      { value: 98, prefix: "", suffix: "%", label: "Clients satisfaits", delay: 225 },
    ],
    values: [
      { icon: "🎯", title: "Transparence", desc: "Devis clairs, pas de frais cachés, simulation réaliste basée sur vos vrais kWh" },
      { icon: "🤝", title: "Proximité", desc: "Équipe locale, déplacement sur site gratuit, accompagnement admin STEG/ANME inclus" },
      { icon: "⚡", title: "Qualité", desc: "Matériel Tier 1, pose soignée, respect normes, tests de réception complets" },
      { icon: "🔄", title: "Durabilité", desc: "Solutions dimensionnées pour 25+ ans, SAV réactif, monitoring inclus" }
    ],
    valuesTitle: "Nos valeurs",
    engagementsTitle: "Nos engagements",
    engagements: [
      { bold: "Réduction de l'empreinte carbone", rest: " grâce à des installations photovoltaïques fiables et écologiques." },
      { bold: "Valorisation de l'énergie solaire en Tunisie", rest: " avec plus de 3000 heures d'ensoleillement annuel pour une production énergétique optimale." },
      { bold: "Baisse significative des factures d'électricité", rest: " pour particuliers, entreprises et sites agricoles." },
      { bold: "Respect strict des normes de qualité, sécurité et conformité STEG/ANME", rest: " sur chaque projet photovoltaïque." },
      { bold: "Accompagnement complet", rest: " dans les démarches administratives et la procédure STEG pour faciliter l'accès à l'énergie solaire." }
    ],
    engagementsClosing: "Smart Energy : votre partenaire pour une énergie durable, propre et rentable en Tunisie.",
    teamTitle: "Notre équipe",
    teamDesc: [
      "Smart Energy s'appuie sur une équipe d'ingénieurs, de techniciens et de chefs de projet qualifiés, disposant d'une solide expérience dans les systèmes photovoltaïques et les solutions énergétiques.",
      "Nos équipes assurent l'étude, l'installation, la mise en service et le suivi de chaque projet dans le respect des normes de qualité, de sécurité et d'environnement."
    ],
    teamPhotos: ["/photos/solar-1.png", "/photos/solar-3.png"],
    cta: "Demander mon étude gratuite",
    ctaTitle: "Prêt à démarrer votre projet ?",
    ctaDesc: "Étude gratuite, sans engagement. Réponse sous 24h avec dimensionnement et estimation d'économies."
  },
  en: {
    title: "About Smart Energy",
    desc: "The Tunisian expert in photovoltaic installation. Study, supply, installation, paperwork, after-sales service: your turnkey solar project, everywhere in Tunisia.",
    mission: {
      title: "Our mission",
      desc: [
        "Making solar energy accessible, profitable and worry-free for every Tunisian: homeowner, farmer, industrialist, municipality.",
        "Tunisia enjoys over 3000 hours of sunshine a year, one of the best solar resources in the world. Yet many still pay high STEG bills or depend on diesel.",
        "Our role: turning this free potential into concrete savings, with a reliable, certified installation supported from A to Z."
      ]
    },
    stats: [
      { value: 1000, prefix: "+", suffix: "", label: "Installations completed", delay: 0 },
      { value: 12, prefix: "+", suffix: " yrs", label: "Years of experience", delay: 75 },
      { value: 24, prefix: "", suffix: "", label: "Governorates covered", delay: 150 },
      { value: 98, prefix: "", suffix: "%", label: "Satisfied clients", delay: 225 },
    ],
    values: [
      { icon: "🎯", title: "Transparency", desc: "Clear quotes, no hidden fees, realistic simulation based on your real kWh" },
      { icon: "🤝", title: "Proximity", desc: "Local team, free site visit, STEG/ANME administrative support included" },
      { icon: "⚡", title: "Quality", desc: "Tier 1 equipment, careful installation, standards compliance, full acceptance tests" },
      { icon: "🔄", title: "Durability", desc: "Solutions designed for 25+ years, responsive after-sales service, monitoring included" }
    ],
    valuesTitle: "Our values",
    engagementsTitle: "Our commitments",
    engagements: [
      { bold: "Reducing our carbon footprint", rest: " through reliable, eco-friendly photovoltaic installations." },
      { bold: "Promoting solar energy in Tunisia", rest: " with over 3000 hours of annual sunshine for optimal energy production." },
      { bold: "Significant reduction in electricity bills", rest: " for homeowners, businesses and agricultural sites." },
      { bold: "Strict compliance with quality, safety and STEG/ANME standards", rest: " on every photovoltaic project." },
      { bold: "Comprehensive support", rest: " with administrative procedures and the STEG process to make solar energy easily accessible." }
    ],
    engagementsClosing: "Smart Energy: your partner for sustainable, clean and profitable energy in Tunisia.",
    teamTitle: "Our team",
    teamDesc: [
      "Smart Energy relies on a team of qualified engineers, technicians and project managers with solid experience in photovoltaic systems and energy solutions.",
      "Our teams handle the study, installation, commissioning and follow-up of every project in compliance with quality, safety and environmental standards."
    ],
    teamPhotos: ["/photos/solar-1.png", "/photos/solar-3.png"],
    cta: "Request my free study",
    ctaTitle: "Ready to start your project?",
    ctaDesc: "Free study, no commitment. Reply within 24 hours with sizing and savings estimate."
  },
};

function AnimatedNumber({ value, prefix = "", suffix = "", duration = 2000, delay = 0, triggered = false }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    const timer = setTimeout(() => {
      let start = 0;
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
    <span className="text-4xl md:text-5xl font-bold text-green-600">
      {prefix}{triggered ? count : 0}{suffix}
    </span>
  );
}

export default function APropos({ params }) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "fr";
  const t = content[locale] || content.fr;

  const [statsTriggered, setStatsTriggered] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));

    const statsEl = document.getElementById("apropos-stats");
    if (statsEl) {
      const statsObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setStatsTriggered(true);
              statsObs.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      statsObs.observe(statsEl);
    }

    return () => { obs.disconnect(); };
  }, []);

  return (
    <main className="flex flex-col">
      <section className="bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-rise">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-rise" style={{ animationDelay: "0.15s" }}>{t.desc}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.mission.title}</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                {t.mission.desc.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div id="apropos-stats" className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                {t.stats.map((stat, i) => (
                  <div key={i}>
                    <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} delay={statsTriggered ? stat.delay : 0} triggered={statsTriggered} />
                    <div className="mt-2 text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">{t.valuesTitle}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {t.values.map((value, idx) => (
              <div key={idx} className="reveal bg-white p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-100 text-center" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-base">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">{t.engagementsTitle}</h2>
            <ul className="space-y-5">
              {t.engagements.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-700 leading-relaxed text-lg">
                    <strong className="font-semibold text-gray-900">{item.bold}</strong>{item.rest}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-center font-bold text-gray-900 text-xl">{t.engagementsClosing}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.teamTitle}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                {t.teamDesc.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="relative h-[420px] reveal" style={{ transitionDelay: "0.15s" }}>
              <div className="absolute top-0 right-0 w-4/5 rounded-2xl overflow-hidden shadow-xl z-10 reveal">
                <Image src={t.teamPhotos[0]} alt="Smart Energy équipe - photo 1" width={400} height={300} loading="lazy" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 w-3/5 rounded-2xl overflow-hidden shadow-2xl z-20 reveal" style={{ transitionDelay: "0.3s" }}>
                <Image src={t.teamPhotos[1]} alt="Smart Energy équipe - photo 2" width={400} height={300} loading="lazy" className="w-full aspect-[4/3] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-900">
          <h2 className="text-4xl font-bold mb-4">{t.ctaTitle}</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{t.ctaDesc}</p>
          <a href={`/${locale}/contact`} className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">{t.cta}</a>
        </div>
      </section>
    </main>
  );
}
