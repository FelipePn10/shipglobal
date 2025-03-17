import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaGlobe, FaShippingFast, FaMoneyBillWave, FaShieldAlt } from 'react-icons/fa';

const EnvioEconomico: React.FC = () => {
  const paises = [
    'Estados Unidos', 'China', 'Reino Unido', 'Alemanha', 'Japão', 
    'Espanha', 'França', 'Itália', 'Portugal',
    'Bélgica', 'Itália', 'Turquia', 'Paraguai', 'Tailândia'
  ];

  // Benefícios do serviço
  const beneficios = [
    {
      titulo: 'Economia de até 70%',
      descricao: 'Reduza significativamente seus custos de frete internacional com nosso sistema de consolidação.',
      icone: <FaMoneyBillWave className="w-12 h-12 text-green-500 mb-4" />
    },
    {
      titulo: 'Presença Global',
      descricao: 'Atuamos em 17 países, permitindo que você compre de diversas lojas internacionais.',
      icone: <FaGlobe className="w-12 h-12 text-blue-500 mb-4" />
    },
    {
      titulo: 'Entrega Rápida',
      descricao: 'Mesmo com preços reduzidos, garantimos prazos competitivos para suas entregas.',
      icone: <FaShippingFast className="w-12 h-12 text-purple-500 mb-4" />
    },
    {
      titulo: 'Segurança Garantida',
      descricao: 'Todos os pacotes são segurados e rastreados do início ao fim do processo.',
      icone: <FaShieldAlt className="w-12 h-12 text-red-500 mb-4" />
    }
  ];

  return (
    <>
      <Head>
        <title>Envio Econômico | Economize até 70% em fretes internacionais</title>
        <meta name="description" content="Economize até 70% em fretes internacionais com nossa solução de transporte consolidado. Atuação em 17 países." />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 md:py-28">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Envio Econômico
              </h1>
              <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto">
                Economize até 70% em fretes internacionais com nossa solução de transporte consolidado.
              </p>
              <div className="mt-10">
                <a
                  href="/explanation"
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 md:text-lg"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,75C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Seção de Explicação */}
      <div id="saiba-mais" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Como Funciona Nosso Envio Econômico
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Nossos parceiros logísticos estratégicos garantem a melhor relação custo-benefício em todas as entregas, sem abrir mão da segurança.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Consolidação Inteligente
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Reunimos múltiplos pedidos em um único envio, reduzindo drasticamente os custos de frete internacional. Nossa tecnologia avançada otimiza cada centímetro do espaço de carga.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Rede Global de Parceiros
                </h3>
                <p className="text-lg text-gray-600">
                  Contamos com parceiros estratégicos nos 17 países onde atuamos, permitindo negociações exclusivas de tarifas e rotas otimizadas para cada destino.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <div className="relative h-80 w-full bg-gray-200">
                  <Image 
                    src={"/image/economic/image.jpg"}
                    alt='Imagem do serviço de consolidação'
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Benefícios */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Benefícios do Envio Econômico
            </h2>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="flex justify-center">
                    {beneficio.icone}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {beneficio.titulo}
                  </h3>
                  <p className="text-gray-600">
                    {beneficio.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Pronto para economizar?</span>
            <span className="block text-indigo-200">Comece a usar o Envio Econômico hoje.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/auth"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Comece agora mesmo
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/simule"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
              >
                Simular Frete
              </a>
            </div>
          </div>
        </div>
      </div>

     {/* Seção de Países */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Presença Internacional
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Oferecemos nossos serviços de redirecionamento em 17 países ao redor do mundo.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {paises.map((pais, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-md text-center">
                  <p className="font-medium text-gray-800">{pais}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnvioEconomico;