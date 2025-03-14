"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaSearch, FaLock, FaDollarSign, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';

const CompraPage = () => {
  // Animações
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">
              Compra de Produtos Internacionais
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Compre qualquer item de qualquer lugar do mundo de forma simples e segura. Utilizamos tecnologia avançada para encontrar os melhores preços e realizar suas compras com rapidez e segurança.
            </p>
            <Link 
              href="/auth"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Comece Agora
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona */}
<section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.6 } }
            }}
            className="text-center max-w-3xl mx-auto"
            > 
            <h2 className="text-3xl font-bold mb-4 text-blue-800 text-white">Como Funciona</h2>
            <p className="text-lg text-gray-600 max-w-3xl mb-5 mx-auto text-white">
              Nosso processo foi projetado para tornar suas compras internacionais 
              tão simples quanto possível.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaSearch className="text-4xl" />,
                title: "Encontre o produto",
                description: "Escolha qualquer produto em sites internacionais ou solicite nossa ajuda para encontrar o melhor preço.",
                color: "from-blue-400 to-blue-600"
              },
              {
                icon: <FaShoppingCart className="text-4xl" />,
                title: "Nós compramos para você",
                description: "Cuidamos de todo o processo de compra, lidando com o vendedor em nome do cliente.",
                color: "from-purple-400 to-purple-600"
              },
              {
                icon: <FaLock className="text-4xl" />,
                title: "Segurança Garantida",
                description: "Nosso sistema de segurança monitora todas as transações, garantindo a integridade de sua compra do começo ao fim.",
                color: "from-pink-400 to-pink-600"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.2, duration: 0.6 }
                }}
                className="bg-white rounded-lg shadow-lg p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-gradient-to-r ${step.color} text-white`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
    </section>


      {/* Benefícios */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Vantagens Exclusivas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubra por que milhares de clientes escolhem nosso serviço para suas compras internacionais.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <FaDollarSign className="text-3xl" />,
                title: "Melhores Preços",
                description: "Nossa tecnologia de comparação encontra automaticamente as melhores ofertas para o produto que você deseja."
              },
              {
                icon: <FaGlobe className="text-3xl" />,
                title: "Acesso a 17 Países",
                description: "Compre de qualquer país onde temos operação e receba em seu endereço."
              },
              {
                title: "Traduções Automáticas",
                description: "Sem barreiras de idioma. Nosso sistema traduz as especificações e detalhes do produto."
              },
              {
                title: "Verificação de Autenticidade",
                description: "Trabalhamos apenas com vendedores verificados, minimizando o risco de falsificações."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { delay: 0.4 + index * 0.1 }
                }}
                className="flex bg-white rounded-lg shadow p-6"
              >
                {benefit.icon && (
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white mr-4">
                    {benefit.icon}
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.6 } }
            }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Pronto para começar a comprar?</h2>
            <p className="text-xl mb-8">
              Registre-se e realize sua primeira compra internacional!
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/auth"
                className="px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                Criar Conta
              </Link>
              <Link 
                href="/explanation"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300"
              >
                Saiba Mais
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Perguntas Frequentes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Encontre respostas para as perguntas mais comuns sobre nosso serviço de compras.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Quais sites são aceitos para compras?",
                answer: "Aceitamos compras de praticamente qualquer site da China, incluindo Taobao, Tmall, 1688, JD.com, e outros. Se você encontrar um produto em qualquer site, basta enviar o link para nós."
              },
              {
                question: "Quanto tempo leva para receber meus produtos?",
                answer: "O tempo de entrega varia de acordo com o método de envio escolhido. Normalmente, após a compra, os produtos chegam ao nosso armazém em 3-7 dias. O envio internacional pode levar de 10 a 30 dias dependendo do destino."
              },
              {
                question: "Como funciona o pagamento?",
                answer: "Aceitamos diversas formas de pagamento, incluindo cartão de crédito, PayPal, transferência bancária e Pix. Todo o processo é seguro e criptografado para sua proteção."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.8 + index * 0.1 } }
                }}
                className="mb-6"
              >
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompraPage;