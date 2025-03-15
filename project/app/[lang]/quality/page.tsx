"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaSearchPlus, FaCheck, FaCamera, FaShieldAlt, FaExchangeAlt } from 'react-icons/fa';
import Link from 'next/link';
const GarantiaQualidadePage = () => {
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
              Garantia de Qualidade
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Nossa equipe especializada realiza uma inspeção minuciosa de cada produto. Verificamos defeitos, conferimos tamanhos e cores, e garantimos que você receba exatamente o que pediu, evitando surpresas desagradáveis.
            </p>
            <Link 
              href="/contato"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Saiba Mais
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Processo de Inspeção */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className='text-center mb-16'
          >
             <h2 className="text-white text-3xl font-bold mb-4 text-blue-800">Nosso Processo de Inspeção</h2>
            <p className="text-white text-lg text-gray-600 max-w-3xl mx-auto">
              Cada produto passa por um rigoroso protocolo de verificação antes de ser enviado ao cliente.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaSearchPlus className="text-4xl" />,
                title: "Inspeção Visual",
                description: "Verificamos cuidadosamente cada produto em busca de defeitos visíveis, danos ou imperfeições.",
                color: "from-blue-400 to-blue-600"
              },
              {
                icon: <FaCheck className="text-4xl" />,
                title: "Verificação de Especificações",
                description: "Confirmamos se o produto recebido corresponde exatamente às especificações solicitadas pelo cliente.",
                color: "from-purple-400 to-purple-600"
              },
              {
                icon: <FaCamera className="text-4xl" />,
                title: "Documentação Fotográfica",
                description: "Fotografamos cada produto para documentar seu estado antes do envio e garantir transparência total.",
                color: "from-green-400 to-green-600"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.2 * index, duration: 0.5 }
                  }
                }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${item.color} p-6 flex justify-center text-white`}>
                  {item.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Garantias Oferecidas */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Nossas Garantias</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos as melhores garantias do mercado para sua tranquilidade.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
              }}
              className="bg-white p-8 rounded-xl shadow-md flex"
            >
              <div className="mr-6 text-blue-600">
                <FaShieldAlt className="text-4xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Garantia de Satisfação</h3>
                <p className="text-gray-600">
                  Se você não estiver 100% satisfeito com seu produto, oferecemos reembolso total dentro de 30 dias após a compra, sem questionamentos.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
              }}
              className="bg-white p-8 rounded-xl shadow-md flex"
            >
              <div className="mr-6 text-purple-600">
                <FaExchangeAlt className="text-4xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Troca Facilitada</h3>
                <p className="text-gray-600">
                  Processo simples e rápido para trocas caso o produto apresente qualquer problema ou não atenda às suas expectativas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-6">Faça seu pedido com confiança</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nossa garantia de qualidade assegura que você receberá exatamente o que espera, sem surpresas.
            </p>
            <Link 
              href="/produtos"
              className="inline-block px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Ver Produtos
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GarantiaQualidadePage;