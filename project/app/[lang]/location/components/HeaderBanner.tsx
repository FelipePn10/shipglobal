import React from 'react';
import { Globe } from 'lucide-react';
import { countries } from '../data/countries';

export const HeaderBanner: React.FC = () => {
  return (
    <div className="relative h-80 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.2,
              animation: `float ${Math.random() * 10 + 10}s infinite linear`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        <div
          className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 blur-3xl opacity-30"
          style={{ top: '30%', left: '70%' }}
        ></div>
        <div
          className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 blur-3xl opacity-20"
          style={{ top: '60%', left: '30%' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white relative z-10 mt-5">
        <div className="relative">
          <Globe className="w-16 h-16 mb-4" />
          <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-full filter blur-lg opacity-20 animate-pulse"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Nossa Presença Global</h1>
        <p className="text-xl opacity-90 max-w-2xl text-center">
          Conectando você a {countries.length} países ao redor do mundo
        </p>
      </div>
    </div>
  );
};