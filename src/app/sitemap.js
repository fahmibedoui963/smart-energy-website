const baseUrl = "https://smartenergy.tn";

const locales = ["fr", "en"];

const staticPages = [
  "",
  "/produits",
  "/realisations",
  "/blog",
  "/a-propos",
  "/contact",
];

const prestations = [
  "raccorde-au-reseau",
  "site-isole",
  "pompage-solaire",
  "eclairage-public",
];

const realisations = ["ste-froid-ben-moussa"];

export default function sitemap() {
  const pages = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      pages.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
      });
    }

    for (const slug of prestations) {
      pages.push({
        url: `${baseUrl}/${locale}/prestations/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const slug of realisations) {
      pages.push({
        url: `${baseUrl}/${locale}/realisations/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return pages;
}
