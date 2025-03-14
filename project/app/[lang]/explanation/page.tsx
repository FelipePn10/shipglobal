"use client";

import React, { useState } from 'react';
import { 
  Globe, 
  Package, 
  Truck, 
  ShoppingCart, 
  MapPin, 
  CheckCircle, 
  Shield, 
  Clock, 
  Headphones, 
  CreditCard,
  ChevronDown
} from 'lucide-react';

const HowItWorksPage = () => {
  const [activeTab, setActiveTab] = useState('process');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Paises disponíveis para compras
  const countries = [
    "Brasil", "Estados Unidos", "China", "Reino Unido", "Alemanha", 
    "Japão", "Canadá", "Austrália", "França", "Itália", 
    "Espanha", "México", "Singapura", "Coreia do Sul", "Emirados Árabes", 
    "Hong Kong", "Índia"
  ];

  // Toggle FAQ item
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ items
  const faqItems = [
    {
      question: "Como faço para criar uma conta na ShipGlobal?",
      answer: "Basta acessar nossa página inicial, clicar em 'Criar Conta', preencher seus dados pessoais e confirmar seu e-mail. Em minutos você terá acesso a endereços de entrega em 17 países."
    },
    {
      question: "Quanto tempo leva para receber meus produtos?",
      answer: "O prazo varia de acordo com o país de origem e destino. Após recebermos seus produtos em nossos centros, o envio internacional geralmente leva de 7 a 21 dias úteis, dependendo da modalidade escolhida."
    },
    {
      question: "Que tipos de produtos posso comprar?",
      answer: "Você pode comprar praticamente qualquer produto legal para importação. Algumas restrições se aplicam a itens como medicamentos, alimentos perecíveis e produtos controlados. Consulte nossa política de itens proibidos para mais detalhes."
    },
    {
      question: "Como funciona a tributação e taxas alfandegárias?",
      answer: "Impostos e taxas alfandegárias são responsabilidade do cliente. A ShipGlobal oferece estimativas de impostos antes da finalização do envio e pode auxiliar com o processo de desembaraço aduaneiro mediante taxa adicional."
    },
    {
      question: "Posso rastrear meu pedido?",
      answer: "Sim, oferecemos rastreamento completo e em tempo real para todos os envios. Você receberá atualizações por e-mail e também poderá acompanhar todo o processo pela sua área de cliente no site ou aplicativo."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Mais Clean */}
      <div className="relative overflow-hidden bg-blue-600 py-16">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-yellow-400 -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-purple-500 translate-x-24 translate-y-24"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-pink-400 -translate-x-24 -translate-y-24"></div>
        </div>
        <div className="mt-16 -mb-10 container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Como Funciona a ShipGlobal</h1>
            <p className="text-xl text-white/90 mb-8">
              Compre em 17 países e receba em qualquer lugar do mundo com um processo simples e seguro.
            </p>
            <div className="inline-block bg-white p-1 rounded-full">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full transition duration-300">
                Comece Agora
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-4 mt-8">
        <div className="flex justify-center border-b border-gray-200">
          <button 
            onClick={() => setActiveTab('process')}
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'process' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
          >
            Processo
          </button>
          <button 
            onClick={() => setActiveTab('countries')}
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'countries' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
          >
            Países Disponíveis
          </button>
          <button 
            onClick={() => setActiveTab('benefits')}
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'benefits' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
          >
            Vantagens
          </button>
          <button 
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'faq' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
          >
            FAQ
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 py-12">
        {/* O Processo */}
        {activeTab === 'process' && (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Como Enviamos Suas Compras</h2>
            
            {/* Process Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
              
              {/* Steps */}
              <div className="space-y-20 relative">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 text-center md:text-right mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">Cadastro e Endereços</h3>
                    <p className="text-gray-600">Após criar sua conta, você recebe endereços exclusivos em todos os 17 países disponíveis. Não há nenhuma taxa para manter esses endereços ativos.</p>
                  </div>
                  <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-6 md:mb-0">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-center md:text-left hidden md:block">
                    {/* Empty placeholder for layout */}
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 text-center md:text-right hidden md:block">
                    {/* Empty placeholder for layout */}
                  </div>
                  <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mb-6 md:mb-0">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-purple-600 mb-2">Compras Internacionais</h3>
                    <p className="text-gray-600">Compre em qualquer loja online nos países disponíveis e use o endereço fornecido pela ShipGlobal como seu endereço de entrega.</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 text-center md:text-right mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-pink-500 mb-2">Recebimento e Processamento</h3>
                    <p className="text-gray-600">Recebemos seus produtos em nossos centros de distribuição, verificamos o conteúdo e condições, e notificamos você sobre a chegada.</p>
                  </div>
                  <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center mb-6 md:mb-0">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-center md:text-left hidden md:block">
                    {/* Empty placeholder for layout */}
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 text-center md:text-right hidden md:block">
                    {/* Empty placeholder for layout */}
                  </div>
                  <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mb-6 md:mb-0">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-yellow-600 mb-2">Pagamento de Taxas</h3>
                    <p className="text-gray-600">Você recebe a cotação do frete internacional e demais taxas aplicáveis. Após o pagamento, preparamos o envio para seu endereço final.</p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 text-center md:text-right mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">Envio Internacional</h3>
                    <p className="text-gray-600">Enviamos seu pacote para qualquer lugar do mundo através de parceiros logísticos confiáveis, com rastreamento completo durante todo o trajeto.</p>
                  </div>
                  <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-6 md:mb-0">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-center md:text-left hidden md:block">
                    {/* Empty placeholder for layout */}
                  </div>
                </div>
                
                {/* Step 6 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 text-center md:text-right hidden md:block">
                    {/* Empty placeholder for layout */}
                  </div>
                  <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-6 md:mb-0">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Entrega no Destino</h3>
                    <p className="text-gray-600">Você recebe seu pacote diretamente em seu endereço final, com toda a documentação necessária para importação.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Países Disponíveis */}
        {activeTab === 'countries' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Compre em 17 Países</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {countries.map((country, index) => (
                <div key={index} className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="mr-4 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-800 font-medium">{country}</span>
                </div>
              ))}
                          </div>
          </div>
        )}

        {/* Vantagens */}
        {activeTab === 'benefits' && (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Vantagens de Usar a ShipGlobal</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefício 1 */}
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Segurança Garantida</h3>
                <p className="text-gray-600">Todos os pacotes são verificados e segurados contra danos ou perdas durante o transporte.</p>
              </div>
              
              {/* Benefício 2 */}
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">Proteção de Dados</h3>
                <p className="text-gray-600">Seus dados pessoais e de pagamento são protegidos com criptografia de última geração.</p>
              </div>
              
              {/* Benefício 3 */}
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-pink-600 mb-2">Entrega Rápida</h3>
                <p className="text-gray-600">Processamos e enviamos seus pacotes em até 24 horas após a chegada em nossos centros.</p>
              </div>
              
              {/* Benefício 4 */}
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-yellow-600 mb-2">Suporte 24/7</h3>
                <p className="text-gray-600">Nossa equipe de suporte está disponível 24 horas por dia, 7 dias por semana para ajudar.</p>
              </div>
              
              {/* Benefício 5 */}
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-2">Pagamento Facilitado</h3>
                <p className="text-gray-600">Aceitamos múltiplas formas de pagamento, incluindo cartões de crédito, PayPal e criptomoedas.</p>
              </div>
              
              {/* Benefício 6 */}
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Cobertura Global</h3>
                <p className="text-gray-600">Entregamos em mais de 200 países, com opções de frete econômico e expresso.</p>
              </div>
            </div>
          </div>
        )}

        {/* FAQ */}
        {activeTab === 'faq' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Perguntas Frequentes</h2>
            
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                    <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform ${expandedFaq === index ? 'transform rotate-180' : ''}`} />
                  </button>
                  {expandedFaq === index && (
                    <div className="p-6 pt-0">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HowItWorksPage;