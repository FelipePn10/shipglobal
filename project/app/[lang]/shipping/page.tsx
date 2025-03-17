import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaWarehouse, FaBox, FaGlobe, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa';
import Link from 'next/link';

const WarehouseShippingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>Envio para o Armazém | Sua Empresa</title>
        <meta name="description" content="Compre de diferentes vendedores e consolidamos seus pedidos com eficiência." />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Envio para o Armazém
              </h1>
              <p className="text-xl text-gray-600">
                Compre de diferentes vendedores e consolidamos seus pedidos com eficiência. 
                Nossa estratégia de consolidação significa menos taxas e menor risco de 
                extravios durante o transporte internacional.
              </p>
              <div className="pt-4">
              <Link href="/auth">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                  Começar Agora
                </button>
              </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
              <div className="absolute inset-0 bg-blue-100 rounded-xl overflow-hidden shadow-2xl">
                <div className="relative h-full w-full">
                  {/* Placeholder para uma imagem real */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaWarehouse className="text-blue-500 text-8xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Como Funciona
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Compre Online',
                description: 'Faça suas compras em qualquer loja online nos 17 países onde atuamos.',
                icon: <FaGlobe className="text-blue-500 text-4xl" />
              },
              {
                step: 2,
                title: 'Envie para Nosso Armazém',
                description: 'Use nosso endereço como destino de entrega para suas compras.',
                icon: <FaWarehouse className="text-blue-500 text-4xl" />
              },
              {
                step: 3,
                title: 'Consolidamos e Enviamos',
                description: 'Reunimos todos os seus pedidos e enviamos em um único pacote para você.',
                icon: <FaBox className="text-blue-500 text-4xl" />
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6 mx-auto">
                  {item.icon}
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-semibold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefícios do Envio para o Armazém
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Economize em Taxas de Envio',
                description: 'Pague apenas por um único envio internacional em vez de múltiplos.',
                icon: <FaMoneyBillWave className="text-green-500 text-4xl" />
              },
              {
                title: 'Maior Segurança',
                description: 'Redução do risco de perda ou extravio com menos pacotes em trânsito.',
                icon: <FaShieldAlt className="text-green-500 text-4xl" />
              },
              {
                title: 'Compre em Diferentes Lojas',
                description: 'Adquira produtos de diferentes vendedores sem se preocupar com múltiplos fretes.',
                icon: <FaGlobe className="text-green-500 text-4xl" />
              },
              {
                title: 'Experiência Simplificada',
                description: 'Gerencie todas as suas compras internacionais em um único lugar.',
                icon: <FaBox className="text-green-500 text-4xl" />
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura Global */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Presença Internacional em 17 Países
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa rede global de armazéns permite que você compre de praticamente qualquer lugar e receba em seu endereço com facilidade.
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
            <div className="flex justify-center">
              <div className="relative h-64 w-full md:h-96">
                {/* Aqui você pode inserir um mapa ou imagem dos países */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaGlobe className="text-blue-500 text-8xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Pronto para simplificar suas compras internacionais?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comece a usar nosso serviço de Envio para o Armazém hoje mesmo e economize tempo e dinheiro em suas compras internacionais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth">
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                Criar Conta
            </button>
        </Link>
            <Link href="/explanation">
                <button className="bg-transparent hover:bg-blue-700 text-white border-2 border-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
              Saiba Mais
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                question: 'Quanto tempo os produtos ficam armazenados?',
                answer: 'Seus produtos podem ficar armazenados por até 30 dias sem custo adicional. Após esse período, aplicamos uma pequena taxa de armazenamento.'
              },
              {
                question: 'Como sei quando meus produtos chegaram ao armazém?',
                answer: 'Você receberá uma notificação por email e em sua conta assim que seus produtos forem recebidos em nosso armazém.'
              },
              {
                question: 'Posso consolidar produtos de diferentes países?',
                answer: 'Sim, desde que os produtos estejam em armazéns do mesmo país. Não é possível consolidar produtos que estão em armazéns de países diferentes.'
              },
              {
                question: 'Quanto economizo com a consolidação?',
                answer: 'Em média, nossos clientes economizam entre 30% e 60% em custos de envio ao consolidar múltiplos pacotes.'
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WarehouseShippingPage;