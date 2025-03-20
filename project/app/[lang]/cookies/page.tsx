"use client";

import React, { useState } from 'react';

const CookiePolicyPage = () => {
  const [activeSection, setActiveSection] = useState('what');
  
  const sections = [
    { id: 'what', title: 'O que são Cookies?' },
    { id: 'why', title: 'Por que usamos Cookies?' },
    { id: 'types', title: 'Tipos de Cookies' },
    { id: 'control', title: 'Como controlar Cookies' },
    { id: 'international', title: 'Cookies e Compras Internacionais' },
    { id: 'rights', title: 'Seus Direitos' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 mt-16">
          <h1 className="text-4xl font-bold">Política de Cookies</h1>
          <p className="mt-2 text-lg">Entenda como utilizamos cookies para melhorar sua experiência de compras internacionais</p>
        </div>
      </header>

      {/* Navigation Menu */}
      <div className="bg-blue-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex space-x-4">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* What are Cookies Section */}
          {activeSection === 'what' && (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">O que são Cookies?</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, smartphone ou tablet) quando você visita um site. Eles servem para que o site lembre das suas preferências e ações anteriores, tornando sua experiência de navegação mais eficiente e personalizada.
                </p>
                <p>
                  Estes arquivos contêm informações sobre sua visita, como idioma preferido, itens no carrinho de compras e detalhes de login, entre outros. Os cookies não coletam dados pessoais armazenados no seu dispositivo e não podem danificar seu equipamento.
                </p>
                <div className="flex items-center mt-6 bg-white p-4 rounded-lg border-l-4 border-pink-400">
                  <div className="text-pink-400 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm">
                    Cookies são essenciais para o funcionamento adequado de muitos sites modernos e nos ajudam a oferecer um serviço de redirecionamento de compras internacionais mais rápido e seguro.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Why We Use Cookies Section */}
          {activeSection === 'why' && (
            <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Por que usamos Cookies?</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Utilizamos cookies para melhorar sua experiência ao utilizar nosso serviço de redirecionamento de compras internacionais. Eles nos ajudam a:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Lembrar suas preferências de idioma e moeda para exibir preços e informações relevantes para você</li>
                  <li>Manter você conectado durante sua sessão, evitando que precise fazer login repetidamente</li>
                  <li>Salvar itens em seu carrinho de compras enquanto você navega em diferentes lojas internacionais</li>
                  <li>Rastrear seus pacotes e fornecer atualizações personalizadas sobre o status de seus pedidos</li>
                  <li>Analisar como nosso site é utilizado para melhorar constantemente nossos serviços</li>
                  <li>Personalizar ofertas e recomendações com base em suas compras anteriores e preferências</li>
                </ul>
                <div className="flex items-center mt-6 bg-white p-4 rounded-lg border-l-4 border-yellow-400">
                  <div className="text-yellow-500 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <p className="text-sm">
                    Sem cookies, muitas funções essenciais do nosso site não funcionariam corretamente, comprometendo a segurança e a eficiência do serviço de redirecionamento de compras internacionais.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Types of Cookies Section */}
          {activeSection === 'types' && (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Tipos de Cookies</h2>
              <div className="space-y-6 text-gray-700">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold text-blue-600 text-xl mb-2">Cookies Essenciais</h3>
                  <p>São indispensáveis para o funcionamento básico do site. Permitem que você navegue e utilize recursos essenciais, como área de login e acesso às áreas seguras. Estes cookies não coletam informações para fins de marketing.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold text-pink-500 text-xl mb-2">Cookies de Preferências</h3>
                  <p>Permitem que o site lembre de informações que mudam a forma como o site se comporta ou aparece, como seu idioma preferido ou a região em que você está. Facilitam a personalização da sua experiência de compras internacionais.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold text-purple-500 text-xl mb-2">Cookies Estatísticos</h3>
                  <p>Ajudam a entender como os visitantes interagem com o site, coletando e relatando informações anonimamente. Usamos essas informações para melhorar nosso serviço de redirecionamento para os 17 países em que atuamos.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold text-yellow-500 text-xl mb-2">Cookies de Marketing</h3>
                  <p>São utilizados para rastrear os visitantes nos sites. A intenção é exibir anúncios relevantes e envolventes para o usuário individual, tornando-os mais valiosos para os editores e anunciantes terceirizados.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold text-blue-500 text-xl mb-2">Cookies de Terceiros</h3>
                  <p>Definidos por serviços externos que adicionamos às nossas páginas, como ferramentas de pagamento internacional, análise ou mapas. Eles podem rastrear seu navegador entre diferentes sites e criar um perfil dos seus interesses.</p>
                </div>
              </div>
            </div>
          )}

          {/* How to Control Cookies Section */}
          {activeSection === 'control' && (
            <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Como controlar Cookies</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Você tem o direito de decidir se aceita ou rejeita cookies. A maioria dos navegadores permite controlar os cookies através de suas configurações. Aqui estão algumas maneiras de gerenciar os cookies:
                </p>
                
                <div className="bg-white p-5 rounded-lg shadow">
                  <h3 className="font-bold text-lg mb-3 text-blue-600">Configurações do Navegador</h3>
                  <p className="mb-3">Você pode configurar seu navegador para bloquear ou alertar sobre cookies:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><span className="font-semibold">Google Chrome:</span> Menu &gt; Configurações &gt; Privacidade e segurança &gt; Cookies e outros dados do site</li>
                    <li><span className="font-semibold">Mozilla Firefox:</span> Menu &gt; Opções &gt; Privacidade e Segurança &gt; Cookies e dados do site</li>
                    <li><span className="font-semibold">Safari:</span> Preferências &gt; Privacidade &gt; Cookies e dados do site</li>
                    <li><span className="font-semibold">Microsoft Edge:</span> Menu &gt; Configurações &gt; Privacidade, pesquisa e serviços &gt; Cookies</li>
                  </ul>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow">
                  <h3 className="font-bold text-lg mb-3 text-pink-500">Nossa Ferramenta de Consentimento</h3>
                  <p>Quando você visita nosso site pela primeira vez, apresentamos um banner de cookies onde você pode aceitar ou recusar cookies não essenciais. Você pode alterar suas preferências a qualquer momento clicando no botão "Configurações de Cookies" no rodapé do nosso site.</p>
                </div>
                
                <div className="flex items-center mt-6 bg-white p-4 rounded-lg border-l-4 border-purple-400">
                  <div className="text-purple-500 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="text-sm">
                    Observe que bloquear todos os cookies pode afetar a funcionalidade do nosso site e sua capacidade de utilizar nossos serviços de redirecionamento de compras internacionais adequadamente.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* International Shopping Section */}
          {activeSection === 'international' && (
            <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Cookies e Compras Internacionais</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Como uma empresa de redirecionamento de compras internacionais com atuação em 17 países, utilizamos cookies para otimizar sua experiência de compra global:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold text-blue-600 mb-2">Localização Geográfica</h3>
                    <p>Cookies nos ajudam a detectar sua localização para oferecer opções de redirecionamento e estimativas de frete mais precisas para seu país.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold text-pink-500 mb-2">Conversão de Moeda</h3>
                    <p>Utilizamos cookies para lembrar suas preferências de moeda e exibir preços convertidos de acordo com as taxas de câmbio atuais.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold text-purple-500 mb-2">Rastreamento de Pacotes</h3>
                    <p>Cookies permitem que você acompanhe seus pacotes internacionais sem precisar inserir informações de rastreamento repetidamente.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold text-yellow-500 mb-2">Preferências Alfandegárias</h3>
                    <p>Armazenamos informações sobre suas declarações alfandegárias anteriores para agilizar futuras compras internacionais.</p>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow mt-6">
                  <h3 className="font-bold text-lg mb-3 text-blue-600">Conformidade Internacional</h3>
                  <p>
                    Nosso site está em conformidade com as regulamentações de privacidade e cookies de todos os 17 países em que operamos, incluindo:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>GDPR (União Europeia)</li>
                    <li>LGPD (Brasil)</li>
                    <li>CCPA (Califórnia, EUA)</li>
                    <li>PIPEDA (Canadá)</li>
                    <li>E outras leis de privacidade regionais aplicáveis</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Your Rights Section */}
          {activeSection === 'rights' && (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Seus Direitos</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Como usuário do nosso serviço de redirecionamento de compras internacionais, você tem direitos específicos relacionados aos cookies e à privacidade de seus dados:
                </p>
                
                <div className="bg-white p-5 rounded-lg shadow">
                  <h3 className="font-bold text-lg mb-3 text-blue-600">Direito à Informação</h3>
                  <p>Você tem o direito de ser informado sobre os cookies que utilizamos e para quais finalidades.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow">
                  <h3 className="font-bold text-lg mb-3 text-pink-500">Direito de Escolha</h3>
                  <p>Você pode escolher aceitar ou recusar cookies não essenciais. Podemos usar apenas cookies essenciais sem seu consentimento.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow">
                  <h3 className="font-bold text-lg mb-3 text-purple-500">Direito de Acesso</h3>
                  <p>Você tem o direito de solicitar informações sobre os dados pessoais que coletamos através de cookies.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow">
                  <h3 className="font-bold text-lg mb-3 text-yellow-500">Direito ao Esquecimento</h3>
                  <p>Você pode solicitar a exclusão de dados pessoais coletados através de cookies, sujeito às nossas obrigações legais.</p>
                </div>
                
                <div className="mt-6 bg-white p-5 rounded-lg shadow border-l-4 border-blue-500">
                  <h3 className="font-bold text-lg mb-3 text-blue-600">Como Exercer Seus Direitos</h3>
                  <p className="mb-3">
                    Para exercer qualquer um desses direitos, entre em contato conosco através do nosso formulário de contato ou envie um e-mail para <span className="text-blue-600 font-medium">privacidade@suaempresa.com</span>. Responderemos à sua solicitação dentro de 30 dias.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Tem alguma dúvida sobre nossa política de cookies?</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-lg">
              Entre em Contato
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CookiePolicyPage;