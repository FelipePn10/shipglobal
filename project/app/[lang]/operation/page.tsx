"use client"; // Adicione esta linha no topo do arquivo

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

// Tipos para os países
interface Country {
  code: string;
  name: string;
  localName: string;
}

// Componente principal da página
const ComoFunciona: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const currentLanguage = 'en';
  const router = useRouter();

  // Países disponíveis
  const countries: Country[] = [
    { code: 'US', name: 'United States', localName: 'EUA' },
    { code: 'GB', name: 'United Kingdom', localName: 'Reino Unido' },
    { code: 'CN', name: 'China', localName: 'China' },
    { code: 'JP', name: 'Japan', localName: 'Japão' },
    { code: 'DE', name: 'Germany', localName: 'Alemanha' },
    { code: 'AU', name: 'Australia', localName: 'Austrália' },
    { code: 'CA', name: 'Canada', localName: 'Canadá' },
    { code: 'ES', name: 'Spain', localName: 'Espanha' },
    { code: 'FR', name: 'France', localName: 'França' },
    { code: 'IT', name: 'Italy', localName: 'Itália' },
    { code: 'PT', name: 'Portugal', localName: 'Portugal' },
    { code: 'PY', name: 'Paraguay', localName: 'Paraguai' },
    { code: 'TR', name: 'Turkey', localName: 'Turquia' },
    { code: 'BR', name: 'Brazil', localName: 'Brasil' },
    { code: 'TH', name: 'Thailand', localName: 'Tailândia' },
    { code: 'BE', name: 'Belgium', localName: 'Bélgica' },
  ];

  // Avança para o próximo passo automaticamente a cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev === totalSteps ? 1 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen">
      {/* Header */}
      <header className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 mt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Como Funciona</h1>
          <p className="text-xl text-center mt-4 text-blue-100">
            Seu assistente para compras internacionais em 17 países
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Animated Step Display */}
        <div className="relative mb-24">
          {/* Progress Bar */}
          <div className="h-2 bg-gray-200 rounded-full mb-8 relative">
            <motion.div 
              className="h-full bg-blue-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.5}}
            />
          </div>
          
          {/* Step Indicators */}
          <div className="flex justify-between items-center relative -mt-12">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center cursor-pointer"
                onClick={() => goToStep(index + 1)}
              >
                <motion.div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 ${
                    currentStep >= index + 1 ? 'bg-blue-600' : 'bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {index + 1}
                </motion.div>
                <span className="text-xs mt-2 text-gray-600 hidden md:block">Passo {index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500"
              >
                <h2 className="text-3xl font-bold text-blue-900 mb-4">1. Escolha seu país de compra</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Selecione o país onde deseja fazer suas compras. Temos presença em 17 países ao redor do mundo, 
                  permitindo que você tenha acesso às melhores lojas e produtos internacionais.
                </p>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">Dica:</h3>
                  <p className="text-gray-700">
                    Cada país tem produtos únicos e preços diferenciados. Compare antes de decidir!
                  </p>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-300"
              >
                <h2 className="text-3xl font-bold text-blue-900 mb-4">2. Envie o link do produto</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Encontrou o produto ideal? Compartilhe o link conosco através da nossa 
                  plataforma. Nossos especialistas verificarão a viabilidade da compra
                  e os custos envolvidos.
                </p>
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-bold text-purple-800 mb-2">Dica:</h3>
                  <p className="text-gray-700">
                    Envie links de produtos similares para que possamos comparar preços e qualidade.
                  </p>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-300"
              >
                <h2 className="text-3xl font-bold text-blue-900 mb-4">3. Receba seu orçamento</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Em até 24 horas, você receberá um orçamento detalhado incluindo o preço do produto,
                  taxas de serviço, impostos estimados e custo de entrega. Tudo transparente, sem surpresas.
                </p>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-bold text-yellow-700 mb-2">Dica:</h3>
                  <p className="text-gray-700">
                    Nosso orçamento inclui todos os custos, desde a compra até a entrega na sua porta.
                  </p>
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-pink-300"
              >
                <h2 className="text-3xl font-bold text-blue-900 mb-4">4. Aprove e pague</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Aprovando o orçamento, realize o pagamento seguro através da nossa plataforma.
                  Aceitamos diversos métodos de pagamento para sua conveniência, incluindo
                  cartões de crédito, transferências bancárias e métodos locais.
                </p>
                <div className="mt-6 p-4 bg-pink-50 rounded-lg">
                  <h3 className="font-bold text-pink-700 mb-2">Dica:</h3>
                  <p className="text-gray-700">
                    Seus dados de pagamento são protegidos com criptografia de alta segurança.
                  </p>
                </div>
              </motion.div>
            )}

            {currentStep === 5 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-400"
              >
                <h2 className="text-3xl font-bold text-blue-900 mb-4">5. Receba seu produto</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Relaxe e aguarde! Cuidaremos da compra, verificação, embalagem e envio do seu produto.
                  Você receberá atualizações em tempo real sobre o status da sua encomenda até a 
                  entrega final em seu endereço.
                </p>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">Dica:</h3>
                  <p className="text-gray-700">
                    Acompanhe sua entrega em tempo real através do nosso sistema de rastreamento.
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Illustration */}
          <div className="order-1 md:order-2 flex items-center justify-center">
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-md"
              >
                <svg className="w-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  <rect x="50" y="50" width="300" height="200" fill="#e6f7ff" rx="15" />
                  <circle cx="200" cy="150" r="70" fill="#1a365d" opacity="0.1" />
                  
                  {/* World Map Representation */}
                  <path d="M120,140 Q150,120 180,140 Q210,160 240,140 Q270,120 300,140" stroke="#3b82f6" strokeWidth="3" fill="none" />
                  
                  {/* Countries Dots */}
                  {countries.slice(0, 8).map((_, idx) => (
                    <motion.circle 
                      key={idx}
                      cx={120 + (idx * 25)} 
                      cy={140 + (idx % 2 === 0 ? -10 : 10)} 
                      r="4" 
                      fill="#3b82f6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 * idx, duration: 0.3 }}
                    />
                  ))}
                  
                  {/* Highlighted Selection */}
                  <motion.circle 
                    cx="180" 
                    cy="130" 
                    r="12" 
                    fill="#fef3c7" 
                    stroke="#3b82f6" 
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  />
                  
                  {/* User */}
                  <motion.g
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <circle cx="200" cy="220" r="15" fill="#f472b6" />
                    <path d="M190,220 L210,220" stroke="white" strokeWidth="2" />
                    <path d="M200,210 L200,230" stroke="white" strokeWidth="2" />
                  </motion.g>
                </svg>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-md"
              >
                <svg className="w-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  <rect x="50" y="40" width="300" height="220" fill="#f5f3ff" rx="15" />
                  
                  {/* Browser Window */}
                  <rect x="100" y="70" width="200" height="150" fill="white" stroke="#c4b5fd" strokeWidth="2" rx="5" />
                  <rect x="100" y="70" width="200" height="20" fill="#c4b5fd" rx="5 5 0 0" />
                  <circle cx="110" cy="80" r="3" fill="white" />
                  <circle cx="120" cy="80" r="3" fill="white" />
                  <circle cx="130" cy="80" r="3" fill="white" />
                  
                  {/* Product */}
                  <rect x="120" y="110" width="160" height="80" fill="#e0e7ff" rx="5" />
                  <rect x="140" y="140" width="120" height="30" fill="#818cf8" rx="3" />
                  
                  {/* Link Animation */}
                  <motion.path 
                    d="M300,150 C350,150 350,220 250,220" 
                    stroke="#c4b5fd" 
                    strokeWidth="3" 
                    strokeDasharray="5,5" 
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  
                  {/* Platform Container */}
                  <rect x="190" y="200" width="120" height="60" fill="#f472b6" fillOpacity="0.2" stroke="#f472b6" strokeWidth="2" rx="10" />
                  <motion.text x="225" y="235" fontFamily="Arial" fontSize="12" fill="#4a5568"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    Plataforma
                  </motion.text>
                </svg>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-md"
              >
                <svg className="w-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  <rect x="50" y="40" width="300" height="220" fill="#fffbeb" rx="15" />
                  
                  {/* Document */}
                  <motion.g
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <rect x="120" y="70" width="160" height="180" fill="white" stroke="#fbbf24" strokeWidth="2" rx="5" />
                    <rect x="120" y="70" width="160" height="30" fill="#fbbf24" fillOpacity="0.2" rx="5 5 0 0" />
                    <text x="160" y="90" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#92400e">Orçamento</text>
                    
                    {/* Lines of text */}
                    <rect x="135" y="115" width="130" height="8" rx="4" fill="#e5e7eb" />
                    <rect x="135" y="135" width="130" height="8" rx="4" fill="#e5e7eb" />
                    <rect x="135" y="155" width="130" height="8" rx="4" fill="#e5e7eb" />
                    <rect x="135" y="175" width="70" height="8" rx="4" fill="#e5e7eb" />
                    
                    {/* Price */}
                    <rect x="135" y="200" width="130" height="20" rx="4" fill="#fef3c7" />
                    <motion.text 
                      x="170" 
                      y="215" 
                      fontFamily="Arial" 
                      fontSize="14" 
                      fontWeight="bold" 
                      fill="#92400e"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      Total: R$ 350
                    </motion.text>
                  </motion.g>
                  
                  {/* Clock Animation */}
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <circle cx="310" cy="80" r="20" fill="#fef3c7" stroke="#fbbf24" strokeWidth="2" />
                    <line x1="310" y1="80" x2="310" y2="65" stroke="#92400e" strokeWidth="2" />
                    <line x1="310" y1="80" x2="320" y2="80" stroke="#92400e" strokeWidth="2" />
                  </motion.g>
                </svg>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-md"
              >
                <svg className="w-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  <rect x="50" y="40" width="300" height="220" fill="#fdf2f8" rx="15" />
                  
                  {/* Credit Card */}
                  <motion.g
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                  >
                    <rect x="120" y="100" width="160" height="100" rx="10" fill="#f472b6" />
                    <rect x="140" y="130" width="120" height="20" rx="3" fill="#fdf2f8" fillOpacity="0.7" />
                    <rect x="140" y="160" width="40" height="20" rx="3" fill="#fdf2f8" fillOpacity="0.7" />
                  </motion.g>
                  
                  {/* Check Mark Animation */}
                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <circle cx="300" cy="150" r="25" fill="#c7d2fe" />
                    <path d="M285,150 L295,160 L315,140" stroke="#4f46e5" strokeWidth="4" fill="none" />
                  </motion.g>
                  
                  {/* Security Icons */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                  >
                    <circle cx="100" cy="220" r="15" fill="#fdf2f8" stroke="#f472b6" strokeWidth="2" />
                    <path d="M100,215 L100,225 M95,220 L105,220" stroke="#f472b6" strokeWidth="2" />
                  </motion.g>
                </svg>
              </motion.div>
            )}

            {currentStep === 5 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-md"
              >
                <svg className="w-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  <rect x="50" y="40" width="300" height="220" fill="#e0f2fe" rx="15" />
                  
                  {/* Package */}
                  <motion.g
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <rect x="150" y="70" width="100" height="70" fill="#7dd3fc" rx="5" />
                    <rect x="170" y="80" width="60" height="50" fill="#0ea5e9" rx="3" />
                    <path d="M150,70 L200,50 L250,70" fill="#7dd3fc" stroke="#0ea5e9" strokeWidth="1" />
                  </motion.g>
                  
                  {/* Delivery Path */}
                  <motion.path 
                    d="M200,140 C200,180 150,200 110,200 C70,200 60,240 110,240" 
                    stroke="#0ea5e9" 
                    strokeWidth="3" 
                    strokeDasharray="7,7" 
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5 }}
                  />
                  
                  {/* Home */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                  >
                    <rect x="90" y="220" width="40" height="30" fill="#93c5fd" />
                    <path d="M80,220 L110,190 L140,220" fill="#3b82f6" stroke="#1e40af" strokeWidth="1" />
                    <rect x="105" y="230" width="10" height="20" fill="#1e40af" />
                  </motion.g>
                  
                  {/* Person */}
                  <motion.g
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                  >
                    <circle cx="160" cy="235" r="10" fill="#bae6fd" />
                    <path d="M160,245 L160,265" stroke="#bae6fd" strokeWidth="3" />
                    <path d="M145,255 L160,250 L175,255" stroke="#bae6fd" strokeWidth="3" fill="none" />
                  </motion.g>
                </svg>
              </motion.div>
            )}
          </div>
        </div>

        {/* Countries Section */}
        <section className="mt-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Cobertura Global</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nossa rede de escritórios cobre 17 países ao redor do mundo, facilitando suas 
              compras internacionais com qualidade e agilidade.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {countries.map((country, index) => (
              <motion.div
                key={country.code}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:bg-blue-50 transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-3">
                  <span className="text-xl">{country.code}</span>
                </div>
                <h3 className="font-bold text-blue-900">{country.localName}</h3>
                <p className="text-xs text-gray-500">{country.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Advantages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Por Que Escolher Nossos Serviços?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500"
            >
              <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Preços Transparentes</h3>
              <p className="text-gray-700">
                Sem taxas ocultas. Orçamentos detalhados com todos os custos incluídos desde a compra até a entrega.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-300"
            >
              <div className="bg-purple-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Agilidade</h3>
                            <p className="text-gray-700">
                Processo de compra e entrega otimizado para garantir que seus produtos cheguem o mais rápido possível.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-300"
            >
              <div className="bg-yellow-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Segurança</h3>
              <p className="text-gray-700">
                Transações seguras e proteção de dados garantidas com criptografia de ponta a ponta.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-900 py-12 rounded-xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Pronto para Começar?</h2>
            <p className="text-lg text-blue-100 mb-6">
              Cadastre-se agora e comece a aproveitar os benefícios de comprar em 17 países.
            </p>
            <Button 
              className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-3 px-6 rounded-lg"
              onClick={() => router.push(`/${currentLanguage}/auth`)}
            >
              Criar Conta
            </Button>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default ComoFunciona;