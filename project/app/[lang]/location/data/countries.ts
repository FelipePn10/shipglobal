export interface Country {
  [x: string]: string;
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

export const countries: Country[] = [
  { id: 1, name: "Brasil", englishName: "Brazil", code: "BR", continent: "América do Sul", coordinates: [-14.235, -51.9253], timeZone: "GMT-3", population: "212 milhões", currency: "Real (BRL)" },
  { id: 2, name: "EUA", englishName: "United States", code: "US", continent: "América do Norte", coordinates: [37.0902, -95.7129], timeZone: "GMT-5", population: "331 milhões", currency: "Dólar (USD)" },
  { id: 3, name: "Reino Unido", englishName: "United Kingdom", code: "GB", continent: "Europa", coordinates: [55.3781, -3.436], timeZone: "GMT+0", population: "67 milhões", currency: "Libra Esterlina (GBP)" },
  { id: 4, name: "China", englishName: "China", code: "CN", continent: "Ásia", coordinates: [35.8617, 104.1954], timeZone: "GMT+8", population: "1.4 bilhão", currency: "Yuan (CNY)" },
  { id: 5, name: "Japão", englishName: "Japan", code: "JP", continent: "Ásia", coordinates: [36.2048, 138.2529], timeZone: "GMT+9", population: "126 milhões", currency: "Iene (JPY)" },
  { id: 6, name: "Alemanha", englishName: "Germany", code: "DE", continent: "Europa", coordinates: [51.1657, 10.4515], timeZone: "GMT+1", population: "83 milhões", currency: "Euro (EUR)" },
  { id: 7, name: "Austrália", englishName: "Australia", code: "AU", continent: "Oceania", coordinates: [-25.2744, 133.7751], timeZone: "GMT+10", population: "25 milhões", currency: "Dólar Australiano (AUD)" },
  { id: 8, name: "Canadá", englishName: "Canada", code: "CA", continent: "América do Norte", coordinates: [56.1304, -106.3468], timeZone: "GMT-5", population: "38 milhões", currency: "Dólar Canadense (CAD)" },
  { id: 9, name: "Espanha", englishName: "Spain", code: "ES", continent: "Europa", coordinates: [40.4637, -3.7492], timeZone: "GMT+1", population: "47 milhões", currency: "Euro (EUR)" },
  { id: 10, name: "França", englishName: "France", code: "FR", continent: "Europa", coordinates: [46.2276, 2.2137], timeZone: "GMT+1", population: "67 milhões", currency: "Euro (EUR)" },
  { id: 11, name: "Itália", englishName: "Italy", code: "IT", continent: "Europa", coordinates: [41.8719, 12.5674], timeZone: "GMT+1", population: "60 milhões", currency: "Euro (EUR)" },
  { id: 12, name: "Portugal", englishName: "Portugal", code: "PT", continent: "Europa", coordinates: [39.3999, -8.2245], timeZone: "GMT+0", population: "10 milhões", currency: "Euro (EUR)" },
  { id: 13, name: "Paraguai", englishName: "Paraguay", code: "PY", continent: "América do Sul", coordinates: [-23.4425, -58.4438], timeZone: "GMT-4", population: "7 milhões", currency: "Guarani (PYG)" },
  { id: 14, name: "Turquia", englishName: "Turkey", code: "TR", continent: "Ásia", coordinates: [38.9637, 35.2433], timeZone: "GMT+3", population: "84 milhões", currency: "Lira Turca (TRY)" },
  { id: 15, name: "Tailândia", englishName: "Thailand", code: "TH", continent: "Ásia", coordinates: [15.87, 100.9925], timeZone: "GMT+7", population: "71 milhões", currency: "Baht (THB)" },
  { id: 16, name: "Bélgica", englishName: "Belgium", code: "BE", continent: "Europa", coordinates: [50.5039, 4.4699], timeZone: "GMT+1", population: "11 milhões", currency: "Euro (EUR)" },
];