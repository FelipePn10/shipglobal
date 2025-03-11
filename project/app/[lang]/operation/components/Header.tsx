import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 mt-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center">Como Funciona</h1>
        <p className="text-xl text-center mt-4 text-blue-100">
          Seu assistente para compras internacionais em 17 países
        </p>
      </div>
    </header>
  );
};