import React from 'react';
import { TrendingUp, Info, Truck, Clock, ShoppingBag } from 'lucide-react';
import { shippingStats } from '../data';

export const StatsAndInsights: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Dados e Estatísticas</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Conheça nossos números e aprenda como otimizar seus envios internacionais
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Destaques de Envio */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-blue-500" />
            Destaques de Envio
          </h3>
          <div className="space-y-4">
            <div>
              <div className="text-gray-600">Mais Rápido</div>
              <div className="text-lg font-medium text-blue-600">{shippingStats.fasterShipping}</div>
              <div className="text-sm text-gray-500">Média de 3-5 dias úteis</div>
            </div>
            <div>
              <div className="text-gray-600">Mais Popular</div>
              <div className="text-lg font-medium text-blue-600">{shippingStats.mostPopular}</div>
              <div className="text-sm text-gray-500">Maior volume de envios</div>
            </div>
            <div>
              <div className="text-gray-600">Melhor Custo-Benefício</div>
              <div className="text-lg font-medium text-blue-600">{shippingStats.bestValue}</div>
              <div className="text-sm text-gray-500">Preços competitivos</div>
            </div>
          </div>
        </div>

        {/* Dicas de Envio */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Info className="w-6 h-6 mr-2 text-purple-500" />
            Dicas para Envios
          </h3>
          <div className="space-y-4 text-gray-600">
            <div className="flex items-start">
              <Truck className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
              <span>Consolide envios de diferentes países para economizar até 30% nos custos de frete.</span>
            </div>
            <div className="flex items-start">
              <Clock className="w-5 h-5 mr-2 text-yellow-500 flex-shrink-0" />
              <span>Escolha opções expressas para entregas urgentes em até 48 horas em mercados selecionados.</span>
            </div>
            <div className="flex items-start">
              <ShoppingBag className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0" />
              <span>Aproveite marketplaces locais para acesso a ofertas exclusivas.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

