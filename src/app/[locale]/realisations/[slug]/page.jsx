import Link from "next/link";
import Image from "next/image";
import { realisationsContent } from "@/data/realisations";

const projectMetadata = {
  "ste-froid-ben-moussa": {
    fr: { title: "STE Froid Ben Moussa | Smart Energy", description: "Installation solaire pour STE Froid Ben Moussa. Raccordé au réseau, production optimisée." },
    en: { title: "STE Froid Ben Moussa | Smart Energy", description: "Solar installation for STE Froid Ben Moussa. Grid-connected, optimized production." },
  },
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || "fr";
  const slug = resolvedParams.slug;
  const meta = projectMetadata[slug]?.[locale] || projectMetadata[slug]?.fr || { title: "Smart Energy", description: "Smart Energy - Réalisations solaires en Tunisie" };
  const baseUrl = "https://smartenergy.tn";
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/realisations/${slug}`,
    },
  };
}

export default async function ProjectDetail({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || "fr";
  const slug = resolvedParams.slug;
  const t = realisationsContent[locale] || realisationsContent.fr;
  const project = t.projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="flex flex-col min-h-[60vh] items-center justify-center px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{t.notFound}</h1>
        <Link href={`/${locale}/realisations`} className="text-green-600 hover:underline">{t.detailBack}</Link>
      </main>
    );
  }

  const specKeys = ["power", "panels", "inverters"];

  return (
    <main className="flex flex-col">
      <section className="bg-gradient-to-b from-green-50 to-[#F5F0E8] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/${locale}/realisations`} className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors mb-8">
            {t.detailBack}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">{project.type}</span>
            <span className="flex items-center gap-1 text-gray-600 text-sm">📍 {project.location}</span>
            <span className="flex items-center gap-1 text-gray-600 text-sm">⚡ {project.power}</span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.detailDesc}</h2>
              <p className="text-xl font-semibold text-gray-800">{project.descIntro}</p>
              {project.descParas && project.descParas.map((para, i) => (
                <p key={i} className="text-gray-600 text-xl leading-relaxed mt-4">{para}</p>
              ))}
            </div>

            <aside className="lg:sticky lg:top-24 self-start w-full">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-green-600" aria-hidden="true">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  <h2 className="text-xl font-bold text-gray-900">{t.specTitle}</h2>
                </div>
                <dl className="space-y-6">
                  {specKeys.map((key) => {
                    const item = project.spec[key];
                    if (!item) return null;
                    if (key === "inverters") {
                      return (
                        <div key={key}>
                          <dt className="text-sm text-gray-500">{t.specLabels[key]}</dt>
                          <dd className="mt-1 flex items-center gap-2">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-6 w-6 text-gray-700 shrink-0" aria-hidden="true">
                              <rect x="3.5" y="3" width="17" height="12" rx="1.5" />
                              <path d="M12 15v2.5" />
                              <path d="M8.5 17.5h7" />
                              <path d="M7 8.5v3M9.5 8.5v3M14.5 8.5v3M17 8.5v3" />
                            </svg>
                            <span className="text-2xl font-bold text-gray-900">{item.value}</span>
                            {item.count && (
                              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">x{item.count}</span>
                            )}
                          </dd>
                        </div>
                      );
                    }
                    return (
                      <div key={key}>
                        <dt className="text-sm text-gray-500">{t.specLabels[key]}</dt>
                        <dd className="mt-1 text-2xl font-bold text-gray-900">{item}</dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </aside>
          </div>

          {project.gallery && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-12">
              {project.gallery.map((src, i) => (
                <Image key={i} src={src} alt={`${project.title} - photo ${i + 1}`} width={400} height={267} loading="lazy" className="w-full aspect-[3/2] object-cover rounded-xl" />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
