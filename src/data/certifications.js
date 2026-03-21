export const certifications = [
  {
    id: "INMETRO",
    name: "INMETRO",
    fullName: "Instituto Nacional de Metrologia, Qualidade e Tecnologia",
    country: "Brasil",
    icon: "🇧🇷",
    color: "#22c55e",
    description: "Certificação obrigatória no Brasil para todos os capacetes vendidos no território nacional. O INMETRO verifica se o capacete atende à norma ABNT NBR 7471, que define requisitos mínimos de segurança como resistência ao impacto, sistema de retenção e campo de visão.",
    whatItGuarantees: [
      "Resistência mínima ao impacto frontal, lateral e superior",
      "Sistema de retenção (cinta jugular) funcional",
      "Campo de visão adequado",
      "Resistência à penetração de objetos pontiagudos",
      "Absorção de impacto pelo EPS interno"
    ],
    howToVerify: "Verifique o selo holográfico do INMETRO fixado no capacete. Consulte o número do registro no site do INMETRO (inmetro.gov.br) para confirmar a autenticidade.",
    level: "Básico",
    mandatory: true
  },
  {
    id: "DOT",
    name: "DOT",
    fullName: "Department of Transportation",
    country: "Estados Unidos",
    icon: "🇺🇸",
    color: "#3b82f6",
    description: "Certificação do Departamento de Transporte dos EUA. É a certificação padrão americana e testa o capacete em condições de impacto mais rigorosas que muitas certificações básicas. Capacetes DOT passam por testes de laboratório independente.",
    whatItGuarantees: [
      "Resistência a impactos em múltiplas superfícies e ângulos",
      "Absorção adequada de energia em impactos a 6m/s",
      "Penetração: resistência a objetos pontiagudos a 3m/s",
      "Retenção: cinta jugular suporta até 136kg de tração",
      "Cobertura periférica: proteção lateral e traseira adequada"
    ],
    howToVerify: "Procure a etiqueta 'DOT FMVSS No. 218' na parte traseira do capacete. O número do fabricante deve estar visível.",
    level: "Intermediário",
    mandatory: false
  },
  {
    id: "ECE",
    name: "ECE 22.06",
    fullName: "Economic Commission for Europe (Regulamento 22.06)",
    country: "Europa / Internacional",
    icon: "🇪🇺",
    color: "#8b5cf6",
    description: "A mais recente versão da certificação europeia, adotada internacionalmente. O ECE 22.06 é mais rigoroso que seu predecessor (22.05) e inclui testes de impacto rotacional, tornando-o uma das certificações mais completas do mundo.",
    whatItGuarantees: [
      "Testes de impacto em 18 pontos diferentes do capacete",
      "Proteção contra impactos rotacionais (novidade no 22.06)",
      "Visor testado contra fragmentação e penetração",
      "Testes em múltiplas temperaturas (-20°C a +50°C)",
      "Campo de visão mínimo de 210° horizontal"
    ],
    howToVerify: "Procure a etiqueta com o círculo contendo 'E' seguido do número do país (ex: E1 = Alemanha). O código começa com '06' para a versão 22.06.",
    level: "Avançado",
    mandatory: false
  },
  {
    id: "SNELL",
    name: "SNELL M2020",
    fullName: "Snell Memorial Foundation",
    country: "Estados Unidos",
    icon: "⭐",
    color: "#f59e0b",
    description: "Certificação voluntária da Snell Memorial Foundation, considerada uma das mais rigorosas do mundo. Os testes SNELL são mais exigentes que DOT e ECE em diversos parâmetros. Poucos capacetes no mercado possuem esta certificação.",
    whatItGuarantees: [
      "Impactos em velocidades maiores que DOT e ECE",
      "Teste de queda de 3,5m (mais alto que outras certificações)",
      "Dois impactos no mesmo ponto — testa durabilidade do EPS",
      "Teste de remoção sob força (roll-off test rigoroso)",
      "Penetração testada com projétil de 3kg a alta velocidade"
    ],
    howToVerify: "Procure o adesivo dourado 'SNELL M2020' (ou M2025) dentro do capacete. Consulte o site smf.org para confirmar o modelo certificado.",
    level: "Premium",
    mandatory: false
  },
  {
    id: "SHARP",
    name: "SHARP",
    fullName: "Safety Helmet Assessment and Rating Programme",
    country: "Reino Unido",
    icon: "🇬🇧",
    color: "#ef4444",
    description: "Programa britânico de avaliação e classificação de capacetes por estrelas (1 a 5). Diferente das outras certificações, o SHARP compra capacetes anonimamente no varejo e os testa — garantindo que o que o consumidor compra é o que foi testado.",
    whatItGuarantees: [
      "Rating de 1 a 5 estrelas baseado em testes reais",
      "Capacetes comprados anonimamente (sem preparação do fabricante)",
      "Testes em 30+ pontos de impacto por capacete",
      "Avaliação em múltiplas velocidades de impacto",
      "Comparação direta entre dezenas de modelos"
    ],
    howToVerify: "Consulte o site sharp.dft.gov.uk para ver a classificação do modelo. Cada modelo testado possui uma página com detalhes dos testes.",
    level: "Avaliação Independente",
    mandatory: false
  }
];

export function getCertificationById(id) {
  return certifications.find(c => c.id === id);
}
