"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const notFoundContent = {
  fr: {
    title: "Page non trouvée",
    desc: "Désolé, la page que vous cherchez n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
    contact: "Nous contacter",
  },
  en: {
    title: "Page not found",
    desc: "Sorry, the page you are looking for doesn't exist or has been moved.",
    back: "Back to home",
    contact: "Contact us",
  },
};

export default function NotFound() {
  const params = useParams();
  const locale = params?.locale || "fr";
  const t = notFoundContent[locale] || notFoundContent.fr;

  return (
    <main className="flex flex-col min-h-[60vh] items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-green-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.title}</h2>
      <p className="text-gray-600 mb-8 max-w-md">{t.desc}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href={`/${locale}/`} className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">{t.back}</Link>
        <Link href={`/${locale}/contact`} className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors">{t.contact}</Link>
      </div>
    </main>
  );
}
