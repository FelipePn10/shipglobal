"use client"

import { useEffect, useRef } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5map from '@amcharts/amcharts5/map'
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

export function CoverageMap() {
  const mapRef = useRef<am5.Root | null>(null)

  useEffect(() => {
    // Dispose do mapa anterior, se existir
    if (mapRef.current) {
      mapRef.current.dispose()
    }

    // Cria a raiz do amCharts
    const root = am5.Root.new("chartdiv")
    mapRef.current = root

    // Aplica o tema animado
    root.setThemes([am5themes_Animated.new(root)])

    // Cria o mapa
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "translateX",
        panY: "translateY",
        projection: am5map.geoMercator(), // Projeção mais comum
        maxZoomLevel: 8,
        homeZoomLevel: 1.5, // Zoom inicial
        homeGeoPoint: { longitude: 10, latitude: 30 } // Centraliza o mapa
      })
    )

    // Configura o fundo do mapa
    chart.set("background", am5.Rectangle.new(root, {
      fill: am5.color(0xFFFFfffff) // Fundo cinza claro
    }))

    // Adiciona a série de polígonos (países)
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"], // Exclui a Antártida
        fill: am5.color(0xDDE4EC), // Cor dos países
        stroke: am5.color(0xFFFFFF), // Cor das bordas
        //strokeWidth: 0.5 // Espessura das bordas
      })
    )

    // Efeito de hover nos países
    polygonSeries.mapPolygons.template.setAll({
      interactive: true,
      cursorOverStyle: "pointer"
    })

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x1E88E5) // Cor ao passar o mouse
    })

    // Adiciona a série de pontos (marcadores)
    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        latitudeField: "latitude",
        longitudeField: "longitude"
      })
    )

    // Dados das localizações
    const locations = [
      { title: "EUA", latitude: 39.8283, longitude: -98.5795, image: "url_to_image_eua.jpg", address: "United States" },
      { title: "Reino Unido", latitude: 54.3781, longitude: -2.4360, image: "url_to_image_uk.jpg", address: "United Kingdom" },
      { title: "China", latitude: 35.8617, longitude: 104.1954, image: "url_to_image_china.jpg", address: "China" },
      { title: "Japão", latitude: 36.2048, longitude: 138.2529, image: "url_to_image_japan.jpg", address: "Japan" },
      { title: "Alemanha", latitude: 51.1657, longitude: 10.4515, image: "url_to_image_germany.jpg", address: "Germany" },
      { title: "Austrália", latitude: -25.2744, longitude: 133.7751, image: "url_to_image_aus.jpg", address: "Australia" },
      { title: "Canadá", latitude: 56.1304, longitude: -106.3468, image: "url_to_image_canada.jpg", address: "Canada" },
      { title: "Espanha", latitude: 40.4637, longitude: -3.7492, image: "url_to_image_spain.jpg", address: "Spain" },
      { title: "França", latitude: 46.2276, longitude: 2.2137, image: "url_to_image_france.jpg", address: "France" },
      { title: "Itália", latitude: 41.8719, longitude: 12.5674, image: "url_to_image_italy.jpg", address: "Italy" },
      { title: "Portugal", latitude: 39.3999, longitude: -8.2245, image: "url_to_image_portugal.jpg", address: "Portugal" },
      { title: "Paraguai", latitude: -23.4425, longitude: -58.4438, image: "url_to_image_paraguay.jpg", address: "Paraguay" },
      { title: "Turquia", latitude: 38.9637, longitude: 35.2433, image: "url_to_image_turkey.jpg", address: "Turkey" },
      { title: "Brasil", latitude: -14.2350, longitude: -51.9253, image: "url_to_image_brazil.jpg", address: "Brazil" },
      { title: "Tailândia", latitude: 15.8700, longitude: 100.9925, image: "url_to_image_thailand.jpg", address: "Thailand" },
      { title: "Bélgica", latitude: 50.5039, longitude: 4.4699, image: "url_to_image_belgium.jpg", address: "Belgium" },
    ]

    // Configura os marcadores
    pointSeries.bullets.push((root, series, dataItem) => {
      const circle = am5.Circle.new(root, {
        radius: 6,
        tooltipText: "{title}\n{address}",
        tooltipY: 0,
        fill: am5.color(0xFF6F61), // Cor dos marcadores
        stroke: am5.color(0xFFFFFF), // Borda dos marcadores
        strokeWidth: 2,
        cursorOverStyle: "pointer" // Mostra o cursor de clique
      })

      // Efeito de hover nos marcadores
      circle.states.create("hover", {
        scale: 1.5,
        fill: am5.color(0x1565C0)
      })

      // Evento de clique no marcador
      circle.events.on("click", () => {
        const dataContext = dataItem.dataContext as { latitude: number; longitude: number }
        if (dataContext) {
          // Aplica zoom na localização clicada
          chart.zoomToGeoPoint(
            { latitude: dataContext.latitude, longitude: dataContext.longitude },
            chart.get("zoomLevel", 4), // Nível de zoom
            true // Animação suave
          )
        }
      })

      return am5.Bullet.new(root, {
        sprite: circle
      })
    })

    // Adiciona os dados das localizações
    pointSeries.data.setAll(locations)

    // Adiciona controle de zoom
    chart.set("zoomControl", am5map.ZoomControl.new(root, {}))

    // Configura o nível máximo de zoom e pan
    chart.set("maxZoomLevel", 8)
    chart.set("maxPanOut", 0.8)

    // Animação inicial
    chart.animate({
      key: "rotationX",
      from: 0,
      to: 0,
      duration: 1500,
      easing: am5.ease.inOut(am5.ease.cubic)
    })

    // Dispose ao desmontar o componente
    return () => {
      if (mapRef.current) {
        mapRef.current.dispose()
      }
    }
  }, [])

  return (
    <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
      <div id="chartdiv" className="w-full h-[500px] md:h-[600px]" />
    </div>
  )
}