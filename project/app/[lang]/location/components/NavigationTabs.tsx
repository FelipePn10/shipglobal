import React from 'react';
import { Globe, MapPin, TrendingUp } from 'lucide-react';

interface NavigationTabsProps {
  activeTab: 'map' | 'list' | 'stats';
  setActiveTab: (tab: 'map' | 'list' | 'stats') => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({
  activeTab,
  setActiveTab,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="bg-white border-b sticky top-0 z-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center py-4">
          <div className="flex space-x-2 mb-4 md:mb-0">
            <button
              onClick={() => setActiveTab('map')}
              className={`px-4 py-3 font-medium rounded-t-lg transition-all duration-200 ${
                activeTab === 'map'
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Mapa Interativo
              </div>
            </button>
            <button
              onClick={() => setActiveTab('list')}
              className={`px-4 py-3 font-medium rounded-t-lg transition-all duration-200 ${
                activeTab === 'list'
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Lista de Países
              </div>
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-4 py-3 font-medium rounded-t-lg transition-all duration-200 ${
                activeTab === 'stats'
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Estatísticas
              </div>
            </button>
          </div>

          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Buscar país..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};