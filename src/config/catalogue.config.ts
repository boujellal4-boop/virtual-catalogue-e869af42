// ===========================================
// CATALOGUE CONFIGURATION
// Easy to modify: logo, colors, backgrounds, company info
// ===========================================

export const catalogueConfig = {
  // Company branding
  company: {
    name: "Fire Detection Solutions",
    tagline: "Whatever your fire detection need is, we have a solution for you!",
    logo: "/logo-kgs-white.png",
  },

  // Cover page settings
  cover: {
    title: "KGS Product Catalogue",
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
      description: "One of the world's leading fire detection brands, incorporating the renowned Aritech Fire, Kilsen, and Ziton brands.\n\nKidde Commercial brings over 100 years of heritage and expertise to the forefront of fire and life safety solutions.",
      color: "brand-kidde",
      logo: "/brands/kidde.png",
      systems: [
        { id: "addressable", name: "Addressable System", icon: "circuit" },
        { id: "conventional", name: "Conventional System", icon: "layers" },
        { id: "wireless", name: "Wireless System", icon: "wifi" },
        { id: "linear-heat", name: "Linear Heat Detection", icon: "thermometer" },
        { id: "asd", name: "Aspirating Smoke Detection", icon: "wind" },
      ],
    },
    {
      id: "airsense",
      name: "AirSense",
      description: "Leading brand in aspirating smoke detection, specializing in providing advanced fire protection solutions for environments where early detection is critical or where traditional fire detection systems struggle to operate effectively.",
      color: "brand-airsense",
      logo: "/brands/airsense.png",
      systems: [
        { id: "asd", name: "ASD (Aspirating Smoke Detection)", icon: "wind" },
      ],
    },
    {
      id: "ems",
      name: "EMS",
      description: "EMS is a leading life safety technologies brand. We have been specialists in modular wireless systems design, manufacture and support for over 50 years.",
      color: "brand-ems",
      logo: "/brands/ems.png",
      systems: [
        { id: "firecell", name: "FireCell - Full Wireless", icon: "wifi" },
        { id: "fusion", name: "Fusion - Hybrid Wireless", icon: "radio" },
        { id: "smartcell", name: "SmartCell - Small Full Wireless", icon: "wifi" },
      ],
    },
    {
      id: "edwards",
      name: "Edwards",
      description: "Founded in 1872, Edwards has never stopped pursuing a passion for protection, with innovations in fire and life safety that will future-proof your facility.",
      color: "brand-edwards",
      logo: "/brands/edwards.png",
      systems: [
        { id: "high-end-addressable", name: "High-End Addressable System", icon: "cpu" },
        { id: "asd", name: "ASD (Aspirating Smoke Detection)", icon: "wind" },
        { id: "pava", name: "PAVA", icon: "volume" },
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
