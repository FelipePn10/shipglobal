// useDashboard.ts
import { useState, useEffect } from 'react';
import { CurrencyCode, countryAddresses, translations, Translations, LanguageCode } from './dashboardData';

interface UserData {
  suite: string;
  name: string;
  address: typeof countryAddresses[string];
  stats: {
    products: number;
    packages: number;
    services: number;
    shipments: number;
  };
}

export const useDashboard = () => {
  const [language, setLanguage] = useState<LanguageCode>('pt');
  const [currency, setCurrency] = useState<CurrencyCode>('EUR');
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [userData, setUserData] = useState<UserData>({
    suite: '6037',
    name: '',
    address: countryAddresses['United States'],
    stats: {
      products: 0,
      packages: 0,
      services: 0,
      shipments: 0,
    },
  });

  const fetchUserData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          suite: '6037',
          name: 'Felipe',
          stats: {
            products: 0,
            packages: 0,
            services: 0,
            shipments: 0,
          },
        });
      }, 1000);
    });
  };

  useEffect(() => {
    fetchUserData().then((data: any) => {
      setUserData((prevData) => ({
        ...prevData,
        ...data,
        address: countryAddresses[selectedCountry],
      }));
    });
  }, []);

  useEffect(() => {
    setUserData((prevData) => ({
      ...prevData,
      address: {
        ...countryAddresses[selectedCountry],
        street: `${countryAddresses[selectedCountry].street} ${prevData.suite}`,
      },
    }));
  }, [selectedCountry]);

  const t = (key: keyof Translations): string =>
    translations[key]?.[language] ?? translations[key]?.['en'] ?? key;

  return {
    language,
    setLanguage,
    currency,
    setCurrency,
    selectedCountry,
    setSelectedCountry,
    userData,
    t,
  };
};