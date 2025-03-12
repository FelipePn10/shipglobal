"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Globe, CreditCard, TruckIcon, CheckCircle } from 'lucide-react';

const PersonalShopperPage = () => {
  const [activeTab, setActiveTab] = useState('como-funciona');

const [selectedPlan, setSelectedPlan] = useState('premium');
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="md:flex md:items-center md:space-x-8">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1 
                initial={{ y: 50, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight"
              >
                Personal Shopper Internacional
              </motion.h1>
              <motion.p 
                initial={{ y: 50, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-xl text-gray-600"
              >
                Compre o que quiser, de onde estiver. Nós cuidamos de tudo para você.
              </motion.p>
              <motion.div 
                initial={{ y: 50, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8"
              >
                <a href="#solicitar" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                  Solicitar Agora
                </a>
                <a href="#como-funciona" className="ml-4 inline-block text-blue-600 hover:text-blue-800 font-medium py-3 px-6 rounded-lg border border-blue-600 hover:border-blue-800 transition-all duration-300">
                  Como Funciona
                </a>
              </motion.div>
            </div>
            <motion.div 
              initial={{ x: 100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0], 
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 8, 
                    ease: "easeInOut" 
                  }}
                  className="rounded-2xl shadow-2xl overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-full h-64 md:h-80 flex items-center justify-center p-8">
                    <ShoppingBag size={100} className="text-white" />
                    <Globe size={60} className="text-white absolute right-16 top-12" />
                    <CreditCard size={60} className="text-white absolute left-16 bottom-12" />
                  </div>
                </motion.div>
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 rounded-full p-4 shadow-lg">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Globe size={48} className="text-blue-800" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating countries */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0], 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-6 hidden md:block"
        >
          <div className="bg-white p-2 rounded-full shadow-md">
            <span className="text-blue-600 font-bold">🇧🇷</span>
          </div>
        </motion.div>
        <motion.div 
          animate={{ 
            y: [0, -10, 0], 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-12 hidden md:block"
        >
          <div className="bg-white p-2 rounded-full shadow-md">
            <span className="text-blue-600 font-bold">🇺🇸</span>
          </div>
        </motion.div>
        <motion.div 
          animate={{ 
            y: [0, -15, 0], 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6, 
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-20 left-24 hidden md:block"
        >
          <div className="bg-white p-2 rounded-full shadow-md">
            <span className="text-blue-600 font-bold">🇯🇵</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow" id="como-funciona">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-4 overflow-x-auto">
            <button 
              onClick={() => setActiveTab('como-funciona')}
              className={`py-4 px-4 font-medium text-sm text-gray-800 border-b-2 transition-all whitespace-nowrap ${activeTab === 'como-funciona' ? 'border-blue-600 text-blue-600' : 'border-transparent hover:text-blue-600'}`}
            >
              Como Funciona
            </button>
            <button 
              onClick={() => setActiveTab('vantagens')}
              className={`py-4 px-4 font-medium text-sm text-gray-800 border-b-2 transition-all whitespace-nowrap ${activeTab === 'vantagens' ? 'border-blue-600 text-blue-600' : 'border-transparent hover:text-blue-600'}`}
            >
              Vantagens
            </button>
            <button 
              onClick={() => setActiveTab('paises')}
              className={`py-4 px-4 font-medium text-sm text-gray-800 border-b-2 transition-all whitespace-nowrap ${activeTab === 'paises' ? 'border-blue-600 text-blue-600' : 'border-transparent hover:text-blue-600'}`}
            >
              Países Atendidos
            </button>
            <button 
              onClick={() => setActiveTab('precos')}
              className={`py-4 px-4 font-medium text-sm text-gray-800 border-b-2 transition-all whitespace-nowrap ${activeTab === 'precos' ? 'border-blue-600 text-blue-600' : 'border-transparent hover:text-blue-600'}`}
            >
              Preços
            </button>
            <button 
              onClick={() => setActiveTab('faq')}
              className={`py-4 px-4 font-medium text-sm text-gray-800 border-b-2 transition-all whitespace-nowrap ${activeTab === 'faq' ? 'border-blue-600 text-blue-600' : 'border-transparent hover:text-blue-600'}`}
            >
              Perguntas Frequentes
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'como-funciona' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Como funciona nosso Personal Shopper</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Solicite seu pedido</h3>
                <p className="text-gray-600">Cadastre-se em nossa plataforma, acesse o dashboard para iniciar suas compras no exterior e selecione a opção 'Compre com Personal Shopper' para realizar suas compras sem cartão de crédito internacional de forma segura e rápida.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Realize o pagamento</h3>
                <p className="text-gray-600">Após realizar seu pedido atráves do 'Personal Shopper', realize o pagamento e pronto! Agora, é só aguardar a chegada dos produtos ao nosso armazém. Com o nosso serviço de Personal Shopper, tudo fica mais simples.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Hora de enviar</h3>
                <p className="text-gray-600">Assim que seu pedido chegar ao nosso armazém, você poderá enviá-lo para qualquer destino. Nós cuidamos de todo o processo de envio internacional para você</p>
              </motion.div>
            </div>
            
            <div className="mt-12">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Por que escolher nosso Personal Shopper?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Acesso a produtos exclusivos de 17 países diferentes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Economize com as melhores taxas de compras internacionais</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Profissionais experientes que verificam a qualidade dos produtos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Acompanhamento em tempo real de todo o processo</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'vantagens' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Vantagens do nosso Personal Shopper</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg p-6 flex"
              >
                <div className="mr-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <ShoppingBag className="text-blue-600" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Acesso Global</h3>
                  <p className="text-gray-600">Compre produtos exclusivos de lojas internacionais que não entregam diretamente para o Brasil.</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg p-6 flex"
              >
                <div className="mr-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <CreditCard className="text-purple-600" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Economia</h3>
                  <p className="text-gray-600">Economize com nossas taxas competitivas e consolidação de pacotes de diferentes lojas.</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg p-6 flex"
              >
                <div className="mr-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Segurança</h3>
                  <p className="text-gray-600">Verificamos cada produto antes do envio para garantir a qualidade e integridade.</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg p-6 flex"
              >
                <div className="mr-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <TruckIcon className="text-orange-600" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Logística Simplificada</h3>
                  <p className="text-gray-600">Cuidamos de todo o processo de importação, documentação e desembaraço aduaneiro.</p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-12 bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-center mb-6">O que nossos clientes dizem</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow p-5"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">"Consegui comprar produtos de lojas americanas que nunca enviariam para o Brasil. O processo foi muito simples e rápido!"</p>
                  <p className="font-medium">Ana C., São Paulo</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow p-5"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">"Economizei muito consolidando várias compras dos EUA. O atendimento foi excelente e tudo chegou perfeito."</p>
                  <p className="font-medium">Ricardo M., Rio de Janeiro</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow p-5"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">"Já fiz várias compras do Japão e Europa. A equipe é super atenciosa e o rastreamento é detalhado. Recomendo!"</p>
                  <p className="font-medium">Fernanda L., Curitiba</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'paises' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Países Atendidos</h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Atuamos em 17 países ao redor do mundo, conectando você aos melhores produtos internacionais com facilidade e segurança.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow p-4 text-center">
                <span className="text-4xl">🇺🇸</span>
                <p className="mt-2 font-medium">Estados Unidos</p>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow p-4 text-center">
                <span className="text-4xl">🇯🇵</span>
                <p className="mt-2 font-medium">Japão</p>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow p-4 text-center">
                <span className="text-4xl">🇬🇧</span>
                <p className="mt-2 font-medium">Reino Unido</p>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow p-4 text-center">
                <span className="text-4xl">🇩🇪</span>
                <p className="mt-2 font-medium">Alemanha</p>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow p-4 text-center">
                <span className="text-4xl">🇫🇷</span>
                <p className="mt-2 font-medium">França</p>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow p-4 text-center">
                <span className="text-4xl">🇨🇦</span>
                <p className="mt-2 font-medium">Canadá</p>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow p-4 text-center">
                <span className="text-4xl">🇮🇹</span>
                <p className="mt-2 font-medium">Itália</p>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow p-4 text-center">
                <span className="text-4xl">🇪🇸</span>
                <p className="mt-2 font-medium">Espanha</p>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow p-4 text-center">
                <span className="text-4xl">🇦🇺</span>
                <p className="mt-2 font-medium">Austrália</p>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow p-4 text-center">
                <span className="text-4xl">🇰🇷</span>
                <p className="mt-2 font-medium">Coreia do Sul</p>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow p-4 text-center">
                <span className="text-4xl">🇸🇬</span>
                <p className="mt-2 font-medium">Singapura</p>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow p-4 text-center">
                <span className="text-4xl">🌎</span>
                <p className="mt-2 font-medium">+ 6 países</p>
              </motion.div>
            </div>
            
            <div className="mt-12 bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Informações importantes sobre compras internacionais</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <CheckCircle className="text-blue-600" size={20} />
                  </div>
                  <p>Cada país possui regulamentações específicas para exportação e importação. Nossa equipe conhece essas regras e garante que sua compra esteja em conformidade.</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <CheckCircle className="text-blue-600" size={20} />
                  </div>
                  <p>Oferecemos orientação sobre impostos e taxas alfandegárias aplicáveis a cada tipo de produto e país de origem.</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <CheckCircle className="text-blue-600" size={20} />
                  </div>
                  <p>Temos parceiros logísticos em cada um dos 17 países para garantir o melhor prazo e condição de entrega.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'precos' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Preços e Taxas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-blue-500 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Plano Básico</h3>
                  <p className="text-white opacity-90">Para compras simples e pontuais</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <span className="text-3xl font-bold">10%</span>
                    <span className="text-gray-600 ml-2">do valor da compra</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      <span>Taxa de serviço de 10%</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      <span>Seguro básico incluso</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      <span>Fotos do produto na chegada</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      <span>Suporte por e-mail</span>
                    </li>
                  </ul>
                  <a href="#solicitar" className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300">
                    Selecionar
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-blue-500 relative -mt-4"
              >
                <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 font-bold px-4 py-1 rounded-bl-lg">
                  POPULAR
                </div>
                <div className="bg-blue-600 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Plano Premium</h3>
                  <p className="text-white opacity-90">Para compras frequentes</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <span className="text-3xl font-bold">8%</span>
                    <span className="text-gray-600 ml-2">do valor da compra</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      <span>Taxa de serviço reduzida de 8%</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      <span>Seguro premium incluso</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      <span>Fotos detalhadas do produto</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      <span>Suporte prioritário</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      <span>Consolidação de pacotes grátis</span>
                    </li>
                  </ul>
                  <a href="#solicitar" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300">
                    Selecionar
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-blue-800 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Plano Empresarial</h3>
                  <p className="text-white opacity-90">Para grandes volumes</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <span className="text-3xl font-bold">6%</span>
                    <span className="text-gray-600 ml-2">do valor da compra</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      <span>Taxa de serviço mínima de 6%</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      <span>Seguro premium plus incluso</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      <span>Gerente de conta dedicado</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      <span>Condições especiais de envio</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      <span>Descontos progressivos por volume</span>
                    </li>
                  </ul>
                  <a href="#solicitar" className="block text-center bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded transition-colors duration-300">
                    Fale Conosco
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-12 bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Informações Adicionais sobre Taxas</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-5 shadow-md">
                  <h4 className="font-semibold text-lg mb-2 text-blue-800">Taxas de Importação</h4>
                  <p className="text-gray-600">As taxas de importação são cobradas pelo governo brasileiro e variam de acordo com o tipo de produto. Em nosso orçamento, incluímos uma estimativa dessas taxas para que você não tenha surpresas.</p>
                </div>
                
                <div className="bg-white rounded-lg p-5 shadow-md">
                  <h4 className="font-semibold text-lg mb-2 text-blue-800">Frete Internacional</h4>
                  <p className="text-gray-600">O frete internacional é calculado com base no peso e dimensões do pacote. Oferecemos diferentes opções de envio para atender às suas necessidades de prazo e orçamento.</p>
                </div>
                
                <div className="bg-white rounded-lg p-5 shadow-md">
                  <h4 className="font-semibold text-lg mb-2 text-blue-800">Consolidação de Pacotes</h4>
                  <p className="text-gray-600">Economize combinando vários produtos em um único envio. Este serviço está incluso no plano Premium e Empresarial, e disponível como adicional no plano Básico.</p>
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-blue-600 text-white rounded-lg p-5 shadow-lg"
                >
                  <h4 className="font-semibold text-lg mb-2">Orçamento Transparente</h4>
                  <p className="opacity-90">Nosso compromisso é a transparência. Você receberá um orçamento detalhado com todos os custos antes de confirmar sua compra. Sem surpresas ou taxas ocultas.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'faq' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Perguntas Frequentes</h2>
            
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Quanto tempo leva para receber meu produto?</h3>
                  <p className="text-gray-600">O prazo de entrega varia de acordo com o país de origem, o tipo de produto e o método de envio escolhido. Em média, o processo completo leva entre 15 e 30 dias, sendo:</p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-2">
                        <span className="text-blue-600 text-sm font-medium">1</span>
                      </div>
                      <span>3-5 dias para processamento do pedido e compra</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-2">
                        <span className="text-blue-600 text-sm font-medium">2</span>
                      </div>
                      <span>2-7 dias para recebimento no nosso centro de distribuição</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-2">
                        <span className="text-blue-600 text-sm font-medium">3</span>
                      </div>
                      <span>10-15 dias para envio internacional e desembaraço aduaneiro</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Como funciona o pagamento?</h3>
                  <p className="text-gray-600">Oferecemos diversas opções de pagamento para sua conveniência:</p>
                  <ul className="mt-3 space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span>Cartão de crédito (parcelamento em até 12x)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span>Boleto bancário (pagamento à vista com 5% de desconto)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span>Transferência bancária (PIX com 3% de desconto)</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-gray-600">O pagamento é feito em duas etapas: 50% no momento da aprovação do orçamento e 50% quando o produto chegar ao nosso centro de distribuição.</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">E se o produto chegar com defeito?</h3>
                  <p className="text-gray-600">Todos os produtos passam por uma inspeção de qualidade em nosso centro de distribuição antes do envio internacional. Caso identifiquemos algum problema, entraremos em contato para discutir as opções:</p>
                  <ul className="mt-3 space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span>Solicitar troca ou devolução junto à loja</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span>Acionar o seguro incluído em todos os nossos planos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span>Proceder com o envio mesmo assim (sob sua autorização)</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Posso comprar de qualquer loja?</h3>
                  <p className="text-gray-600">Sim, podemos realizar compras de praticamente qualquer loja online dos países onde atuamos. No entanto, existem algumas limitações:</p>
                  <ul className="mt-3 space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span>Não compramos produtos ilegais ou proibidos para importação</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span>Alguns produtos têm restrições alfandegárias (alimentos, medicamentos, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span>Produtos muito frágeis podem exigir embalagens especiais (custo adicional)</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-gray-600">Se tiver dúvidas sobre um produto específico, entre em contato conosco antes de solicitar o orçamento.</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Como rastreio meu pedido?</h3>
                  <p className="text-gray-600">Oferecemos um sistema completo de rastreamento com atualizações em tempo real:</p>
                  <ul className="mt-3 space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span>Painel exclusivo para acompanhar cada etapa do processo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span>Notificações por e-mail e WhatsApp sobre atualizações importantes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span>Código de rastreio internacional assim que o pacote for enviado</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-12">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-blue-100 border border-blue-200 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Ainda tem dúvidas?</h3>
                <p className="text-gray-700 mb-4">Nossa equipe está disponível para responder todas as suas perguntas e ajudar em todo o processo de compra internacional.</p>
                <div className="flex flex-wrap gap-4">
                  <a href="#contato" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300">
                    <span className="mr-2">💬</span> Chat ao Vivo
                  </a>
                  <a href="mailto:contato@personalshopper.com" className="inline-flex items-center bg-white hover:bg-gray-50 text-blue-600 font-medium py-2 px-4 rounded border border-blue-300 transition-colors duration-300">
                    <span className="mr-2">✉️</span> E-mail
                  </a>
                  <a href="https://wa.me/551199999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300">
                    <span className="mr-2">📱</span> WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 py-16" id="solicitar">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-blue-900 p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Solicite seu orçamento</h2>
                <p className="mb-6 opacity-90">Quer importar um produto, mas não tem cartão de crédito internacional? Preencha o formulário ao lado com os detalhes do item desejado ou cadastre-se em nossa plataforma para realizar a compra de forma rápida e fácil através do nosso dashboard. Nossa equipe analisará sua solicitação e, em até 24 horas, enviará um orçamento personalizado.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <CheckCircle className="text-yellow-300" size={20} />
                    </div>
                    <p className="opacity-90">Orçamento gratuito e sem compromisso</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <CheckCircle className="text-yellow-300" size={20} />
                    </div>
                    <p className="opacity-90">Atendimento personalizado para cada solicitação especial</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <CheckCircle className="text-yellow-300" size={20} />
                    </div>
                    <p className="opacity-90">Análise de viabilidade e alternativas para você economizar</p>
                  </div>
                </div>
                
                <div className="mt-12">
                  <motion.div 
                    animate={{ 
                      y: [0, -10, 0], 
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 5, 
                      ease: "easeInOut" 
                    }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <ShoppingBag className="text-blue-600" size={24} />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">Produto especial em mente?</p>
                        <p className="text-sm opacity-80">Nossa equipe pode ajudar com itens raros!</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div className="md:w-3/5 p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Seu Nome</label>
                      <input type="text" id="nome" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Nome completo" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                      <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="seu@email.com" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone (WhatsApp)</label>
                      <input type="tel" id="telefone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="(00) 00000-0000" />
                    </div>
                    
                    <div>
                      <label htmlFor="pais" className="block text-sm font-medium text-gray-700 mb-1">País de Origem do Produto</label>
                      <select id="pais" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                        <option value="">Selecione um país</option>
                        <option value="us">Estados Unidos</option>
                        <option value="jp">Japão</option>
                        <option value="uk">Reino Unido</option>
                        <option value="de">Alemanha</option>
                        <option value="fr">França</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-1">Link do Produto (opcional)</label>
                    <input type="url" id="link" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="https://" />
                  </div>
                  
                  <div>
                    <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">Descrição do Produto</label>
                    <textarea id="descricao" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Descreva o produto com o máximo de detalhes (marca, modelo, tamanho, cor, etc.)"></textarea>
                  </div>
                  
                  <div>
  <label className="block text-sm font-medium text-gray-700 mb-3">Plano de Interesse</label>
  <div className="space-y-3">
    <label className="flex items-center">
      <input
        type="radio"
        name="plano"
        value="basico"
        className="h-5 w-5 text-blue-600 focus:ring-blue-500"
        checked={selectedPlan === 'basico'}
        onChange={() => setSelectedPlan('basico')}
      />
      <span className="ml-2 text-gray-700">Plano Básico (10%)</span>
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="plano"
        value="premium"
        className="h-5 w-5 text-blue-600 focus:ring-blue-500"
        checked={selectedPlan === 'premium'}
        onChange={() => setSelectedPlan('premium')}
      />
      <span className="ml-2 text-gray-700">Plano Premium (8%)</span>
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="plano"
        value="empresarial"
        className="h-5 w-5 text-blue-600 focus:ring-blue-500"
        checked={selectedPlan === 'empresarial'}
        onChange={() => setSelectedPlan('empresarial')}
      />
      <span className="ml-2 text-gray-700">Plano Empresarial (6%)</span>
    </label>
  </div>
</div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
                  >
                    Solicitar Orçamento Gratuito
                  </motion.button>
                  
                  <p className="text-sm text-gray-500 text-center">Ao enviar, você concorda com nossa política de privacidade e termos de uso.</p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Floating Cards */}
      <div className="relative bg-blue-50 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">O que nossos clientes dizem</h2>
            <p className="mt-4 text-xl text-gray-600">Ajudamos milhares de pessoas a comprar produtos internacionais</p>
          </motion.div>
          
          <div className="flex flex-wrap -mx-4 justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="px-4 w-full md:w-1/3 mb-8"
            >
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg p-6 h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">Mariana S.</h3>
                    <p className="text-gray-500">São Paulo, SP</p>
                  </div>
                  <div className="flex text-yellow-400">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"Consegui comprar o console de videogame que estava esgotado no Brasil. O preço ficou mais barato mesmo com as taxas de importação e o atendimento foi impecável."</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-blue-600 font-medium">Compra dos EUA</span>
                  <span className="text-gray-500 text-sm">há 2 semanas</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="px-4 w-full md:w-1/3 mb-8"
            >
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg p-6 h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">Carlos M.</h3>
                    <p className="text-gray-500">Rio de Janeiro, RJ</p>
                  </div>
                  <div className="flex text-yellow-400">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"Minha experiência foi incrível! Comprei diversos itens de colecionador do Japão que seriam impossíveis de encontrar aqui. A equipe cuidou de tudo, desde a negociação até a entrega na minha porta."</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-blue-600 font-medium">Compra do Japão</span>
                  <span className="text-gray-500 text-sm">há 1 mês</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="px-4 w-full md:w-1/3 mb-8"
            >
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg p-6 h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">Fernanda B.</h3>
                    <p className="text-gray-500">Belo Horizonte, MG</p>
                  </div>
                  <div className="flex text-yellow-400">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"Já fiz mais de 10 compras com o Personal Shopper e sempre fico impressionada com a qualidade do serviço. As roupas e cosméticos que compro da Europa chegam bem embalados e em perfeito estado."</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-blue-600 font-medium">Compras da França</span>
                  <span className="text-gray-500 text-sm">há 3 meses</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="text-center mt-8">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#avaliacoes"
              className="inline-block bg-white hover:bg-gray-50 text-blue-600 font-medium py-2 px-6 rounded-lg border border-blue-200 shadow-sm transition-all duration-300"
            >
              Ver todas as avaliações
            </motion.a>
          </div>
        </div>
        
        {/* Floating elements in background */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0], 
            rotate: [0, 5, -5, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 hidden md:block"
        >
          <div className="bg-white p-3 rounded-full shadow-lg">
            <span className="text-blue-600 font-bold text-2xl">⭐</span>
          </div>
        </motion.div>
        
        <motion.div 
          animate={{ 
            y: [0, -15, 0], 
            rotate: [0, -5, 5, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6, 
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-20 right-10 hidden md:block"
        >
          <div className="bg-white p-3 rounded-full shadow-lg">
            <span className="text-blue-600 font-bold text-2xl">💎</span>
          </div>
        </motion.div>
        
        <motion.div 
          animate={{ 
            y: [0, -10, 0], 
            rotate: [0, 3, -3, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 left-1/4 hidden md:block"
        >
          <div className="bg-white p-3 rounded-full shadow-lg">
            <span className="text-blue-600 font-bold text-2xl">🚀</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PersonalShopperPage;