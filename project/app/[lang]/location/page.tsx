"use client";

import { CountryDetails } from "./components/CountryDetails";
import { CountryList } from "./components/CountryList";
import { HeaderBanner } from "./components/HeaderBanner";
import { NavigationTabs } from "./components/NavigationTabs";
import { StatsAndInsights } from "./components/StatsAndInsights";
import { StatsSection } from "./components/StatsSection";
import { useLocations } from "./useLocations";



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
          {activeTab === 'list' && (
            <CountryList
              searchTerm={searchTerm}
              setSelectedCountry={setSelectedCountry} groupedCountries={{}} filteredCountries={[]}            />
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