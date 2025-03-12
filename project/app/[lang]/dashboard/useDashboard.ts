"use client";

import { useState, useEffect } from 'react';
import { CurrencyCode, LanguageCode } from './dashboardData';

const translations: Record<LanguageCode, Record<string, string>> = {
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
    freeStorage: 'days of free storage remaining',
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
    freeStorage: 'dias de armazenamento gratuito restantes',
  },
  es: {
    dashboard: 'Panel',
    products: 'Productos',
    packages: 'Paquetes',
    services: 'Servicios',
    shipments: 'Envíos',
    selectCountry: 'Seleccionar País',
    yourAddress: 'Su Dirección',
    currencies: 'Monedas',
    latestShipments: 'Últimos Envíos',
    noShipments: 'Aún no hay envíos',
    freeStorage: 'días de almacenamiento gratuito restantes',
  },
  fr: {
    dashboard: 'Tableau de bord',
    products: 'Produits',
    packages: 'Colis',
    services: 'Services',
    shipments: 'Expéditions',
    selectCountry: 'Sélectionner le pays',
    yourAddress: 'Votre adresse',
    currencies: 'Devises',
    latestShipments: 'Dernières expéditions',
    noShipments: 'Pas encore d\'expéditions',
    freeStorage: 'jours de stockage gratuit restants',
  },
  de: {
    dashboard: 'Dashboard',
    products: 'Produkte',
    packages: 'Pakete',
    services: 'Dienstleistungen',
    shipments: 'Sendungen',
    selectCountry: 'Land auswählen',
    yourAddress: 'Ihre Adresse',
    currencies: 'Währungen',
    latestShipments: 'Neueste Sendungen',
    noShipments: 'Noch keine Sendungen',
    freeStorage: 'Tage kostenlose Lagerung übrig',
  },
  it: {
    dashboard: 'Cruscotto',
    products: 'Prodotti',
    packages: 'Pacchi',
    services: 'Servizi',
    shipments: 'Spedizioni',
    selectCountry: 'Seleziona Paese',
    yourAddress: 'Il tuo indirizzo',
    currencies: 'Valute',
    latestShipments: 'Ultime spedizioni',
    noShipments: 'Nessuna spedizione ancora',
    freeStorage: 'giorni di archiviazione gratuita rimanenti',
  },
  zh: {
    dashboard: '仪表板',
    products: '产品',
    packages: '包裹',
    services: '服务',
    shipments: '发货',
    selectCountry: '选择国家',
    yourAddress: '您的地址',
    currencies: '货币',
    latestShipments: '最新发货',
    noShipments: '尚无发货',
    freeStorage: '剩余免费存储天数',
  }
};

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

interface UseDashboardProps {
  initialUserData: UserData;
  lang: string;
}

export function useDashboard({ initialUserData, lang }: UseDashboardProps) {
  // Definir o idioma com base no parâmetro de URL
  const [language, setLanguage] = useState<LanguageCode>(
    (lang as LanguageCode) || 'en'
  );
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [selectedCountry, setSelectedCountry] = useState('USA');

  // Função de tradução
  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return {
    language,
    setLanguage,
    currency,
    setCurrency,
    selectedCountry,
    setSelectedCountry,
    t,
  };
}