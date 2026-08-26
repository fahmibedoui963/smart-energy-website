import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const localeMetadata = {
  fr: {
    title: "Smart Energy - Installation panneaux photovoltaïques Tunisie",
    description: "Expert en installation de panneaux solaires en Tunisie. Raccordé au réseau, site isolé, pompage solaire, éclairage public. Devis gratuit.",
    keywords: "panneaux solaires, photovoltaïque, Tunisie, énergie solaire, installation solaire, STEG, Prosol",
  },
  en: {
    title: "Smart Energy - Solar panel installation Tunisia",
    description: "Expert in solar panel installation in Tunisia. Grid-connected, off-grid, solar pumping, street lighting. Free quote.",
    keywords: "solar panels, photovoltaic, Tunisia, solar energy, solar installation, STEG, Prosol",
  },
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || "fr";
  const meta = localeMetadata[locale] || localeMetadata.fr;
  const baseUrl = "https://smartenergy.tn";
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Smart Energy" }],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        "fr": `${baseUrl}/fr`,
        "en": `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: locale === "fr" ? "fr_TN" : "en_US",
      siteName: "Smart Energy",
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || "fr";

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">
        <Header locale={locale} />
        <main className="flex-1 pt-16">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
