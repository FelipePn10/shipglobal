import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Info, Maximize2, Minimize2, Search } from 'lucide-react';
import { Country } from '../data/countries';

interface InteractiveMapProps {
  countries: Country[];
  selectedCountry: Country | null;
  setSelectedCountry: (country: Country) => void;
  isMapExpanded: boolean;
  setIsMapExpanded: (expanded: boolean) => void;
  hoveredCountry: Country | null;
  setHoveredCountry: (country: Country | null) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  countries,
  selectedCountry,
  setSelectedCountry,
  isMapExpanded,
  setIsMapExpanded,
  hoveredCountry,
  setHoveredCountry,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCountryList, setShowCountryList] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });
  const autoZoomTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (searchTerm) {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredCountries(countries);
    }
  }, [searchTerm, countries]);

  useEffect(() => {
    // Auto zoom to selected country
    if (selectedCountry && mapRef.current) {
      if (autoZoomTimeout.current) {
        clearTimeout(autoZoomTimeout.current);
      }
      
      autoZoomTimeout.current = setTimeout(() => {
        setZoomLevel(1.5);
        setMapPosition({
          x: -(selectedCountry.coordinates[0] / 100 * mapRef.current!.offsetWidth * 1.5 - mapRef.current!.offsetWidth / 2),
          y: -(selectedCountry.coordinates[1] / 100 * mapRef.current!.offsetHeight * 1.5 - mapRef.current!.offsetHeight / 2),
        });
      }, 300);
    }
    
    return () => {
      if (autoZoomTimeout.current) {
        clearTimeout(autoZoomTimeout.current);
      }
    };
  }, [selectedCountry]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (zoomLevel > 1) {
      isDragging.current = true;
      lastPosition.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      const deltaX = e.clientX - lastPosition.current.x;
      const deltaY = e.clientY - lastPosition.current.y;
      
      setMapPosition({
        x: mapPosition.x + deltaX,
        y: mapPosition.y + deltaY,
      });
      
      lastPosition.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleZoomIn = () => {
    if (zoomLevel < 3) {
      setZoomLevel(zoomLevel + 0.5);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 1) {
      setZoomLevel(zoomLevel - 0.5);
      
      // Reset position if returning to normal zoom
      if (zoomLevel - 0.5 === 1) {
        setMapPosition({ x: 0, y: 0 });
      }
    }
  };

  const handleReset = () => {
    setZoomLevel(1);
    setMapPosition({ x: 0, y: 0 });
  };

  return (
    <div className="relative">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Nossa Rede Global</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Clique nos países para obter mais informações sobre nossos serviços em cada localização
        </p>
      </div>

      <div className="flex justify-center mb-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Buscar país..."
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowCountryList(true)}
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          
          {showCountryList && filteredCountries.length > 0 && (
            <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
              {filteredCountries.map((country) => (
                <button
                  key={country.id}
                  className="w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors flex items-center"
                  onClick={() => {
                    setSelectedCountry(country);
                    setShowCountryList(false);
                    setSearchTerm('');
                  }}
                >
                  <div 
                    className={`w-2 h-2 rounded-full mr-2 ${
                      country.id === 1 ? 'bg-green-500' : 'bg-blue-500'
                    }`}
                  ></div>
                  <span>{country.name}</span>
                  {country.id === 1 && <span className="ml-1 text-xs text-green-600">• Sede</span>}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className={`relative mx-auto transition-all duration-500 ease-in-out ${
          isMapExpanded ? 'h-96 md:h-120' : 'h-64 md:h-80'
        } max-w-5xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg border border-blue-100`}
        onClick={() => setShowCountryList(false)}
      >
        <div 
          ref={mapRef}
          className="absolute inset-0 p-4 cursor-grab active:cursor-grabbing"
          style={{
            transform: `scale(${zoomLevel}) translate(${mapPosition.x / zoomLevel}px, ${mapPosition.y / zoomLevel}px)`,
            transformOrigin: 'center',
            transition: isDragging.current ? 'none' : 'transform 0.3s ease-out'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" opacity="0.2">
            <path d="M10,30 Q20,25 20,40 T30,45 T15,50 T10,30" fill="#4299e1" />
            <path d="M20,55 Q25,60 30,65 T25,75 T20,65 T20,55" fill="#9f7aea" />
            <path d="M45,30 Q50,25 55,30 T50,40 T45,35 T45,30" fill="#f687b3" />
            <path d="M45,45 Q55,45 55,60 T45,65 T40,55 T45,45" fill="#f6ad55" />
            <path d="M60,30 Q75,30 80,45 T70,55 T60,45 T60,30" fill="#68d391" />
            <path d="M75,65 Q85,65 85,75 T75,75 T75,65" fill="#4fd1c5" />
          </svg>

          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            {/* Linhas de conexão entre países */}
            {selectedCountry && (
              <>
                {countries.map((country) => (
                  country.id !== selectedCountry.id && (
                    <line
                      key={`line-${selectedCountry.id}-${country.id}`}
                      x1={selectedCountry.coordinates[0]}
                      y1={selectedCountry.coordinates[1]}
                      x2={country.coordinates[0]}
                      y2={country.coordinates[1]}
                      stroke="#a0aec0"
                      strokeWidth="0.2"
                      strokeDasharray="1,1"
                      opacity="0.3"
                    />
                  )
                ))}
                <line
                  x1={selectedCountry.coordinates[0]}
                  y1={selectedCountry.coordinates[1]}
                  x2={countries[0].coordinates[0]}
                  y2={countries[0].coordinates[1]}
                  stroke="#3182ce"
                  strokeWidth="0.5"
                  strokeDasharray="1,0.5"
                  opacity="0.7"
                />

                {/* Adiciona círculos de impacto quando um país é selecionado */}
                <circle
                  cx={selectedCountry.coordinates[0]}
                  cy={selectedCountry.coordinates[1]}
                  r="8"
                  fill="none"
                  stroke="#4299e1"
                  strokeWidth="0.2"
                  opacity="0.4"
                  className="animate-ping-slow"
                />
                <circle
                  cx={selectedCountry.coordinates[0]}
                  cy={selectedCountry.coordinates[1]}
                  r="12"
                  fill="none"
                  stroke="#4299e1"
                  strokeWidth="0.2"
                  opacity="0.3"
                  className="animate-ping-slow animation-delay-500"
                />
              </>
            )}
          </svg>

          {/* Renderiza todos os países */}
          {countries.map((country) => (
            <button
              key={country.id}
              onClick={() => setSelectedCountry(country)}
              onMouseEnter={() => setHoveredCountry(country)}
              onMouseLeave={() => setHoveredCountry(null)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 ${
                selectedCountry?.id === country.id ? 'scale-125 z-30' : 'hover:scale-110 z-10'
              }`}
              style={{
                left: `${country.coordinates[0]}%`,
                top: `${country.coordinates[1]}%`,
              }}
            >
              <div className="relative">
                <div
                  className={`w-3 h-3 rounded-full ${
                    selectedCountry?.id === country.id
                      ? 'bg-pink-500'
                      : country.id === 1
                      ? 'bg-green-500'
                      : 'bg-blue-500 group-hover:bg-purple-500'
                  }`}
                ></div>

                {(selectedCountry?.id === country.id || hoveredCountry?.id === country.id) && (
                  <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-pink-500 opacity-70 animate-ping"></div>
                )}

                {country.id === 1 && (
                  <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-green-500 opacity-50 animate-ping"></div>
                )}

                <div
                  className={`absolute ${
                    country.coordinates[1] > 70 ? 'bottom-full mb-1' : 'top-full mt-1'
                  } left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-medium px-2 py-1 rounded-md shadow-sm transition-all duration-200 ${
                    selectedCountry?.id === country.id
                      ? 'bg-pink-500 text-white scale-110'
                      : country.id === 1
                      ? 'bg-green-500 text-white'
                      : 'bg-white bg-opacity-90 text-gray-700 group-hover:bg-blue-500 group-hover:text-white'
                  }`}
                >
                  {country.name}
                  {country.id === 1 && <span className="ml-1 text-xs">• Sede</span>}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Controles de zoom */}
        <div className="absolute left-2 top-2 flex flex-col space-y-1">
          <button
            onClick={handleZoomIn}
            className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-gray-600 hover:bg-gray-100"
            title="Aumentar zoom"
          >
            <span className="text-xl font-bold">+</span>
          </button>
          <button
            onClick={handleZoomOut}
            className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-gray-600 hover:bg-gray-100"
            title="Diminuir zoom"
            disabled={zoomLevel <= 1}
          >
            <span className="text-xl font-bold">−</span>
          </button>
          <button
            onClick={handleReset}
            className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-gray-600 hover:bg-gray-100"
            title="Resetar visualização"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Botão de expandir/colapsar */}
        <button
          onClick={() => setIsMapExpanded(!isMapExpanded)}
          className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <ChevronDown
            className={`w-5 h-5 transform transition-transform ${isMapExpanded ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Legenda e informações */}
        <div className="absolute bottom-2 left-2 bg-white bg-opacity-90 p-2 rounded-lg shadow-sm">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center text-xs text-gray-600">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
              <span>Sede</span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
              <span>Centro de Processamento</span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <div className="w-2 h-2 rounded-full bg-pink-500 mr-1"></div>
              <span>Selecionado</span>
            </div>
          </div>
        </div>

        {/* Informação do país selecionado */}
        {selectedCountry && (
          <div className="absolute bottom-12 right-2 bg-white bg-opacity-95 p-3 rounded-lg shadow-md max-w-xs animate-fadeIn">
            <h3 className="font-bold text-gray-800 mb-1 flex items-center">
              {selectedCountry.name}
              {selectedCountry.id === 1 && <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Sede</span>}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {selectedCountry.description || `Centro de processamento localizado em ${selectedCountry.name}.`}
            </p>
            <div className="text-xs text-gray-500 flex items-center">
              <Info className="w-3 h-3 mr-1" />
              <span>Clique para mais detalhes</span>
            </div>
          </div>
        )}

        {/* Adicionar mais funcionalidades aqui */}
        {zoomLevel > 1 && (
          <div className="absolute top-2 right-2 bg-white bg-opacity-80 px-2 py-1 rounded text-xs text-gray-600">
            Zoom: {Math.round(zoomLevel * 100)}%
          </div>
        )}
      </div>

      {/* Barra de status ou mensagem informativa */}
      <div className="mt-4 text-center text-sm text-gray-500">
        {selectedCountry 
          ? `${selectedCountry.name} selecionado. Dados atualizados em: ${new Date().toLocaleDateString('pt-BR')}`
          : 'Selecione um país para ver detalhes sobre nossa operação.'}
      </div>

      {/* Estilos CSS customizados para adicionar à sua folha de estilos */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pingSlow {
          0% { transform: scale(0.5); opacity: 0.5; }
          50% { transform: scale(1); opacity: 0.2; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-ping-slow {
          animation: pingSlow 3s ease-in-out infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};