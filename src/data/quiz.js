export const quizSteps = [
  {
    id: 1,
    question: "Qual é o seu nível de experiência como motociclista?",
    subtitle: "Isso nos ajuda a recomendar capacetes adequados ao seu perfil",
    options: [
      { value: "iniciante", label: "Iniciante", description: "Menos de 1 ano pilotando", icon: "🌱" },
      { value: "intermediario", label: "Intermediário", description: "1 a 3 anos de experiência", icon: "🏍️" },
      { value: "experiente", label: "Experiente", description: "Mais de 3 anos pilotando", icon: "🏆" }
    ]
  },
  {
    id: 2,
    question: "Como você usa a sua moto no dia a dia?",
    subtitle: "O tipo de uso influencia diretamente no capacete ideal",
    options: [
      { value: "urbano", label: "Urbano / Cidade", description: "Trabalho, faculdade, dia a dia", icon: "🏙️" },
      { value: "viagem", label: "Viagens e Touring", description: "Estradas e longas distâncias", icon: "🛣️" },
      { value: "esportivo", label: "Esportivo / Pista", description: "Track days e pilotagem esportiva", icon: "🏁" },
      { value: "trilha", label: "Trilha / Off-Road", description: "Trilhas, motocross e aventura", icon: "🏔️" },
      { value: "motoboy", label: "Motoboy / Uso Intenso", description: "Entregas e uso profissional", icon: "📦" }
    ]
  },
  {
    id: 3,
    question: "O que é mais importante para você?",
    subtitle: "Selecione sua principal prioridade",
    options: [
      { value: "seguranca", label: "Máxima Segurança", description: "Certificações internacionais e proteção premium", icon: "🛡️" },
      { value: "conforto", label: "Conforto", description: "Leve, ventilado e confortável para uso prolongado", icon: "😌" },
      { value: "custo-beneficio", label: "Custo-Benefício", description: "Boa proteção com preço justo", icon: "💰" },
      { value: "tecnologia", label: "Tecnologia", description: "Bluetooth, visores avançados, materiais de ponta", icon: "⚡" },
      { value: "estilo", label: "Estilo e Design", description: "Visual diferenciado e acabamento premium", icon: "✨" }
    ]
  },
  {
    id: 4,
    question: "Qual é o seu orçamento?",
    subtitle: "Temos opções para todos os bolsos",
    options: [
      { value: "economico", label: "Até R$ 500", description: "Opções acessíveis com certificação INMETRO", icon: "💵" },
      { value: "intermediario", label: "R$ 500 a R$ 1.500", description: "Bom custo-benefício com mais recursos", icon: "💳" },
      { value: "premium", label: "R$ 1.500 a R$ 3.000", description: "Capacetes premium com certificações internacionais", icon: "💎" },
      { value: "top", label: "Acima de R$ 3.000", description: "O melhor do mercado sem compromisso", icon: "👑" }
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
