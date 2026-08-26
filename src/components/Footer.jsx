import Link from "next/link";
import Image from "next/image";

const footerContent = {
  fr: {
    description: "Votre expert en installation de panneaux photovoltaïques en Tunisie. Énergie propre, économies durables, partout dans le pays.",
    servicesTitle: "Prestations",
    services: [
      { href: "/prestations/raccorde-au-reseau", label: "Raccordé au réseau" },
      { href: "/prestations/site-isole", label: "Site isolé" },
      { href: "/prestations/pompage-solaire", label: "Pompage solaire" },
      { href: "/prestations/eclairage-public", label: "Éclairage public" },
    ],
    productsTitle: "Produits",
    products: [
      { href: "/produits", label: "Panneaux solaires" },
      { href: "/produits", label: "Batteries" },
      { href: "/produits", label: "Onduleurs" },
      { href: "/produits", label: "Régulateurs" },
    ],
    companyTitle: "Entreprise",
    company: [
      { href: "/a-propos", label: "À propos" },
      { href: "/realisations", label: "Réalisations" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
    contactTitle: "Contact",
    contact: {
      address: "Tunisie",
      phone: ["+216 50 722 277", "+216 55 105 481"],
      email: "smart.energy.pv2@gmail.com",
      addressLabel: "Adresse :",
      phoneLabel: "Téléphone",
      emailLabel: "Email",
    },
    rights: "Tous droits réservés.",
  },
  en: {
    description: "Your expert in photovoltaic panel installation in Tunisia. Clean energy, sustainable savings, everywhere in the country.",
    servicesTitle: "Services",
    services: [
      { href: "/prestations/raccorde-au-reseau", label: "Grid-connected" },
      { href: "/prestations/site-isole", label: "Off-grid system" },
      { href: "/prestations/pompage-solaire", label: "Solar pumping" },
      { href: "/prestations/eclairage-public", label: "Street lighting" },
    ],
    productsTitle: "Products",
    products: [
      { href: "/produits", label: "Solar panels" },
      { href: "/produits", label: "Batteries" },
      { href: "/produits", label: "Inverters" },
      { href: "/produits", label: "Regulators" },
    ],
    companyTitle: "Company",
    company: [
      { href: "/a-propos", label: "About us" },
      { href: "/realisations", label: "Projects" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
    contactTitle: "Contact",
    contact: {
      address: "Tunisia",
      phone: ["+216 50 722 277", "+216 55 105 481"],
      email: "smart.energy.pv2@gmail.com",
      addressLabel: "Address:",
      phoneLabel: "Phone",
      emailLabel: "Email",
    },
    rights: "All rights reserved.",
  },
};

export default function Footer({ locale = "fr" }) {
  const currentYear = new Date().getFullYear();
  const t = footerContent[locale] || footerContent.fr;

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href={`/${locale}/`} className="flex items-center space-x-2 mb-6" aria-label="Smart Energy - Accueil">
              <Image
                src="/photos/video-5.png"
                alt="Smart Energy logo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-2xl font-bold text-white">Smart Energy</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">{t.description}</p>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/smartenergypv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.servicesTitle}</h3>
            <ul className="space-y-3" role="list">
              {t.services.map((link) => (
                <li key={link.label}>
                  <Link href={`/${locale}${link.href}`} className="hover:text-green-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.productsTitle}</h3>
            <ul className="space-y-3" role="list">
              {t.products.map((link) => (
                <li key={link.label}>
                  <Link href={`/${locale}${link.href}`} className="hover:text-green-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.companyTitle}</h3>
            <ul className="space-y-3" role="list">
              {t.company.map((link) => (
                <li key={link.label}>
                  <Link href={`/${locale}${link.href}`} className="hover:text-green-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.contactTitle}</h3>
            <address className="not-italic space-y-3 text-gray-400">
              <p>
                <span className="font-medium text-white">{t.contact.addressLabel}</span> {t.contact.address}
              </p>
              <p className="flex flex-wrap items-center gap-x-1">
                <span className="font-medium text-white">{t.contact.phoneLabel}</span>
                {t.contact.phone.map((num, i) => (
                  <a key={i} href={`tel:${num}`} className="hover:text-green-400 transition-colors">
                    {num}
                  </a>
                ))}
              </p>
              <p className="flex flex-wrap items-center gap-x-1">
                <span className="font-medium text-white">{t.contact.emailLabel}</span>
                <a href={`mailto:${t.contact.email}`} className="hover:text-green-400 transition-colors">
                  {t.contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Smart Energy. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}