import { Country } from "./countries";

export const shippingStats = {
  fasterShipping: "EUA",
  mostPopular: "Brasil",
  bestValue: "China",
};

export const getCountryBenefits = (country: Country): Benefit[] => {
  const benefits: Benefit[] = [
    { icon: "TrendingUp", title: "Entrega rápida", description: "Entregas expressas disponíveis" },
    // ... (outras vantagens)
  ];
  // Lógica de benefícios
  return benefits;
};

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}