export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || "fr";
  const baseUrl = "https://smartenergy.tn";
  const meta = {
    fr: {
      title: "Conseils solaires | Smart Energy - Guides et astuces",
      description: "Les bons réflexes pour réussir votre projet solaire en Tunisie. Conseils d'experts, erreurs à éviter, guides pratiques.",
    },
    en: {
      title: "Solar advice | Smart Energy - Guides and tips",
      description: "The right habits to make your solar project in Tunisia a success. Expert tips, mistakes to avoid, practical guides.",
    },
  };
  const m = meta[locale] || meta.fr;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/blog`,
    },
  };
}

export default function BlogLayout({ children }) {
  return children;
}
