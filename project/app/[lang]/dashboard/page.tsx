"use client";

import React from 'react';
import { Globe, Box, Headphones, Send, DollarSign, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CurrencyStats } from '@/components/CurrencyStats';
import { UserAddress } from '@/components/UserAddress';
import { StatsCard } from '@/components/StatsCard';
import { LocaleSelector } from '@/components/LocaleSelector';
import { PackageAnimation } from '@/components/PackageAnimation';
import { useDashboard } from './useDashboard';
import { currencies, countries, mutableLanguages, CurrencyCode, LanguageCode } from './dashboardData';

export default function DashboardPage() {
  const {
    language,
    setLanguage,
    currency,
    setCurrency,
    selectedCountry,
    setSelectedCountry,
    userData,
    t,
  } = useDashboard();

  const handleLanguageChange = (value: string) => {
    setLanguage(value as LanguageCode); 
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
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
              languages={mutableLanguages} // Usando versão mutável
              currentLanguage={language} 
              onChange={handleLanguageChange} // Função intermediária
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
                color="blue"
              />
              <StatsCard
                title={t('services')}
                value={userData.stats.services}
                icon={<Headphones className="h-6 w-6" />}
                color="blue"
              />
              <StatsCard
                title={t('shipments')}
                value={userData.stats.shipments}
                icon={<Send className="h-6 w-6" />}
                color="blue"
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