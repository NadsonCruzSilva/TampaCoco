export const products = [
  {
    id: 1,
    name: "Shoei X-Spirit III",
    slug: "shoei-x-spirit-iii",
    brand: "Shoei",
    type: "full-face",
    price: 3899.90,
    oldPrice: 4299.90,
    rating: 4.9,
    reviews: 127,
    image: "/products/helmet-1.svg",
    images: ["/products/helmet-1.svg", "/products/helmet-1b.svg", "/products/helmet-1c.svg"],
    certifications: ["INMETRO", "DOT", "SNELL", "ECE"],
    colors: [
      { name: "Preto Fosco", hex: "#1a1a1a" },
      { name: "Branco", hex: "#f5f5f5" },
      { name: "Vermelho", hex: "#dc2626" }
    ],
    sizes: ["P", "M", "G", "GG"],
    weight: "1.350g",
    material: "Fibra de Vidro Multi-Composta",
    description: "O Shoei X-Spirit III é o capacete de referência para pilotos que buscam o máximo em performance e segurança. Desenvolvido com tecnologia de ponta, oferece aerodinâmica superior, ventilação otimizada e conforto excepcional para longas viagens.",
    features: ["Ventilação com 6 entradas", "Visor Pinlock incluso", "Interior removível e lavável", "Sistema de retenção D-Ring"],
    lifespan: "5 anos",
    stock: 15,
    featured: true,
    bestFor: ["Esportivo", "Pista", "Viagem"]
  },
  {
    id: 2,
    name: "AGV K6 S",
    slug: "agv-k6-s",
    brand: "AGV",
    type: "full-face",
    price: 2799.90,
    oldPrice: null,
    rating: 4.8,
    reviews: 89,
    image: "/products/helmet-2.svg",
    images: ["/products/helmet-2.svg"],
    certifications: ["INMETRO", "DOT", "ECE"],
    colors: [
      { name: "Preto Brilhante", hex: "#0a0a0a" },
      { name: "Azul", hex: "#2563eb" }
    ],
    sizes: ["P", "M", "G", "GG"],
    weight: "1.255g",
    material: "Fibra de Carbono",
    description: "O AGV K6 S redefine o conceito de capacete esportivo leve. Com apenas 1.255g e construção em fibra de carbono, oferece proteção máxima sem sacrificar o conforto.",
    features: ["Ultraleve 1.255g", "5 tamanhos de casco", "Visor anti-scratch", "Ventilação 5 frontais + 2 traseiras"],
    lifespan: "5 anos",
    stock: 22,
    featured: true,
    bestFor: ["Esportivo", "Urbano", "Viagem"]
  },
  {
    id: 3,
    name: "LS2 Valiant II",
    slug: "ls2-valiant-ii",
    brand: "LS2",
    type: "modular",
    price: 1299.90,
    oldPrice: 1599.90,
    rating: 4.5,
    reviews: 203,
    image: "/products/helmet-3.svg",
    images: ["/products/helmet-3.svg"],
    certifications: ["INMETRO", "ECE"],
    colors: [
      { name: "Cinza Titanium", hex: "#6b7280" },
      { name: "Preto Fosco", hex: "#1a1a1a" },
      { name: "Branco", hex: "#f5f5f5" }
    ],
    sizes: ["P", "M", "G", "GG", "XGG"],
    weight: "1.650g",
    material: "Policarbonato HPFC",
    description: "O LS2 Valiant II é um capacete modular versátil que se adapta ao seu estilo de pilotagem. Com sistema de abertura 180°, pode ser usado como integral ou aberto.",
    features: ["Flip-up 180°", "Pinlock incluso", "Óculos de sol integrado", "Fecho micrométrico"],
    lifespan: "5 anos",
    stock: 38,
    featured: true,
    bestFor: ["Urbano", "Touring", "Iniciante"]
  },
  {
    id: 4,
    name: "Arai Classic-V",
    slug: "arai-classic-v",
    brand: "Arai",
    type: "aberto",
    price: 2199.90,
    oldPrice: null,
    rating: 4.7,
    reviews: 56,
    image: "/products/helmet-4.svg",
    images: ["/products/helmet-4.svg"],
    certifications: ["INMETRO", "DOT", "SNELL"],
    colors: [
      { name: "Preto Brilhante", hex: "#0a0a0a" },
      { name: "Branco Frost", hex: "#fafafa" },
      { name: "Verde Brit", hex: "#166534" }
    ],
    sizes: ["P", "M", "G", "GG"],
    weight: "1.150g",
    material: "Super Fibra cLc",
    description: "O Arai Classic-V combina o estilo clássico com a proteção premium da Arai. Ideal para quem busca um capacete aberto com o máximo de segurança para o tipo.",
    features: ["Design clássico premium", "Interior Eco-Pure", "Ventilação frontal e traseira", "Visor com tratamento UV"],
    lifespan: "5 anos",
    stock: 12,
    featured: false,
    bestFor: ["Urbano", "Custom", "Clássico"]
  },
  {
    id: 5,
    name: "Fox V3 RS",
    slug: "fox-v3-rs",
    brand: "Fox",
    type: "offroad",
    price: 1899.90,
    oldPrice: 2199.90,
    rating: 4.6,
    reviews: 78,
    image: "/products/helmet-5.svg",
    images: ["/products/helmet-5.svg"],
    certifications: ["INMETRO", "DOT", "ECE"],
    colors: [
      { name: "Preto/Amarelo", hex: "#eab308" },
      { name: "Vermelho/Branco", hex: "#dc2626" }
    ],
    sizes: ["P", "M", "G", "GG"],
    weight: "1.250g",
    material: "Fibra de Carbono",
    description: "O Fox V3 RS é projetado para trilhas e motocross de alto nível. Construção em carbono garante leveza extrema enquanto o sistema MIPS protege contra impactos rotacionais.",
    features: ["Sistema MIPS", "Ventilação Varizema", "Forro magnético Dry-Lex", "Visor flexível"],
    lifespan: "5 anos",
    stock: 19,
    featured: true,
    bestFor: ["Offroad", "Motocross", "Trilha"]
  },
  {
    id: 6,
    name: "Norisk Grand Prix",
    slug: "norisk-grand-prix",
    brand: "Norisk",
    type: "full-face",
    price: 549.90,
    oldPrice: 699.90,
    rating: 4.3,
    reviews: 412,
    image: "/products/helmet-6.svg",
    images: ["/products/helmet-6.svg"],
    certifications: ["INMETRO"],
    colors: [
      { name: "Preto Fosco", hex: "#1a1a1a" },
      { name: "Prata", hex: "#a8a29e" },
      { name: "Azul/Vermelho", hex: "#1e40af" }
    ],
    sizes: ["56", "58", "60", "62"],
    weight: "1.550g",
    material: "ABS Injetado",
    description: "O Norisk Grand Prix é a escolha inteligente para quem busca segurança e qualidade nacional. Com certificação INMETRO e acabamento premium, é ideal para o dia a dia urbano.",
    features: ["Óculos de sol interno", "Ventilação frontal e traseira", "Forro antibacteriano removível", "Fecho micrométrico"],
    lifespan: "5 anos",
    stock: 65,
    featured: true,
    bestFor: ["Urbano", "Iniciante", "Custo-Benefício"]
  },
  {
    id: 7,
    name: "HJC RPHA 71",
    slug: "hjc-rpha-71",
    brand: "HJC",
    type: "full-face",
    price: 2399.90,
    oldPrice: null,
    rating: 4.7,
    reviews: 65,
    image: "/products/helmet-7.svg",
    images: ["/products/helmet-7.svg"],
    certifications: ["INMETRO", "DOT", "ECE", "SHARP"],
    colors: [
      { name: "Preto Carbono", hex: "#171717" },
      { name: "Branco Pérola", hex: "#fef3c7" }
    ],
    sizes: ["P", "M", "G", "GG"],
    weight: "1.450g",
    material: "PIM+ (Premium Integrated Matrix Plus)",
    description: "O HJC RPHA 71 combina tecnologia avançada com design sofisticado. Avaliação máxima SHARP 5 estrelas comprova sua segurança excepcional.",
    features: ["5 estrelas SHARP", "Smart HJC ready", "Pinlock MaxVision", "Ventilação multicamadas"],
    lifespan: "5 anos",
    stock: 18,
    featured: false,
    bestFor: ["Esportivo", "Touring", "Tecnologia"]
  },
  {
    id: 8,
    name: "Shark Evo-GT",
    slug: "shark-evo-gt",
    brand: "Shark",
    type: "modular",
    price: 2899.90,
    oldPrice: 3299.90,
    rating: 4.8,
    reviews: 94,
    image: "/products/helmet-8.svg",
    images: ["/products/helmet-8.svg"],
    certifications: ["INMETRO", "DOT", "ECE", "SHARP"],
    colors: [
      { name: "Preto/Prata", hex: "#404040" },
      { name: "Azul Escuro", hex: "#1e3a5f" }
    ],
    sizes: ["P", "M", "G", "GG"],
    weight: "1.580g",
    material: "Fibra de Vidro Multiaxial",
    description: "O Shark Evo-GT é o modular mais seguro da categoria, com certificação P/J para uso integral e aberto. Sistema Auto-seal garante vedação perfeita contra vento e ruído.",
    features: ["Certificação P/J dupla", "Auto-seal system", "Óculos solar integrado", "Shark Skin texturizado"],
    lifespan: "5 anos",
    stock: 14,
    featured: true,
    bestFor: ["Touring", "Viagem", "Tecnologia"]
  },
  {
    id: 9,
    name: "ProTork Evolution G8",
    slug: "protork-evolution-g8",
    brand: "Pro Tork",
    type: "full-face",
    price: 189.90,
    oldPrice: 249.90,
    rating: 4.0,
    reviews: 856,
    image: "/products/helmet-9.svg",
    images: ["/products/helmet-9.svg"],
    certifications: ["INMETRO"],
    colors: [
      { name: "Preto Fosco", hex: "#1a1a1a" },
      { name: "Branco", hex: "#f5f5f5" },
      { name: "Vermelho", hex: "#dc2626" },
      { name: "Azul", hex: "#2563eb" }
    ],
    sizes: ["56", "58", "60", "62"],
    weight: "1.600g",
    material: "ABS Injetado",
    description: "O Pro Tork Evolution G8 é a opção acessível para quem precisa de um capacete certificado pelo INMETRO. Ideal para uso urbano diário com boa relação custo-benefício.",
    features: ["Preço acessível", "Forro removível", "Ventilação frontal", "Viseira antirrisco"],
    lifespan: "5 anos",
    stock: 120,
    featured: false,
    bestFor: ["Urbano", "Iniciante", "Custo-Benefício"]
  },
  {
    id: 10,
    name: "Bell MX-9 Adventure",
    slug: "bell-mx9-adventure",
    brand: "Bell",
    type: "offroad",
    price: 1599.90,
    oldPrice: null,
    rating: 4.5,
    reviews: 143,
    image: "/products/helmet-10.svg",
    images: ["/products/helmet-10.svg"],
    certifications: ["INMETRO", "DOT", "ECE"],
    colors: [
      { name: "Preto/Camo", hex: "#374151" },
      { name: "Laranja/Preto", hex: "#ea580c" }
    ],
    sizes: ["P", "M", "G", "GG"],
    weight: "1.500g",
    material: "Policarbonato",
    description: "O Bell MX-9 Adventure MIPS é o capacete ideal para quem transita entre asfalto e trilha. Viseira e pala removíveis permitem configurar para cada tipo de terreno.",
    features: ["Viseira + pala removíveis", "Sistema MIPS", "Ventilação velocity flow", "Camera mount integrado"],
    lifespan: "5 anos",
    stock: 27,
    featured: false,
    bestFor: ["Adventure", "Trilha", "Big Trail"]
  },
  {
    id: 11,
    name: "Nexx X.Vilitur",
    slug: "nexx-x-vilitur",
    brand: "Nexx",
    type: "modular",
    price: 1999.90,
    oldPrice: null,
    rating: 4.6,
    reviews: 37,
    image: "/products/helmet-11.svg",
    images: ["/products/helmet-11.svg"],
    certifications: ["INMETRO", "ECE"],
    colors: [
      { name: "Carbon", hex: "#262626" },
      { name: "Cinza Nardo", hex: "#9ca3af" }
    ],
    sizes: ["P", "M", "G", "GG"],
    weight: "1.450g",
    material: "X-Matrix (fibra multidirecional)",
    description: "O Nexx X.Vilitur oferece tecnologia de comunicação integrada X-Com2 e construção X-Matrix. Um capacete modular premium para touring de longa distância.",
    features: ["X-Com2 Bluetooth ready", "Pinlock MaxVision", "Fecho quick-strap", "Ventilação Climate Control"],
    lifespan: "5 anos",
    stock: 9,
    featured: false,
    bestFor: ["Touring", "Viagem", "Tecnologia"]
  },
  {
    id: 12,
    name: "Peels Icon",
    slug: "peels-icon",
    brand: "Peels",
    type: "aberto",
    price: 329.90,
    oldPrice: 399.90,
    rating: 4.2,
    reviews: 291,
    image: "/products/helmet-12.svg",
    images: ["/products/helmet-12.svg"],
    certifications: ["INMETRO"],
    colors: [
      { name: "Preto Fosco", hex: "#1a1a1a" },
      { name: "Rosa", hex: "#ec4899" },
      { name: "Azul", hex: "#3b82f6" }
    ],
    sizes: ["56", "58", "60"],
    weight: "1.200g",
    material: "ABS Injetado",
    description: "O Peels Icon é um capacete aberto com design retrô e óculos interno. Perfeito para uso urbano em scooters e motos de baixa cilindrada.",
    features: ["Design retrô", "Óculos de sol retrátil", "Forro removível", "Leve e confortável"],
    lifespan: "5 anos",
    stock: 45,
    featured: false,
    bestFor: ["Urbano", "Scooter", "Custo-Benefício"]
  }
];

export const types = [
  { id: "full-face", name: "Full-Face", icon: "🏍️", description: "Proteção total para rosto e queixo" },
  { id: "modular", name: "Modular", icon: "🔄", description: "Versatilidade de abrir e fechar" },
  { id: "aberto", name: "Aberto", icon: "💨", description: "Liberdade com proteção essencial" },
  { id: "offroad", name: "Off-Road", icon: "🏔️", description: "Para trilhas e aventuras" }
];

export const brands = ["Shoei", "AGV", "LS2", "Arai", "Fox", "Norisk", "HJC", "Shark", "Pro Tork", "Bell", "Nexx", "Peels"];

export function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter(p => p.featured);
}

export function filterProducts({ type, minPrice, maxPrice, certifications, brand, search }) {
  return products.filter(p => {
    if (type && p.type !== type) return false;
    if (minPrice && p.price < minPrice) return false;
    if (maxPrice && p.price > maxPrice) return false;
    if (brand && p.brand !== brand) return false;
    if (certifications && certifications.length > 0) {
      if (!certifications.every(c => p.certifications.includes(c))) return false;
    }
    if (search) {
      const q = search.toLowerCase();
      if (!p.name.toLowerCase().includes(q) && !p.brand.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q)) return false;
    }
    return true;
  });
}
