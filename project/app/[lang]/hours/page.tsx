"use client";

import React, { useState } from 'react';

interface HorarioProps {
  pais: string;
  bandeira: string;
  suporte: string;
  atendimento: string;
  logistica: string;
  fuso: string;
}

const HorariosPage = () => {
  const [filtroAberto, setFiltroAberto] = useState(true);
  const [paisSelecionado, setPaisSelecionado] = useState<string | null>(null);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("todos");
  
  const paises: HorarioProps[] = [
    {
      pais: "Brasil",
      bandeira: "🇧🇷",
      suporte: "8h às 22h (Segunda a Sexta), 9h às 18h (Sábado)",
      atendimento: "9h às 19h (Segunda a Sexta)",
      logistica: "8h às 18h (Segunda a Sexta)",
      fuso: "GMT-3",
    },
    {
      pais: "Estados Unidos",
      bandeira: "🇺🇸",
      suporte: "7h às 21h (Segunda a Sábado)",
      atendimento: "8h às 18h (Segunda a Sexta)",
      logistica: "7h às 19h (Segunda a Sexta)",
      fuso: "GMT-5 a GMT-8",
    },
    {
      pais: "Portugal",
      bandeira: "🇵🇹",
      suporte: "9h às 19h (Segunda a Sexta)",
      atendimento: "10h às 18h (Segunda a Sexta)",
      logistica: "9h às 17h (Segunda a Sexta)",
      fuso: "GMT+1",
    },
    {
      pais: "Alemanha",
      bandeira: "🇩🇪",
      suporte: "9h às 18h (Segunda a Sexta)",
      atendimento: "10h às 17h (Segunda a Sexta)",
      logistica: "9h às 17h (Segunda a Sexta)",
      fuso: "GMT+2",
    },
    {
      pais: "Reino Unido",
      bandeira: "🇬🇧",
      suporte: "9h às 18h (Segunda a Sexta)",
      atendimento: "10h às 17h (Segunda a Sexta)",
      logistica: "9h às 17h (Segunda a Sexta)",
      fuso: "GMT+1",
    },
    {
      pais: "França",
      bandeira: "🇫🇷",
      suporte: "9h às 18h (Segunda a Sexta)",
      atendimento: "10h às 17h (Segunda a Sexta)",
      logistica: "9h às 17h (Segunda a Sexta)",
      fuso: "GMT+2",
    },
    {
      pais: "Espanha",
      bandeira: "🇪🇸",
      suporte: "9h às 18h (Segunda a Sexta)",
      atendimento: "10h às 17h (Segunda a Sexta)",
      logistica: "9h às 17h (Segunda a Sexta)",
      fuso: "GMT+2",
    },
    {
      pais: "Itália",
      bandeira: "🇮🇹",
      suporte: "9h às 18h (Segunda a Sexta)",
      atendimento: "10h às 17h (Segunda a Sexta)",
      logistica: "9h às 17h (Segunda a Sexta)",
      fuso: "GMT+2",
    },
    {
      pais: "Canadá",
      bandeira: "🇨🇦",
      suporte: "8h às 18h (Segunda a Sexta)",
      atendimento: "9h às 17h (Segunda a Sexta)",
      logistica: "8h às 17h (Segunda a Sexta)",
      fuso: "GMT-4 a GMT-8",
    },
    {
      pais: "México",
      bandeira: "🇲🇽",
      suporte: "8h às 18h (Segunda a Sexta)",
      atendimento: "9h às 17h (Segunda a Sexta)",
      logistica: "8h às 17h (Segunda a Sexta)",
      fuso: "GMT-6",
    },
    {
      pais: "Chile",
      bandeira: "🇨🇱",
      suporte: "8h às 18h (Segunda a Sexta)",
      atendimento: "9h às 17h (Segunda a Sexta)",
      logistica: "8h às 17h (Segunda a Sexta)",
      fuso: "GMT-3",
    },
    {
      pais: "Austrália",
      bandeira: "🇦🇺",
      suporte: "9h às 17h (Segunda a Sexta)",
      atendimento: "10h às 16h (Segunda a Sexta)",
      logistica: "9h às 16h (Segunda a Sexta)",
      fuso: "GMT+10",
    },
    {
      pais: "Japão",
      bandeira: "🇯🇵",
      suporte: "9h às 18h (Segunda a Sexta)",
      atendimento: "10h às 17h (Segunda a Sexta)",
      logistica: "9h às 17h (Segunda a Sexta)",
      fuso: "GMT+9",
    },
    {
      pais: "China",
      bandeira: "🇨🇳",
      suporte: "9h às 18h (Segunda a Sexta)",
      atendimento: "10h às 17h (Segunda a Sexta)",
      logistica: "9h às 17h (Segunda a Sexta)",
      fuso: "GMT+8",
    },
    {
      pais: "Índia",
      bandeira: "🇮🇳",
      suporte: "9h às 18h (Segunda a Sexta)",
      atendimento: "10h às 17h (Segunda a Sexta)",
      logistica: "9h às 17h (Segunda a Sexta)",
      fuso: "GMT+5:30",
    },
    {
      pais: "Emirados Árabes",
      bandeira: "🇦🇪",
      suporte: "9h às 18h (Domingo a Quinta)",
      atendimento: "10h às 17h (Domingo a Quinta)",
      logistica: "9h às 17h (Domingo a Quinta)",
      fuso: "GMT+4",
    }
  ];

  // Filtra os países com base na seleção
  const paisesFiltrados = paisSelecionado 
    ? paises.filter(p => p.pais === paisSelecionado) 
    : paises;

  // Obtém a hora atual em diferentes fusos
  const getHoraAtual = (fuso: string) => {
    try {
      // Extrai o valor do GMT
      const match = fuso.match(/GMT([+-])(\d+)(?::(\d+))?/);
      if (!match) return "Indisponível";
      
      const sinal = match[1] === "+" ? 1 : -1;
      const horas = parseInt(match[2]) * sinal;
      const minutos = match[3] ? parseInt(match[3]) * sinal : 0;
      
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const localTime = new Date(utc + (3600000 * horas) + (60000 * minutos));
      
      return localTime.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      });
    } catch (e) {
      return "Indisponível";
    }
  };

  // Verifica se o serviço está disponível no momento
  const verificarDisponibilidade = (horario: string, fuso: string) => {
    try {
      const horaLocal = getHoraAtual(fuso);
      if (horaLocal === "Indisponível") return false;
      
      const [horaAtual, minAtual] = horaLocal.split(':').map(Number);
      
      const [periodo, dias] = horario.split(' (');
      const [inicio, fim] = periodo.split(' às ');
      
      const [horaInicio] = inicio.split('h').map(Number);
      const [horaFim] = fim.split('h').map(Number);
      
      // Verifica dias da semana
      const diaSemanaAtual = new Date().getDay(); // 0 = Domingo, 1 = Segunda, ...
      
      const diaDisponivel = () => {
        if (dias.includes("Segunda a Sexta") && diaSemanaAtual >= 1 && diaSemanaAtual <= 5) {
          return true;
        }
        if (dias.includes("Segunda a Sábado") && diaSemanaAtual >= 1 && diaSemanaAtual <= 6) {
          return true;
        }
        if (dias.includes("Domingo a Quinta") && (diaSemanaAtual === 0 || (diaSemanaAtual >= 1 && diaSemanaAtual <= 4))) {
          return true;
        }
        if (dias.includes("Sábado") && diaSemanaAtual === 6) {
          return true;
        }
        return false;
      };
      
      return diaDisponivel() && horaAtual >= horaInicio && horaAtual < horaFim;
    } catch (e) {
      return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-blue-700 text-white py-8">
        <div className="container mx-auto px-4 mt-16">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Horários de Funcionamento</h1>
          <p className="text-center mt-2 text-blue-100">
            Confira nossos horários de atendimento nos 16 países onde atuamos
          </p>
        </div>
      </header>
      
      {/* Filtros */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <button 
              onClick={() => setFiltroAberto(!filtroAberto)}
              className="flex items-center text-blue-700 font-medium mb-4 md:mb-0"
            >
              {filtroAberto ? (
                <>
                  Ocultar filtros 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                </>
              ) : (
                <>
                  Mostrar filtros 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </button>
            
            <div className="flex items-center space-x-4">
              <select
                value={categoriaSelecionada}
                onChange={(e) => setCategoriaSelecionada(e.target.value)}
                className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="todos">Todos os serviços</option>
                <option value="suporte">Suporte</option>
                <option value="atendimento">Atendimento</option>
                <option value="logistica">Logística</option>
              </select>
            </div>
          </div>
          
          {filtroAberto && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setPaisSelecionado(null)}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    paisSelecionado === null 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  Todos os países
                </button>
                
                {paises.map((p) => (
                  <button
                    key={p.pais}
                    onClick={() => setPaisSelecionado(p.pais)}
                    className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
                      paisSelecionado === p.pais 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    <span className="mr-1">{p.bandeira}</span> {p.pais}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Conteúdo principal */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paisesFiltrados.map((pais) => (
            <div key={pais.pais} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
              <div className="bg-blue-600 py-4 px-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white flex items-center">
                    <span className="text-2xl mr-2">{pais.bandeira}</span> {pais.pais}
                  </h2>
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium">
                    {pais.fuso}
                  </div>
                </div>
                <p className="text-blue-100 mt-1">
                  Hora local: {getHoraAtual(pais.fuso)}
                </p>
              </div>
              
              <div className="p-6">
                {(categoriaSelecionada === "todos" || categoriaSelecionada === "suporte") && (
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-700">Suporte</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        verificarDisponibilidade(pais.suporte, pais.fuso)
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {verificarDisponibilidade(pais.suporte, pais.fuso) ? 'Disponível' : 'Indisponível'}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-1">{pais.suporte}</p>
                  </div>
                )}
                
                {(categoriaSelecionada === "todos" || categoriaSelecionada === "atendimento") && (
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-700">Atendimento</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        verificarDisponibilidade(pais.atendimento, pais.fuso)
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {verificarDisponibilidade(pais.atendimento, pais.fuso) ? 'Disponível' : 'Indisponível'}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-1">{pais.atendimento}</p>
                  </div>
                )}
                
                {(categoriaSelecionada === "todos" || categoriaSelecionada === "logistica") && (
                  <div>
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-700">Logística</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        verificarDisponibilidade(pais.logistica, pais.fuso)
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {verificarDisponibilidade(pais.logistica, pais.fuso) ? 'Disponível' : 'Indisponível'}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-1">{pais.logistica}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      
      {/* Seção informativa */}
      <section className="bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-200 py-12 mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Informações Importantes</h2>
            <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">Feriados Locais</h3>
                  <p className="text-gray-700">
                    Nossos serviços podem sofrer alterações em feriados locais de cada país. 
                    Consulte o calendário de feriados para informações detalhadas.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">Atendimento de Emergência</h3>
                  <p className="text-gray-700">
                    Para situações urgentes fora do horário comercial, 
                    disponibilizamos suporte de emergência através do nosso chat online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>© 2025 Sua Empresa de Redirecionamento de Compras. Todos os direitos reservados.</p>
            <p className="mt-2 text-blue-200">Sede: Brasil | Atuação em 16 países</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HorariosPage;