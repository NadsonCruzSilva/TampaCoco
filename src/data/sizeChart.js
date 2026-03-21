export const sizeChart = {
  "Shoei": { "53-54": "PP", "55-56": "P", "57-58": "M", "59-60": "G", "61-62": "GG" },
  "AGV": { "53-54": "PP", "55-56": "P", "57-58": "M", "59-60": "G", "61-62": "GG" },
  "LS2": { "53-54": "PP", "55-56": "P", "57-58": "M", "59-60": "G", "61-62": "GG", "63-64": "XGG" },
  "Arai": { "53-54": "PP", "55-56": "P", "57-58": "M", "59-60": "G", "61-62": "GG" },
  "Fox": { "53-54": "PP", "55-56": "P", "57-58": "M", "59-60": "G", "61-62": "GG" },
  "Norisk": { "54-55": "56", "56-57": "58", "58-59": "60", "60-61": "62" },
  "HJC": { "53-54": "PP", "55-56": "P", "57-58": "M", "59-60": "G", "61-62": "GG" },
  "Shark": { "53-54": "PP", "55-56": "P", "57-58": "M", "59-60": "G", "61-62": "GG" },
  "Pro Tork": { "54-55": "56", "56-57": "58", "58-59": "60", "60-61": "62" },
  "Bell": { "53-54": "PP", "55-56": "P", "57-58": "M", "59-60": "G", "61-62": "GG" },
  "Nexx": { "53-54": "PP", "55-56": "P", "57-58": "M", "59-60": "G", "61-62": "GG" },
  "Peels": { "54-55": "56", "56-57": "58", "58-59": "60" }
};

export function getRecommendedSize(measurement) {
  const cm = parseFloat(measurement);
  if (isNaN(cm) || cm < 50 || cm > 66) return null;

  const results = {};
  let isBorderline = false;

  for (const [brand, sizes] of Object.entries(sizeChart)) {
    for (const [range, size] of Object.entries(sizes)) {
      const [min, max] = range.split("-").map(Number);
      if (cm >= min && cm <= max) {
        results[brand] = { size, range, borderline: false };
        break;
      }
      // Check borderline (between two sizes)
      if (cm > max && cm < min + 2) {
        results[brand] = { size, range, borderline: true, note: `Sua medida (${cm}cm) está entre dois tamanhos. Recomendamos o tamanho maior para conforto.` };
        isBorderline = true;
      }
    }
    // If no match, find closest
    if (!results[brand]) {
      const ranges = Object.entries(sizes);
      for (const [range, size] of ranges) {
        const [min, max] = range.split("-").map(Number);
        if (cm >= min - 1 && cm <= max + 1) {
          results[brand] = { size, range, borderline: true, note: `Medida próxima ao limite. Experimente antes se possível.` };
          break;
        }
      }
    }
  }

  return { results, isBorderline, measurement: cm };
}

export const measurementSteps = [
  {
    step: 1,
    title: "Pegue uma fita métrica",
    description: "Use uma fita métrica flexível (de costura). Se não tiver, use um barbante e depois meça com uma régua."
  },
  {
    step: 2,
    title: "Posicione a fita",
    description: "Coloque a fita ao redor da cabeça, passando pela testa (acima das sobrancelhas) e pela parte mais saliente da nuca."
  },
  {
    step: 3,
    title: "Meça na maior circunferência",
    description: "A fita deve estar nivelada e firme, sem apertar. A maior circunferência é geralmente 2-3cm acima das sobrancelhas."
  },
  {
    step: 4,
    title: "Anote o valor em centímetros",
    description: "Meça pelo menos 2 vezes para garantir precisão. Use o maior valor obtido."
  }
];
