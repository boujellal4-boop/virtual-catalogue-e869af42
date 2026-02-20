export type Language = 'es' | 'pt' | 'en';

export const languageNames: Record<Language, string> = {
  es: 'Spanish',
  pt: 'Português',
  en: 'English',
};

export const languageFlags: Record<Language, string> = {
  es: '🇪🇸',
  pt: '🇵🇹',
  en: '🇬🇧',
};

type TranslationKeys = {
  // Cover
  'cover.title': string;
  'cover.tagline': string;
  'cover.start': string;
  'cover.selectLanguage': string;

  // Register
  'register.welcome': string;
  'register.subtitle': string;
  'register.fullName': string;
  'register.company': string;
  'register.email': string;
  'register.fullNamePlaceholder': string;
  'register.companyPlaceholder': string;
  'register.emailPlaceholder': string;
  'register.continue': string;
  'register.sending': string;
  'register.privacy': string;
  'register.errorFullName': string;
  'register.errorCompany': string;
  'register.errorEmail': string;
  'register.errorEmailInvalid': string;

  // Brand
  'brand.welcomeUser': string;
  'brand.title': string;
  'brand.subtitle': string;
  'brand.systemsAvailable': string;
  'brand.systemAvailable': string;
  'brand.explore': string;

  // System
  'system.title': string;
  'system.subtitle': string;
  'system.viewProducts': string;

  // Products
  'products.title': string;
  'products.subtitle': string;
  'products.searchPlaceholder': string;
  'products.all': string;
  'products.noResults': string;

  // Product Detail
  'product.image': string;
  'product.video': string;
  'product.vrQr': string;
  'product.videoSoon': string;
  'product.scanVr': string;
  'product.qrSoon': string;
  'product.mainFeatures': string;
  'product.specifications': string;
  'product.relatedProducts': string;

  // Navigation
  'nav.navigation': string;
  'nav.goHome': string;
  'nav.selectBrand': string;
  'nav.currentBrand': string;

  // Brand descriptions
  'brand.desc.kidde-commercial': string;
  'brand.desc.airsense': string;
  'brand.desc.ems': string;
  'brand.desc.edwards': string;

  // System names
  'system.name.addressable': string;
  'system.name.conventional': string;
  'system.name.wireless': string;
  'system.name.linear-heat': string;
  'system.name.asd': string;
  'system.name.asd-full': string;
  'system.name.firecell': string;
  'system.name.fusion': string;
  'system.name.smartcell': string;
  'system.name.high-end-addressable': string;
  'system.name.pava': string;

  // Subcategories
  'subcategory.Paneles': string;
  'subcategory.Pulsadores Manuales': string;
  'subcategory.Detectores': string;
  'subcategory.Módulos de Entrada/Salida': string;
  'subcategory.Notificación': string;
  'subcategory.Accesorios': string;
  'subcategory.Bases': string;
  'subcategory.Zócalos': string;
  'subcategory.Detección Lineal de Calor': string;
  'subcategory.Detección de Humo por Aspiración': string;
  'subcategory.Dispositivos': string;
  'subcategory.Expansores': string;
  'subcategory.Gateway': string;
  'subcategory.Interfaz': string;
  'subcategory.Megafonía': string;
  'subcategory.Amplificadores': string;
  'subcategory.Altavoces': string;
  'subcategory.Software': string;
};

const es: TranslationKeys = {
  'cover.title': 'Catálogo de Productos KGS',
  'cover.tagline': '¡Sea cual sea tu necesidad de detección de incendios, tenemos una solución para ti!',
  'cover.start': 'Comenzar a Explorar',
  'cover.selectLanguage': 'Selecciona tu idioma',

  'register.welcome': 'Bienvenido',
  'register.subtitle': 'Comparte tus datos para continuar explorando nuestro catálogo',
  'register.fullName': 'Nombre Completo',
  'register.company': 'Empresa',
  'register.email': 'Correo Electrónico',
  'register.fullNamePlaceholder': 'Juan Pérez',
  'register.companyPlaceholder': 'Tu Empresa S.L.',
  'register.emailPlaceholder': 'juan@empresa.com',
  'register.continue': 'Continuar',
  'register.sending': 'Enviando...',
  'register.privacy': 'Tu información se almacena de forma segura y no se compartirá con terceros.',
  'register.errorFullName': 'El nombre completo es obligatorio',
  'register.errorCompany': 'El nombre de la empresa es obligatorio',
  'register.errorEmail': 'El correo electrónico es obligatorio',
  'register.errorEmailInvalid': 'Introduce una dirección de correo válida',

  'brand.welcomeUser': 'Bienvenido',
  'brand.title': 'Selecciona Tu Marca',
  'brand.subtitle': 'Elige la marca que deseas explorar. Cada una ofrece soluciones únicas para tus necesidades de detección de incendios.',
  'brand.systemsAvailable': 'sistemas disponibles',
  'brand.systemAvailable': 'sistema disponible',
  'brand.explore': 'Explorar',

  'system.title': 'Selecciona el Sistema de Detección',
  'system.subtitle': 'Elige el tipo de sistema de detección de incendios que mejor se adapte a tus necesidades.',
  'system.viewProducts': 'Ver productos disponibles',

  'products.title': 'Productos',
  'products.subtitle': 'tenemos muchos más a tu disposición para cubrir todas tus necesidades. Puedes consultarlos en nuestra web www.firesecurityproducts.com',
  'products.searchPlaceholder': 'Buscar por nombre o SKU...',
  'products.all': 'Todos',
  'products.noResults': 'No se encontraron productos que coincidan con tu búsqueda',

  'product.image': 'Imagen',
  'product.video': 'Video',
  'product.vrQr': 'VR QR',
  'product.videoSoon': 'Video próximamente',
  'product.scanVr': 'Escanea para experiencia VR',
  'product.qrSoon': 'Código QR próximamente',
  'product.mainFeatures': 'Características Principales',
  'product.specifications': 'Especificaciones',
  'product.relatedProducts': 'Productos Similares',

  'nav.navigation': 'Navegación',
  'nav.goHome': 'Volver al Inicio',
  'nav.selectBrand': 'Seleccionar Marca',
  'nav.currentBrand': 'Marca Actual',

  'brand.desc.kidde-commercial': 'Una de las marcas líderes mundiales en detección de incendios, que incorpora las reconocidas marcas Aritech Fire, Kilsen y Ziton.\n\nKidde Commercial aporta más de 100 años de herencia y experiencia a la vanguardia de las soluciones de seguridad contra incendios.',
  'brand.desc.airsense': 'Marca líder en detección de humo por aspiración, especializada en proporcionar soluciones avanzadas de protección contra incendios para entornos donde la detección temprana es crítica o donde los sistemas tradicionales no operan eficazmente.',
  'brand.desc.ems': 'EMS es una marca líder en tecnologías de seguridad. Somos especialistas en diseño, fabricación y soporte de sistemas wireless modulares desde hace más de 50 años.',
  'brand.desc.edwards': 'Fundada en 1872, Edwards nunca ha dejado de perseguir su pasión por la protección, con innovaciones en seguridad contra incendios que preparan tus instalaciones para el futuro.',

  'system.name.addressable': 'Sistema Direccionable',
  'system.name.conventional': 'Sistema Convencional',
  'system.name.wireless': 'Sistema Inalámbrico',
  'system.name.linear-heat': 'Detección Lineal de Calor',
  'system.name.asd': 'Detección de Humo por Aspiración',
  'system.name.asd-full': 'ASD (Detección de Humo por Aspiración)',
  'system.name.firecell': 'FireCell - Inalámbrico Completo',
  'system.name.fusion': 'Fusion - Inalámbrico Híbrido',
  'system.name.smartcell': 'SmartCell - Inalámbrico Compacto',
  'system.name.high-end-addressable': 'Sistema Direccionable de Alta Gama',
  'system.name.pava': 'PAVA (Megafonía y Alarma por Voz)',

  'subcategory.Paneles': 'Paneles',
  'subcategory.Pulsadores Manuales': 'Pulsadores Manuales',
  'subcategory.Detectores': 'Detectores',
  'subcategory.Módulos de Entrada/Salida': 'Módulos de Entrada/Salida',
  'subcategory.Notificación': 'Notificación',
  'subcategory.Accesorios': 'Accesorios',
  'subcategory.Bases': 'Bases',
  'subcategory.Zócalos': 'Zócalos',
  'subcategory.Detección Lineal de Calor': 'Detección Lineal de Calor',
  'subcategory.Detección de Humo por Aspiración': 'Detección de Humo por Aspiración',
  'subcategory.Dispositivos': 'Dispositivos',
  'subcategory.Expansores': 'Expansores',
  'subcategory.Gateway': 'Gateway',
  'subcategory.Interfaz': 'Interfaz',
  'subcategory.Megafonía': 'Megafonía',
  'subcategory.Amplificadores': 'Amplificadores',
  'subcategory.Altavoces': 'Altavoces',
  'subcategory.Software': 'Software',
};

const pt: TranslationKeys = {
  'cover.title': 'Catálogo de Produtos KGS',
  'cover.tagline': 'Qualquer que seja a sua necessidade de deteção de incêndios, temos uma solução para si!',
  'cover.start': 'Começar a Explorar',
  'cover.selectLanguage': 'Selecione o seu idioma',

  'register.welcome': 'Bem-vindo',
  'register.subtitle': 'Partilhe os seus dados para continuar a explorar o nosso catálogo',
  'register.fullName': 'Nome Completo',
  'register.company': 'Empresa',
  'register.email': 'E-mail',
  'register.fullNamePlaceholder': 'João Silva',
  'register.companyPlaceholder': 'A Sua Empresa Lda.',
  'register.emailPlaceholder': 'joao@empresa.pt',
  'register.continue': 'Continuar',
  'register.sending': 'A enviar...',
  'register.privacy': 'A sua informação é armazenada de forma segura e não será partilhada com terceiros.',
  'register.errorFullName': 'O nome completo é obrigatório',
  'register.errorCompany': 'O nome da empresa é obrigatório',
  'register.errorEmail': 'O e-mail é obrigatório',
  'register.errorEmailInvalid': 'Introduza um endereço de e-mail válido',

  'brand.welcomeUser': 'Bem-vindo',
  'brand.title': 'Selecione a Sua Marca',
  'brand.subtitle': 'Escolha a marca que deseja explorar. Cada uma oferece soluções únicas para as suas necessidades de deteção de incêndios.',
  'brand.systemsAvailable': 'sistemas disponíveis',
  'brand.systemAvailable': 'sistema disponível',
  'brand.explore': 'Explorar',

  'system.title': 'Selecione o Sistema de Deteção',
  'system.subtitle': 'Escolha o tipo de sistema de deteção de incêndios que melhor se adapta às suas necessidades.',
  'system.viewProducts': 'Ver produtos disponíveis',

  'products.title': 'Produtos',
  'products.subtitle': 'temos muitos mais à sua disposição para cobrir todas as suas necessidades. Pode consultá-los no nosso site www.firesecurityproducts.com',
  'products.searchPlaceholder': 'Pesquisar por nome ou SKU...',
  'products.all': 'Todos',
  'products.noResults': 'Não foram encontrados produtos que correspondam à sua pesquisa',

  'product.image': 'Imagem',
  'product.video': 'Vídeo',
  'product.vrQr': 'VR QR',
  'product.videoSoon': 'Vídeo em breve',
  'product.scanVr': 'Digitalize para experiência VR',
  'product.qrSoon': 'Código QR em breve',
  'product.mainFeatures': 'Características Principais',
  'product.specifications': 'Especificações',
  'product.relatedProducts': 'Produtos Semelhantes',

  'nav.navigation': 'Navegação',
  'nav.goHome': 'Voltar ao Início',
  'nav.selectBrand': 'Selecionar Marca',
  'nav.currentBrand': 'Marca Atual',

  'brand.desc.kidde-commercial': 'Uma das marcas líderes mundiais em deteção de incêndios, que incorpora as reconhecidas marcas Aritech Fire, Kilsen e Ziton.\n\nA Kidde Commercial traz mais de 100 anos de tradição e experiência na vanguarda das soluções de segurança contra incêndios.',
  'brand.desc.airsense': 'Marca líder em deteção de fumo por aspiração, especializada em fornecer soluções avançadas de proteção contra incêndios para ambientes onde a deteção precoce é crítica ou onde os sistemas tradicionais não operam eficazmente.',
  'brand.desc.ems': 'A EMS é uma marca líder em tecnologias de segurança. Somos especialistas em design, fabrico e suporte de sistemas wireless modulares há mais de 50 anos.',
  'brand.desc.edwards': 'Fundada em 1872, a Edwards nunca deixou de perseguir a sua paixão pela proteção, com inovações em segurança contra incêndios que preparam as suas instalações para o futuro.',

  'system.name.addressable': 'Sistema Endereçável',
  'system.name.conventional': 'Sistema Convencional',
  'system.name.wireless': 'Sistema Sem Fios',
  'system.name.linear-heat': 'Deteção Linear de Calor',
  'system.name.asd': 'Deteção de Fumo por Aspiração',
  'system.name.asd-full': 'ASD (Deteção de Fumo por Aspiração)',
  'system.name.firecell': 'FireCell - Sem Fios Completo',
  'system.name.fusion': 'Fusion - Sem Fios Híbrido',
  'system.name.smartcell': 'SmartCell - Sem Fios Compacto',
  'system.name.high-end-addressable': 'Sistema Endereçável de Alta Gama',
  'system.name.pava': 'PAVA (Megafonia e Alarme por Voz)',

  'subcategory.Paneles': 'Painéis',
  'subcategory.Pulsadores Manuales': 'Botões de Alarme Manual',
  'subcategory.Detectores': 'Detetores',
  'subcategory.Módulos de Entrada/Salida': 'Módulos de Entrada/Saída',
  'subcategory.Notificación': 'Notificação',
  'subcategory.Accesorios': 'Acessórios',
  'subcategory.Bases': 'Bases',
  'subcategory.Zócalos': 'Bases',
  'subcategory.Detección Lineal de Calor': 'Deteção Linear de Calor',
  'subcategory.Detección de Humo por Aspiración': 'Deteção de Fumo por Aspiração',
  'subcategory.Dispositivos': 'Dispositivos',
  'subcategory.Expansores': 'Expansores',
  'subcategory.Gateway': 'Gateway',
  'subcategory.Interfaz': 'Interface',
  'subcategory.Megafonía': 'Megafonia',
  'subcategory.Amplificadores': 'Amplificadores',
  'subcategory.Altavoces': 'Altifalantes',
  'subcategory.Software': 'Software',
};

const en: TranslationKeys = {
  'cover.title': 'KGS Product Catalogue',
  'cover.tagline': 'Whatever your fire detection needs, we have a solution for you!',
  'cover.start': 'Start Exploring',
  'cover.selectLanguage': 'Select your language',

  'register.welcome': 'Welcome',
  'register.subtitle': 'Share your details to continue exploring our catalogue',
  'register.fullName': 'Full Name',
  'register.company': 'Company',
  'register.email': 'Email Address',
  'register.fullNamePlaceholder': 'John Doe',
  'register.companyPlaceholder': 'Your Company Ltd.',
  'register.emailPlaceholder': 'john@company.com',
  'register.continue': 'Continue',
  'register.sending': 'Sending...',
  'register.privacy': 'Your information is stored securely and will not be shared with third parties.',
  'register.errorFullName': 'Full name is required',
  'register.errorCompany': 'Company name is required',
  'register.errorEmail': 'Email address is required',
  'register.errorEmailInvalid': 'Enter a valid email address',

  'brand.welcomeUser': 'Welcome',
  'brand.title': 'Select Your Brand',
  'brand.subtitle': 'Choose the brand you want to explore. Each one offers unique solutions for your fire detection needs.',
  'brand.systemsAvailable': 'systems available',
  'brand.systemAvailable': 'system available',
  'brand.explore': 'Explore',

  'system.title': 'Select the Detection System',
  'system.subtitle': 'Choose the fire detection system type that best suits your needs.',
  'system.viewProducts': 'View available products',

  'products.title': 'Products',
  'products.subtitle': 'we have many more at your disposal to cover all your needs. You can browse them on our website www.firesecurityproducts.com',
  'products.searchPlaceholder': 'Search by name or SKU...',
  'products.all': 'All',
  'products.noResults': 'No products found matching your search',

  'product.image': 'Image',
  'product.video': 'Video',
  'product.vrQr': 'VR QR',
  'product.videoSoon': 'Video coming soon',
  'product.scanVr': 'Scan for VR experience',
  'product.qrSoon': 'QR Code coming soon',
  'product.mainFeatures': 'Main Features',
  'product.specifications': 'Specifications',
  'product.relatedProducts': 'Related Products',

  'nav.navigation': 'Navigation',
  'nav.goHome': 'Back to Home',
  'nav.selectBrand': 'Select Brand',
  'nav.currentBrand': 'Current Brand',

  'brand.desc.kidde-commercial': 'One of the world\'s leading fire detection brands, incorporating the well-known Aritech Fire, Kilsen and Ziton brands.\n\nKidde Commercial brings over 100 years of heritage and expertise at the forefront of fire safety solutions.',
  'brand.desc.airsense': 'Leading brand in aspirating smoke detection, specializing in providing advanced fire protection solutions for environments where early detection is critical or where traditional systems do not operate effectively.',
  'brand.desc.ems': 'EMS is a leading brand in security technologies. We specialize in the design, manufacturing and support of modular wireless systems for over 50 years.',
  'brand.desc.edwards': 'Founded in 1872, Edwards has never stopped pursuing its passion for protection, with fire safety innovations that future-proof your facilities.',

  'system.name.addressable': 'Addressable System',
  'system.name.conventional': 'Conventional System',
  'system.name.wireless': 'Wireless System',
  'system.name.linear-heat': 'Linear Heat Detection',
  'system.name.asd': 'Aspirating Smoke Detection',
  'system.name.asd-full': 'ASD (Aspirating Smoke Detection)',
  'system.name.firecell': 'FireCell - Full Wireless',
  'system.name.fusion': 'Fusion - Hybrid Wireless',
  'system.name.smartcell': 'SmartCell - Compact Wireless',
  'system.name.high-end-addressable': 'High-End Addressable System',
  'system.name.pava': 'PAVA (Public Address & Voice Alarm)',

  'subcategory.Paneles': 'Panels',
  'subcategory.Pulsadores Manuales': 'Manual Call Points',
  'subcategory.Detectores': 'Detectors',
  'subcategory.Módulos de Entrada/Salida': 'Input/Output Modules',
  'subcategory.Notificación': 'Notification',
  'subcategory.Accesorios': 'Accessories',
  'subcategory.Bases': 'Bases',
  'subcategory.Zócalos': 'Bases',
  'subcategory.Detección Lineal de Calor': 'Linear Heat Detection',
  'subcategory.Detección de Humo por Aspiración': 'Aspirating Smoke Detection',
  'subcategory.Dispositivos': 'Devices',
  'subcategory.Expansores': 'Expanders',
  'subcategory.Gateway': 'Gateway',
  'subcategory.Interfaz': 'Interface',
  'subcategory.Megafonía': 'Public Address',
  'subcategory.Amplificadores': 'Amplifiers',
  'subcategory.Altavoces': 'Speakers',
  'subcategory.Software': 'Software',
};

export const translations: Record<Language, TranslationKeys> = { es, pt, en };
