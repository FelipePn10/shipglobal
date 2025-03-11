import React from 'react';
import { Globe, Clock, Users, Package } from 'lucide-react';
import { Country, getCountryBenefits } from '../data';

interface CountryDetailsProps {
  selectedCountry: Country;
  setSelectedCountry: (country: Country | null) => void;
}

export const CountryDetails: React.FC<CountryDetailsProps> = ({
  selectedCountry,
  setSelectedCountry,
}) => {
  const benefits = getCountryBenefits(selectedCountry);

  return (
    <div id="country-details" className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="w-24 h-24 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full text-2xl font-bold mb-4 mx-auto">
                {selectedCountry.code}
              </div>
              <h2 className="text-3xl font-bold text-gray-800 text-center">{selectedCountry.name}</h2>
              <p className="text-gray-500 text-center mt-2">{selectedCountry.englishName}</p>
            </div>

            <div className="md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-500" />
                  <span className="text-gray-600">
                    Continente: <span className="font-medium">{selectedCountry.continent}</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-500" />
                  <span className="text-gray-600">
                    Fuso: <span className="font-medium">{selectedCountry.timeZone}</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-500" />
                  <span className="text-gray-600">
                    População: <span className="font-medium">{selectedCountry.population}</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <Package className="w-5 h-5 mr-2 text-blue-500" />
                  <span className="text-gray-600">
                    Moeda: <span className="font-medium">{selectedCountry.currency}</span>
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Benefícios Locais</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3">{benefit.icon}</div>
                    <div>
                      <div className="font-medium text-gray-800">{benefit.title}</div>
                      <div className="text-sm text-gray-600">{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex space-x-4">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Usar este Endereço
                </button>
                <button
                  onClick={() => setSelectedCountry(null)}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};