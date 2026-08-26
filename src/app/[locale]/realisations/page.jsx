import Link from "next/link";
import Image from "next/image";
import { realisationsContent } from "@/data/realisations";

const pageMetadata = {
  fr: {
    title: "Nos réalisations | Smart Energy",
    description: "Découvrez nos projets d'installation solaire réalisés en Tunisie. Raccordé au réseau, site isolé, pompage solaire.",
  },
  en: {
    title: "Our projects | Smart Energy",
    description: "Discover our solar installation projects in Tunisia. Grid-connected, off-grid, solar pumping.",
  },
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || "fr";
  const meta = pageMetadata[locale] || pageMetadata.fr;
  const baseUrl = "https://smartenergy.tn";
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/realisations`,
    },
  };
}

export default async function Realisations({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || "fr";
  const t = realisationsContent[locale] || realisationsContent.fr;

  return (
    <main className="flex flex-col">
      <section className="bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-rise">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-rise" style={{ animationDelay: "0.25s" }}>{t.desc}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
            {t.projects.map((project) => (
              <article key={project.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                <div className="aspect-video relative overflow-hidden">
                  {project.photo ? (
                    <Image src={project.photo} alt={project.title} fill sizes="(max-width: 768px) 100vw, 66vw" loading="lazy" className="object-cover" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-green-900 flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <div className="flex justify-center gap-4 text-4xl md:text-6xl mb-4">
                          {project.images.map((img, idx) => <span key={idx} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">{img}</span>)}
                        </div>
                        <span className="text-green-100 text-sm font-medium px-3 py-1 rounded-full">{project.type}</span>
                      </div>
                    </div>
                  )}
                  {project.year && (
                    <div className="absolute top-4 right-4"><span className="bg-white/90 text-green-700 px-2 py-1 rounded text-xs font-medium">{project.year}</span></div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => <span key={idx} className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium">{tag}</span>)}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">📍 {project.location}</span>
                    <span className="flex items-center gap-1">⚡ {project.power}</span>
                  </div>
                  <p className="text-gray-600 text-base mb-4 line-clamp-3">{project.desc}</p>
                  <div className="flex justify-center">
                  {project.slug ? (
                    <Link href={`/${locale}/realisations/${project.slug}`} className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">{t.details}</Link>
                  ) : (
                    <button className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">{t.details}</button>
                  )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t.galleryTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {t.gallery.map((item, i) => (
                <div key={i} className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-default">
                  <Image src={item.src} alt={item.label} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">{t.installationsNote}</p>
            <a href={`/${locale}/contact`} className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">{t.cta}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
