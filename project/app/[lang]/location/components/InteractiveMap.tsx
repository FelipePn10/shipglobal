import React from 'react';
import { ChevronDown } from 'lucide-react';
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
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Nossa Rede Global</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Clique nos países para obter mais informações sobre nossos serviços em cada localização
        </p>
      </div>

      <div
        className={`relative mx-auto transition-all duration-500 ease-in-out ${
          isMapExpanded ? 'h-96 md:h-120' : 'h-64 md:h-80'
        } max-w-5xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg border border-blue-100`}
      >
        <div className="absolute inset-0 p-4">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" opacity="0.2">
            <path d="M10,30 Q20,25 20,40 T30,45 T15,50 T10,30" fill="#4299e1" />
            <path d="M20,55 Q25,60 30,65 T25,75 T20,65 T20,55" fill="#9f7aea" />
            <path d="M45,30 Q50,25 55,30 T50,40 T45,35 T45,30" fill="#f687b3" />
            <path d="M45,45 Q55,45 55,60 T45,65 T40,55 T45,45" fill="#f6ad55" />
            <path d="M60,30 Q75,30 80,45 T70,55 T60,45 T60,30" fill="#68d391" />
            <path d="M75,65 Q85,65 85,75 T75,75 T75,65" fill="#4fd1c5" />
          </svg>

          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
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
              </>
            )}
          </svg>

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
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 whitespace-nowrap text-xs font-medium px-2 py-1 rounded-md shadow-sm ${
                    selectedCountry?.id === country.id
                      ? 'bg-pink-500 text-white'
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

        <button
          onClick={() => setIsMapExpanded(!isMapExpanded)}
          className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <ChevronDown
            className={`w-5 h-5 transform transition-transform ${isMapExpanded ? 'rotate-180' : ''}`}
          />
        </button>

        <div className="absolute bottom-2 left-2 bg-white bg-opacity-90 p-2 rounded-lg shadow-sm">
          <div className="flex items-center text-xs text-gray-600 mb-1">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
            <span>Sede</span>
          </div>
          <div className="flex items-center text-xs text-gray-600">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
            <span>Centro de Processamento</span>
          </div>
        </div>
      </div>
    </div>
  );
};