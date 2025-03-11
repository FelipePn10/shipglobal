import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full py-8 bg-gradient-to-r from-blue-600 to-purple-400 text-white">
      <div className="container mx-auto px-4 mt-12">
        <h1 className="text-4xl font-bold text-center mb-2">Entre em Contato</h1>
        <p className="text-center text-lg">Estamos aqui para ajudar com suas compras internacionais</p>
      </div>
    </header>
  );
};