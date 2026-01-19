// ===========================================
// PRODUCT DATA
// Add/modify products here
// ===========================================

export interface Product {
  id: string;
  sku: string;
  name: string;
  brandId: string;
  systemId: string;
  subcategory: string;
  image: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  videoUrl?: string;
  vrQrCode?: string;
  relatedProducts: string[];
}

export const products: Product[] = [
  // Kidde Commercial - Addressable System
  {
    id: "kc-addr-001",
    sku: "KC-ADDR-FCP-5000",
    name: "FireControl Pro 5000",
    brandId: "kidde-commercial",
    systemId: "addressable",
    subcategory: "Control Panels",
    image: "/products/firecontrol-pro.jpg",
    description: "Advanced addressable fire alarm control panel with intuitive touchscreen interface and comprehensive zone management.",
    features: [
      "Up to 250 addressable devices",
      "7-inch color touchscreen display",
      "Built-in network communication",
      "Remote monitoring capability",
      "EN54 certified",
    ],
    specifications: {
      "Operating Voltage": "24V DC",
      "Loop Capacity": "2 loops, expandable to 4",
      "Zone Capacity": "250 zones",
      "Dimensions": "400 x 500 x 120 mm",
      "Weight": "8.5 kg",
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    vrQrCode: "/qr/kc-addr-001.png",
    relatedProducts: ["kc-addr-002", "kc-addr-003"],
  },
  {
    id: "kc-addr-002",
    sku: "KC-ADDR-SD-200",
    name: "SmartDetect 200",
    brandId: "kidde-commercial",
    systemId: "addressable",
    subcategory: "Smoke Detectors",
    image: "/products/smartdetect.jpg",
    description: "Multi-criteria addressable smoke detector with advanced algorithm for early fire detection.",
    features: [
      "Photoelectric and thermal sensing",
      "360° coverage area",
      "Self-diagnostic functionality",
      "Low power consumption",
      "Easy installation and maintenance",
    ],
    specifications: {
      "Detection Method": "Photoelectric + Thermal",
      "Coverage Area": "150 m²",
      "Operating Temperature": "-10°C to +55°C",
      "Dimensions": "110 mm diameter x 52 mm height",
      "Weight": "120g",
    },
    relatedProducts: ["kc-addr-001", "kc-addr-003"],
  },
  {
    id: "kc-addr-003",
    sku: "KC-ADDR-MCP-100",
    name: "ManualCall Pro",
    brandId: "kidde-commercial",
    systemId: "addressable",
    subcategory: "Manual Call Points",
    image: "/products/manualcall.jpg",
    description: "Robust addressable manual call point with break glass design for emergency activation.",
    features: [
      "Break glass operation",
      "LED status indication",
      "Weather-resistant housing",
      "Resettable element",
      "IP67 rated",
    ],
    specifications: {
      "Operating Method": "Break Glass",
      "Protection Rating": "IP67",
      "Material": "Polycarbonate",
      "Dimensions": "87 x 87 x 55 mm",
      "Weight": "95g",
    },
    relatedProducts: ["kc-addr-001", "kc-addr-002"],
  },

  // Kidde Commercial - Conventional System
  {
    id: "kc-conv-001",
    sku: "KC-CONV-CP-2000",
    name: "ConventionalPro 2000",
    brandId: "kidde-commercial",
    systemId: "conventional",
    subcategory: "Control Panels",
    image: "/products/conventional-panel.jpg",
    description: "Reliable conventional fire alarm control panel for small to medium installations.",
    features: [
      "8 zones standard, expandable to 16",
      "LED zone indication",
      "Battery backup support",
      "Fault monitoring",
      "Simple programming",
    ],
    specifications: {
      "Zones": "8-16",
      "Operating Voltage": "230V AC",
      "Battery": "2 x 12V 7Ah",
      "Dimensions": "350 x 400 x 100 mm",
      "Weight": "5.5 kg",
    },
    relatedProducts: ["kc-conv-002"],
  },
  {
    id: "kc-conv-002",
    sku: "KC-CONV-SD-100",
    name: "OpticalSense 100",
    brandId: "kidde-commercial",
    systemId: "conventional",
    subcategory: "Smoke Detectors",
    image: "/products/optical-sense.jpg",
    description: "High-performance conventional optical smoke detector with reliable detection.",
    features: [
      "Optical sensing technology",
      "Wide coverage area",
      "Low false alarm rate",
      "Easy base mounting",
      "360° light entry",
    ],
    specifications: {
      "Detection Method": "Optical",
      "Coverage Area": "100 m²",
      "Operating Voltage": "12-28V DC",
      "Dimensions": "102 mm diameter",
      "Weight": "85g",
    },
    relatedProducts: ["kc-conv-001"],
  },

  // Kidde Commercial - Wireless System
  {
    id: "kc-wire-001",
    sku: "KC-WIRE-HUB-500",
    name: "WirelessHub 500",
    brandId: "kidde-commercial",
    systemId: "wireless",
    subcategory: "Control Hubs",
    image: "/products/wireless-hub.jpg",
    description: "Central wireless hub for managing up to 500 wireless fire detection devices.",
    features: [
      "Supports 500 wireless devices",
      "Mesh network technology",
      "Cloud connectivity",
      "Mobile app control",
      "Battery status monitoring",
    ],
    specifications: {
      "Device Capacity": "500 devices",
      "Frequency": "868 MHz",
      "Range": "Up to 200m",
      "Power": "230V AC with battery backup",
      "Dimensions": "300 x 350 x 80 mm",
    },
    relatedProducts: ["kc-wire-002"],
  },
  {
    id: "kc-wire-002",
    sku: "KC-WIRE-SD-50",
    name: "WirelessSmoke 50",
    brandId: "kidde-commercial",
    systemId: "wireless",
    subcategory: "Wireless Detectors",
    image: "/products/wireless-smoke.jpg",
    description: "Battery-powered wireless smoke detector with 10-year battery life.",
    features: [
      "10-year sealed battery",
      "Self-test functionality",
      "Low battery warning",
      "Wireless mesh support",
      "Quick pairing",
    ],
    specifications: {
      "Battery Life": "10 years",
      "Detection": "Photoelectric",
      "Frequency": "868 MHz",
      "Range": "100m (open space)",
      "Dimensions": "120 mm diameter",
    },
    relatedProducts: ["kc-wire-001"],
  },

  // Kidde Commercial - Specialty Detection
  {
    id: "kc-spec-001",
    sku: "KC-SPEC-HEAT-300",
    name: "HeatSense 300",
    brandId: "kidde-commercial",
    systemId: "specialty",
    subcategory: "Heat Detectors",
    image: "/products/heat-sense.jpg",
    description: "Rate-of-rise heat detector for areas where smoke detectors are unsuitable.",
    features: [
      "Rate-of-rise detection",
      "Fixed temperature threshold",
      "Kitchen/garage suitable",
      "Dust and moisture resistant",
      "Low maintenance",
    ],
    specifications: {
      "Detection": "Rate-of-rise + Fixed",
      "Fixed Temp": "57°C",
      "ROR Threshold": "8°C/min",
      "IP Rating": "IP44",
      "Dimensions": "102 mm diameter",
    },
    relatedProducts: ["kc-spec-002"],
  },
  {
    id: "kc-spec-002",
    sku: "KC-SPEC-BEAM-200",
    name: "BeamGuard 200",
    brandId: "kidde-commercial",
    systemId: "specialty",
    subcategory: "Beam Detectors",
    image: "/products/beam-guard.jpg",
    description: "Reflective beam smoke detector for large open spaces and warehouses.",
    features: [
      "Range up to 100m",
      "Auto-alignment feature",
      "Contamination compensation",
      "Easy installation",
      "Remote testing capability",
    ],
    specifications: {
      "Range": "5-100m",
      "Beam Width": "1m",
      "Response Time": "<30 seconds",
      "Power": "24V DC",
      "IP Rating": "IP54",
    },
    relatedProducts: ["kc-spec-001"],
  },

  // Kidde Commercial - PAVA
  {
    id: "kc-pava-001",
    sku: "KC-PAVA-AMP-1000",
    name: "VoiceAlert 1000",
    brandId: "kidde-commercial",
    systemId: "pava",
    subcategory: "Amplifiers",
    image: "/products/voice-alert.jpg",
    description: "High-power PAVA amplifier for emergency voice alarm systems.",
    features: [
      "1000W output power",
      "Multiple zone routing",
      "Pre-recorded messages",
      "Microphone priority",
      "Network audio support",
    ],
    specifications: {
      "Power Output": "1000W RMS",
      "Zones": "8 zones",
      "THD": "<0.5%",
      "Input": "4 balanced inputs",
      "Dimensions": "2U rack mount",
    },
    relatedProducts: ["kc-pava-002"],
  },
  {
    id: "kc-pava-002",
    sku: "KC-PAVA-SPK-50",
    name: "ClearVoice Speaker",
    brandId: "kidde-commercial",
    systemId: "pava",
    subcategory: "Speakers",
    image: "/products/clear-voice.jpg",
    description: "High-intelligibility ceiling speaker for voice alarm applications.",
    features: [
      "Speech optimized frequency response",
      "Wide dispersion pattern",
      "Fire-rated cable terminals",
      "Flush or surface mount",
      "EN54-24 certified",
    ],
    specifications: {
      "Power Taps": "6W / 3W / 1.5W",
      "Frequency": "200Hz - 15kHz",
      "SPL": "92dB @ 1W/1m",
      "Dimensions": "200mm diameter",
      "Certification": "EN54-24",
    },
    relatedProducts: ["kc-pava-001"],
  },

  // AirSense - ASD
  {
    id: "as-asd-001",
    sku: "AS-ASD-LASER-PRO",
    name: "LaserSense Pro",
    brandId: "airsense",
    systemId: "asd",
    subcategory: "ASD Units",
    image: "/products/laser-sense.jpg",
    description: "Ultra-sensitive aspirating smoke detector with laser particle detection.",
    features: [
      "Laser particle counting",
      "0.001%/m sensitivity",
      "Up to 4 pipe inlets",
      "Real-time air sampling",
      "Advanced analytics",
    ],
    specifications: {
      "Sensitivity": "0.001%/m - 20%/m",
      "Pipe Inlets": "4",
      "Transport Time": "<60 seconds",
      "Air Flow": "0.5-2 L/min per hole",
      "Dimensions": "350 x 250 x 100 mm",
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    vrQrCode: "/qr/as-asd-001.png",
    relatedProducts: ["as-asd-002"],
  },
  {
    id: "as-asd-002",
    sku: "AS-ASD-STRATOS",
    name: "Stratos-HSSD",
    brandId: "airsense",
    systemId: "asd",
    subcategory: "ASD Units",
    image: "/products/stratos.jpg",
    description: "High-sensitivity smoke detection system for critical environments.",
    features: [
      "Cloud chamber technology",
      "Class A sensitivity",
      "Network integration",
      "Data center approved",
      "Multi-zone sampling",
    ],
    specifications: {
      "Sensitivity": "Class A (EN54-20)",
      "Sampling Points": "Up to 60",
      "Coverage": "2000 m²",
      "Network": "Modbus/BACnet",
      "Power": "24V DC",
    },
    relatedProducts: ["as-asd-001"],
  },

  // EMS - Hybrid Wireless
  {
    id: "ems-hyb-001",
    sku: "EMS-HYB-PANEL-200",
    name: "HybridMaster 200",
    brandId: "ems",
    systemId: "hybrid-wireless",
    subcategory: "Control Panels",
    image: "/products/hybrid-master.jpg",
    description: "Hybrid control panel supporting both wired and wireless devices.",
    features: [
      "Mixed wired/wireless",
      "200 device capacity",
      "Seamless integration",
      "Flexible installation",
      "Cost-effective expansion",
    ],
    specifications: {
      "Wired Loops": "2",
      "Wireless Devices": "128",
      "Wired Devices": "72",
      "Frequency": "868 MHz",
      "Dimensions": "400 x 450 x 120 mm",
    },
    relatedProducts: ["ems-hyb-002"],
  },
  {
    id: "ems-hyb-002",
    sku: "EMS-HYB-TRANS-50",
    name: "WirelessTranslator",
    brandId: "ems",
    systemId: "hybrid-wireless",
    subcategory: "Translators",
    image: "/products/translator.jpg",
    description: "Wireless-to-wired translator for integrating wireless devices into existing systems.",
    features: [
      "Protocol translation",
      "Up to 32 wireless devices",
      "Retrofit friendly",
      "Signal boosting",
      "Status monitoring",
    ],
    specifications: {
      "Wireless Capacity": "32 devices",
      "Output": "Addressable loop",
      "Range Extension": "100m",
      "Power": "Loop powered",
      "Dimensions": "150 x 100 x 40 mm",
    },
    relatedProducts: ["ems-hyb-001"],
  },

  // EMS - Full Wireless
  {
    id: "ems-full-001",
    sku: "EMS-FULL-HUB-MAX",
    name: "TotalWireless Hub",
    brandId: "ems",
    systemId: "full-wireless",
    subcategory: "Control Hubs",
    image: "/products/total-wireless.jpg",
    description: "Complete wireless fire alarm system hub with zero wiring requirements.",
    features: [
      "100% wireless system",
      "4G/LTE backup",
      "Solar power option",
      "Temporary installations",
      "Rapid deployment",
    ],
    specifications: {
      "Device Capacity": "256 devices",
      "Backup Comms": "4G/LTE",
      "Battery Life": "5 years",
      "Mesh Network": "Yes",
      "Dimensions": "280 x 320 x 90 mm",
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    relatedProducts: ["ems-full-002"],
  },
  {
    id: "ems-full-002",
    sku: "EMS-FULL-DETECT-W",
    name: "WirelessGuard Multi",
    brandId: "ems",
    systemId: "full-wireless",
    subcategory: "Wireless Detectors",
    image: "/products/wireless-guard.jpg",
    description: "Multi-sensor wireless detector combining smoke, heat, and CO detection.",
    features: [
      "Smoke + Heat + CO",
      "10-year battery",
      "Self-healing mesh",
      "App diagnostics",
      "Voice alerts",
    ],
    specifications: {
      "Sensors": "Smoke, Heat, CO",
      "Battery": "10-year lithium",
      "Range": "150m open space",
      "Voice Alerts": "Yes",
      "Dimensions": "130 mm diameter",
    },
    relatedProducts: ["ems-full-001"],
  },

  // Edwards - High-End Addressable
  {
    id: "ed-high-001",
    sku: "ED-HIGH-EST4",
    name: "EST4 Life Safety",
    brandId: "edwards",
    systemId: "high-end-addressable",
    subcategory: "Control Panels",
    image: "/products/est4.jpg",
    description: "Premium life safety platform with advanced fire and emergency management.",
    features: [
      "Scalable architecture",
      "Graphic command center",
      "Mass notification",
      "Network integration",
      "Critical environment ready",
    ],
    specifications: {
      "Nodes": "Up to 64",
      "Points per Node": "2540",
      "Display": "15-inch touchscreen",
      "Network": "Fiber/Copper",
      "Certification": "UL/FM/CSFM",
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    vrQrCode: "/qr/ed-high-001.png",
    relatedProducts: ["ed-high-002"],
  },
  {
    id: "ed-high-002",
    sku: "ED-HIGH-SIGA-PS",
    name: "SIGA-PS Intelligent",
    brandId: "edwards",
    systemId: "high-end-addressable",
    subcategory: "Intelligent Detectors",
    image: "/products/siga-ps.jpg",
    description: "Premium photoelectric intelligent detector with advanced signal processing.",
    features: [
      "Patented algorithms",
      "Drift compensation",
      "Environmental adaptation",
      "Remote sensitivity",
      "FlashScan protocol",
    ],
    specifications: {
      "Detection": "Photoelectric",
      "Protocol": "FlashScan",
      "Drift Comp": "Automatic",
      "Coverage": "185 m²",
      "Dimensions": "102 mm diameter",
    },
    relatedProducts: ["ed-high-001"],
  },

  // Edwards - ASD
  {
    id: "ed-asd-001",
    sku: "ED-ASD-VESDA-E",
    name: "VESDA-E VEU",
    brandId: "edwards",
    systemId: "asd",
    subcategory: "ASD Units",
    image: "/products/vesda-e.jpg",
    description: "Industry-leading aspirating smoke detector for mission-critical applications.",
    features: [
      "Dual-stage filtration",
      "Cloud analytics",
      "Predictive maintenance",
      "AutoLearn technology",
      "Absolute sensitivity",
    ],
    specifications: {
      "Sensitivity": "0.0015 - 20%/m",
      "Sampling Holes": "40",
      "Pipe Length": "400m",
      "Analytics": "Cloud-based",
      "Certification": "FM/UL/VdS",
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    vrQrCode: "/qr/ed-asd-001.png",
    relatedProducts: ["ed-asd-002"],
  },
  {
    id: "ed-asd-002",
    sku: "ED-ASD-VESDA-L",
    name: "VESDA Laser Plus",
    brandId: "edwards",
    systemId: "asd",
    subcategory: "ASD Units",
    image: "/products/vesda-laser.jpg",
    description: "Laser-based ASD providing the highest sensitivity smoke detection.",
    features: [
      "Laser detection",
      "Four alarm levels",
      "Display module",
      "Relay outputs",
      "Early warning",
    ],
    specifications: {
      "Sensitivity": "0.005 - 20%/m",
      "Alarm Levels": "4 (Alert, Action, Fire1, Fire2)",
      "Display": "LCD with LED bar graph",
      "Relays": "6 programmable",
      "Dimensions": "317 x 372 x 91 mm",
    },
    relatedProducts: ["ed-asd-001"],
  },
];

export const getProductsByBrandAndSystem = (brandId: string, systemId: string): Product[] => {
  return products.filter(p => p.brandId === brandId && p.systemId === systemId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getRelatedProducts = (productId: string): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  return product.relatedProducts
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined);
};

export const getSubcategories = (brandId: string, systemId: string): string[] => {
  const productList = getProductsByBrandAndSystem(brandId, systemId);
  return [...new Set(productList.map(p => p.subcategory))];
};
