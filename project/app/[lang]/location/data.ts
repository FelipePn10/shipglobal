export interface Country {
  id: number;
  name: string;
  englishName: string;
  code: string;
  continent: string;
  coordinates: [number, number];
  timeZone: string;
  population: string;
  currency: string;
}

export interface Benefit {
  icon: string; // Alterado para string para representar o nome do ícone
  title: string;
  description: string;
}

export const countries: Country[] = [
  { id: 1, name: "Brasil", englishName: "Brazil", code: "BR", continent: "América do Sul", coordinates: [28, 65], timeZone: "GMT-3", population: "212 milhões", currency: "Real (BRL)" },
  { id: 2, name: "EUA", englishName: "United States", code: "US", continent: "América do Norte", coordinates: [20, 42], timeZone: "GMT-5 a GMT-8", population: "331 milhões", currency: "Dólar (USD)" },
  { id: 3, name: "Reino Unido", englishName: "United Kingdom", code: "UK", continent: "Europa", coordinates: [44, 38], timeZone: "GMT+0", population: "67 milhões", currency: "Libra (GBP)" },
  { id: 4, name: "China", englishName: "China", code: "CN", continent: "Ásia", coordinates: [70, 42], timeZone: "GMT+8", population: "1,4 bilhão", currency: "Yuan (CNY)" },
  { id: 5, name: "Japão", englishName: "Japan", code: "JP", continent: "Ásia", coordinates: [82, 42], timeZone: "GMT+9", population: "126 milhões", currency: "Iene (JPY)" },
  { id: 6, name: "Alemanha", englishName: "Germany", code: "DE", continent: "Europa", coordinates: [47, 38], timeZone: "GMT+1", population: "83 milhões", currency: "Euro (EUR)" },
  { id: 7, name: "Austrália", englishName: "Australia", code: "AU", continent: "Oceania", coordinates: [80, 70], timeZone: "GMT+8 a GMT+11", population: "25 milhões", currency: "Dólar Australiano (AUD)" },
  { id: 8, name: "Canadá", englishName: "Canada", code: "CA", continent: "América do Norte", coordinates: [20, 32], timeZone: "GMT-3,5 a GMT-8", population: "38 milhões", currency: "Dólar Canadense (CAD)" },
  { id: 9, name: "Espanha", englishName: "Spain", code: "ES", continent: "Europa", coordinates: [43, 42], timeZone: "GMT+1", population: "47 milhões", currency: "Euro (EUR)" },
  { id: 10, name: "França", englishName: "France", code: "FR", continent: "Europa", coordinates: [45, 39], timeZone: "GMT+1", population: "67 milhões", currency: "Euro (EUR)" },
  { id: 11, name: "Itália", englishName: "Italy", code: "IT", continent: "Europa", coordinates: [48, 42], timeZone: "GMT+1", population: "60 milhões", currency: "Euro (EUR)" },
  { id: 12, name: "Portugal", englishName: "Portugal", code: "PT", continent: "Europa", coordinates: [41, 41], timeZone: "GMT+0", population: "10 milhões", currency: "Euro (EUR)" },
  { id: 13, name: "Paraguai", englishName: "Paraguay", code: "PY", continent: "América do Sul", coordinates: [26, 62], timeZone: "GMT-4", population: "7 milhões", currency: "Guarani (PYG)" },
  { id: 14, name: "Turquia", englishName: "Turkey", code: "TR", continent: "Europa/Ásia", coordinates: [54, 42], timeZone: "GMT+3", population: "83 milhões", currency: "Lira Turca (TRY)" },
  { id: 15, name: "Tailândia", englishName: "Thailand", code: "TH", continent: "Ásia", coordinates: [70, 48], timeZone: "GMT+7", population: "69 milhões", currency: "Baht (THB)" },
  { id: 16, name: "Bélgica", englishName: "Belgium", code: "BE", continent: "Europa", coordinates: [45, 37], timeZone: "GMT+1", population: "11 milhões", currency: "Euro (EUR)" },
];

export const shippingStats = {
  fasterShipping: countries[1].name, // EUA
  mostPopular: countries[0].name, // Brasil
  bestValue: countries[3].name, // China
};

// Função ajustada para retornar apenas os dados, sem JSX
export const getCountryBenefits = (country: Country): Benefit[] => {
  const benefits: Benefit[] = [
    { icon: "TrendingUp", title: "Entrega rápida", description: "Entregas expressas disponíveis" },
    { icon: "ShoppingBag", title: "Acesso a lojas locais", description: "Compre em sites exclusivos" },
    { icon: "Truck", title: "Consolidação", description: "Economize em envios múltiplos" },
  ];

  if (country.continent === "Europa") {
    benefits.push({ icon: "Globe", title: "Remessa Europeia", description: "Envios entre países da UE sem taxas adicionais" });
  } else if (country.name === "EUA" || country.name === "China") {
    benefits.push({ icon: "ShoppingBag", title: "Acesso premium", description: "Descontos exclusivos em grandes marketplaces" });
  } else if (country.name === "Brasil") {
    benefits.push({ icon: "Users", title: "Suporte local", description: "Atendimento em português 24/7" });
  }

  return benefits;
};