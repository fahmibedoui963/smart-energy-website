import ProductsShowcase from "@/components/ProductsShowcase";

const pageMetadata = {
  fr: {
    title: "Nos marques partenaires | Smart Energy",
    description: "Découvrez nos marques partenaires : panneaux solaires, batteries, onduleurs et régulateurs des leaders mondiaux de l'énergie solaire.",
  },
  en: {
    title: "Our partner brands | Smart Energy",
    description: "Discover our partner brands: solar panels, batteries, inverters and charge controllers from global solar energy leaders.",
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
      canonical: `${baseUrl}/${locale}/produits`,
    },
  };
}

const content = {
  fr: {
    title: "Nos marques partenaires",
    desc: "Nous travaillons exclusivement avec les leaders mondiaux de l'énergie solaire. La qualité, la garantie et la performance comme seuls standards.",
    categories: [
      {
        category: "Panneaux solaires",
        anchor: "panneaux",
        gradient: "from-green-600 via-emerald-500 to-teal-500",
        cardBorder: "border-t-emerald-500",
        cols: "lg:grid-cols-4",
        intro: [
          { t: "Le cœur de votre installation solaire. Nous ne travaillons qu'avec " },
          { t: "les marques les plus performantes et les plus fiables", b: true },
          { t: " du marché mondial, celles que les plus grands installateurs choisissent en premier. " },
          { t: "Rendement maximal", b: true },
          { t: ", " },
          { t: "garantie longue durée", b: true },
          { t: ", " },
          { t: "résistance prouvée au climat tunisien", b: true },
          { t: "." },
        ],
        items: [
          { name: "AE Solar", desc: "Panneaux de qualité européenne, fabriqués selon les normes d'ingénierie allemandes les plus strictes. Fiabilité et durabilité à l'européenne." },
          { name: "Trina Solar", desc: "Leader mondial du photovoltaïque, technologie Vertex de pointe. Un des noms les plus reconnus de l'industrie solaire." },
          { name: "LONGi Solar", desc: "Plus grand producteur mondial de panneaux monocristallins. Efficacité de pointe, référence technologique." },
          { name: "JinkoSolar", desc: "Panneaux les plus vendus au monde. Technologie N-type TOPCon, excellent rapport performance/prix." },
        ],
      },
      {
        category: "Onduleurs",
        anchor: "onduleurs",
        gradient: "from-green-600 via-amber-500 to-orange-500",
        cardBorder: "border-t-orange-500",
        cols: "lg:grid-cols-3",
        intro: [
          { t: "L'intelligence de votre système. Un bon onduleur, c'est la différence entre une installation qui produit et une installation qui performe. Nous sélectionnons " },
          { t: "les références n°1 mondiales", b: true },
          { t: ", plébiscitées pour " },
          { t: "leur fiabilité", b: true },
          { t: ", " },
          { t: "leur pilotage intelligent", b: true },
          { t: " et " },
          { t: "leur monitoring en temps réel", b: true },
          { t: "." },
        ],
        items: [
          { name: "Huawei", desc: "Onduleurs intelligents pilotés par IA, application de monitoring intégrée. Numéro 1 mondial des onduleurs solaires." },
          { name: "Sungrow", desc: "La marque d'onduleurs la plus bancable au monde. Robustesse et fiabilité éprouvées sur tous les continents." },
          { name: "SMA", desc: "Précision d'ingénierie allemande, plusieurs décennies d'expérience. Référence premium en fiabilité." },
          { name: "Solax Power", desc: "Spécialiste des onduleurs hybrides, parfaitement adapté à l'intégration de batteries de stockage." },
          { name: "Growatt", desc: "Le meilleur rapport qualité-prix du marché, utilisé massivement à travers le monde pour sa performance constante." },
        ],
      },
      {
        category: "Batteries",
        anchor: "batteries",
        gradient: "from-green-600 via-cyan-500 to-blue-600",
        cardBorder: "border-t-blue-500",
        cols: "lg:grid-cols-4",
        intro: [
          { t: "Votre indépendance énergétique. Pour vos projets de stockage et de sites isolés, nous choisissons uniquement des " },
          { t: "batteries longue durée de vie", b: true },
          { t: ", " },
          { t: "sécurisées et éprouvées", b: true },
          { t: " , " },
          { t: "le premier choix en Tunisie", b: true },
          { t: " pour qui veut " },
          { t: "une autonomie fiable", b: true },
          { t: ", jour après jour." },
        ],
        items: [
          { name: "Must Solar", desc: "Batteries lithium robustes, solutions hybrides, très bon rapport qualité-prix." },
          { name: "Sunbond", desc: "Batteries LiFePO4 à longue durée de vie, certifiées sécurité." },
          { name: "BYD", desc: "Géant mondial du stockage d'énergie, technologie éprouvée issue du véhicule électrique, normes de sécurité les plus strictes." },
          { name: "ASAD", desc: "Marque fiable et accessible, solutions de stockage adaptées au marché tunisien." },
        ],
      },
    ],
  },
  en: {
    title: "Our partner brands",
    desc: "We work exclusively with the world leaders in solar energy. Quality, warranty and performance as the only standards.",
    categories: [
      {
        category: "Solar panels",
        anchor: "panneaux",
        gradient: "from-green-600 via-emerald-500 to-teal-500",
        cols: "lg:grid-cols-4",
        intro: [
          { t: "The heart of your solar installation. We only work with " },
          { t: "the most performant and most reliable brands", b: true },
          { t: " on the global market, the ones the biggest installers choose first. " },
          { t: "Maximum output", b: true },
          { t: ", " },
          { t: "long-term warranty", b: true },
          { t: ", " },
          { t: "proven resistance to the Tunisian climate", b: true },
          { t: "." },
        ],
        items: [
          { name: "AE Solar", desc: "European-quality panels, manufactured to the strictest German engineering standards. European-style reliability and durability." },
          { name: "Trina Solar", desc: "Global photovoltaic leader, cutting-edge Vertex technology. One of the most recognised names in the solar industry." },
          { name: "LONGi Solar", desc: "World's largest producer of monocrystalline panels. Advanced efficiency, a technological benchmark." },
          { name: "JinkoSolar", desc: "The best-selling panels in the world. N-type TOPCon technology, excellent performance-to-price ratio." },
        ],
      },
      {
        category: "Inverters",
        anchor: "onduleurs",
        gradient: "from-green-600 via-amber-500 to-orange-500",
        cols: "lg:grid-cols-3",
        intro: [
          { t: "The intelligence of your system. A good inverter is the difference between an installation that produces and an installation that performs. We select " },
          { t: "the world's number one references", b: true },
          { t: ", acclaimed for their " },
          { t: "reliability", b: true },
          { t: ", " },
          { t: "smart control", b: true },
          { t: " and " },
          { t: "real-time monitoring", b: true },
          { t: "." },
        ],
        items: [
          { name: "Huawei", desc: "AI-powered smart inverters with an integrated monitoring app. World's number one solar inverter brand." },
          { name: "Sungrow", desc: "The world's most bankable inverter brand. Robustness and reliability proven on every continent." },
          { name: "SMA", desc: "German engineering precision, decades of experience. A premium benchmark in reliability." },
          { name: "Solax Power", desc: "Hybrid inverter specialist, perfectly suited to storage battery integration." },
          { name: "Growatt", desc: "The best value for money on the market, used massively worldwide for its consistent performance." },
        ],
      },
      {
        category: "Batteries",
        anchor: "batteries",
        gradient: "from-green-600 via-cyan-500 to-blue-600",
        cardBorder: "border-t-blue-500",
        cols: "lg:grid-cols-4",
        intro: [
          { t: "Your energy independence. For your storage and off-grid projects, we choose only " },
          { t: "long-lasting batteries", b: true },
          { t: " that are " },
          { t: "safe and field-proven", b: true },
          { t: " , " },
          { t: "the first choice in Tunisia", b: true },
          { t: " for anyone who wants " },
          { t: "reliable autonomy", b: true },
          { t: ", day after day." },
        ],
        items: [
          { name: "Must Solar", desc: "Robust lithium batteries, hybrid solutions, very good value for money." },
          { name: "Sunbond", desc: "Long-life LiFePO4 batteries, safety certified." },
          { name: "BYD", desc: "Global energy storage giant, proven technology from electric vehicles, strictest safety standards." },
          { name: "ASAD", desc: "Reliable, affordable brand, storage solutions suited to the Tunisian market." },
        ],
      },
    ],
  },
};

export default async function Produits({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || "fr";
  const t = content[locale] || content.fr;

  return (
    <main className="flex flex-col">
      <section className="bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="animate-slideup text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            {t.title}
          </h1>
          <p className="animate-slideup text-xl text-gray-600 max-w-2xl mx-auto" style={{ animationDelay: "0.15s" }}>{t.desc}</p>
        </div>
      </section>

      <ProductsShowcase t={t} locale={locale} />
    </main>
  );
}
