"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const conseilsData = {
  fr: [
    { icon: "🔮", title: "Prévoyez vos besoins futurs", text: "Anticipez l'ajout de nouveaux équipements (climatiseurs, voiture électrique) pour concevoir une installation évolutive." },
    { icon: "💧", title: "Planifiez un entretien doux et régulier", text: "Un simple nettoyage à l'eau claire 2 à 3 fois par an (notamment après les vents de sable) préserve jusqu'à 15% de rendement." },
    { icon: "🤝", title: "Demandez votre étude de faisabilité gratuite", text: "Nos experts analysent gratuitement votre profil énergétique et la faisabilité technique de votre toit sans engagement." },
    { icon: "🛡️", title: "Vérifiez la garantie de votre onduleur", text: "L'onduleur est le cœur de votre installation. Assurez-vous qu'il bénéficie d'une garantie constructeur solide et d'un service après-vente réactif en Tunisie." },
    { icon: "⚡", title: "Suivez votre production en temps réel", text: "Grâce à l'application de monitoring de votre onduleur, vérifiez chaque jour l'énergie produite et détectez le moindre dysfonctionnement." },
  ],
  en: [
    { icon: "🔮", title: "Plan for your future needs", text: "Anticipate adding new equipment (air conditioners, electric car) to design an installation that can grow with you." },
    { icon: "💧", title: "Plan gentle, regular maintenance", text: "A simple wash with clean water 2 to 3 times a year (especially after sandstorms) preserves up to 15% of output." },
    { icon: "🤝", title: "Get your free feasibility study", text: "Our experts analyse your energy profile and your roof's technical feasibility for free, with no commitment." },
    { icon: "🛡️", title: "Check your inverter warranty", text: "The inverter is the heart of your installation. Make sure it comes with a solid manufacturer warranty and responsive after-sales service in Tunisia." },
    { icon: "⚡", title: "Track your production in real time", text: "Using your inverter's monitoring app, check the energy produced every day and catch any malfunction early." },
  ],
};

const erreursData = {
  fr: [
    { icon: "🛠️", title: "Confier la pose à des non-spécialistes", text: "L'installation haute tension nécessite un agrément ANME pour garantir la sécurité électrique et l'accès aux aides d'État." },
    { icon: "⚡", title: "Ne pas adapter son abonnement STEG", text: "Une puissance souscrite mal ajustée auprès de la STEG peut maintenir des frais fixes inutiles sur votre facture." },
    { icon: "⚖️", title: "Confondre Puissance (kWc) et Énergie (kWh)", text: "Le kWc représente la capacité maximale de vos panneaux, tandis que le kWh est l'électricité réelle que vous consommez." },
  ],
  en: [
    { icon: "🛠️", title: "Trusting non-specialists with the installation", text: "High-voltage installation requires ANME approval to guarantee electrical safety and access to government subsidies." },
    { icon: "⚡", title: "Not adapting your STEG subscription", text: "A poorly adjusted subscribed power with STEG can keep unnecessary fixed fees on your bill." },
    { icon: "⚖️", title: "Confusing Power (kWp) and Energy (kWh)", text: "The kWp represents the maximum capacity of your panels, while the kWh is the actual electricity you consume." },
  ],
};

function Counter({ target }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(eased * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{value}</span>;
}

export default function Blog() {
  const params = useParams();
  const locale = params.locale || "fr";
  const isFr = locale === "fr";

  const t = isFr
    ? {
        badge: "Guides & retours d'expérience",
        title: "Conseils à nos clients",
        titleAccent: "",
        subtitle: "Les bons réflexes pour réussir votre projet solaire en Tunisie et les pièges à éviter absolument.",
        conseils: "Conseils d'experts",
        erreurs: "Erreurs à éviter",
        conseilsLabel: "conseils d'experts",
        erreursLabel: "erreurs à éviter",
        conseilsTitle: "Nos conseils pour réussir votre projet",
        conseilsSub: "Les bons réflexes pour optimiser votre investissement solaire en Tunisie.",
        erreursTitle: "Les pièges classiques avant de passer au solaire",
        erreursSub: "Autant d'erreurs fréquentes que nous évitons à nos clients lors de nos études préalables.",
        closing: "Un doute ? Parlez-en à un expert",
        closingLink: "conseil gratuit et sans engagement.",
      }
    : {
        badge: "Guides & customer feedback",
        title: "Advice to our customers",
        titleAccent: "",
        subtitle: "The right habits to make your solar project in Tunisia a success and the traps to absolutely avoid.",
        conseils: "Expert tips",
        erreurs: "Mistakes to avoid",
        conseilsLabel: "expert tips",
        erreursLabel: "mistakes to avoid",
        conseilsTitle: "Our tips for a successful project",
        conseilsSub: "The right habits to optimise your solar investment in Tunisia.",
        erreursTitle: "The classic traps before going solar",
        erreursSub: "Frequent mistakes we prevent for our customers during our preliminary studies.",
        closing: "Not sure? Talk to an expert",
        closingLink: "free advice, no commitment.",
      };

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
    return () => obs.disconnect();
  }, []);

  const conseils = conseilsData[locale] || conseilsData.fr;
  const erreurs = erreursData[locale] || erreursData.fr;

  return (
    <main className="flex flex-col">
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-flex items-center gap-2 bg-white border border-green-200 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full animate-slideup">
            {t.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-6 animate-hero-drop">
            {t.title}{t.titleAccent ? <span className="text-green-600"> {t.titleAccent}</span> : null}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mt-6 animate-slideup" style={{ animationDelay: "0.5s" }}>
            {t.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <div className="reveal bg-white border border-green-200 rounded-2xl px-8 py-4 shadow-sm flex items-center gap-3">
              <span className="text-4xl">✅</span>
              <div className="text-left">
                <div className="text-5xl font-extrabold text-green-600">
                  <Counter target={conseils.length} />
                </div>
                <div className="text-sm text-gray-500">{t.conseilsLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">{t.conseils}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">{t.conseilsTitle}</h2>
            <p className="text-gray-600 mt-4">{t.conseilsSub}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conseils.map((item, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${(i % 4) * 0.1}s` }}>
                <article className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 h-full hover:shadow-xl hover:shadow-green-100 hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 group-hover:bg-green-600 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 flex items-center justify-center text-3xl mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{item.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl font-medium text-gray-800">
            {t.closing}{" "}
            <br />
            <Link href={`/${locale}/contact`} className="text-green-600 hover:text-green-700 underline underline-offset-4">
              {t.closingLink}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
