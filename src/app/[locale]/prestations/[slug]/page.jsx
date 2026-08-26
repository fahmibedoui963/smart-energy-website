import { notFound } from "next/navigation";
import PrestationDetail from "@/components/PrestationDetail";
import { content } from "@/data/prestations";

export const dynamicParams = true;

const serviceMetadata = {
  "raccorde-au-reseau": {
    fr: { title: "Raccordé au réseau | Smart Energy", description: "Installation de panneaux solaires raccordés au réseau STEG. Injectez votre énergie et réduisez votre facture." },
    en: { title: "Grid-connected | Smart Energy", description: "Solar panel installation connected to the STEG grid. Inject your energy and reduce your bill." },
  },
  "site-isole": {
    fr: { title: "Site isolé | Smart Energy", description: "Système solaire autonome pour sites isolés. Batteries, groupe de secours et monitoring à distance." },
    en: { title: "Off-grid | Smart Energy", description: "Autonomous solar system for off-grid sites. Batteries, backup generator and remote monitoring." },
  },
  "pompage-solaire": {
    fr: { title: "Pompage solaire | Smart Energy", description: "Pompage solaire pour agriculture et irrigation. Solution économique et écologique." },
    en: { title: "Solar pumping | Smart Energy", description: "Solar pumping for agriculture and irrigation. Economical and ecological solution." },
  },
  "eclairage-public": {
    fr: { title: "Éclairage public | Smart Energy", description: "Éclairage public solaire pour routes, parkings et espaces publics. Autonome et économique." },
    en: { title: "Street lighting | Smart Energy", description: "Solar street lighting for roads, parking lots and public spaces. Autonomous and economical." },
  },
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || "fr";
  const slug = resolvedParams.slug;
  const meta = serviceMetadata[slug]?.[locale] || serviceMetadata[slug]?.fr || { title: "Smart Energy", description: "Smart Energy - Installation solaire en Tunisie" };
  const baseUrl = "https://smartenergy.tn";
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/prestations/${slug}`,
    },
  };
}

export default async function PrestationPage({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || "fr";
  const slug = resolvedParams.slug;
  const t = content[locale] || content.fr;
  const service = t.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <PrestationDetail service={service} locale={locale} />;
}
