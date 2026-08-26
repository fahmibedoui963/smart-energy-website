export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || "fr";
  const baseUrl = "https://smartenergy.tn";
  const meta = {
    fr: {
      title: "Contactez-nous | Smart Energy - Étude gratuite solaire",
      description: "Contactez Smart Energy pour une étude gratuite et sans engagement. Réponse sous 24h. Déplacement sur site dans toute la Tunisie.",
    },
    en: {
      title: "Contact us | Smart Energy - Free solar study",
      description: "Contact Smart Energy for a free study, no commitment. Reply within 24 hours. Site visit anywhere in Tunisia.",
    },
  };
  const m = meta[locale] || meta.fr;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/contact`,
    },
  };
}

export default function ContactLayout({ children }) {
  return children;
}
