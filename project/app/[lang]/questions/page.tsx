"use client";

import React, { useState } from 'react';
import { ChevronDown, Globe, Package, CreditCard, ShoppingBag, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Como funciona o redirecionamento de compras?",
      answer: "Nosso serviço de redirecionamento funciona em 3 passos simples: 1) Você faz suas compras em lojas internacionais e usa nosso endereço para entrega; 2) Recebemos seus pacotes em nosso centro de distribuição; 3) Consolidamos suas compras e enviamos para seu endereço em seu país. Atuamos em 16 países para garantir que você possa comprar de qualquer lugar do mundo.",
      icon: <Globe className="text-blue-500" size={24} />
    },
    {
      question: "Quais países são atendidos pelo serviço?",
      answer: "Atualmente, oferecemos serviços de redirecionamento para 16 países ao redor do mundo",
      icon: <Globe className="text-purple-400" size={24} />
    },
    {
      question: "Quanto tempo leva para receber meus produtos?",
      answer: "O tempo de entrega varia dependendo do país de destino e do método de envio escolhido. Normalmente, o prazo é de 7 a 21 dias úteis após a consolidação dos pacotes em nosso centro de distribuição. Oferecemos opções expressas para entregas mais rápidas com custo adicional.",
      icon: <Package className="text-pink-400" size={24} />
    },
    {
      question: "Como faço para rastrear meu pacote?",
      answer: "Todos os envios incluem um código de rastreamento que enviamos por email assim que seu pacote é despachado. Você pode acompanhar em tempo real o status da entrega através da nossa plataforma online ou aplicativo móvel.",
      icon: <Package className="text-blue-500" size={24} />
    },
    {
      question: "Quais são as taxas e custos do serviço?",
      answer: "Nossa estrutura de preços inclui uma taxa base de serviço, mais o custo de envio calculado com base no peso e dimensões do pacote. Oferecemos pacotes de assinatura com descontos para clientes frequentes. Taxas de importação e impostos são responsabilidade do cliente e variam conforme as leis locais de cada país.",
      icon: <CreditCard className="text-yellow-400" size={24} />
    },
    {
      question: "O que acontece se meu produto chegar danificado?",
      answer: "Todos os pacotes são cuidadosamente inspecionados antes do envio. Caso receba um produto danificado, entre em contato com nosso suporte ao cliente em até 48 horas após o recebimento com fotos do produto e da embalagem. Nossa equipe analisará o caso e oferecerá a melhor solução, que pode incluir reembolso parcial ou total.",
      icon: <ShoppingBag className="text-purple-400" size={24} />
    },
    {
      question: "Posso consolidar vários pacotes em um único envio?",
      answer: "Sim! Uma das principais vantagens do nosso serviço é a consolidação de pacotes. Você pode fazer compras em diferentes lojas e nós reunimos tudo em um único pacote para envio, economizando significativamente em custos de frete internacional.",
      icon: <ShoppingBag className="text-pink-400" size={24} />
    },
    {
      question: "Como entro em contato com o suporte?",
      answer: "Nosso suporte ao cliente está disponível 24/7 através de chat ao vivo em nosso site, email (suporte@suaempresa.com) e telefone. Para clientes premium, oferecemos atendimento prioritário com gerentes de conta dedicados.",
      icon: <HelpCircle className="text-blue-500" size={24} />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center mt-12">
          <h1 className="text-4xl font-bold text-white mb-4 mt-8">Perguntas Frequentes</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre nossos serviços de redirecionamento internacional em 17 países
          </p>
          
          {/* Animated elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-10 left-10 opacity-20">
              <div className="w-16 h-16 rounded-full bg-yellow-300 animate-pulse"></div>
            </div>
            <div className="absolute bottom-10 right-10 opacity-20">
              <div className="w-24 h-24 rounded-full bg-pink-300 animate-pulse"></div>
            </div>
            <div className="absolute top-20 right-20 opacity-20">
              <div className="w-12 h-12 rounded-full bg-blue-300 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-2">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4">
              <div 
                className={`flex items-center justify-between p-3 cursor-pointer rounded-lg transition-all duration-300${
                  openIndex === index 
                    ? 'bg-gradient-to-r from-blue-100 to-purple-100' 
                    : 'hover:bg-blue-50'
                }`}
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex items-center">
                  <div className="mr-4">{item.icon}</div>
                  <h3 className="text-lg font-medium text-gray-800">{item.question}</h3>
                </div>
                <ChevronDown 
                  className={`text-blue-500 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`} 
                  size={20} 
                />
              </div>
              
              {openIndex === index && (
                <div className="px-4 py-3 bg-white rounded-b-lg">
                  <p className="text-gray-600 pl-12">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Animated Graphic */}
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <div className="w-64 h-64 mx-auto relative">
              <div className="absolute inset-0 bg-blue-100 rounded-full opacity-20"></div>
              <div className="absolute inset-4 bg-yellow-100 rounded-full opacity-30"></div>
              <div className="absolute inset-8 bg-pink-100 rounded-full opacity-40"></div>
              <div className="absolute inset-12 bg-purple-100 rounded-full opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Package className="text-blue-500" size={64} />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800 mt-8">Ainda tem dúvidas?</h3>
              <p className="text-gray-600 mt-2">
                Nossa equipe está pronta para ajudar você com qualquer pergunta adicional.
              </p>
              <Link href="/contact">
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-300">
                Fale Conosco
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;