"use client"

import { useEffect, useRef, useState } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5map from '@amcharts/amcharts5/map'
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Globe, MapPin, Navigation, Search, X, Info, ArrowLeft } from 'lucide-react'

export function CoverageMap() {
  const mapRef = useRef<am5.Root | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isInfoVisible, setIsInfoVisible] = useState(false)
  
  // Dados das localizações com informações mais detalhadas
  const locations: LocationData[] = [
    { 
      id: "usa", 
      title: "EUA", 
      latitude: 39.8283, 
      longitude: -98.5795, 
      image: "/api/placeholder/120/80", 
      address: "United States",
      services: ["Redirecionamento", "Consolidação", "Tax Free"],
      shippingDays: "3-5 dias",
      price: "A partir de $8.99",
      description: "Centro de distribuição principal com serviços completos para todo o território americano."
    },
    { 
      id: "uk", 
      title: "Reino Unido", 
      latitude: 54.3781, 
      longitude: -2.4360, 
      image: "/api/placeholder/120/80", 
      address: "United Kingdom",
      services: ["Redirecionamento", "Consolidação", "Tax Free"],
      shippingDays: "4-6 dias",
      price: "A partir de €9.99",
      description: "Centro estratégico para compras em lojas britânicas e europeias, com foco em produtos exclusivos." 
    },
    { 
      id: "china", 
      title: "China", 
      latitude: 35.8617, 
      longitude: 104.1954, 
      image: "/api/placeholder/120/80", 
      address: "China",
      services: ["Redirecionamento", "Consolidação", "Inspeção de Qualidade"],
      shippingDays: "8-12 dias",
      price: "A partir de $12.99",
      description: "Especializado em produtos eletrônicos e manufaturados, com serviço de inspeção detalhada."
    },
    { 
      id: "japan", 
      title: "Japão", 
      latitude: 36.2048, 
      longitude: 138.2529, 
      image: "/api/placeholder/120/80", 
      address: "Japan",
      services: ["Redirecionamento", "Compra Assistida"],
      shippingDays: "6-9 dias",
      price: "A partir de ¥1200",
      description: "Acesso a produtos exclusivos japoneses com assistência em tradução e compras."
    },
    { 
      id: "germany", 
      title: "Alemanha", 
      latitude: 51.1657, 
      longitude: 10.4515, 
      image: "/api/placeholder/120/80", 
      address: "Germany",
      services: ["Redirecionamento", "Consolidação", "Tax Free"],
      shippingDays: "4-7 dias",
      price: "A partir de €8.50",
      description: "Hub europeu com especialização em produtos automotivos e tecnológicos de alta qualidade."
    },
    { 
      id: "australia", 
      title: "Austrália", 
      latitude: -25.2744, 
      longitude: 133.7751, 
      image: "/api/placeholder/120/80", 
      address: "Australia",
      services: ["Redirecionamento", "Consolidação"],
      shippingDays: "9-12 dias",
      price: "A partir de A$14.50",
      description: "Atendimento para toda Oceania com foco em produtos naturais e marcas australianas."
    },
    { 
      id: "canada", 
      title: "Canadá", 
      latitude: 56.1304, 
      longitude: -106.3468, 
      image: "/api/placeholder/120/80", 
      address: "Canada",
      services: ["Redirecionamento", "Consolidação"],
      shippingDays: "4-6 dias",
      price: "A partir de C$10.99",
      description: "Alternativa econômica para compras norte-americanas com taxas reduzidas."
    },
    { 
      id: "spain", 
      title: "Espanha", 
      latitude: 40.4637, 
      longitude: -3.7492, 
      image: "/api/placeholder/120/80", 
      address: "Spain",
      services: ["Redirecionamento"],
      shippingDays: "5-8 dias",
      price: "A partir de €9.75",
      description: "Especializado em produtos mediterrâneos e moda espanhola."
    },
    { 
      id: "france", 
      title: "França", 
      latitude: 46.2276, 
      longitude: 2.2137, 
      image: "/api/placeholder/120/80", 
      address: "France",
      services: ["Redirecionamento", "Consolidação", "Tax Free", "Compra Assistida"],
      shippingDays: "4-7 dias",
      price: "A partir de €9.50",
      description: "Centro premium para produtos de luxo e alta gastronomia com assistência personalizada."
    },
    { 
      id: "italy", 
      title: "Itália", 
      latitude: 41.8719, 
      longitude: 12.5674, 
      image: "/api/placeholder/120/80", 
      address: "Italy",
      services: ["Redirecionamento", "Compra Assistida"],
      shippingDays: "5-8 dias",
      price: "A partir de €10.25",
      description: "Especializado em moda italiana, design e produtos artesanais exclusivos."
    },
    { 
      id: "portugal", 
      title: "Portugal", 
      latitude: 39.3999, 
      longitude: -8.2245, 
      image: "/api/placeholder/120/80", 
      address: "Portugal",
      services: ["Redirecionamento"],
      shippingDays: "6-9 dias",
      price: "A partir de €9.99",
      description: "Porta de entrada para produtos lusófonos e gateway para Europa."
    },
    { 
      id: "paraguay", 
      title: "Paraguai", 
      latitude: -23.4425, 
      longitude: -58.4438, 
      image: "/api/placeholder/120/80", 
      address: "Paraguay",
      services: ["Redirecionamento", "Tax Free"],
      shippingDays: "4-8 dias",
      price: "A partir de $7.99",
      description: "Opção econômica para importação com impostos reduzidos na América do Sul."
    },
    { 
      id: "turkey", 
      title: "Turquia", 
      latitude: 38.9637, 
      longitude: 35.2433, 
      image: "/api/placeholder/120/80", 
      address: "Turkey",
      services: ["Redirecionamento"],
      shippingDays: "7-10 dias",
      price: "A partir de ₺150",
      description: "Conexão entre Europa e Ásia com acesso a produtos únicos do mercado turco."
    },
    { 
      id: "brazil", 
      title: "Brasil", 
      latitude: -14.2350, 
      longitude: -51.9253, 
      image: "/api/placeholder/120/80", 
      address: "Brazil",
      services: ["Redirecionamento", "Armazenamento Estendido"],
      shippingDays: "1-3 dias",
      price: "A partir de R$25,00",
      description: "Centro de distribuição local com entregas rápidas para todo o território brasileiro."
    },
    { 
      id: "thailand", 
      title: "Tailândia", 
      latitude: 15.8700, 
      longitude: 100.9925, 
      image: "/api/placeholder/120/80", 
      address: "Thailand",
      services: ["Redirecionamento", "Consolidação"],
      shippingDays: "8-11 dias",
      price: "A partir de ฿350",
      description: "Acesso a produtos asiáticos com preços competitivos e opções de consolidação."
    },
    { 
      id: "belgium", 
      title: "Bélgica", 
      latitude: 50.5039, 
      longitude: 4.4699, 
      image: "/api/placeholder/120/80", 
      address: "Belgium",
      services: ["Redirecionamento", "Tax Free"],
      shippingDays: "4-7 dias",
      price: "A partir de €8.75",
      description: "Hub estratégico central na Europa com benefícios fiscais para envios internacionais."
    },
  ]

  const filteredLocations = searchQuery 
    ? locations.filter(loc => 
        loc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : locations;

  useEffect(() => {
    // Dispose do mapa anterior, se existir
    if (mapRef.current) {
      mapRef.current.dispose()
    }

    // Cria a raiz do amCharts
    const root = am5.Root.new("chartdiv")
    mapRef.current = root

    // Configurar tema e preferência de cor
    root.setThemes([am5themes_Animated.new(root)])
    
    // Configurações adicionais para responsividade
    root.fps = 60;
    root.numberFormatter.set("numberFormat", "#.#a");
    root.dateFormatter.set("dateFormat", "yyyy-MM-dd");

    // Cria o mapa
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "translateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
        maxZoomLevel: 16,
        minZoomLevel: 1,
        homeZoomLevel: 1.2,
        homeGeoPoint: { longitude: 10, latitude: 25 }
      })
    )

    // Configura o fundo do mapa com gradiente
    chart.set("background", am5.Rectangle.new(root, {
      fill: am5.color(0xF8FAFC),
      fillOpacity: 1
    }))

    // Adiciona a série de polígonos (países)
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"], // Exclui a Antártida
        fill: am5.color(0xE2E8F0),
        stroke: am5.color(0xFFFFFF)
      })
    )

    // Efeito de hover nos países
    polygonSeries.mapPolygons.template.setAll({
      templateField: "polygonSettings",
      interactive: true,
      cursorOverStyle: "pointer",
      tooltipText: "{name}"
    })

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x94A3B8)
    })

    // Destaca os países com localizações
    const includedCountries = locations.map(loc => loc.id.toUpperCase());
    
    // Configura os dados dos países
    polygonSeries.data.setAll(
      am5geodata_worldLow.features.map((feature) => {
        const id = feature.properties?.id ?? '';
        return {
          id: id,
          name: feature.properties?.name ?? '',
          polygonSettings: {
            fill: includedCountries.includes(id) 
              ? am5.color(0xCBD5E1) 
              : am5.color(0xE2E8F0)
          }
        };
      })
    );

    // Adiciona a série de pontos (marcadores)
    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        latitudeField: "latitude",
        longitudeField: "longitude"
      })
    )

    // Template do tooltip
    const tooltipHTML = `
      <div style="text-align:center; padding:8px; background:#FFFFFF; border-radius:8px; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
        <div style="font-weight:bold; font-size:14px; margin-bottom:3px; color:#1E293B;">{title}</div>
        <div style="font-size:12px; color:#64748B;">{address}</div>
      </div>
    `;

    // Configura os marcadores avançados
    pointSeries.bullets.push((root, series, dataItem) => {
      const container = am5.Container.new(root, {
        tooltipHTML: tooltipHTML,
        tooltipY: 0,
        cursorOverStyle: "pointer"
      });

      // Círculo de fundo de brilho
      const glow = container.children.push(am5.Circle.new(root, {
        radius: 14,
        fill: am5.color(0x3B82F6),
        fillOpacity: 0.2
      }));

      // Círculo principal
      const circle = container.children.push(am5.Circle.new(root, {
        radius: 7,
        fill: am5.color(0x3B82F6),
        stroke: am5.color(0xFFFFFF),
        strokeWidth: 2
      }));
      
      // Pulsar animação
      const pulseCircle = container.children.push(am5.Circle.new(root, {
        radius: 7,
        fill: am5.color(0x3B82F6),
        opacity: 0
      }));
      
      // Configura a animação de pulsar
      pulseCircle.animate({
        key: "radius",
        from: 7,
        to: 20,
        duration: 2000,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity
      });
      
      pulseCircle.animate({
        key: "opacity",
        from: 0.8,
        to: 0,
        duration: 2000,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity
      });

      // Efeito de hover
      container.states.create("hover", {
        scale: 1.2
      });

      // Evento de clique no marcador
      container.events.on("click", (ev) => {
        const dataContext = dataItem.dataContext as LocationData;
        if (dataContext) {
          // Aplica zoom na localização clicada
          chart.zoomToGeoPoint(
            { latitude: dataContext.latitude, longitude: dataContext.longitude },
            4,
            true
          );
          
          // Define a localização selecionada para mostrar detalhes
          setSelectedLocation(dataContext);
        }
      });

      return am5.Bullet.new(root, {
        sprite: container
      });
    });

    // Adiciona os dados das localizações
    pointSeries.data.setAll(locations);

    // Adiciona controles avançados de zoom
    const zoomControl = am5map.ZoomControl.new(root, {
      x: am5.p100,
      y: 30,
      centerX: am5.p100,
      layer: 30
    });
    chart.set("zoomControl", zoomControl);
    
    // Adiciona botão de home
    const homeButton = zoomControl.children.push(am5.Button.new(root, {
      paddingTop: 10,
      paddingBottom: 10,
      icon: am5.Graphics.new(root, {
        svgPath: "M16 8.4l-8-6.8-8 6.8V16h4.2v-3.8a1.68 1.68 0 0 1 1.7-1.7h4.2a1.68 1.68 0 0 1 1.7 1.7V16H16V8.4z",
        fill: am5.color(0x64748B)
      })
    }));
    
    homeButton.events.on("click", function() {
      chart.goHome();
      setSelectedLocation(null);
    });

    // Configurações de limitação de pan
    chart.set("maxPanOut", 0.6);

    // Animação inicial
    chart.appear(1000, 100);

    // Dispose ao desmontar o componente
    return () => {
      if (mapRef.current) {
        mapRef.current.dispose();
      }
    }
  }, []);

  const handleLocationSelect = (location: LocationData) => {
    setSelectedLocation(location);
    setIsSearchOpen(false);
    
    // Se tivermos acesso ao mapa, damos zoom na localização
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

  return (
    <div className="relative w-full bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative">
        {/* Título e controles */}
        <div className="absolute top-4 left-4 z-10 flex flex-col md:flex-row gap-2 md:items-center">
          <h2 className="flex items-center gap-2 text-xl font-bold text-blue-900 bg-white/90 py-1 px-3 rounded-lg shadow-sm">
            <Globe className="h-5 w-5 text-blue-600" />
            <span>Cobertura Global</span>
          </h2>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white/90 border-gray-200 hover:bg-white"
              onClick={() => setIsInfoVisible(!isInfoVisible)}
            >
              {isInfoVisible ? <X className="h-4 w-4 mr-1" /> : <Info className="h-4 w-4 mr-1" />}
              {isInfoVisible ? "Fechar" : "Sobre"}
            </Button>
            
            <div className="relative">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-white/90 border-gray-200 hover:bg-white"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                {isSearchOpen ? <X className="h-4 w-4 mr-1" /> : <Search className="h-4 w-4 mr-1" />}
                {isSearchOpen ? "Fechar" : "Buscar"}
              </Button>
              
              {isSearchOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 md:w-96 bg-white rounded-lg shadow-lg p-4 z-20">
                  <div className="relative mb-3">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Buscar por país ou serviço..."
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
                      <p className="text-sm text-gray-500 text-center py-2">Nenhum resultado encontrado</p>
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
            <h3 className="font-bold text-lg mb-2 text-blue-900">Sobre Nossa Cobertura</h3>
            <p className="text-sm text-gray-600 mb-3">
              Nossa rede global de centros de distribuição permite que você compre em mais de 16 países ao redor do mundo, com serviços personalizados para cada região.
            </p>
            <div className="mb-3">
              <h4 className="font-medium text-sm text-blue-800 mb-1">Serviços Disponíveis:</h4>
              <div className="flex flex-wrap gap-1">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Redirecionamento</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Consolidação</Badge>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Tax Free</Badge>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Compra Assistida</Badge>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Clique nos marcadores do mapa para ver detalhes específicos de cada localização. Todos os centros operam 24/7 com rastreamento em tempo real.
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-2 w-full"
              onClick={() => setIsInfoVisible(false)}
            >
              Entendi
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
                Voltar
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
                <Badge className="bg-blue-100 text-blue-800">
                  {selectedLocation.shippingDays}
                </Badge>
              </div>
              
              <p className="text-sm text-gray-700 mb-3">{selectedLocation.description}</p>
              
              <div className="mb-3">
                <h4 className="text-xs font-medium text-gray-500 mb-1">SERVIÇOS DISPONÍVEIS</h4>
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
                  Usar este endereço
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Legenda do mapa */}
        <div className="absolute bottom-4 left-4 z-10 bg-white/90 px-3 py-2 rounded-lg shadow-sm text-xs flex items-center gap-2">
          <span className="flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
            Centro de Distribuição
          </span>
          <span className="flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-gray-400 mr-1"></span>
            Outros Países
          </span>
        </div>
        
        {/* Container do mapa */}
        <div id="chartdiv" className="w-full h-[500px] md:h-[650px] lg:h-[700px]" />
      </div>
    </div>
  )
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