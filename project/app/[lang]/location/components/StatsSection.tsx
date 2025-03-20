import React from 'react';
import { Globe, MapPin, Package, Clock } from 'lucide-react';
import { countries } from '../data/countries';

export const StatsSection: React.FC<{ continents: number }> = ({ continents }) => {
  return (
    <div className="py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100 text-blue-600">
              <Globe className="w-6 h-6" />
            </div>
            <div className="text-4xl font-bold text-blue-600 mb-2">{countries.length}</div>
            <div className="text-gray-600">Países Atendidos</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-purple-100 text-purple-600">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-4xl font-bold text-purple-600 mb-2">{continents}</div>
            <div className="text-gray-600">Continentes</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-pink-100 text-pink-600">
              <Package className="w-6 h-6" />
            </div>
            <div className="text-4xl font-bold text-pink-500 mb-2">+15k</div>
            <div className="text-gray-600">Entregas Realizadas</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-yellow-100 text-yellow-600">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-4xl font-bold text-yellow-500 mb-2">24/7</div>
            <div className="text-gray-600">Suporte Global</div>
          </div>
        </div>
      </div>
    </div>
  );
};