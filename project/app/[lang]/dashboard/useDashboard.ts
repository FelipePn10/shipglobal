import { useState, useMemo } from 'react';
import { CurrencyCode, LanguageCode } from './dashboardData';

// Tipagem para os dados do usuário
interface UserData {
  name: string;
  email: string;
  suite: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  stats: {
    products: number;
    packages: number;
    services: number;
    shipments: number;
  };
}

// Traduções simples
const translations: Record<string, Record<string, string>> = {
  en: {
    dashboard: 'Dashboard',
    products: 'Products',
    packages: 'Packages',
    services: 'Services',
    shipments: 'Shipments',
    selectCountry: 'Select Country',
    yourAddress: 'Your Address',
    currencies: 'Currencies',
    latestShipments: 'Latest Shipments',
    noShipments: 'No shipments yet',
    freeStorage: 'days free storage',
  },
  pt: {
    dashboard: 'Painel',
    products: 'Produtos',
    packages: 'Pacotes',
    services: 'Serviços',
    shipments: 'Envios',
    selectCountry: 'Selecionar País',
    yourAddress: 'Seu Endereço',
    currencies: 'Moedas',
    latestShipments: 'Últimos Envios',
    noShipments: 'Nenhum envio ainda',
    freeStorage: 'dias de armazenamento grátis',
  },
};

export const useDashboard = ({
  initialUserData,
  lang,
}: {
  initialUserData: UserData;
  lang: string;
}) => {
  const [language, setLanguage] = useState<LanguageCode>((lang as LanguageCode) || 'en');
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [selectedCountry, setSelectedCountry] = useState<string>('United States');

  const t = useMemo(() => {
    return (key: string) => translations[language]?.[key] || key;
  }, [language]);

  return {
    language,
    setLanguage,
    currency,
    setCurrency,
    selectedCountry,
    setSelectedCountry,
    userData: initialUserData,
    t,
  };
};