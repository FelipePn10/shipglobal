"use client";

import React, { useState, useMemo } from 'react';
import { Globe, Package, Search, TrendingUp, Clock, Shield, Truck } from 'lucide-react';

interface ShippingProvider {
  id: string;
  name: string;
  description: string;
  logo: string;
  features: string[];
  countries: string[];
  estimatedTime: string;
  priceRange: string;
}

const EUROPEAN_COUNTRIES = [
  'Reino Unido',
  'França',
  'Alemanha',
  'Espanha',
  'Itália',
  'Portugal',
  'Países Baixos',
  'Europa'
];

const ShippingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('all');

  const shippingProviders: ShippingProvider[] = [
    {
      id: 'fedex',
      name: 'FedEx',
      description: 'Entrega expressa internacional com rastreamento em tempo real',
      logo: '/api/placeholder/80/40',
      features: ['Rastreamento em tempo real', 'Entrega expressa', 'Cobertura global', 'Seguro de envio'],
      countries: ['EUA', 'Canadá', 'Europa', 'Ásia', 'América Latina', 'Oceania', 'África'],
      estimatedTime: '1-3 dias úteis',
      priceRange: '€€€'
    },
    {
      id: 'dhl',
      name: 'DHL',
      description: 'Logística global com prazos de entrega garantidos',
      logo: '/api/placeholder/80/40',
      features: ['Prazos garantidos', 'Coleta programada', 'Atendimento alfandegário', 'Opções premium'],
      countries: ['EUA', 'Europa', 'Ásia', 'Oceania', 'América Latina', 'África', 'Oriente Médio'],
      estimatedTime: '1-4 dias úteis',
      priceRange: '€€€'
    },
    {
      id: 'express',
      name: 'Express',
      description: 'Serviço econômico com ampla cobertura internacional',
      logo: '/api/placeholder/80/40',
      features: ['Econômico', 'Ampla cobertura', 'Bom custo-benefício', 'Rastreamento básico'],
      countries: ['EUA', 'Europa', 'Ásia', 'América Latina'],
      estimatedTime: '5-10 dias úteis',
      priceRange: '€'
    },
    {
      id: 'dpd',
      name: 'DPD',
      description: 'Especialistas em logística com grande cobertura europeia',
      logo: '/api/placeholder/80/40',
      features: ['Especialista europeu', 'Predict service', 'Entregas programadas', 'Opções sustentáveis'],
      countries: ['Reino Unido', 'França', 'Alemanha', 'Espanha', 'Itália', 'Portugal', 'Países Baixos'],
      estimatedTime: '2-5 dias úteis',
      priceRange: '€€'
    },
    {
      id: 'ars',
      name: 'ARS',
      description: 'Soluções de envio flexíveis para diferentes necessidades',
      logo: '/api/placeholder/80/40',
      features: ['Flexibilidade', 'Soluções personalizadas', 'Diversos métodos de envio', 'Suporte 24/7'],
      countries: ['EUA', 'Europa', 'Ásia', 'América Latina', 'Canadá'],
      estimatedTime: '3-7 dias úteis',
      priceRange: '€€'
    },
    {
      id: 'aramex',
      name: 'Aramex',
      description: 'Serviço premium com foco em mercados emergentes',
      logo: '/api/placeholder/80/40',
      features: ['Especialista em mercados emergentes', 'Entregas em áreas remotas', 'Soluções premium', 'Suporte multi-idioma'],
      countries: ['Oriente Médio', 'África', 'Ásia', 'América Latina', 'Oceania'],
      estimatedTime: '2-6 dias úteis',
      priceRange: '€€'
    }
  ];

  const filteredProviders = useMemo(() => {
    return shippingProviders.filter((provider) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        provider.name.toLowerCase().includes(searchLower) ||
        provider.description.toLowerCase().includes(searchLower) ||
        provider.countries.some((country) => country.toLowerCase().includes(searchLower));

      switch (activeTab) {
        case 'all':
          return matchesSearch;
        case 'express':
          return matchesSearch && provider.estimatedTime.includes('1-');
        case 'economic':
          return matchesSearch && provider.priceRange === '€';
        case 'europe':
          return matchesSearch && provider.countries.some((country) => EUROPEAN_COUNTRIES.includes(country));
        default:
          return false;
      }
    });
  }, [searchTerm, activeTab]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Soluções de Frete Internacional</h1>
            <p className="text-xl mb-8">Conectamos você ao mundo com as melhores transportadoras em 17 países</p>
            <div className="relative bg-white rounded-full p-1 flex items-center max-w-xl mx-auto shadow-lg">
              <input
                type="text"
                placeholder="Busque por transportadora, país ou serviço..."
                className="w-full px-4 py-2 rounded-full focus:outline-none text-gray-800 placeholder-gray-400"
                value={searchTerm}
                onChange={handleSearchChange}
                aria-label="Pesquisar transportadoras"
              />
              <button
                className="bg-blue-600 rounded-full p-2 text-white hover:bg-blue-700 transition-colors"
                aria-label="Pesquisar"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <article className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Globe className="text-blue-600" size={28} aria-hidden="true" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Cobertura Global</h2>
            <p className="text-gray-600">Entregamos suas compras em 17 países com os melhores serviços de frete do mundo.</p>
          </article>
          <article className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="text-blue-600" size={28} aria-hidden="true" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Rastreamento Avançado</h2>
            <p className="text-gray-600">Acompanhe suas encomendas em tempo real durante todo o processo de entrega.</p>
          </article>
          <article className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="text-blue-600" size={28} aria-hidden="true" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Segurança Garantida</h2>
            <p className="text-gray-600">Suas encomendas são tratadas com o máximo cuidado e seguradas durante todo o trajeto.</p>
          </article>
        </section>

        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-6">Nossos Parceiros de Frete</h1>
          <div className="flex flex-wrap gap-2 mb-6" role="tablist">
            {[
              { id: 'all', label: 'Todos' },
              { id: 'express', label: 'Expressos' },
              { id: 'economic', label: 'Econômicos' },
              { id: 'europe', label: 'Europa' },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => setActiveTab(tab.id)}
                aria-selected={activeTab === tab.id}
                role="tab"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6">
          {filteredProviders.length > 0 ? (
            filteredProviders.map((provider) => (
              <article
                key={provider.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6 md:flex items-start">
                  <div className="md:w-1/6 mb-4 md:mb-0 flex items-center justify-center">
                    <div className="bg-gray-100 p-4 rounded">
                      <img
                        src={provider.logo}
                        alt={`Logo da ${provider.name}`}
                        className="w-16 h-8 object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 md:px-6">
                    <h2 className="text-xl font-bold">{provider.name}</h2>
                    <p className="text-gray-700 mb-4">{provider.description}</p>
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Clock size={16} className="mr-2" aria-hidden="true" />
                        <span>Tempo estimado: {provider.estimatedTime}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Truck size={16} className="mr-2" aria-hidden="true" />
                        <span>Preço: {provider.priceRange}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2">Cobertura:</h3>
                      <div className="flex flex-wrap gap-2">
                        {provider.countries.map((country) => (
                          <span
                            key={country}
                            className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                          >
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Características:</h3>
                      <div className="flex flex-wrap gap-2">
                        {provider.features.map((feature) => (
                          <span
                            key={feature}
                            className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/6 mt-4 md:mt-0 flex flex-col items-center justify-center">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded w-full md:w-auto text-center hover:bg-blue-700 transition-colors">
                      Ver detalhes
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-12" role="alert">
              <Package size={48} className="mx-auto text-gray-400 mb-4" aria-hidden="true" />
              <h2 className="text-xl font-medium mb-2">Nenhuma transportadora encontrada</h2>
              <p className="text-gray-600">Tente outros termos de busca ou filtros diferentes.</p>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Pronto para enviar suas compras?</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nossa equipe está disponível para ajudar você a escolher a melhor opção de frete para suas necessidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Solicitar orçamento
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors">
              Fale conosco
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShippingPage;