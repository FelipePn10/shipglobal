"use client";

import React, { useState } from "react";
import Image from "next/image";

const ReturnPolicyPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const countries = [
    "Brasil",
    "Estados Unidos",
    "Reino Unido",
    "Alemanha",
    "França",
    "Espanha",
    "Itália",
    "Portugal",
    "Canadá",
    "Austrália",
    "Japão",
    "China",
    "Índia",
    "México",
    "Chile",
    "Argentina",
    "Colômbia",
  ];

  const returnDeadlines = {
    standard: 30, // dias
    extended: 45, // dias para produtos específicos
    international: 60, // dias para devoluções internacionais
  };

  const fees = {
    national: {
      standard: 15, // taxa básica em USD
      oversized: 35, // taxa para itens grandes em USD
    },
    international: {
      standard: 25, // taxa básica em USD
      oversized: 50, // taxa para itens grandes em USD
      customs: "Taxa de importação", // taxa adicional de alfândega em USD
    },
  };

  const processingTime = {
    verification: "1-3 dias úteis",
    return: "5-10 dias úteis para chegada no depósito",
    refund: "3-5 dias úteis após confirmação de recebimento",
  };

  const faqs = [
    {
      question: "Como inicio o processo de devolução?",
      answer:
        "Para iniciar o processo de devolução, acesse sua conta em nosso site, localize o pedido que deseja devolver e clique em &quot;Solicitar Devolução&quot;. Preencha o formulário explicando o motivo da devolução e siga as instruções para envio do produto ao nosso centro de distribuição.",
    },
    {
      question: "Quais produtos não são elegíveis para devolução?",
      answer:
        "Produtos personalizados, itens íntimos, alimentos, medicamentos, software/licenças digitais, produtos com lacre rompido, itens com desconto especial marcados como &quot;venda final&quot; e qualquer produto proibido pela legislação alfandegária não são elegíveis para devolução.",
    },
    {
      question: "Como funcionam os reembolsos?",
      answer:
        "Após recebermos e verificarmos o produto devolvido, processaremos o reembolso no mesmo método de pagamento utilizado na compra. O valor será creditado descontando as taxas de devolução aplicáveis. O tempo de processamento varia de acordo com a instituição financeira, geralmente entre 3-15 dias úteis.",
    },
    {
      question: "O que acontece se meu produto chegar danificado ao destino?",
      answer:
        "Se seu produto chegar danificado ao comprador final, você deve notificar nossa equipe em até 48 horas após o recebimento, enviando fotos detalhadas do dano. Nossa equipe analisará o caso e, se confirmado o dano durante o transporte, processaremos o reembolso sem custos adicionais ou organizaremos uma substituição, dependendo da disponibilidade.",
    },
    {
      question: "Posso devolver apenas parte do meu pedido?",
      answer:
        "Sim, é possível devolver apenas parte dos itens de um pedido. Cada item será avaliado individualmente, e as taxas de devolução serão calculadas por item. O processo funciona da mesma forma que uma devolução completa, mas você deve especificar exatamente quais itens estão sendo devolvidos.",
    },
    {
      question: "Como são calculadas as taxas de devolução internacional?",
      answer:
        "As taxas de devolução internacional são calculadas com base no país de origem, país de destino, dimensões e peso do pacote, além de possíveis taxas alfandegárias. A taxa básica cobre os custos de logística reversa e processamento. Taxas adicionais podem ser aplicadas para itens volumosos ou quando há necessidade de documentação especial.",
    },
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 md:px-8 mt-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Política de Devoluções</h1>
          <p className="text-lg">Entenda nosso processo de devolução de compras internacionais</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-8 pl-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Visão Geral do Processo de Devolução</h2>
              <p className="mb-4">
                Na nossa empresa, entendemos que às vezes é necessário devolver um produto adquirido internacionalmente.
                Nosso objetivo é tornar esse processo o mais simples e transparente possível, garantindo uma experiência
                sem complicações para nossos clientes em todos os 17 países onde atuamos.
              </p>
              <p className="mb-6">
                Abaixo, você encontrará todas as informações necessárias sobre nossos prazos, taxas e processos para
                devoluções internacionais. Se tiver dúvidas adicionais, não hesite em consultar nossa seção de
                perguntas frequentes ou entrar em contato com nossa equipe de suporte.
              </p>

              <div className="border-l-4 border-blue-500 pl-4 mb-6">
                <p className="italic text-gray-700">
                  &quot;Nosso compromisso é proporcionar uma experiência de devolução tão satisfatória quanto a de
                  compra.&quot;
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3">Prazos para Devolução</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="mb-2">Nossos prazos para solicitação de devolução são:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Produtos padrão:</span> {returnDeadlines.standard} dias após o
                    recebimento
                  </li>
                  <li>
                    <span className="font-medium">Produtos específicos (eletrônicos, itens de luxo):</span>{" "}
                    {returnDeadlines.extended} dias após o recebimento
                  </li>
                  <li>
                    <span className="font-medium">Devoluções por defeito de fabricação:</span>{" "}
                    {returnDeadlines.international} dias após o recebimento
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">Taxas de Devolução</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border text-left">Tipo de Devolução</th>
                      <th className="py-2 px-4 border text-left">Taxa Padrão</th>
                      <th className="py-2 px-4 border text-left">Itens Grandes</th>
                      <th className="py-2 px-4 border text-left">Taxa Alfandegária</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border">Nacional</td>
                      <td className="py-2 px-4 border">${fees.national.standard}</td>
                      <td className="py-2 px-4 border">${fees.national.oversized}</td>
                      <td className="py-2 px-4 border">N/A</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-2 px-4 border">Internacional</td>
                      <td className="py-2 px-4 border">${fees.international.standard}</td>
                      <td className="py-2 px-4 border">${fees.international.oversized}</td>
                      <td className="py-2 px-4 border">+{fees.international.customs}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-yellow-800">
                  <span className="font-bold">Observação:</span> As taxas podem variar dependendo do país de origem e
                  destino. Use nosso seletor de país para obter informações específicas para sua região.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3">Tempo de Processamento</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Verificação</h4>
                  <p>{processingTime.verification}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Transporte</h4>
                  <p>{processingTime.return}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Reembolso</h4>
                  <p>{processingTime.refund}</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">Como Solicitar uma Devolução</h3>
              <ol className="list-decimal pl-5 space-y-2 mb-6">
                <li>Acesse sua conta em nosso site</li>
                <li>Localize o pedido que deseja devolver</li>
                <li>Clique em &quot;Solicitar Devolução&quot;</li>
                <li>Preencha o formulário de devolução, indicando o motivo</li>
                <li>Siga as instruções para envio do produto</li>
                <li>Acompanhe o status da sua devolução através da sua conta</li>
              </ol>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Perguntas Frequentes</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <button
                      className="flex justify-between items-center w-full text-left font-medium focus:outline-none"
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span>
                      <span className="ml-2">
                        {expandedFaq === index ? (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        )}
                      </span>
                    </button>
                    {expandedFaq === index && (
                      <div className="mt-2 text-gray-700">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 pl-8">
            {/* Country Selector */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-3">Informações por País</h3>
              <p className="mb-4 text-sm text-gray-600">
                Selecione um país para ver informações específicas sobre devoluções para essa região.
              </p>
              <select
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="">Selecione um país</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {selectedCountry && (
                <div className="mt-4 p-3 bg-gray-50 rounded-md">
                  <p className="font-medium text-blue-800">Informações para {selectedCountry}</p>
                  <p className="text-sm mt-2">
                    As políticas gerais se aplicam a {selectedCountry}, com possíveis variações devido à legislação
                    local e acordos de importação específicos. Para detalhes completos, por favor entre em contato com
                    nosso suporte.
                  </p>
                </div>
              )}
            </div>

            {/* Help Box */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-3">Precisa de Ajuda?</h3>
              <p className="mb-4 text-sm text-gray-600">
                Nossa equipe de suporte está disponível para ajudar com qualquer dúvida sobre devoluções.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span>suporte@shipglobal.com</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span>+55 44 99180-5405</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  <span>Chat ao vivo</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-200">
                Contatar Suporte
              </button>
            </div>

            {/* Documents Box */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Documentos Úteis</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      ></path>
                    </svg>
                    Formulário de Devolução PDF
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      ></path>
                    </svg>
                    Guia de Embalagem para Devolução
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      ></path>
                    </svg>
                    Termos e Condições Completos
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      ></path>
                    </svg>
                    Regulamentos Alfandegários por País
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicyPage;