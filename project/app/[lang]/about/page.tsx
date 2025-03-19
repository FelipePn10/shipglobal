"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRightCircle, Globe, Package, CreditCard, TrendingUp, MapPin, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const CompaniaRedirecionamento = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCountry, setActiveCountry] = useState(0);
  const [animate, setAnimate] = useState(false);

  const countries = [
    "Brasil", "Estados Unidos", "Reino Unido", "Canadá", "Alemanha", 
    "França", "Espanha", "Itália", "Japão", "Austrália", 
    "China", "Paraguay", "Turquia", "Bélgica", "Portugal", 
    "Emirados Árabes", "Índia"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveCountry(prev => (prev + 1) % countries.length);
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { 
      icon: <Globe className="text-blue-600" />, 
      title: "Escolha sua loja internacional", 
      description: "Acesse qualquer loja internacional de sua preferência" 
    },
    { 
      icon: <Package className="text-purple-400" />, 
      title: "Receba em nosso endereço", 
      description: "Enviamos endereços locais em 17 países diferentes" 
    },
    { 
      icon: <TrendingUp className="text-pink-500" />, 
      title: "Nós redirecionamos", 
      description: "Consolidamos seus pacotes e enviamos para seu endereço" 
    },
    { 
      icon: <CheckCircle className="text-yellow-500" />, 
      title: "Receba em casa", 
      description: "Receba suas compras internacionais com segurança e rapidez" 
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
                Suas compras internacionais sem fronteiras
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Somos especialistas em redirecionamento de compras internacionais com presença em 17 países.
                e outros países ao redor do mundo.
              </p>
              <div className="flex space-x-4">
                <Link href={"/auth"}>
                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg flex items-center transition-all duration-300 transform hover:-translate-y-1">
                  Começar agora
                  <ArrowRightCircle className="ml-2 h-5 w-5" />
                </button>
                </Link>
                <Link href={"/explanation"}>
                <button className="bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  Saber mais
                </button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                {/* Animated World Map Illustration */}
                <div className="w-full h-96 bg-blue-50 rounded-lg shadow-xl overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-32 h-32 text-blue-400 animate-pulse" />
                  </div>
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute w-4 h-4 rounded-full bg-yellow-400 animate-ping"
                        style={{
                          top: `${20 + Math.random() * 60}%`,
                          left: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: `${2 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative w-40 h-40">
                      <div className="absolute inset-0 border-4 border-dashed border-blue-300 rounded-full animate-spin" style={{ animationDuration: '15s' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">Como Funciona</h2>
            <p className="text-lg text-gray-600 mb-12">Processo simples em 4 passos para suas compras internacionais</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-800 text-center mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Coverage */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-500 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Cobertura Global</h2>
            <p className="text-lg opacity-90">Presente em 17 países para melhor atender você</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 text-center">
            {countries.map((country, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300"
              >
                <MapPin className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm md:text-base">{country}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">Por que escolher nosso serviço?</h2>
            <p className="text-lg text-gray-600">Vantagens que fazem a diferença</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-300 rounded-full flex items-center justify-center text-white mb-4">
                <CreditCard className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Economia Garantida</h3>
              <p className="text-gray-600">Economize até 70% em suas compras internacionais com nossos serviços de consolidação e redirecionamento.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-pink-50 p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-pink-300 rounded-full flex items-center justify-center text-white mb-4">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Consolidação Inteligente</h3>
              <p className="text-gray-600">Combinamos múltiplos pacotes em um único envio, reduzindo significativamente os custos de frete.</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-blue-300 rounded-full flex items-center justify-center text-white mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Acesso Global</h3>
              <p className="text-gray-600">Compre em lojas que não enviam para seu país. Nós fornecemos endereços locais em 17 países.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Pronto para suas compras internacionais?</h2>
          <p className="text-xl mb-8">Cadastre-se hoje e ganhe 10% de desconto no seu primeiro redirecionamento</p>
         <Link href={"/auth"}>
         <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Criar minha conta
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default CompaniaRedirecionamento;