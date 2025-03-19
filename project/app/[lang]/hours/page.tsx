"use client";

import React, { useState, useEffect } from 'react';
import { Globe, Clock, MapPin, Sun, Moon, Sunrise, Sunset } from 'lucide-react';

const HorariosEmpresa = () => {
  const [currentTab, setCurrentTab] = useState('americas');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  type RegioesType = {
    [key: string]: {
      pais: string;
      cidade: string;
      fuso: string;
      horarioComercial: string;
      bandeira: string;
    }[];
  };

  const regioes: RegioesType = {
    americas: [
      { pais: 'Brasil', cidade: 'São Paulo', fuso: 'GMT-3', horarioComercial: '9h às 18h', bandeira: '🇧🇷' },
      { pais: 'Estados Unidos', cidade: 'Nova York', fuso: 'GMT-5', horarioComercial: '9h às 17h', bandeira: '🇺🇸' },
      { pais: 'Canadá', cidade: 'Toronto', fuso: 'GMT-5', horarioComercial: '9h às 17h', bandeira: '🇨🇦' },
      { pais: 'Paraguai', cidade: 'Assunção', fuso: 'GMT-4', horarioComercial: '8h às 17h', bandeira: '🇵🇾' },
    ],
    europa: [
      { pais: 'Reino Unido', cidade: 'Londres', fuso: 'GMT+0', horarioComercial: '9h às 17h', bandeira: '🇬🇧' },
      { pais: 'França', cidade: 'Paris', fuso: 'GMT+1', horarioComercial: '9h às 18h', bandeira: '🇫🇷' },
      { pais: 'Alemanha', cidade: 'Berlim', fuso: 'GMT+1', horarioComercial: '9h às 18h', bandeira: '🇩🇪' },
      { pais: 'Espanha', cidade: 'Madri', fuso: 'GMT+1', horarioComercial: '9h às 18h', bandeira: '🇪🇸' },
      { pais: 'Itália', cidade: 'Roma', fuso: 'GMT+1', horarioComercial: '9h às 18h', bandeira: '🇮🇹' },
      { pais: 'Bélgica', cidade: 'Bruxelas', fuso: 'GMT+1', horarioComercial: '9h às 18h', bandeira: '🇧🇪' },
      { pais: 'Turquia', cidade: 'Istambul', fuso: 'GMT+3', horarioComercial: '9h às 18h', bandeira: '🇹🇷' },
    ],
    asia: [
      { pais: 'Japão', cidade: 'Tóquio', fuso: 'GMT+9', horarioComercial: '9h às 18h', bandeira: '🇯🇵' },
      { pais: 'China', cidade: 'Pequim', fuso: 'GMT+8', horarioComercial: '9h às 18h', bandeira: '🇨🇳' },
      { pais: 'Tailândia', cidade: 'Bangkok', fuso: 'GMT+7', horarioComercial: '9h às 18h', bandeira: '🇹🇭' },
    ],
    oceania: [
      { pais: 'Austrália', cidade: 'Sydney', fuso: 'GMT+11', horarioComercial: '9h às 17h', bandeira: '🇦🇺' },
    ],
  };

  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentTab(tab);
      setIsVisible(true);
    }, 300);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 mt-16">Horários de Atendimento</h1>
          <p className="text-lg text-blue-600 max-w-2xl mx-auto">
            Estamos disponíveis para atendê-lo em diferentes fusos horários ao redor do mundo. Confira nossos horários de atendimento por região.
          </p>
        </div>

        {/* Ilustração animada */}
        <div className="flex justify-center mb-10">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="w-32 h-32 text-blue-500 animate-pulse" />
            </div>
            <div className="absolute top-0 left-0 animate-spin-slow">
              <Clock className="w-10 h-10 text-purple-400" />
            </div>
            <div className="absolute bottom-0 right-0 animate-bounce">
              <Sun className="w-10 h-10 text-yellow-400" />
            </div>
            <div className="absolute top-0 right-0 animate-bounce">
              <Moon className="w-8 h-8 text-indigo-400" />
            </div>
            <div className="absolute bottom-0 left-0 animate-pulse">
              <MapPin className="w-8 h-8 text-pink-400" />
            </div>
          </div>
        </div>

        {/* Tabs de regiões */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.keys(regioes).map((regiao) => (
            <button
              key={regiao}
              onClick={() => handleTabChange(regiao)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                currentTab === regiao
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-blue-600 hover:bg-blue-100'
              }`}
            >
              {regiao === 'americas' && 'Américas'}
              {regiao === 'europa' && 'Europa'}
              {regiao === 'asia' && 'Ásia'}
              {regiao === 'oceania' && 'Oceania'}
            </button>
          ))}
        </div>

        {/* Conteúdo da tab selecionada com animação */}
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regioes[currentTab].map((local, index) => (
              <div 
                key={local.pais} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both',
                }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">{local.bandeira}</span>
                    <div>
                      <h3 className="text-xl font-bold text-blue-800">{local.pais}</h3>
                      <p className="text-blue-600">{local.cidade}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 text-blue-500 mr-2" />
                    <p className="text-gray-700">Fuso horário: <span className="font-semibold">{local.fuso}</span></p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      <Sunrise className="w-5 h-5 text-yellow-500 mr-1" />
                      <Sunset className="w-5 h-5 text-pink-500" />
                    </div>
                    <p className="text-gray-700">Horário comercial: <span className="font-semibold">{local.horarioComercial}</span></p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
                  <p className="text-white text-center">
                    Envie suas encomendas para redirecionamento
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Informações adicionais */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Informações Importantes</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold text-blue-600">Feriados:</span> Nossos horários podem sofrer alterações em feriados locais. Consulte nosso calendário de feriados para mais informações.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-blue-600">Atendimento de emergência:</span> Para casos urgentes, disponibilizamos um canal de atendimento 24 horas. Entre em contato com nossa central de suporte.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-blue-600">Agendamento:</span> Para melhor atendimento, recomendamos o agendamento prévio de consultas sobre suas encomendas internacionais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Adicionar esta animação ao seu arquivo CSS ou através de um estilo global
const style = document.createElement('style');
style.textContent = `
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
`;
document.head.appendChild(style);

export default HorariosEmpresa;