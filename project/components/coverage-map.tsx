"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, MapPin, Navigation, Search, X, Info, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'next-i18next';

export function CoverageMap() {
  const { t } = useTranslation('common');
  const mapRef = useRef<am5.Root | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Novo estado para verificar montagem no cliente

  // Garante que o componente só renderiza o mapa após estar montado no cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Dados das localizações com informações traduzidas
  const locations = useMemo(
    () => [
      {
        id: 'usa',
        title: t('locations.usa.title'),
        latitude: 39.8283,
        longitude: -98.5795,
        image: '/api/placeholder/120/80',
        address: t('locations.usa.address'),
        services: [t('services.forwarding'), t('services.consolidation'), t('services.taxFree')],
        shippingDays: `3-5 ${t('days')}`,
        price: t('startingFrom', { price: '$8.99' }),
        description: t('locations.usa.description'),
      },
      {
        id: 'uk',
        title: t('locations.uk.title'),
        latitude: 54.3781,
        longitude: -2.4360,
        image: '/api/placeholder/120/80',
        address: t('locations.uk.address'),
        services: [t('services.forwarding'), t('services.consolidation'), t('services.taxFree')],
        shippingDays: `4-6 ${t('days')}`,
        price: t('startingFrom', { price: '€9.99' }),
        description: t('locations.uk.description'),
      },
      {
        id: 'china',
        title: t('locations.china.title'),
        latitude: 35.8617,
        longitude: 104.1954,
        image: '/api/placeholder/120/80',
        address: t('locations.china.address'),
        services: [t('services.forwarding'), t('services.consolidation'), t('services.qualityInspection')],
        shippingDays: `8-12 ${t('days')}`,
        price: t('startingFrom', { price: '$12.99' }),
        description: t('locations.china.description'),
      },
      {
        id: 'japan',
        title: t('locations.japan.title'),
        latitude: 36.2048,
        longitude: 138.2529,
        image: '/api/placeholder/120/80',
        address: t('locations.japan.address'),
        services: [t('services.forwarding'), t('services.assistedPurchase')],
        shippingDays: `6-9 ${t('days')}`,
        price: t('startingFrom', { price: '¥1200' }),
        description: t('locations.japan.description'),
      },
      {
        id: 'germany',
        title: t('locations.germany.title'),
        latitude: 51.1657,
        longitude: 10.4515,
        image: '/api/placeholder/120/80',
        address: t('locations.germany.address'),
        services: [t('services.forwarding'), t('services.consolidation'), t('services.taxFree')],
        shippingDays: `4-7 ${t('days')}`,
        price: t('startingFrom', { price: '€8.50' }),
        description: t('locations.germany.description'),
      },
      {
        id: 'australia',
        title: t('locations.australia.title'),
        latitude: -25.2744,
        longitude: 133.7751,
        image: '/api/placeholder/120/80',
        address: t('locations.australia.address'),
        services: [t('services.forwarding'), t('services.consolidation')],
        shippingDays: `9-12 ${t('days')}`,
        price: t('startingFrom', { price: 'A$14.50' }),
        description: t('locations.australia.description'),
      },
      {
        id: 'canada',
        title: t('locations.canada.title'),
        latitude: 56.1304,
        longitude: -106.3468,
        image: '/api/placeholder/120/80',
        address: t('locations.canada.address'),
        services: [t('services.forwarding'), t('services.consolidation')],
        shippingDays: `4-6 ${t('days')}`,
        price: t('startingFrom', { price: 'C$10.99' }),
        description: t('locations.canada.description'),
      },
      {
        id: 'spain',
        title: t('locations.spain.title'),
        latitude: 40.4637,
        longitude: -3.7492,
        image: '/api/placeholder/120/80',
        address: t('locations.spain.address'),
        services: [t('services.forwarding')],
        shippingDays: `5-8 ${t('days')}`,
        price: t('startingFrom', { price: '€9.75' }),
        description: t('locations.spain.description'),
      },
      {
        id: 'france',
        title: t('locations.france.title'),
        latitude: 46.2276,
        longitude: 2.2137,
        image: '/api/placeholder/120/80',
        address: t('locations.france.address'),
        services: [t('services.forwarding'), t('services.consolidation'), t('services.taxFree'), t('services.assistedPurchase')],
        shippingDays: `4-7 ${t('days')}`,
        price: t('startingFrom', { price: '€9.50' }),
        description: t('locations.france.description'),
      },
      {
        id: 'italy',
        title: t('locations.italy.title'),
        latitude: 41.8719,
        longitude: 12.5674,
        image: '/api/placeholder/120/80',
        address: t('locations.italy.address'),
        services: [t('services.forwarding'), t('services.assistedPurchase')],
        shippingDays: `5-8 ${t('days')}`,
        price: t('startingFrom', { price: '€10.25' }),
        description: t('locations.italy.description'),
      },
      {
        id: 'portugal',
        title: t('locations.portugal.title'),
        latitude: 39.3999,
        longitude: -8.2245,
        image: '/api/placeholder/120/80',
        address: t('locations.portugal.address'),
        services: [t('services.forwarding')],
        shippingDays: `6-9 ${t('days')}`,
        price: t('startingFrom', { price: '€9.99' }),
        description: t('locations.portugal.description'),
      },
      {
        id: 'paraguay',
        title: t('locations.paraguay.title'),
        latitude: -23.4425,
        longitude: -58.4438,
        image: '/api/placeholder/120/80',
        address: t('locations.paraguay.address'),
        services: [t('services.forwarding'), t('services.taxFree')],
        shippingDays: `4-8 ${t('days')}`,
        price: t('startingFrom', { price: '$7.99' }),
        description: t('locations.paraguay.description'),
      },
      {
        id: 'turkey',
        title: t('locations.turkey.title'),
        latitude: 38.9637,
        longitude: 35.2433,
        image: '/api/placeholder/120/80',
        address: t('locations.turkey.address'),
        services: [t('services.forwarding')],
        shippingDays: `7-10 ${t('days')}`,
        price: t('startingFrom', { price: '₺150' }),
        description: t('locations.turkey.description'),
      },
      {
        id: 'brazil',
        title: t('locations.brazil.title'),
        latitude: -14.2350,
        longitude: -51.9253,
        image: '/api/placeholder/120/80',
        address: t('locations.brazil.address'),
        services: [t('services.forwarding'), t('services.extendedStorage')],
        shippingDays: `1-3 ${t('days')}`,
        price: t('startingFrom', { price: 'R$25,00' }),
        description: t('locations.brazil.description'),
      },
      {
        id: 'thailand',
        title: t('locations.thailand.title'),
        latitude: 15.8700,
        longitude: 100.9925,
        image: '/api/placeholder/120/80',
        address: t('locations.thailand.address'),
        services: [t('services.forwarding'), t('services.consolidation')],
        shippingDays: `8-11 ${t('days')}`,
        price: t('startingFrom', { price: '฿350' }),
        description: t('locations.thailand.description'),
      },
      {
        id: 'belgium',
        title: t('locations.belgium.title'),
        latitude: 50.5039,
        longitude: 4.4699,
        image: '/api/placeholder/120/80',
        address: t('locations.belgium.address'),
        services: [t('services.forwarding'), t('services.taxFree')],
        shippingDays: `4-7 ${t('days')}`,
        price: t('startingFrom', { price: '€8.75' }),
        description: t('locations.belgium.description'),
      },
    ],
    [t]
  );

  // Filtra as localizações com base na pesquisa
  const filteredLocations = searchQuery
    ? locations.filter((loc) =>
        loc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.services.some((service) => service.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : locations;

  // Configura o mapa apenas no cliente
  useEffect(() => {
    if (!isMounted) return; // Só executa após montagem no cliente

    if (mapRef.current) {
      mapRef.current.dispose();
    }

    const root = am5.Root.new('chartdiv');
    mapRef.current = root;

    root.setThemes([am5themes_Animated.new(root)]);
    root.fps = 60;
    root.numberFormatter.set('numberFormat', '#.#a');
    root.dateFormatter.set('dateFormat', 'yyyy-MM-dd');

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: 'translateX',
        panY: 'translateY',
        projection: am5map.geoMercator(),
        maxZoomLevel: 16,
        minZoomLevel: 1,
        homeZoomLevel: 1.2,
        homeGeoPoint: { longitude: 10, latitude: 25 },
      })
    );

    chart.set('background', am5.Rectangle.new(root, {
      fill: am5.color(0xF8FAFC),
      fillOpacity: 1,
    }));

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ['AQ'],
        fill: am5.color(0xE2E8F0),
        stroke: am5.color(0xFFFFFF),
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      templateField: 'polygonSettings',
      interactive: true,
      cursorOverStyle: 'pointer',
      tooltipText: '{name}',
    });

    polygonSeries.mapPolygons.template.states.create('hover', {
      fill: am5.color(0x94A3B8),
    });

    const includedCountries = locations.map((loc) => loc.id.toUpperCase());
    polygonSeries.data.setAll(
      am5geodata_worldLow.features.map((feature) => {
        const id = feature.properties?.id ?? '';
        return {
          id: id,
          name: feature.properties?.name ?? '',
          polygonSettings: {
            fill: includedCountries.includes(id)
              ? am5.color(0xCBD5E1)
              : am5.color(0xE2E8F0),
          },
        };
      })
    );

    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        latitudeField: 'latitude',
        longitudeField: 'longitude',
      })
    );

    const tooltipHTML = `
      <div style="text-align:center; padding:8px; background:#FFFFFF; border-radius:8px; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
        <div style="font-weight:bold; font-size:14px; margin-bottom:3px; color:#1E293B;">{title}</div>
        <div style="font-size:12px; color:#64748B;">{address}</div>
      </div>
    `;

    pointSeries.bullets.push((root, series, dataItem) => {
      const container = am5.Container.new(root, {
        tooltipHTML: tooltipHTML,
        tooltipY: 0,
        cursorOverStyle: 'pointer',
      });

      const glow = container.children.push(
        am5.Circle.new(root, {
          radius: 14,
          fill: am5.color(0x3B82F6),
          fillOpacity: 0.2,
        })
      );

      const circle = container.children.push(
        am5.Circle.new(root, {
          radius: 7,
          fill: am5.color(0x3B82F6),
          stroke: am5.color(0xFFFFFF),
          strokeWidth: 2,
        })
      );

      const pulseCircle = container.children.push(
        am5.Circle.new(root, {
          radius: 7,
          fill: am5.color(0x3B82F6),
          opacity: 0,
        })
      );

      pulseCircle.animate({
        key: 'radius',
        from: 7,
        to: 20,
        duration: 2000,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity,
      });

      pulseCircle.animate({
        key: 'opacity',
        from: 0.8,
        to: 0,
        duration: 2000,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity,
      });

      container.states.create('hover', { scale: 1.2 });

      container.events.on('click', (ev) => {
        const dataContext = dataItem.dataContext as LocationData;
        if (dataContext) {
          chart.zoomToGeoPoint(
            { latitude: dataContext.latitude, longitude: dataContext.longitude },
            4,
            true
          );
          setSelectedLocation(dataContext);
        }
      });

      return am5.Bullet.new(root, { sprite: container });
    });

    pointSeries.data.setAll(locations);

    const zoomControl = am5map.ZoomControl.new(root, {
      x: am5.p100,
      y: 30,
      centerX: am5.p100,
      layer: 30,
    });
    chart.set('zoomControl', zoomControl);

    const homeButton = zoomControl.children.push(
      am5.Button.new(root, {
        paddingTop: 10,
        paddingBottom: 10,
        icon: am5.Graphics.new(root, {
          svgPath: 'M16 8.4l-8-6.8-8 6.8V16h4.2v-3.8a1.68 1.68 0 0 1 1.7-1.7h4.2a1.68 1.68 0 0 1 1.7 1.7V16H16V8.4z',
          fill: am5.color(0x64748B),
        }),
      })
    );

    homeButton.events.on('click', () => {
      chart.goHome();
      setSelectedLocation(null);
    });

    chart.set('maxPanOut', 0.6);
    chart.appear(1000, 100);

    return () => {
      if (mapRef.current) {
        mapRef.current.dispose();
      }
    };
  }, [isMounted, locations]);

  const handleLocationSelect = (location: LocationData) => {
    setSelectedLocation(location);
    setIsSearchOpen(false);

    if (mapRef.current) {
      const chart = mapRef.current.container.children.getIndex(0) as am5map.MapChart;
      if (chart) {
        chart.zoomToGeoPoint(
          { latitude: location.latitude, longitude: location.longitude },
          4,
          true
        );
      }
    }
  };

  // Evita renderizar o mapa no servidor
  if (!isMounted) {
    return (
      <div className="w-full h-[500px] md:h-[650px] lg:h-[700px] bg-gray-100 flex items-center justify-center">
        <p>{t('coverageMap.loading')}</p>
      </div>
    );
  }

  return (
    <div className="relative w-full bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative">
        {/* Título e controles */}
        <div className="absolute top-4 left-4 z-10 flex flex-col md:flex-row gap-2 md:items-center">
          <h2 className="flex items-center gap-2 text-xl font-bold text-blue-900 bg-white/90 py-1 px-3 rounded-lg shadow-sm">
            <Globe className="h-5 w-5 text-blue-600" />
            <span>{t('coverageMap.title')}</span>
          </h2>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/90 border-gray-200 hover:bg-white"
              onClick={() => setIsInfoVisible(!isInfoVisible)}
            >
              {isInfoVisible ? <X className="h-4 w-4 mr-1" /> : <Info className="h-4 w-4 mr-1" />}
              {isInfoVisible ? t('coverageMap.closeButton') : t('coverageMap.infoButton')}
            </Button>

            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/90 border-gray-200 hover:bg-white"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                {isSearchOpen ? <X className="h-4 w-4 mr-1" /> : <Search className="h-4 w-4 mr-1" />}
                {isSearchOpen ? t('coverageMap.closeButton') : t('coverageMap.searchButton')}
              </Button>

              {isSearchOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 md:w-96 bg-white rounded-lg shadow-lg p-4 z-20">
                  <div className="relative mb-3">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t('coverageMap.searchPlaceholder')}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  </div>

                  <div className="max-h-64 overflow-y-auto">
                    {filteredLocations.length > 0 ? (
                      <ul className="space-y-2">
                        {filteredLocations.map((location) => (
                          <li
                            key={location.id}
                            onClick={() => handleLocationSelect(location)}
                            className="flex items-center gap-3 p-2 rounded-md hover:bg-blue-50 cursor-pointer"
                          >
                            <MapPin className="h-4 w-4 text-blue-500" />
                            <div>
                              <p className="font-medium text-gray-900">{location.title}</p>
                              <p className="text-xs text-gray-500">{location.address}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-500 text-center py-2">{t('coverageMap.noResults')}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Info Box */}
        {isInfoVisible && (
          <div className="absolute top-16 left-4 z-10 w-72 md:w-96 bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-bold text-lg mb-2 text-blue-900">{t('coverageMap.infoTitle')}</h3>
            <p className="text-sm text-gray-600 mb-3">{t('coverageMap.infoDescription')}</p>
            <div className="mb-3">
              <h4 className="font-medium text-sm text-blue-800 mb-1">{t('coverageMap.availableServices')}</h4>
              <div className="flex flex-wrap gap-1">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{t('services.forwarding')}</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{t('services.consolidation')}</Badge>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">{t('services.taxFree')}</Badge>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">{t('services.assistedPurchase')}</Badge>
              </div>
            </div>
            <p className="text-xs text-gray-500">{t('coverageMap.infoFooter')}</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-2 w-full"
              onClick={() => setIsInfoVisible(false)}
            >
              {t('coverageMap.understandButton')}
            </Button>
          </div>
        )}

        {/* Painel de detalhes da localização */}
        {selectedLocation && (
          <Card className="absolute bottom-4 right-4 z-10 w-72 md:w-96 bg-white shadow-lg overflow-hidden">
            <div className="relative h-28 bg-gradient-to-r from-blue-600 to-blue-800">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 left-2 text-white hover:bg-white/20"
                onClick={() => setSelectedLocation(null)}
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                {t('coverageMap.backButton')}
              </Button>
              <div className="absolute -bottom-10 left-4 w-20 h-20 rounded-full bg-white p-1 shadow-lg">
                <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">{selectedLocation.title.charAt(0)}</span>
                </div>
              </div>
            </div>

            <CardContent className="pt-12 pb-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{selectedLocation.title}</h3>
                  <p className="text-sm text-gray-500 flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {selectedLocation.address}
                  </p>
                </div>
                <Badge className="bg-blue-100 text-blue-800">{selectedLocation.shippingDays}</Badge>
              </div>

              <p className="text-sm text-gray-700 mb-3">{selectedLocation.description}</p>

              <div className="mb-3">
                <h4 className="text-xs font-medium text-gray-500 mb-1">{t('coverageMap.servicesLabel')}</h4>
                <div className="flex flex-wrap gap-1">
                  {selectedLocation.services.map((service, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-sm font-bold text-blue-800">{selectedLocation.price}</p>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Navigation className="h-3 w-3 mr-1" />
                  {t('coverageMap.useAddressButton')}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Legenda do mapa */}
        <div className="absolute bottom-4 left-4 z-10 bg-white/90 px-3 py-2 rounded-lg shadow-sm text-xs flex items-center gap-2">
          <span className="flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
            {t('coverageMap.legendDistribution')}
          </span>
          <span className="flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-gray-400 mr-1"></span>
            {t('coverageMap.legendOtherCountries')}
          </span>
        </div>

        {/* Container do mapa */}
        <div id="chartdiv" className="w-full h-[500px] md:h-[650px] lg:h-[700px]" />
      </div>
    </div>
  );
}

// TypeScript interface
interface LocationData {
  id: string;
  title: string;
  latitude: number;
  longitude: number;
  image: string;
  address: string;
  services: string[];
  shippingDays: string;
  price: string;
  description: string;
}