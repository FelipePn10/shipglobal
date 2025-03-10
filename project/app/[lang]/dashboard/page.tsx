"use client";

import React, { useState, useEffect } from 'react';
import { Globe, Box, Headphones, Send, DollarSign, Euro, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CurrencyConverter from '@/components/CurrencyConverter';
import { CurrencyStats } from '@/components/CurrencyStats';
import { UserAddress } from '@/components/UserAddress';
import { LatestShipments } from '@/components/LatestShipments';
import { StatsCard } from '@/components/StatsCard';
import { CountrySelector } from '@/components/CountrySelector';
import { LocaleSelector } from '@/components/LocaleSelector';
import { PackageAnimation } from '@/components/PackageAnimation';

type CurrencyCode = 'EUR' | 'USD' | 'BRL' | 'CNY' | 'JPY' | 'AUD';

const currencies: { code: CurrencyCode; name: string; symbol: string }[] = [
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
];

// Default addresses by country
type Address = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

const countryAddresses: { [key: string]: Address } = {
  'United States': {
    street: '123 Ship Global Blvd, Suite',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States'
  },
  'United Kingdom': {
    street: '45 London Bridge Rd, Suite',
    city: 'London',
    state: 'England',
    zipCode: 'EC1V 2NX',
    country: 'United Kingdom'
  },
  'China': {
    street: '789 Nanjing Road, Suite',
    city: 'Shanghai',
    state: 'Shanghai',
    zipCode: '200000',
    country: 'China'
  },
  'Japan': {
    street: '1-2-3 Shibuya, Suite',
    city: 'Tokyo',
    state: 'Tokyo',
    zipCode: '150-0002',
    country: 'Japan'
  },
  'Germany': {
    street: '123 Berliner Str., Suite',
    city: 'Berlin',
    state: 'Berlin',
    zipCode: '10115',
    country: 'Germany'
  },
  'Australia': {
    street: '42 Sydney Harbor, Suite',
    city: 'Sydney',
    state: 'NSW',
    zipCode: '2000',
    country: 'Australia'
  },
  'Canada': {
    street: '789 Maple Ave, Suite',
    city: 'Toronto',
    state: 'Ontario',
    zipCode: 'M5V 2L7',
    country: 'Canada'
  },
  'Spain': {
    street: 'CL Magistrado Manuel Artime 26, Suite',
    city: 'A Coruña',
    state: 'A Coruña',
    zipCode: '15004',
    country: 'Spain'
  },
  'France': {
    street: '123 Rue de Paris, Suite',
    city: 'Paris',
    state: 'Île-de-France',
    zipCode: '75001',
    country: 'France'
  },
  'Italy': {
    street: 'Via Roma 42, Suite',
    city: 'Rome',
    state: 'Lazio',
    zipCode: '00184',
    country: 'Italy'
  },
  'Portugal': {
    street: 'Rua Lisboa 123, Suite',
    city: 'Lisbon',
    state: 'Lisbon',
    zipCode: '1000-001',
    country: 'Portugal'
  },
  'Paraguay': {
    street: 'Avenida Mariscal López 123, Suite',
    city: 'Asunción',
    state: 'Asunción',
    zipCode: '001',
    country: 'Paraguay'
  },
  'Turkey': {
    street: 'Istanbul Caddesi 789, Suite',
    city: 'Istanbul',
    state: 'Istanbul',
    zipCode: '34000',
    country: 'Turkey'
  },
  'Brazil': {
    street: 'Avenida Paulista 123, Suite',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01310-000',
    country: 'Brazil'
  },
  'Thailand': {
    street: '123 Sukhumvit Road, Suite',
    city: 'Bangkok',
    state: 'Bangkok',
    zipCode: '10110',
    country: 'Thailand'
  },
  'Belgium': {
    street: 'Rue de Bruxelles 42, Suite',
    city: 'Brussels',
    state: 'Brussels',
    zipCode: '1000',
    country: 'Belgium'
  }
};

// List of all supported countries for the selector
const countries = [
  'United States',
  'United Kingdom',
  'China',
  'Japan',
  'Germany',
  'Australia',
  'Canada',
  'Spain',
  'France',
  'Italy',
  'Portugal',
  'Paraguay',
  'Turkey',
  'Brazil',
  'Thailand',
  'Belgium'
];

const languages = [
  { code: 'pt', name: 'Português' },
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'zh', name: '中文' },
];

type TranslationKey = keyof typeof translations;

const translations = {
  dashboard: { pt: 'Painel', es: 'Panel', en: 'Dashboard' },
  products: { pt: 'Produtos', es: 'Productos', en: 'Products' },
  packages: { pt: 'Caixas', es: 'Paquetes', en: 'Packages' },
  services: { pt: 'Serviços', es: 'Servicios', en: 'Services' },
  shipments: { pt: 'Envios', es: 'Envíos', en: 'Shipments' },
  yourAddress: { pt: 'Seu Endereço para Compras', es: 'Su Dirección para Compras', en: 'Your Shopping Address' },
  currencies: { pt: 'Cotações', es: 'Cotizaciones', en: 'Exchange Rates' },
  latestShipments: { pt: 'Últimos Envios', es: 'Últimos Envíos', en: 'Latest Shipments' },
  selectCountry: { pt: 'Selecionar País', es: 'Seleccionar País', en: 'Select Country' },
  myWallet: { pt: 'Minha Carteira', es: 'Mi Cartera', en: 'My Wallet' },
  myAccount: { pt: 'Minha Conta', es: 'Mi Cuenta', en: 'My Account' },
  store: { pt: 'Loja', es: 'Tienda', en: 'Store' },
  purchaseGroup: { pt: 'Grupo de Compras', es: 'Grupo de Compras', en: 'Purchase Group' },
  contractedServices: { pt: 'Serviços Contratados', es: 'Servicios Contratados', en: 'Contracted Services' },
  mySuite: { pt: 'Minha Suite', es: 'Mi Suite', en: 'My Suite' },
  freeStorage: { pt: 'dia(s) de armazenamento gratuito', es: 'día(s) de almacenamiento gratuito', en: 'day(s) of free storage' },
  noShipments: { pt: 'Nenhum envio recente encontrado', es: 'No se encontraron envíos recientes', en: 'No recent shipments found' },
};

export default function DashboardPage() {
  const [language, setLanguage] = useState('pt');
  const [currency, setCurrency] = useState<CurrencyCode>('EUR');
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [userData, setUserData] = useState({
    suite: '6037',
    name: '',
    address: countryAddresses['United States'],
    stats: {
      products: 0,
      packages: 0,
      services: 0,
      shipments: 0,
    }
  });

  // Simulating fetching user data from API
  const fetchUserData = async () => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          suite: '6037',
          name: 'Felipe', // In production, this would come from the user's account
          stats: {
            products: 0,
            packages: 0,
            services: 0,
            shipments: 0,
          }
        });
      }, 1000);
    });
  };

  useEffect(() => {
    fetchUserData().then((data: any) => {
      setUserData(prevData => ({
        ...prevData,
        ...data,
        address: countryAddresses[selectedCountry] // Ensure address matches selected country
      }));
    });
  }, []);

  // Update address when country changes
  useEffect(() => {
    setUserData(prevData => ({
      ...prevData,
      address: {
        ...countryAddresses[selectedCountry],
        street: `${countryAddresses[selectedCountry].street} ${prevData.suite}` // Append suite number
      }
    }));
  }, [selectedCountry]);

  const t = (key: TranslationKey) => translations[key]?.[language] || translations[key]?.['en'] || key;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header with language and currency selectors */}
      <header className="sticky top-0 z-50 bg-white border-b border-blue-100 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-md">
              <Box className="h-6 w-6" />
            </div>
            <h1 className="text-xl font-bold text-blue-800">SHIPGLOBAL</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <LocaleSelector 
              languages={languages} 
              currentLanguage={language} 
              onChange={setLanguage} 
            />
            
            <Select value={currency} onValueChange={(value: CurrencyCode) => setCurrency(value)}>
              <SelectTrigger className="w-40 border-blue-200 bg-blue-50">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((curr) => (
                  <SelectItem key={curr.code} value={curr.code}>
                    {curr.symbol} {curr.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <div className="flex items-center px-3 py-1 bg-blue-100 rounded-full text-blue-800">
              <span className="mr-2">{currency}</span>
              <span className="font-bold">6,26</span>
            </div>
            
            <button className="relative p-1 text-blue-600 hover:text-blue-800">
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="bg-blue-200 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center">
                {userData.name.charAt(0) || '?'}
              </div>
              <span className="font-semibold text-blue-800">{userData.name || 'User'}</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden">
              <div className="bg-blue-600 text-white p-6 flex items-center justify-between">
                <div>
                  <div className="text-sm opacity-80">SUITE</div>
                  <div className="text-2xl font-bold">{userData.suite}</div>
                  <div className="mt-1">{userData.name}</div>
                </div>
                <Box className="h-8 w-8" />
              </div>
              
              <nav className="p-2">
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-blue-50 text-blue-700 font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      <span>{t('dashboard')}</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span>{t('myAccount')}</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                      </svg>
                      <span>{t('myWallet')}</span>
                      <span className="ml-auto bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full">
                        € 0,00
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                      <span>{t('store')}</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      </svg>
                      <span>{t('purchaseGroup')}</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700">
                      <Headphones className="h-5 w-5" />
                      <span>{t('contractedServices')}</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                      </svg>
                      <span>{t('mySuite')}</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Main dashboard area */}
          <div className="lg:col-span-3">
            {/* Stats cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <StatsCard
                title={t('products')}
                value={userData.stats.products}
                icon={<Database className="h-6 w-6" />}
                color="blue"
              />
              <StatsCard
                title={t('packages')}
                value={userData.stats.packages}
                icon={<Box className="h-6 w-6" />}
                color="rose"
              />
              <StatsCard
                title={t('services')}
                value={userData.stats.services}
                icon={<Headphones className="h-6 w-6" />}
                color="amber"
              />
              <StatsCard
                title={t('shipments')}
                value={userData.stats.shipments}
                icon={<Send className="h-6 w-6" />}
                color="emerald"
              />
            </div>
            
            {/* Country selector and address card */}
            <div className="mb-6">
              <Card className="mb-4">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="flex items-center mb-3 sm:mb-0">
                      <Globe className="h-5 w-5 mr-2 text-blue-500" />
                      <span className="font-medium">{t('selectCountry')}</span>
                    </div>
                    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                      <SelectTrigger className="w-full sm:w-64 border-blue-200">
                        <SelectValue placeholder={t('selectCountry')} />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
              
              <UserAddress
                address={userData.address}
                suiteNumber={userData.suite}
                username={userData.name}
                title={t('yourAddress')}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Currency exchange widget */}
              <div>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-blue-500" />
                      {t('currencies')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <CurrencyStats 
                        baseCurrency={currency}
                        currencies={currencies.map(c => c.code)}
                      />
                      {/* <div className="mt-4">
                        <CurrencyConverter baseCurrency={currency} currencies={currencies} />
                      </div> */}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Latest shipments */}
              <div>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold flex items-center">
                      <Send className="h-5 w-5 mr-2 text-emerald-500" />
                      {t('latestShipments')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-64 text-center">
                      <div>
                        <PackageAnimation />
                        <p className="mt-4 text-gray-500">
                          {t('noShipments')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Storage info */}
            <div className="mt-6">
              <Card className="bg-blue-50">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                      </svg>
                    </div>
                    <p className="text-blue-700">90 {t('freeStorage')}.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}