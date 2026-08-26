const keywords = {
  fr: [
    "Énergie Solaire",
    "Indépendance Énergétique",
    "Installation Photovoltaïque",
    "Énergie Propre",
    "Transition Énergétique",
    "Économies STEG",
    "Panneaux Solaires",
  ],
  en: [
    "Solar Energy",
    "Energy Independence",
    "Photovoltaic Installation",
    "Clean Energy",
    "Energy Transition",
    "STEG Savings",
    "Solar Panels",
  ],
};

export default function Marquee({ locale = "fr" }) {
  const items = keywords[locale] || keywords.fr;

  return (
    <div className="overflow-hidden bg-[#F5F0E8]" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="marquee-copy flex min-w-full items-center justify-center whitespace-nowrap">
            {items.map((word) => (
              <span key={word} className="flex items-center">
                <span className="px-6 py-2.5 md:py-3 text-gray-900 font-bold uppercase text-base md:text-lg">{word}</span>
                <span className="text-gray-400 text-xl">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
