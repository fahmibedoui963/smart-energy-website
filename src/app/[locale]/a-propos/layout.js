export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || "fr";
  const baseUrl = "https://smartenergy.tn";
  const meta = {
    fr: {
      title: "À propos de Smart Energy | Installation solaire Tunisie",
      description: "L'expert tunisien de l'installation photovoltaïque. Étude, fourniture, pose, démarches, SAV : votre projet solaire clé en main, partout en Tunisie.",
    },
    en: {
      title: "About Smart Energy | Solar installation Tunisia",
      description: "The Tunisian expert in photovoltaic installation. Study, supply, installation, paperwork, after-sales service: your turnkey solar project, everywhere in Tunisia.",
    },
  };
  const m = meta[locale] || meta.fr;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/a-propos`,
    },
  };
}

export default function AProposLayout({ children }) {
  return children;
}
