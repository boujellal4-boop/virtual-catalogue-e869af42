// ===========================================
// CATALOGUE CONFIGURATION
// Easy to modify: logo, colors, backgrounds, company info
// ===========================================

export const catalogueConfig = {
  // Company branding
  company: {
    name: "Fire Detection Solutions",
    tagline: "Protecting What Matters Most",
    logo: "/logo.svg", // Replace with your logo path
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
      description: "Industry-leading fire detection and suppression solutions",
      color: "brand-kidde",
      logo: "/brands/kidde.svg",
      systems: [
        { id: "addressable", name: "Addressable System", icon: "circuit" },
        { id: "conventional", name: "Conventional System", icon: "layers" },
        { id: "wireless", name: "Wireless System", icon: "wifi" },
        { id: "specialty", name: "Specialty Detection", icon: "shield" },
        { id: "pava", name: "PAVA", icon: "volume" },
      ],
    },
    {
      id: "airsense",
      name: "AirSense",
      description: "Advanced smoke detection technology",
      color: "brand-airsense",
      logo: "/brands/airsense.svg",
      systems: [
        { id: "asd", name: "ASD (Aspirating Smoke Detection)", icon: "wind" },
      ],
    },
    {
      id: "ems",
      name: "EMS",
      description: "Flexible wireless fire detection systems",
      color: "brand-ems",
      logo: "/brands/ems.svg",
      systems: [
        { id: "hybrid-wireless", name: "Hybrid Wireless", icon: "radio" },
        { id: "full-wireless", name: "Full Wireless", icon: "wifi" },
      ],
    },
    {
      id: "edwards",
      name: "Edwards",
      description: "Premium high-end detection solutions",
      color: "brand-edwards",
      logo: "/brands/edwards.svg",
      systems: [
        { id: "high-end-addressable", name: "High-End Addressable System", icon: "cpu" },
        { id: "asd", name: "ASD (Aspirating Smoke Detection)", icon: "wind" },
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
