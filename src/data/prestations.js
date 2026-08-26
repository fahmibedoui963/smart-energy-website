export const serviceAnchors = {
  "raccorde-au-reseau": "raccorde-steg",
  "site-isole": "site-isole",
  "pompage-solaire": "pompage-solaire",
  "eclairage-public": "eclairage-public",
};

export const serviceImages = {
  "raccorde-au-reseau": "/photos/presta-1.png",
  "site-isole": "/photos/presta-2.png",
  "pompage-solaire": "/photos/presta-3.png",
  "eclairage-public": "/photos/presta-4.png",
};

export const content = {
  fr: {
    title: "Nos prestations",
    desc: "Quatre solutions photovoltaïques adaptées à chaque besoin tunisien. Étude gratuite, installation certifiée, démarches STEG/ANME incluses.",
    services: [
      {
        slug: "raccorde-au-reseau",
        title: "Installation raccordée au réseau (On-Grid)",
        icon: "🔌",
        shortDesc: "Produisez votre électricité, vendez le surplus à la STEG, réduisez votre facture jusqu'à 70%.",
        definition: "Un système raccordé au réseau STEG (on-grid) produit votre électricité le jour grâce au soleil et injecte le surplus dans le réseau national. Vous restez connecté à STEG : la nuit ou en cas de besoin, vous tirez votre courant du réseau comme avant. Idéal pour les maisons, appartements, commerces et industries déjà reliés au réseau.",
        highlights: [
          "Facture réduite jusqu'à 70-80%",
          "Sans batteries → coût initial plus bas",
          "Éligible Prosol Résidentiel / Elec",
          "Retour sur investissement en 4-6 ans",
        ],
        description: `
          <p className="mb-4">L'installation photovoltaïque raccordée au réseau (On-Grid) est la solution la plus répandue pour les particuliers et les entreprises en Tunisie. Elle vous permet de produire votre propre électricité solaire et d'injecter le surplus sur le réseau STEG.</p>
          <h4 className="font-semibold text-gray-900 mb-2">Comment ça marche ?</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li>Les panneaux produisent de l'électricité en journée</li>
            <li>Vous consommez votre production en priorité (autoconsommation)</li>
            <li>Le surplus est injecté sur le réseau STEG</li>
            <li>La nuit ou par temps couvert, vous tirez l'électricité du réseau</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">Avantages</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li><strong>Facture STEG réduite jusqu'à 70-80%</strong></li>
            <li>Pas de batteries nécessaires → coût initial plus bas</li>
            <li>Maintenance minimale (pas de stockage)</li>
            <li>Éligible au programme <strong>Prosol Résidentiel / Prosol Elec</strong> (subventions + prêts bonifiés)</li>
            <li>Retour sur investissement typique : 4-6 ans</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">Idéal pour :</h4>
          <p className="text-gray-600">Maisons, villas, appartements avec toiture accessible, commerces, industries, exploitations agricoles raccordées au réseau STEG.</p>
        `,
        cta: "Étudier mon projet On-Grid"
      },
      {
        slug: "site-isole",
        title: "Site isolé (Off-Grid / Hybride)",
        icon: "🏝️",
        shortDesc: "Autonomie totale en électricité là où le réseau STEG n'arrive pas. Batteries + panneau solaire.",
        definition: "Un site isolé (off-grid) est une installation totalement autonome, indépendante du réseau STEG, qui combine panneaux et batteries. L'énergie produite le jour est stockée pour être utilisée la nuit ou par temps couvert. Conçu pour les fermes, chalets, écolodges, stations de pompage et tous les lieux où le réseau n'arrive pas.",
        highlights: [
          "Autonomie électrique 24h/24",
          "Batteries",
          "Idéal là où le réseau n'arrive pas",
          "Monitoring à distance (GSM/WiFi)",
        ],
        description: `
          <p className="mb-4">Pour les sites non raccordés au réseau électrique (fermes isolées, chalets, sites touristiques, pompages éloignés), nous concevons des systèmes autonomes avec stockage par batteries.</p>
          <h4 className="font-semibold text-gray-900 mb-2">Configurations possibles</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li><strong>100% Solaire + Batteries :</strong> Autonomie complète, silencieux, zéro carburant</li>
            <li><strong>Hybride Solaire + Éolien :</strong> Sécurité maximale, production complémentaire jour/nuit</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">Composants clés</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li>Panneaux photovoltaïques dimensionnés selon consommation</li>
            <li>Onduleur hybride / chargeur (gère solaire + batteries)</li>
            <li>Batteries Lithium (recommandé) ou Gel/AGM</li>
            <li>Régulateur MPPT haute performance</li>
            <li>Monitoring à distance (GSM/Internet si dispo)</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">Idéal pour :</h4>
          <p className="text-gray-600">Fermes agricoles isolées, stations de pompage, sites touristiques (écolodges), relais télécoms, chantiers, habitations hors réseau.</p>
        `,
        cta: "Dimensionner mon site isolé"
      },
      {
        slug: "pompage-solaire",
        title: "Pompage solaire agricole",
        icon: "💧",
        shortDesc: "Irrigation, abreuvoir, forage : l'eau gratuite grâce au soleil. Zéro gasoil, zéro facture STEG.",
        definition: "Le pompage solaire utilise l'énergie du soleil pour alimenter une pompe qui puise ou transporte l'eau, sans gasoil, sans facture STEG. Chaque fois qu'il fait jour, l'eau coule gratuitement. Idéal pour l'irrigation, l'abreuvement du bétail, les forages profonds et le transfert d'eau.",
        highlights: [
          "0 TND de carburant",
          "Eau gratuite dès le lever du soleil",
          "Maintenance quasi nulle",
          "Aides Prosol Agricole / APIA",
        ],
        description: `
          <p className="mb-4">Le pompage solaire est l'application la plus rentable du photovoltaïque en Tunisie agricole. Remplacez vos groupes électrogènes diesel ou vos raccordements STEG coûteux par une pompe alimentée directement par le soleil.</p>
          <h4 className="font-semibold text-gray-900 mb-2">Types d'installations</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li><strong>Pompage direct (sans batteries) :</strong> La pompe tourne quand le soleil brille → remplissage bassin/réservoir jour. Le plus simple et robuste.</li>
            <li><strong>Pompage avec batteries :</strong> Permet pompage nuit/heure creuse, pression constante.</li>
            <li><strong>Système hybride :</strong> Solaire + groupe électrogène d'appoint pour besoins critiques.</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">Applications</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li>Irrigation goutte-à-goutte, pivots, aspersion</li>
            <li>Abreuvement bétail (pompe → bassin → abreuvoirs)</li>
            <li>Forages profonds (pompes immergées 3-30 kW)</li>
            <li>Transfert d'eau (barrage → réserve, puits → champ)</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">Avantages économiques</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li><strong>0 TND de carburant</strong> vs 15-30k TND/an pour un groupe diesel</li>
            <li><strong>0 TND de facture STEG</strong> si site isolé</li>
            <li>Maintenance quasi nulle (pas de moteur thermique)</li>
            <li>Durée de vie 20-25 ans (panneaux) / 10-15 ans (pompe)</li>
            <li>Éligible aides <strong>Prosol Agricole / APIA</strong></li>
          </ul>
          <p className="text-gray-600">Dimensionnement sur mesure selon : débit souhaité (m³/h), hauteur manométrique totale (HMT), profil de consommation journalier.</p>
        `,
        cta: "Calculer mon pompage solaire"
      },
      {
        slug: "eclairage-public",
        title: "Éclairage public solaire",
        icon: "💡",
        shortDesc: "Rues, parkings, zones industrielles, monuments : éclairage autonome, zéro tranchée, zéro facture.",
        definition: "L'éclairage public solaire désigne des candélabres autonomes : chaque poteau intègre panneau, batterie, LED et régulateur, sans tranchée ni raccordement. Il s'allume au crépuscule et s'éteint à l'aube, même en cas de coupure STEG. Adapté aux communes, parkings, zones industrielles, lotissements et sites isolés.",
        highlights: [
          "Zéro tranchée ni câblage",
          "Zéro facture d'électricité à vie",
          "Fonctionne même en coupure STEG",
          "Installation en 1 jour par poteau",
        ],
        description: `
          <p className="mb-4">L'éclairage public solaire (candélabres autonomes) est la solution idéale pour les collectivités, promoteurs immobiliers, zones industrielles et sites isolés. Chaque poteau intègre panneau, batterie, LED et régulateur : installation rapide, sans raccordement réseau.</p>
          <h4 className="font-semibold text-gray-900 mb-2">Caractéristiques techniques</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li>Panneau monocristallin haute efficacité (incliné optimisé Tunisie)</li>
            <li>Batterie Lithium LiFePO4 intégrée au mât (10+ ans, -20°C à +60°C)</li>
            <li>Module LED 3000-6000 lm, 3000K-4000K, IRC>70, optique routière</li>
            <li>Régulateur MPPT intelligent : gestion charge/décharge, détection mouvement, programmation horaire</li>
            <li>Mât acier galvanisé à chaud / aluminium, hauteur 6-12m</li>
            <li>Autonomie 2-3 nuits sans soleil, allumage crépusculaire / extinction aube</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">Avantages pour les collectivités</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li><strong>Zéro travaux de tranchée / câblage</strong> → installation en 1 jour par poteau</li>
            <li><strong>Zéro facture d'électricité</strong> à vie</li>
            <li>Maintenance réduite (pas de réseau, batteries 10+ ans)</li>
            <li>Fonctionne même en coupure STEG (sécurité publique)</li>
            <li>Esthétique moderne, pas de câbles aériens</li>
            <li>Éligible fonds communaux / programmes ANME</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">Applications</h4>
          <p className="text-gray-600">Rues communales, places publiques, parkings, zones industrielles, lotissements, sites touristiques, monuments, signalisation routière, passages piétons.</p>
        `,
        cta: "Éclairer ma commune / mon site"
      }
    ],
    custom: {
      title: "Votre projet ne rentre pas dans ces cases ?",
      desc: "Centrales au sol, carports solaires, hybride éolien-solaire, stockage industriel, micro-réseaux... Nous étudions toute configuration sur mesure.",
      cta: "Parler de mon projet spécifique"
    }
  },
  en: {
    title: "Our services",
    desc: "Four photovoltaic solutions adapted to every Tunisian need. Free study, certified installation, STEG/ANME procedures included.",
    services: [
      {
        slug: "raccorde-au-reseau",
        title: "Grid-connected installation (On-Grid)",
        icon: "🔌",
        shortDesc: "Produce your own electricity, sell the surplus to STEG, reduce your bill by up to 70%.",
        definition: "A system connected to the STEG grid (on-grid) produces your electricity during the day thanks to the sun and injects the surplus into the national grid. You stay connected to STEG: at night or when needed, you draw your power from the grid as before. Ideal for homes, apartments, shops and industries already connected to the grid.",
        highlights: [
          "Bill reduced by up to 70-80%",
          "No batteries → lower initial cost",
          "Eligible for Prosol Residential / Elec",
          "Return on investment in 4-6 years",
        ],
        description: `
          <p className="mb-4">The grid-connected photovoltaic installation (On-Grid) is the most common solution for homeowners and businesses in Tunisia. It lets you produce your own solar electricity and inject the surplus into the STEG grid.</p>
          <h4 className="font-semibold text-gray-900 mb-2">How does it work?</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li>The panels produce electricity during the day</li>
            <li>You use your own production first (self-consumption)</li>
            <li>The surplus is injected into the STEG grid</li>
            <li>At night or in cloudy weather, you draw electricity from the grid</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li><strong>STEG bill reduced by up to 70-80%</strong></li>
            <li>No batteries needed → lower initial cost</li>
            <li>Minimal maintenance (no storage)</li>
            <li>Eligible for the <strong>Prosol Residential / Prosol Elec</strong> programme (subsidies + subsidised loans)</li>
            <li>Typical return on investment: 4-6 years</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">Ideal for:</h4>
          <p className="text-gray-600">Homes, villas, apartments with accessible roofing, shops, industries, farms connected to the STEG grid.</p>
        `,
        cta: "Study my On-Grid project"
      },
      {
        slug: "site-isole",
        title: "Off-grid system (Off-Grid / Hybrid)",
        icon: "🏝️",
        shortDesc: "Total electricity independence where the STEG grid doesn't reach. Batteries + panels + backup generator.",
        definition: "An off-grid system is a fully autonomous installation, independent from the STEG grid, combining panels, batteries and sometimes a backup generator. Energy produced during the day is stored for use at night or in cloudy weather. Designed for farms, chalets, eco-lodges, pumping stations and any location the grid doesn't reach.",
        highlights: [
          "24/7 electricity autonomy",
          "Batteries + backup generator",
          "Ideal where the grid doesn't reach",
          "Remote monitoring (GSM/WiFi)",
        ],
        description: `
          <p className="mb-4">For sites not connected to the electricity grid (isolated farms, chalets, tourist sites, remote pumping), we design autonomous systems with battery storage.</p>
          <h4 className="font-semibold text-gray-900 mb-2">Possible configurations</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li><strong>100% Solar + Batteries:</strong> Full autonomy, silent, zero fuel</li>
            <li><strong>Hybrid Solar + Generator:</strong> Maximum security, battery sized for the essentials, backup generator</li>
            <li><strong>Hybrid Solar + Wind:</strong> For windy sites, complementary production at night/winter</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">Key components</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li>Photovoltaic panels sized according to consumption</li>
            <li>Hybrid inverter / charger (manages solar + batteries + generator)</li>
            <li>Lithium batteries (recommended) or Gel/AGM</li>
            <li>High-performance MPPT regulator</li>
            <li>Remote monitoring (GSM/Internet if available)</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">Ideal for:</h4>
          <p className="text-gray-600">Isolated farms, pumping stations, tourist sites (eco-lodges), telecom relays, construction sites, off-grid homes.</p>
        `,
        cta: "Size my off-grid system"
      },
      {
        slug: "pompage-solaire",
        title: "Solar agricultural pumping",
        icon: "💧",
        shortDesc: "Irrigation, watering trough, borehole: free water thanks to the sun. Zero diesel, zero STEG bill.",
        definition: "Solar pumping uses the sun's energy to power a pump that draws or moves water, no diesel, no STEG bill. Whenever it's sunny, water flows for free. Ideal for irrigation, livestock watering, deep boreholes and water transfer.",
        highlights: [
          "0 TND of fuel",
          "Free water from sunrise",
          "Almost zero maintenance",
          "Prosol Agricole / APIA subsidies",
        ],
        description: `
          <p className="mb-4">Solar pumping is the most profitable photovoltaic application in Tunisian agriculture. Replace your diesel generators or costly STEG connections with a pump powered directly by the sun.</p>
          <h4 className="font-semibold text-gray-900 mb-2">Types of installations</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li><strong>Direct pumping (no batteries):</strong> The pump runs when the sun shines → fills basin/tank during the day. The simplest and most robust.</li>
            <li><strong>Pumping with batteries:</strong> Allows night/off-peak pumping, constant pressure.</li>
            <li><strong>Hybrid system:</strong> Solar + backup generator for critical needs.</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">Applications</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li>Drip irrigation, pivots, sprinklers</li>
            <li>Livestock watering (pump → basin → troughs)</li>
            <li>Deep boreholes (submersible pumps 3-30 kW)</li>
            <li>Water transfer (dam → reservoir, well → field)</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">Economic benefits</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li><strong>0 TND of fuel</strong> vs 15-30k TND/year for a diesel generator</li>
            <li><strong>0 TND of STEG bill</strong> if off-grid</li>
            <li>Almost zero maintenance (no combustion engine)</li>
            <li>Lifespan 20-25 years (panels) / 10-15 years (pump)</li>
            <li>Eligible for <strong>Prosol Agricole / APIA</strong> subsidies</li>
          </ul>
          <p className="text-gray-600">Custom sizing based on: desired flow (m³/h), total dynamic head (TDH), daily consumption profile.</p>
        `,
        cta: "Calculate my solar pumping"
      },
      {
        slug: "eclairage-public",
        title: "Solar street lighting",
        icon: "💡",
        shortDesc: "Streets, car parks, industrial zones, landmarks: autonomous lighting, zero trenching, zero bill.",
        definition: "Solar street lighting means autonomous light poles: each pole integrates panel, battery, LED and regulator, with no trenching or grid connection. It switches on at dusk and off at dawn, even during STEG outages. Suitable for municipalities, car parks, industrial zones, housing estates and isolated sites.",
        highlights: [
          "Zero trenching or cabling",
          "Zero electricity bill for life",
          "Works even during STEG outages",
          "Installed in 1 day per pole",
        ],
        description: `
          <p className="mb-4">Solar street lighting (autonomous poles) is the ideal solution for municipalities, property developers, industrial zones and isolated sites. Each pole integrates panel, battery, LED and regulator: fast installation, no grid connection.</p>
          <h4 className="font-semibold text-gray-900 mb-2">Technical specifications</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li>High-efficiency monocrystalline panel (tilt optimised for Tunisia)</li>
            <li>LiFePO4 lithium battery integrated into the pole (10+ years, -20°C to +60°C)</li>
            <li>LED module 3000-6000 lm, 3000K-4000K, CRI>70, road optics</li>
            <li>Smart MPPT regulator: charge/discharge management, motion detection, timer programming</li>
            <li>Hot-dip galvanised steel / aluminium pole, height 6-12m</li>
            <li>2-3 nights of autonomy without sun, dusk switch-on / dawn switch-off</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">Benefits for local authorities</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li><strong>Zero trenching / cabling works</strong> → installed in 1 day per pole</li>
            <li><strong>Zero electricity bill</strong> for life</li>
            <li>Reduced maintenance (no grid, 10+ year batteries)</li>
            <li>Works even during STEG outages (public safety)</li>
            <li>Modern aesthetics, no overhead cables</li>
            <li>Eligible for municipal funds / ANME programmes</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">Applications</h4>
          <p className="text-gray-600">Municipal streets, public squares, car parks, industrial zones, housing estates, tourist sites, landmarks, road signage, pedestrian crossings.</p>
        `,
        cta: "Light up my municipality / site"
      }
    ],
    custom: {
      title: "Doesn't your project fit into these categories?",
      desc: "Ground-mounted plants, solar carports, wind-solar hybrid, industrial storage, micro-grids... We study any custom configuration.",
      cta: "Talk about my specific project"
    }
  },
};
