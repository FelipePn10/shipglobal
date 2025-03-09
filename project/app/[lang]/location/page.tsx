"use client";

import React, { useState, useEffect } from 'react';
import { Globe, MapPin, ChevronDown, Package, ArrowRight, Info, Users, Mail, Clock, TrendingUp, Truck, ShoppingBag } from 'lucide-react';

const LocationsPage = () => {
  const [selectedCountry, setSelectedCountry] = useState<typeof countries[0] | null>(null);
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('map');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredCountry, setHoveredCountry] = useState<typeof countries[0] | null>(null);
  
  const countries = [
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

  // Estatísticas de envio por país (simuladas)
  const shippingStats = {
    fasterShipping: countries[1].name, // EUA
    mostPopular: countries[0].name, // Brasil
    bestValue: countries[3].name // China
  };

  // Agrupar países por continente
  const groupedCountries = countries.reduce((acc: { [key: string]: typeof countries }, country) => {
    if (!acc[country.continent]) {
      acc[country.continent] = [];
    }
    acc[country.continent].push(country);
    return acc;
  }, {});

  // Filtrar países com base na busca
  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    country.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Simular um carregamento ao selecionar um país
  useEffect(() => {
    if (selectedCountry) {
      const timer = setTimeout(() => {
        document.getElementById('country-details')?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [selectedCountry]);

  // Benefícios específicos por país
  const getCountryBenefits = (country: typeof countries[0]) => {
    const benefits = [
      { icon: <TrendingUp className="w-5 h-5 text-purple-500" />, title: "Entrega rápida", description: "Entregas expressas disponíveis" },
      { icon: <ShoppingBag className="w-5 h-5 text-blue-500" />, title: "Acesso a lojas locais", description: "Compre em sites exclusivos" },
      { icon: <Truck className="w-5 h-5 text-green-500" />, title: "Consolidação", description: "Economize em envios múltiplos" }
    ];
    
    if (country.continent === "Europa") {
      benefits.push({ icon: <Globe className="w-5 h-5 text-pink-500" />, title: "Remessa Europeia", description: "Envios entre países da UE sem taxas adicionais" });
    } else if (country.name === "EUA" || country.name === "China") {
      benefits.push({ icon: <ShoppingBag className="w-5 h-5 text-yellow-500" />, title: "Acesso premium", description: "Descontos exclusivos em grandes marketplaces" });
    } else if (country.name === "Brasil") {
      benefits.push({ icon: <Users className="w-5 h-5 text-indigo-500" />, title: "Suporte local", description: "Atendimento em português 24/7" });
    }
    
    return benefits;
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Banner de Cabeçalho com Animação */}
      <div className="relative h-80 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 100 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-white" 
              style={{
                width: Math.random() * 6 + 2 + 'px',
                height: Math.random() * 6 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5 + 0.2,
                animation: `float ${Math.random() * 10 + 10}s infinite linear`
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 blur-3xl opacity-30" 
               style={{ top: '30%', left: '70%' }}></div>
          <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 blur-3xl opacity-20" 
               style={{ top: '60%', left: '30%' }}></div>
        </div>
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white relative z-10 mt-5">
          <div className="relative">
            <Globe className="w-16 h-16 mb-4" />
            <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-full filter blur-lg opacity-20 animate-pulse"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Nossa Presença Global
          </h1>
          <p className="text-xl opacity-90 max-w-2xl text-center">
            Conectando você a {countries.length} países ao redor do mundo
          </p>
          {/* <div className="mt-8 flex space-x-4">
            <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Começar Agora
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300">
              Saber Mais
            </button>
          </div> */}
        </div>
      </div>

      {/* Estatísticas Animadas */}
      <div className="py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100 text-blue-600">
                <Globe className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{countries.length}</div>
              <div className="text-gray-600">Países Atendidos</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-purple-100 text-purple-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">{Object.keys(groupedCountries).length}</div>
              <div className="text-gray-600">Continentes</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-pink-100 text-pink-600">
                <Package className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold text-pink-500 mb-2">+500k</div>
              <div className="text-gray-600">Entregas Realizadas</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-yellow-100 text-yellow-600">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">24/7</div>
              <div className="text-gray-600">Suporte Global</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navegação entre visualizações */}
      <div className="bg-white border-b sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center py-4">
            <div className="flex space-x-2 mb-4 md:mb-0">
              <button 
                onClick={() => setActiveTab('map')}
                className={`px-4 py-3 font-medium rounded-t-lg transition-all duration-200 ${
                  activeTab === 'map' 
                    ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Mapa Interativo
                </div>
              </button>
              <button 
                onClick={() => setActiveTab('list')}
                className={`px-4 py-3 font-medium rounded-t-lg transition-all duration-200 ${
                  activeTab === 'list' 
                    ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Lista de Países
                </div>
              </button>
              <button 
                onClick={() => setActiveTab('stats')}
                className={`px-4 py-3 font-medium rounded-t-lg transition-all duration-200 ${
                  activeTab === 'stats' 
                    ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Estatísticas
                </div>
              </button>
            </div>
            
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Buscar país..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo baseado na tab selecionada */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          {/* Mapa Interativo */}
          {activeTab === 'map' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Nossa Rede Global</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Clique nos países para obter mais informações sobre nossos serviços em cada localização
                </p>
              </div>

              <div className={`relative mx-auto transition-all duration-500 ease-in-out ${isMapExpanded ? 'h-96 md:h-120' : 'h-64 md:h-80'} max-w-5xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg border border-blue-100`}>
                <div className="absolute inset-0 p-4">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" opacity="0.2">
                    <path d="M10,30 Q20,25 20,40 T30,45 T15,50 T10,30" fill="#4299e1" />
                    <path d="M20,55 Q25,60 30,65 T25,75 T20,65 T20,55" fill="#9f7aea" />
                    <path d="M45,30 Q50,25 55,30 T50,40 T45,35 T45,30" fill="#f687b3" />
                    <path d="M45,45 Q55,45 55,60 T45,65 T40,55 T45,45" fill="#f6ad55" />
                    <path d="M60,30 Q75,30 80,45 T70,55 T60,45 T60,30" fill="#68d391" />
                    <path d="M75,65 Q85,65 85,75 T75,75 T75,65" fill="#4fd1c5" />
                  </svg>
                  
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                    {selectedCountry && (
                      <>
                        {countries.map((country) => (
                          country.id !== selectedCountry.id && (
                            <line 
                              key={`line-${selectedCountry.id}-${country.id}`}
                              x1={selectedCountry.coordinates[0]}
                              y1={selectedCountry.coordinates[1]}
                              x2={country.coordinates[0]}
                              y2={country.coordinates[1]}
                              stroke="#a0aec0"
                              strokeWidth="0.2"
                              strokeDasharray="1,1"
                              opacity="0.3"
                            />
                          )
                        ))}
                        <line 
                          x1={selectedCountry.coordinates[0]}
                          y1={selectedCountry.coordinates[1]}
                          x2={countries[0].coordinates[0]}
                          y2={countries[0].coordinates[1]}
                          stroke="#3182ce"
                          strokeWidth="0.5"
                          strokeDasharray="1,0.5"
                          opacity="0.7"
                        />
                      </>
                    )}
                  </svg>

                  {countries.map((country) => (
                    <button
                      key={country.id}
                      onClick={() => setSelectedCountry(country)}
                      onMouseEnter={() => setHoveredCountry(country)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 ${
                        selectedCountry?.id === country.id ? 'scale-125 z-30' : 'hover:scale-110 z-10'
                      }`}
                      style={{ 
                        left: `${country.coordinates[0]}%`, 
                        top: `${country.coordinates[1]}%` 
                      }}
                    >
                      <div className="relative">
                        <div className={`w-3 h-3 rounded-full ${
                          selectedCountry?.id === country.id 
                            ? 'bg-pink-500' 
                            : country.id === 1 ? 'bg-green-500' : 'bg-blue-500 group-hover:bg-purple-500'
                        }`}>
                        </div>
                        
                        {(selectedCountry?.id === country.id || hoveredCountry?.id === country.id) && (
                          <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-pink-500 opacity-70 animate-ping"></div>
                        )}
                        
                        {country.id === 1 && (
                          <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-green-500 opacity-50 animate-ping"></div>
                        )}
                        
                        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 whitespace-nowrap text-xs font-medium px-2 py-1 rounded-md shadow-sm ${
                          selectedCountry?.id === country.id 
                            ? 'bg-pink-500 text-white' 
                            : country.id === 1 
                              ? 'bg-green-500 text-white'
                              : 'bg-white bg-opacity-90 text-gray-700 group-hover:bg-blue-500 group-hover:text-white'
                        }`}>
                          {country.name}
                          {country.id === 1 && <span className="ml-1 text-xs">• Sede</span>}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => setIsMapExpanded(!isMapExpanded)}
                  className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <ChevronDown className={`w-5 h-5 transform transition-transform ${isMapExpanded ? 'rotate-180' : ''}`} />
                </button>
                
                <div className="absolute bottom-2 left-2 bg-white bg-opacity-90 p-2 rounded-lg shadow-sm">
                  <div className="flex items-center text-xs text-gray-600 mb-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                    <span>Sede</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                    <span>Centro de Processamento</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Lista de Países */}
          {activeTab === 'list' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Endereços Internacionais</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Escolha entre nossas múltiplas localizações para enviar e receber seus produtos
                </p>
              </div>

              {searchTerm ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                      <div 
                        key={country.id} 
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 cursor-pointer"
                        onClick={() => setSelectedCountry(country)}
                      >
                        <div className={`h-2 ${
                          country.id === 1 ? 'bg-green-500' : 'bg-blue-500'
                        }`}></div>
                        <div className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-bold text-gray-800">{country.name}</h3>
                              <p className="text-sm text-gray-500">{country.englishName}</p>
                            </div>
                            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full">
                              {country.code}
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center text-sm text-gray-600 mb-2">
                              <Globe className="w-4 h-4 mr-2 text-blue-500" />
                              <span>{country.continent}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="w-4 h-4 mr-2 text-blue-500" />
                              <span>{country.timeZone}</span>
                            </div>
                          </div>
                          <button className="mt-4 w-full py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors text-sm font-medium">
                            Ver Detalhes
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-3 text-center py-10">
                      <Info className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                      <p className="text-gray-500">Nenhum país encontrado com o termo "{searchTerm}".</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-10">
                  {Object.entries(groupedCountries).map(([continent, countries]) => (
                    <div key={continent}>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mr-2">
                          {continent.charAt(0)}
                        </span>
                        {continent}
                        <span className="ml-2 text-sm font-normal text-gray-500">
                          ({countries.length} {countries.length === 1 ? 'país' : 'países'})
                        </span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {countries.map((country) => (
                          <div 
                            key={country.id} 
                            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
                            onClick={() => setSelectedCountry(country)}
                          >
                            <div className="p-4 flex items-center">
                              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mr-3">
                                {country.code}
                              </div>
                              <div>
                                <div className="font-medium text-gray-800">{country.name}</div>
                                <div className="text-xs text-gray-500">{country.englishName}</div>
                              </div>
                              <ArrowRight className="w-4 h-4 ml-auto text-gray-400" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Estatísticas e Insights */}
          {activeTab === 'stats' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Dados e Estatísticas</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Conheça nossos números e aprenda como otimizar seus envios internacionais
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Destaques de Envio */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-blue-500" />
                    Destaques de Envio
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-gray-600">Mais Rápido</div>
                      <div className="text-lg font-medium text-blue-600">{shippingStats.fasterShipping}</div>
                      <div className="text-sm text-gray-500">Média de 3-5 dias úteis</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Mais Popular</div>
                      <div className="text-lg font-medium text-blue-600">{shippingStats.mostPopular}</div>
                      <div className="text-sm text-gray-500">Maior volume de envios</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Melhor Custo-Benefício</div>
                      <div className="text-lg font-medium text-blue-600">{shippingStats.bestValue}</div>
                      <div className="text-sm text-gray-500">Preços competitivos</div>
                    </div>
                  </div>
                </div>

                {/* Dicas de Envio */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Info className="w-6 h-6 mr-2 text-purple-500" />
                    Dicas para Envios
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-start">
                      <Truck className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
                      <span>Consolide envios de diferentes países para economizar até 30% nos custos de frete.</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 mr-2 text-yellow-500 flex-shrink-0" />
                      <span>Escolha opções expressas para entregas urgentes em até 48 horas em mercados selecionados.</span>
                    </div>
                    <div className="flex items-start">
                      <ShoppingBag className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0" />
                      <span>Aproveite marketplaces locais para acesso a ofertas exclusivas.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Detalhes do País Selecionado */}
      {selectedCountry && (
        <div id="country-details" className="py-12 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="w-24 h-24 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full text-2xl font-bold mb-4 mx-auto">
                    {selectedCountry.code}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 text-center">{selectedCountry.name}</h2>
                  <p className="text-gray-500 text-center mt-2">{selectedCountry.englishName}</p>
                </div>
                
                <div className="md:w-2/3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-blue-500" />
                      <span className="text-gray-600">Continente: <span className="font-medium">{selectedCountry.continent}</span></span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-blue-500" />
                      <span className="text-gray-600">Fuso: <span className="font-medium">{selectedCountry.timeZone}</span></span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-500" />
                      <span className="text-gray-600">População: <span className="font-medium">{selectedCountry.population}</span></span>
                    </div>
                    <div className="flex items-center">
                      <Package className="w-5 h-5 mr-2 text-blue-500" />
                      <span className="text-gray-600">Moeda: <span className="font-medium">{selectedCountry.currency}</span></span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Benefícios Locais</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {getCountryBenefits(selectedCountry).map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mr-3">{benefit.icon}</div>
                        <div>
                          <div className="font-medium text-gray-800">{benefit.title}</div>
                          <div className="text-sm text-gray-600">{benefit.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex space-x-4">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Usar este Endereço
                    </button>
                    <button 
                      onClick={() => setSelectedCountry(null)}
                      className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationsPage;