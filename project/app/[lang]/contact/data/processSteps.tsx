import React from 'react';
import { Mail } from 'lucide-react';

export interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Array de passos com ícones como elementos JSX
export const processSteps: ProcessStep[] = [
  {
    title: 'Contato Inicial',
    description: 'Preencha o formulário ou entre em contato diretamente conosco',
    icon: (
      <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
        <Mail className="text-blue-600" size={32} />
      </div>
    ),
  },
  {
    title: 'Análise de Pedido',
    description: 'Nossa equipe analisa sua solicitação e entra em contato para detalhes',
    icon: (
      <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      </div>
    ),
  },
  {
    title: 'Realização da Compra',
    description: 'Realizamos a compra no país de origem e preparamos o envio',
    icon: (
      <div className="w-16 h-16 mx-auto bg-pink-100 rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      </div>
    ),
  },
  {
    title: 'Envio Internacional',
    description: 'Enviamos seu produto com rastreamento até o destino final',
    icon: (
      <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
      </div>
    ),
  },
];