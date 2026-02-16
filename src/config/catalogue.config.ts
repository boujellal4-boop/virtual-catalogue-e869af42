// ===========================================
// CATALOGUE CONFIGURATION
// Easy to modify: logo, colors, backgrounds, company info
// ===========================================

export const catalogueConfig = {
  // Company branding
  company: {
    name: "Fire Detection Solutions",
    tagline: "Sea cual sea tu necesidad de detección de incendios, ¡tenemos una solución para ti!",
    logo: "/logo-kgs-white.png",
  },

  // Cover page settings
  cover: {
    title: "Catálogo de Productos KGS",
    subtitle: "2026",
    backgroundImage: "", // Optional: Add background image URL
  },

  // MS Forms integration
  // Replace with your actual MS Forms endpoint
  msFormsEndpoint: "https://forms.office.com/your-form-endpoint",

  // Brand configurations
  brands: [
    {
      id: "kidde-commercial",
      name: "Kidde Commercial",
      description: "Una de las marcas líderes mundiales en detección de incendios, que incorpora las reconocidas marcas Aritech Fire, Kilsen y Ziton.\n\nKidde Commercial aporta más de 100 años de herencia y experiencia a la vanguardia de las soluciones de seguridad contra incendios.",
      color: "brand-kidde",
      logo: "/brands/kidde.png",
      systems: [
        { id: "addressable", name: "Sistema Direccionable", icon: "circuit" },
        { id: "conventional", name: "Sistema Convencional", icon: "layers" },
        { id: "wireless", name: "Sistema Inalámbrico", icon: "wifi" },
        { id: "linear-heat", name: "Detección Lineal de Calor", icon: "thermometer" },
        { id: "asd", name: "Detección de Humo por Aspiración", icon: "wind" },
      ],
    },
    {
      id: "airsense",
      name: "AirSense",
      description: "Marca líder en detección de humo por aspiración, especializada en proporcionar soluciones avanzadas de protección contra incendios para entornos donde la detección temprana es crítica o donde los sistemas tradicionales no operan eficazmente.",
      color: "brand-airsense",
      logo: "/brands/airsense.png",
      systems: [
        { id: "asd", name: "ASD (Detección de Humo por Aspiración)", icon: "wind" },
      ],
    },
    {
      id: "ems",
      name: "EMS",
      description: "EMS es una marca líder en tecnologías de seguridad. Somos especialistas en diseño, fabricación y soporte de sistemas wireless modulares desde hace más de 50 años.",
      color: "brand-ems",
      logo: "/brands/ems.png",
      systems: [
        { id: "firecell", name: "FireCell - Inalámbrico Completo", icon: "wifi" },
        { id: "fusion", name: "Fusion - Inalámbrico Híbrido", icon: "radio" },
        { id: "smartcell", name: "SmartCell - Inalámbrico Compacto", icon: "wifi" },
      ],
    },
    {
      id: "edwards",
      name: "Edwards",
      description: "Fundada en 1872, Edwards nunca ha dejado de perseguir su pasión por la protección, con innovaciones en seguridad contra incendios que preparan tus instalaciones para el futuro.",
      color: "brand-edwards",
      logo: "/brands/edwards.png",
      systems: [
        { id: "high-end-addressable", name: "Sistema Direccionable de Alta Gama", icon: "cpu" },
        { id: "asd", name: "ASD (Detección de Humo por Aspiración)", icon: "wind" },
        { id: "pava", name: "PAVA (Megafonía y Alarma por Voz)", icon: "volume" },
      ],
    },
  ],

  // Navigation settings
  navigation: {
    showBackButton: true,
    showMenuButton: true,
  },
};

export type Brand = typeof catalogueConfig.brands[number];
export type System = Brand["systems"][number];
