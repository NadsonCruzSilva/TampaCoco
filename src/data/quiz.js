export const quizSteps = [
  {
    id: 1,
    question: "Qual é o seu nível de experiência como motociclista?",
    subtitle: "Isso nos ajuda a recomendar capacetes adequados ao seu perfil",
    options: [
      { value: "iniciante", label: "Iniciante", description: "Menos de 1 ano pilotando", icon: "Sprout" },
      { value: "intermediario", label: "Intermediário", description: "1 a 3 anos de experiência", icon: "Bike" },
      { value: "experiente", label: "Experiente", description: "Mais de 3 anos pilotando", icon: "Trophy" }
    ]
  },
  {
    id: 2,
    question: "Como você usa a sua moto no dia a dia?",
    subtitle: "O tipo de uso influencia diretamente no capacete ideal",
    options: [
      { value: "urbano", label: "Urbano / Cidade", description: "Trabalho, faculdade, dia a dia", icon: "Building2" },
      { value: "viagem", label: "Viagens e Touring", description: "Estradas e longas distâncias", icon: "Route" },
      { value: "esportivo", label: "Esportivo / Pista", description: "Track days e pilotagem esportiva", icon: "Flag" },
      { value: "trilha", label: "Trilha / Off-Road", description: "Trilhas, motocross e aventura", icon: "Mountain" },
      { value: "motoboy", label: "Motoboy / Uso Intenso", description: "Entregas e uso profissional", icon: "Package" }
    ]
  },
  {
    id: 3,
    question: "O que é mais importante para você?",
    subtitle: "Selecione sua principal prioridade",
    options: [
      { value: "seguranca", label: "Máxima Segurança", description: "Certificações internacionais e proteção premium", icon: "ShieldCheck" },
      { value: "conforto", label: "Conforto", description: "Leve, ventilado e confortável para uso prolongado", icon: "Smile" },
      { value: "custo-beneficio", label: "Custo-Benefício", description: "Boa proteção com preço justo", icon: "Coins" },
      { value: "tecnologia", label: "Tecnologia", description: "Bluetooth, visores avançados, materiais de ponta", icon: "Zap" },
      { value: "estilo", label: "Estilo e Design", description: "Visual diferenciado e acabamento premium", icon: "Sparkles" }
    ]
  },
  {
    id: 4,
    question: "Qual é o seu orçamento?",
    subtitle: "Temos opções para todos os bolsos",
    options: [
      { value: "economico", label: "Até R$ 500", description: "Opções acessíveis com certificação INMETRO", icon: "Banknote" },
      { value: "intermediario", label: "R$ 500 a R$ 1.500", description: "Bom custo-benefício com mais recursos", icon: "CreditCard" },
      { value: "premium", label: "R$ 1.500 a R$ 3.000", description: "Capacetes premium com certificações internacionais", icon: "Gem" },
      { value: "top", label: "Acima de R$ 3.000", description: "O melhor do mercado sem compromisso", icon: "Crown" }
    ]
  }
];

export function getRecommendations(answers) {
  // Simple recommendation logic based on quiz answers
  const { experiencia, uso, prioridade, orcamento } = answers;
  
  let typeFilter = null;
  let maxPrice = Infinity;
  let minPrice = 0;
  let preferredCerts = [];
  let scores = {};

  // Budget mapping
  if (orcamento === "economico") { maxPrice = 500; }
  else if (orcamento === "intermediario") { minPrice = 500; maxPrice = 1500; }
  else if (orcamento === "premium") { minPrice = 1500; maxPrice = 3000; }
  else if (orcamento === "top") { minPrice = 3000; }

  // Usage mapping
  if (uso === "trilha") typeFilter = "offroad";
  if (uso === "esportivo") preferredCerts = ["SNELL", "ECE"];

  // Priority mapping
  if (prioridade === "seguranca") preferredCerts = [...preferredCerts, "SNELL", "ECE", "DOT"];
  if (prioridade === "custo-beneficio") { if(!maxPrice || maxPrice === Infinity) maxPrice = 1500; }

  return { typeFilter, maxPrice, minPrice, preferredCerts };
}
