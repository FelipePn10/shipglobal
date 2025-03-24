import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-6xl mx-auto">
        {/* Container com gradiente, bordas arredondadas e sombra */}
        <div
          className="relative rounded-[40px] py-12 px-6 sm:px-10"
          style={{
            background: 'linear-gradient(90deg, #E3EEFF 0%, #F0F6FF 100%)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
          }}
        >

          {/* Título */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 text-center leading-tight">
            Conectando o Mundo, <br /> Uma Compra de Cada Vez
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-gray-500 mb-8 text-center max-w-2xl mx-auto">
            Facilitando o redirecionamento de compras internacionais com segurança e eficiência, conectando clientes e empresas em 16 países ao redor do mundo.
          </p>

          {/* Botões */}
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="/auth"
              className="inline-block bg-[#6B48FF] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#5A3DE6] transition duration-300"
              style={{
                backgroundColor: '#6B48FF',
              }}
            >
              Começar agora mesmo
            </a>
            <a
              href="/servicos"
              className="inline-block bg-white text-[#6B48FF] font-semibold py-3 px-6 rounded-lg shadow-md border border-[#6B48FF] hover:bg-[#6B48FF] hover:text-white transition duration-300"
              style={{
                borderColor: '#6B48FF',
                color: '#6B48FF',
              }}
            >
              Para empresas
            </a>
          </div>

          {/* Divisória */}
          <hr className="my-8 border-gray-300" />

          {/* Estatísticas */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-black">16+</h3>
              <p className="text-gray-500 mt-2">Países Atendidos</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-black">50K+</h3>
              <p className="text-gray-500 mt-2">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-black">100K+</h3>
              <p className="text-gray-500 mt-2">Pacotes Redirecionados</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-black">5+</h3>
              <p className="text-gray-500 mt-2">Anos de Operação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;