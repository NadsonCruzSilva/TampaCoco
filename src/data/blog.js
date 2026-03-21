export const blogPosts = [
  {
    id: 1,
    slug: "como-escolher-capacete-ideal",
    title: "Como Escolher o Capacete Ideal para Você",
    excerpt: "Guia completo com tudo que você precisa saber para encontrar o capacete perfeito: tipos, certificações, tamanhos e dicas de especialistas.",
    category: "Guias",
    date: "2026-03-15",
    readTime: "8 min",
    image: "/blog/guide.svg",
    content: `Escolher um capacete pode parecer simples, mas é uma decisão que envolve segurança, conforto e estilo. Neste guia, vamos explorar todos os fatores que você deve considerar.

## Tipos de Capacete

### Full-Face (Integral)
O tipo mais seguro, protegendo todo o rosto incluindo o queixo. Ideal para uso esportivo, viagens e qualquer motociclista que priorize segurança máxima.

### Modular (Escamoteável)
Combina a proteção do full-face com a conveniência de poder levantar a queixeira. Perfeito para touring e uso urbano.

### Aberto (Jet)
Oferece proteção para o topo e laterais da cabeça, mas deixa o rosto exposto. Ideal para uso urbano em baixas velocidades.

### Off-Road
Projetado para trilhas e motocross, com viseira estendida e abertura para óculos. Não recomendado para uso em estradas.

## Certificações: O que Significam?

As certificações são a garantia de que seu capacete foi testado e aprovado. No Brasil, o INMETRO é obrigatório, mas certificações internacionais como DOT, ECE e SNELL oferecem níveis adicionais de segurança.

## Tamanho Correto

Um capacete deve ficar justo mas confortável. Use nossa calculadora HelmSize para encontrar o tamanho ideal para cada marca.`
  },
  {
    id: 2,
    slug: "entendendo-certificacoes-capacetes",
    title: "INMETRO, DOT, ECE, SNELL — Entenda Cada Certificação",
    excerpt: "Descubra o que cada selo de segurança garante e por que você deveria se importar com as certificações do seu capacete.",
    category: "Segurança",
    date: "2026-03-10",
    readTime: "6 min",
    image: "/blog/certifications.svg"
  },
  {
    id: 3,
    slug: "quando-trocar-capacete",
    title: "Quando Trocar o Seu Capacete? Sinais que Você Não Deve Ignorar",
    excerpt: "Seu capacete tem prazo de validade! Saiba quando substituir e os sinais de desgaste que comprometem sua segurança.",
    category: "Segurança",
    date: "2026-03-05",
    readTime: "5 min",
    image: "/blog/replace.svg"
  },
  {
    id: 4,
    slug: "capacete-para-iniciantes",
    title: "Primeiro Capacete: Guia para Motociclistas Iniciantes",
    excerpt: "Começando a pilotar? Veja nossas recomendações de capacetes com melhor custo-benefício e o que priorizar na sua primeira compra.",
    category: "Guias",
    date: "2026-02-28",
    readTime: "7 min",
    image: "/blog/beginner.svg"
  },
  {
    id: 5,
    slug: "como-medir-cabeca-capacete",
    title: "Como Medir a Cabeça para Comprar Capacete Online",
    excerpt: "Passo a passo ilustrado para medir sua cabeça corretamente e nunca mais errar o tamanho do capacete.",
    category: "Dicas",
    date: "2026-02-20",
    readTime: "4 min",
    image: "/blog/measure.svg"
  },
  {
    id: 6,
    slug: "cuidados-limpeza-capacete",
    title: "Como Limpar e Cuidar do Seu Capacete Corretamente",
    excerpt: "Aprenda técnicas profissionais de limpeza e conservação para prolongar a vida útil do seu capacete.",
    category: "Dicas",
    date: "2026-02-15",
    readTime: "5 min",
    image: "/blog/cleaning.svg"
  }
];

export function getPostBySlug(slug) {
  return blogPosts.find(p => p.slug === slug);
}
