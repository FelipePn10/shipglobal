import { useState, useEffect } from 'react';
import { countries, Country } from './data';

export const useLocations = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'map' | 'list' | 'stats'>('map');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredCountry, setHoveredCountry] = useState<Country | null>(null);

  // Agrupar países por continente
  const groupedCountries = countries.reduce((acc: { [key: string]: Country[] }, country) => {
    if (!acc[country.continent]) {
      acc[country.continent] = [];
    }
    acc[country.continent].push(country);
    return acc;
  }, {});

  // Filtrar países com base na busca
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Efeito para rolar até os detalhes do país selecionado
  useEffect(() => {
    if (selectedCountry) {
      const timer = setTimeout(() => {
        document
          .getElementById('country-details')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [selectedCountry]);

  return {
    selectedCountry,
    setSelectedCountry,
    isMapExpanded,
    setIsMapExpanded,
    activeTab,
    setActiveTab,
    searchTerm,
    setSearchTerm,
    hoveredCountry,
    setHoveredCountry,
    groupedCountries,
    filteredCountries,
  };
};