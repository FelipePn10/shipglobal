"use client";

import React from 'react';
import { HeaderBanner } from './components/HeaderBanner';
import { StatsSection } from './components/StatsSection';
import { NavigationTabs } from './components/NavigationTabs';
import { InteractiveMap } from './components/InteractiveMap';
import { CountryList } from './components/CountryList';
import { StatsAndInsights } from './components/StatsAndInsights';
import { CountryDetails } from './components/CountryDetails';
import { countries } from './data/countries';
import { shippingStats } from './data/shipping';
import { useLocations } from './useLocations';

export default function LocationsPage() {
  const {
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
  } = useLocations();

  return (
    <div className="min-h-screen bg-white font-sans">
      <HeaderBanner />
      <StatsSection continents={Object.keys(groupedCountries).length} />
      <NavigationTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          {activeTab === 'map' && (
            <InteractiveMap
              countries={countries}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              isMapExpanded={isMapExpanded}
              setIsMapExpanded={setIsMapExpanded}
              hoveredCountry={hoveredCountry}
              setHoveredCountry={setHoveredCountry}
            />
          )}
          {activeTab === 'list' && (
            <CountryList
              groupedCountries={groupedCountries}
              filteredCountries={filteredCountries}
              searchTerm={searchTerm}
              setSelectedCountry={setSelectedCountry}
            />
          )}
          {activeTab === 'stats' && <StatsAndInsights />}
        </div>
      </div>
      {selectedCountry && (
        <CountryDetails
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      )}
    </div>
  );
}