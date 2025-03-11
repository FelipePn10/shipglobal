import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Country } from '../data/countries';

interface ContactInfoProps {
  countries: Country[];
  selectedCountry: { code: string; name: string; localName: string } | null;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ countries, selectedCountry }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Informações de Contato</h2>

      <div className="space-y-6">
        <div className="flex items-start">
          <Mail className="text-pink-400 mr-4" size={24} />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p>contato@suaempresa.com</p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="text-yellow-400 mr-4" size={24} />
          <div>
            <h3 className="font-semibold">Telefone</h3>
            <p>+55 (00) 0000-0000</p>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="text-purple-400 mr-4" size={24} />
          <div>
            <h3 className="font-semibold">Endereço</h3>
            <p>Av. Principal, 1000</p>
            <p>São Paulo, Brasil</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Globe className="text-blue-500 mr-2" size={20} />
          Nossa Presença Global
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {countries.map((country) => (
            <div
              key={country.code}
              className={`p-2 rounded-lg transition-all duration-300 ${
                selectedCountry?.code === country.code ? 'bg-blue-100 shadow-md' : 'hover:bg-blue-50'
              }`}
            >
              <p className="font-medium">{country.name}</p>
              <p className="text-sm text-blue-600">{country.localName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};