"use client";

import React, { useState } from 'react';

const ConsolidacaoProdutos = () => {
  const [activeTab, setActiveTab] = useState('comofunciona');
  const [showBenefits, setShowBenefits] = useState(false);

  const countries = [
    'Estados Unidos', 'Reino Unido', 'Alemanha', 'França', 'Espanha', 
    'Itália', 'Japão', 'China', 'Coreia do Sul', 'Canadá',
    'Austrália', 'Portugal', 'Holanda', 'Suécia', 'Suíça',
    'Emirados Árabes', 'Singapura'
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 mt-10">
          <h1 className="text-3xl font-bold mb-4">Consolidação de Produtos</h1>
          <p className="text-xl">Economize em frete internacional com nossa solução de consolidação</p>
        </div>
      </header>

      {/* Navegação */}
      <nav className="bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap">
            <li>
              <button 
                className={`px-4 py-3 ${activeTab === 'comofunciona' ? 'bg-blue-800' : ''}`}
                onClick={() => setActiveTab('comofunciona')}
              >
                Como Funciona
              </button>
            </li>
            <li>
              <button 
                className={`px-4 py-3 ${activeTab === 'beneficios' ? 'bg-blue-800' : ''}`}
                onClick={() => setActiveTab('beneficios')}
              >
                Benefícios
              </button>
            </li>
            <li>
              <button 
                className={`px-4 py-3 ${activeTab === 'paises' ? 'bg-blue-800' : ''}`}
                onClick={() => setActiveTab('paises')}
              >
                Países Atendidos
              </button>
            </li>
            <li>
              <button 
                className={`px-4 py-3 ${activeTab === 'faq' ? 'bg-blue-800' : ''}`}
                onClick={() => setActiveTab('faq')}
              >
                FAQ
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'comofunciona' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Como Funciona a Consolidação de Produtos</h2>
            
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="md:w-1/2">
                <p className="mb-4">
                  A consolidação de produtos é um serviço que permite reunir várias compras de diferentes lojas em um único pacote antes do envio internacional, reduzindo significativamente os custos de frete.
                </p>
                <p className="mb-4">
                  Nosso processo de consolidação é simples e eficiente, proporcionando economia e conveniência para suas compras internacionais.
                </p>
              </div>
              <div className="md:w-1/2 bg-blue-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Vantagens da Consolidação</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Economia de até 80% em custos de frete internacional</li>
                  <li>Redução de taxas de importação</li>
                  <li>Menos embalagens e menor impacto ambiental</li>
                  <li>Recebimento de todas as compras de uma só vez</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Passo a Passo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3">1</div>
                <h4 className="font-semibold mb-2">Compre nas lojas internacionais</h4>
                <p>Faça suas compras nas lojas internacionais e use nosso endereço local no país de origem.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3">2</div>
                <h4 className="font-semibold mb-2">Recebemos suas compras</h4>
                <p>Suas compras chegam ao nosso centro de distribuição, onde são armazenadas em seu nome.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3">3</div>
                <h4 className="font-semibold mb-2">Consolidamos os pacotes</h4>
                <p>Reunimos todos os itens em uma única embalagem, otimizando espaço e reduzindo custos.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3">4</div>
                <h4 className="font-semibold mb-2">Enviamos para seu endereço</h4>
                <p>Enviamos o pacote consolidado para seu endereço no Brasil ou em qualquer país atendido.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-3">Serviços Adicionais</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold mb-2">Inspeção de Produtos</h4>
                  <p>Verificamos se os produtos estão em perfeitas condições antes do envio.</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold mb-2">Fotos dos Itens</h4>
                  <p>Enviamos fotos dos produtos para sua aprovação antes da consolidação.</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold mb-2">Remoção de Embalagens</h4>
                  <p>Removemos embalagens desnecessárias para reduzir peso e volume.</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button 
                className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={() => setActiveTab('beneficios')}
              >
                Ver Benefícios Detalhados
              </button>
            </div>
          </div>
        )}

        {activeTab === 'beneficios' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Benefícios da Consolidação de Produtos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Economia Financeira</h3>
                <p className="mb-3">A consolidação pode reduzir os custos de frete internacional em até 80%, pois:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Elimina a cobrança de frete mínimo para cada pacote</li>
                  <li>Reduz o impacto das taxas fixas de manuseio</li>
                  <li>Diminui o valor total tributável em alguns países</li>
                  <li>Aproveita melhor as faixas de peso dos serviços de frete</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Conveniência</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Receba todas as suas compras de uma só vez</li>
                  <li>Acompanhe apenas um número de rastreio</li>
                  <li>Reduza a burocracia com a alfândega</li>
                  <li>Menor chance de extravio de pacotes</li>
                  <li>Gerenciamento simplificado de suas compras internacionais</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Sustentabilidade</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Menor consumo de embalagens</li>
                  <li>Redução da pegada de carbono no transporte</li>
                  <li>Menos materiais descartados</li>
                  <li>Otimização do espaço em aeronaves e navios</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Proteção ao Consumidor</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Verificação prévia da qualidade dos produtos</li>
                  <li>Melhor empacotamento para transporte internacional</li>
                  <li>Seguro de remessa único para todos os itens</li>
                  <li>Suporte dedicado para resolução de problemas</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Economia Real: Exemplo Prático</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="p-3 text-left">Cenário</th>
                      <th className="p-3 text-right">Frete Individual</th>
                      <th className="p-3 text-right">Frete Consolidado</th>
                      <th className="p-3 text-right">Economia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">3 pacotes pequenos (1kg cada)</td>
                      <td className="p-3 text-right">R$ 450,00</td>
                      <td className="p-3 text-right">R$ 180,00</td>
                      <td className="p-3 text-right font-semibold text-green-600">60%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">5 pacotes médios (2kg cada)</td>
                      <td className="p-3 text-right">R$ 950,00</td>
                      <td className="p-3 text-right">R$ 320,00</td>
                      <td className="p-3 text-right font-semibold text-green-600">66%</td>
                    </tr>
                    <tr>
                      <td className="p-3">Compra grande (múltiplas lojas)</td>
                      <td className="p-3 text-right">R$ 1.800,00</td>
                      <td className="p-3 text-right">R$ 450,00</td>
                      <td className="p-3 text-right font-semibold text-green-600">75%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm italic">*Valores aproximados, variando conforme origem, destino e características dos pacotes.</p>
            </div>
          </div>
        )}

        {activeTab === 'paises' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Países Atendidos</h2>
            <p className="mb-6">Nossa empresa de redirecionamento e consolidação de compras internacionais atua em 17 países, oferecendo endereços locais e soluções completas para facilitar suas compras globais.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {countries.map((country, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <span>{country}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Consolidação Entre Países</h3>
              <p className="mb-4">
                Além da consolidação tradicional, oferecemos um serviço exclusivo de consolidação entre diferentes países. Isso significa que você pode:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Comprar produtos nos EUA, Reino Unido e Alemanha</li>
                <li>Consolidar todos em um único pacote em nosso centro global</li>
                <li>Receber tudo em um único envio para seu país</li>
              </ul>
              <p>
                Este serviço é ideal para quem deseja aproveitar o melhor de cada mercado internacional, sem pagar múltiplos fretes.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'faq' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Quanto tempo dura o processo de consolidação?</h3>
                <p>O processo de consolidação geralmente leva de 1 a 3 dias úteis após o recebimento do último item. Este prazo pode variar conforme a quantidade de itens e serviços adicionais solicitados.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Existe um limite de tempo para manter os produtos antes da consolidação?</h3>
                <p>Oferecemos armazenamento gratuito por até 30 dias. Após este período, é cobrada uma pequena taxa diária de armazenamento por pacote.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Posso solicitar a remoção de caixas e embalagens originais?</h3>
                <p>Sim, oferecemos este serviço como opção adicional. A remoção de embalagens pode reduzir significativamente o peso e volume do pacote, resultando em economia no frete.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Como faço para declarar os produtos consolidados na alfândega?</h3>
                <p>Fornecemos toda a documentação necessária para a declaração aduaneira, incluindo lista detalhada de itens, valores e notas fiscais. Nosso sistema gera automaticamente a documentação de acordo com as exigências de cada país.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Existe algum tipo de produto que não pode ser consolidado?</h3>
                <p>Alguns produtos podem ter restrições para consolidação, como itens perecíveis, baterias de lítio não instaladas, produtos inflamáveis ou itens proibidos para importação no país de destino. Consulte nossa política completa para mais detalhes.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Como acompanho meus pacotes antes da consolidação?</h3>
                <p>Nosso sistema online permite acompanhar em tempo real o status de cada pacote recebido. Você recebe notificações automáticas quando cada item chega ao nosso centro de distribuição.</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Pronto para economizar em suas compras internacionais?</h2>
          <p className="mb-6">Cadastre-se agora e receba seu endereço internacional exclusivo em 17 países</p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
            Começar Agora
          </button>
        </div>
      </section>
    </div>
  );
};

export default ConsolidacaoProdutos;