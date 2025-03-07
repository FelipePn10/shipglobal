import React from "react";
import { motion } from "framer-motion";

const OneStopService: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Serviço Completo de Compra e Envio
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Oferecemos uma solução completa para suas compras internacionais, desde a compra até a entrega.
        </p>

        <div className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Compra de Produtos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="flex-shrink-0 bg-blue-500 rounded-full p-4">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Compra de Produtos</h3>
            <p className="mt-8 text-base text-gray-600">
              Compre qualquer item diretamente da China de forma simples e segura. Basta colar os links dos produtos no nosso site e fazer o pedido.
            </p>
          </motion.div>

          {/* Envio para o Armazém */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="flex-shrink-0 bg-green-500 rounded-full p-4">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Envio para o Armazém</h3>
            <p className="mt-2 text-base text-gray-600">
              Compre de diferentes vendedores e nós consolidamos seus pedidos. Todos os itens serão enviados para o nosso armazém.
            </p>
          </motion.div>

          {/* Garantia de Qualidade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="flex-shrink-0 bg-yellow-500 rounded-full p-4">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Garantia de Qualidade</h3>
            <p className="mt-2 text-base text-gray-600">
              Realizamos uma inspeção de qualidade completa e enviamos um feedback detalhado para garantir a melhor experiência.
            </p>
          </motion.div>

          {/* Mais Econômico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="flex-shrink-0 bg-red-500 rounded-full p-4">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Mais Econômico</h3>
            <p className="mt-9 text-base text-gray-600">
              Transporte consolidado para economizar. Envie seus produtos em um único pacote para qualquer lugar do mundo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OneStopService;
