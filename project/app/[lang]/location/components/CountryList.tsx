import React from 'react';
import { Globe, Clock, Info, ArrowRight } from 'lucide-react';
import { Country } from '../data/countries';

interface CountryListProps {
  groupedCountries: { [key: string]: Country[] };
  filteredCountries: Country[];
  searchTerm: string;
  setSelectedCountry: (country: Country) => void;
}

export const CountryList: React.FC<CountryListProps> = ({
  groupedCountries,
  filteredCountries,
  searchTerm,
  setSelectedCountry,
}) => {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Endereços Internacionais</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Escolha entre nossas múltiplas localizações para enviar e receber seus produtos
        </p>
      </div>

      {searchTerm ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <div
                key={country.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 cursor-pointer"
                onClick={() => setSelectedCountry(country)}
              >
                <div className={`h-2 ${country.id === 1 ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{country.name}</h3>
                      <p className="text-sm text-gray-500">{country.englishName}</p>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full">
                      {country.code}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Globe className="w-4 h-4 mr-2 text-blue-500" />
                      <span>{country.continent}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-blue-500" />
                      <span>{country.timeZone}</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors text-sm font-medium">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-10">
              <Info className="w-12 h-12 mx-auto text-gray-300 mb-2" />
              <p className="text-gray-500">Nenhum país encontrado com o termo "{searchTerm}".</p>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-10">
          {Object.entries(groupedCountries).map(([continent, countries]) => (
            <div key={continent}>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mr-2">
                  {continent.charAt(0)}
                </span>
                {continent}
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({countries.length} {countries.length === 1 ? 'país' : 'países'})
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {countries.map((country) => (
                  <div
                    key={country.id}
                    className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
                    onClick={() => setSelectedCountry(country)}
                  >
                    <div className="p-4 flex items-center">
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mr-3">
                        {country.code}
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{country.name}</div>
                        <div className="text-xs text-gray-500">{country.englishName}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 ml-auto text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

