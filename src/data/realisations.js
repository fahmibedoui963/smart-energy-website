const realisationsContent = {
  fr: {
    title: "Nos réalisations",
    desc: "Plus de 1000 installations à travers la Tunisie. Découvrez un aperçu de nos projets récents, résidentiels comme industriels.",
    projects: [
      {
        id: 1,
        slug: "ste-froid-ben-moussa",
        title: "Sté Froid Ben Moussa",
        type: "Autoconsommation",
        power: "80 kWc",
        location: "Kelibia",
        desc: "Installation Photovoltaïque 80 kWc raccordée au réseau moyenne tension à Kélibia.",
        photo: "/photos/projet-1-1.png",
        gallery: ["/photos/projet-1-1.png", "/photos/projet-1-2.png", "/photos/projet-1-3.png"],
        tags: ["On-Grid", "Autoconsommation"],
        spec: { power: "80 kWc", panels: "145", inverters: { value: "SMA 20 kWc", count: 4 } },
        descIntro: "Installation Photovoltaïque 80 kWc Raccordé au Réseau Moyenne Tension à Kélibia",
        descParas: [
          "Cette centrale solaire a été conçue pour répondre aux besoins énergétiques intensifs de la Sté Froid Ben Moussa, spécialisée dans le froid industriel. Avec 145 panneaux photovoltaïques et 4 onduleurs SMA haute performance, l'installation couvre une part significative de la consommation électrique du site, réduisant durablement les coûts d'exploitation liés au réseau STEG.",
          "Le raccordement en moyenne tension (MT) permet une injection optimale de l'énergie produite, garantissant fiabilité et stabilité pour une activité qui fonctionne en continu."
        ]
      }
    ],
    cta: "Discuter de votre projet",
    details: "Voir projet",
    galleryTitle: "Nos réalisations",
    gallery: [
      { src: "/photos/projet-1-1.png", label: "Photovoltaïque 1" },
      { src: "/photos/projet-2-1.png", label: "Photovoltaïque 2" },
      { src: "/photos/projet-2-2.png", label: "Photovoltaïque 3" },
      { src: "/photos/projet-3-1.png", label: "Photovoltaïque 4" },
      { src: "/photos/projet-3-3.png", label: "Photovoltaïque 5" },
    ],
    installationsNote: "+1000 installations réalisées dans tout le pays",
    specTitle: "Fiche technique",
    specLabels: { power: "Puissance", panels: "Panneaux", inverters: "Onduleurs" },
    detailBack: "← Retour aux réalisations",
    detailDesc: "À propos du projet",
    notFound: "Projet introuvable"
  },
  en: {
    title: "Our projects",
    desc: "Over 1000 installations across Tunisia. Discover an overview of our recent projects, both residential and industrial.",
    projects: [
      {
        id: 1,
        slug: "ste-froid-ben-moussa",
        title: "Sté Froid Ben Moussa",
        type: "Self-consumption",
        power: "80 kWp",
        location: "Kelibia",
        desc: "80 kWp photovoltaic installation, medium voltage grid-connected, in Kelibia.",
        photo: "/photos/projet-1-1.png",
        gallery: ["/photos/projet-1-1.png", "/photos/projet-1-2.png", "/photos/projet-1-3.png"],
        tags: ["On-Grid", "Self-consumption"],
        spec: { power: "80 kWp", panels: "145", inverters: { value: "SMA 20 kWp", count: 4 } },
        descIntro: "80 kWp Photovoltaic Installation, Medium Voltage Grid-Connected, in Kelibia",
        descParas: [
          "This solar plant was designed to meet the intensive energy needs of Sté Froid Ben Moussa, specialised in industrial cold storage. With 145 photovoltaic panels and 4 high-performance SMA inverters, the installation covers a significant share of the site's electricity consumption, durably reducing operating costs linked to the STEG grid.",
          "The medium-voltage (MV) grid connection allows optimal injection of the generated energy, guaranteeing reliability and stability for an activity that runs continuously."
        ]
      }
    ],
    cta: "Discuss your project",
    details: "View project",
    galleryTitle: "Our projects",
    gallery: [
      { src: "/photos/projet-1-1.png", label: "Photovoltaic 1" },
      { src: "/photos/projet-2-1.png", label: "Photovoltaic 2" },
      { src: "/photos/projet-2-2.png", label: "Photovoltaic 3" },
      { src: "/photos/projet-3-1.png", label: "Photovoltaic 4" },
      { src: "/photos/projet-3-3.png", label: "Photovoltaic 5" },
    ],
    installationsNote: "+1000 installations completed across the country",
    specTitle: "Technical specifications",
    specLabels: { power: "Power", panels: "Panels", inverters: "Inverters" },
    detailBack: "← Back to projects",
    detailDesc: "About the project",
    notFound: "Project not found"
  },
};

export { realisationsContent };
