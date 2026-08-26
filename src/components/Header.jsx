"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLabels = {
  fr: {
    accueil: "Accueil",
    prestations: "Prestations",
    produits: "Produits",
    realisations: "Réalisations",
    blog: "Blog",
    aPropos: "À propos",
    contact: "Contact",
    devis: "Devis gratuit",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
    prestationsMenu: [
      { slug: "raccorde-au-reseau", label: "Système raccordé aux réseaux STEG" },
      { slug: "site-isole", label: "Site isolé" },
      { slug: "pompage-solaire", label: "Pompage solaire" },
      { slug: "eclairage-public", label: "Éclairage public" },
    ],
  },
  en: {
    accueil: "Home",
    prestations: "Services",
    produits: "Products",
    realisations: "Projects",
    blog: "Blog",
    aPropos: "About us",
    contact: "Contact",
    devis: "Free quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    prestationsMenu: [
      { slug: "raccorde-au-reseau", label: "Grid-connected system" },
      { slug: "site-isole", label: "Off-grid system" },
      { slug: "pompage-solaire", label: "Solar pumping" },
      { slug: "eclairage-public", label: "Street lighting" },
    ],
  },
};

export default function Header({ locale = "fr" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const labels = navLabels[locale] || navLabels.fr;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}/produits`, label: labels.produits },
    { href: `/${locale}/realisations`, label: labels.realisations },
    { href: `/${locale}/blog`, label: labels.blog },
    { href: `/${locale}/a-propos`, label: labels.aPropos },
    { href: `/${locale}/contact`, label: labels.contact },
  ];

  const switchLocale = locale === "fr" ? "en" : "fr";
  const isHome = pathname === `/${locale}`;
  let currentPath;
  if (pathname === `/${locale}`) {
    currentPath = `/${switchLocale}`;
  } else if (pathname.startsWith(`/${locale}/`)) {
    currentPath = pathname.replace(`/${locale}/`, `/${switchLocale}/`);
  } else {
    currentPath = `/${switchLocale}`;
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${isHome && !scrolled ? "bg-transparent border-b border-transparent" : "bg-black/80 backdrop-blur-md border-b border-white/10"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href={`/${locale}/`} className="flex items-center gap-2" aria-label="Smart Energy - Accueil">
              <Image
                src="/photos/video-5.png"
                alt="Smart Energy"
                width={44}
                height={44}
                className="h-9 md:h-11 w-auto"
              />
              <span className="text-xl font-bold text-white">Smart Energy</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href={`/${locale}/`}
              className={`text-sm font-medium transition-colors ${pathname === `/${locale}` ? "text-green-300" : "text-white/90 hover:text-white"}`}
            >
              {labels.accueil}
            </Link>

            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium transition-colors text-white/90 hover:text-white"
                aria-haspopup="true"
              >
                {labels.prestations}
                <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-2 transition-all duration-[250ms] ease-out delay-150 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:delay-0 z-50">
                <div className="w-72 rounded-xl bg-black/90 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden">
                  {labels.prestationsMenu.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${locale}/prestations/${item.slug}`}
                      className="block px-4 py-3 text-sm text-white/90 transition-all duration-200 ease-out hover:text-green-300 hover:bg-white/10 hover:translate-x-1"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${pathname === link.href ? "text-green-300" : "text-white/90 hover:text-white"}`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={`/${locale}/contact`}
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
            >
              {labels.devis}
            </Link>

            <div className="relative ml-4 group">
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors text-white/90 hover:text-white hover:bg-white/10"
                aria-label={labels.language}
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span>{locale === "fr" ? "FR" : "EN"}</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 pt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg py-1 hidden group-hover:block z-50">
                <Link
                  href={currentPath}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                >
                  {switchLocale === "fr" ? "Français" : "English"}
                </Link>
              </div>
            </div>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <div className="relative group">
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors text-white/90 hover:text-white hover:bg-white/10"
                aria-label={labels.language}
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span>{locale === "fr" ? "FR" : "EN"}</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 pt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg py-1 hidden group-hover:block z-50">
                <Link
                  href={currentPath}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                >
                  {switchLocale === "fr" ? "Français" : "English"}
                </Link>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 text-white hover:text-white hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? labels.closeMenu : labels.openMenu}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-2 py-2 text-base font-medium rounded-lg ${pathname === link.href ? "bg-green-50 text-green-600" : "text-gray-700 hover:text-green-600 hover:bg-gray-50"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <div className="px-2 pb-1 text-sm font-semibold text-gray-500 uppercase tracking-wide">{labels.prestations}</div>
                {labels.prestationsMenu.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${locale}/prestations/${item.slug}`}
                    className="block px-2 py-2 pl-4 text-sm font-medium text-gray-600 rounded-lg hover:text-green-600 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                href={`/${locale}/contact`}
                className="block px-2 py-3 mt-2 text-center bg-green-600 text-white font-medium rounded-lg hover:bg-green-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {labels.devis}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}