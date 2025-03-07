"use client"

import { useEffect, useRef } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5map from '@amcharts/amcharts5/map'
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

export function CoverageMap() {
  const mapRef = useRef<am5.Root | null>(null)

  useEffect(() => {
    // Dispose of the previous map instance
    if (mapRef.current) {
      mapRef.current.dispose()
    }

    // Create root element
    const root = am5.Root.new("chartdiv")
    mapRef.current = root

    // Set themes
    root.setThemes([am5themes_Animated.new(root)])

    // Create the map chart
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "translateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
        maxZoomLevel: 32
      })
    )

    // Create main polygon series
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
        fill: am5.color(0xDDDDDD),
        stroke: am5.color(0xFFFFFF)
      })
    )

    // Create point series for markers
    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {})
    )

    // Define shipping locations
    const locations = [
      { title: "EUA", latitude: 39.8283, longitude: -98.5795 },
      { title: "Reino Unido", latitude: 55.3781, longitude: -3.4360 },
      { title: "China", latitude: 35.8617, longitude: 104.1954 },
      { title: "Japão", latitude: 36.2048, longitude: 138.2529 },
      { title: "Alemanha", latitude: 51.1657, longitude: 10.4515 },
      { title: "Austrália", latitude: -25.2744, longitude: 133.7751 },
      { title: "Canadá", latitude: 56.1304, longitude: -106.3468 },
      { title: "Coreia do Sul", latitude: 35.9078, longitude: 127.7669 },
      { title: "Espanha", latitude: 40.4637, longitude: -3.7492 },
      { title: "França", latitude: 46.2276, longitude: 2.2137 },
      { title: "Itália", latitude: 41.8719, longitude: 12.5674 },
      { title: "México", latitude: 23.6345, longitude: -102.5528 },
      { title: "Portugal", latitude: 39.3999, longitude: -8.2245 },
      { title: "Singapura", latitude: 1.3521, longitude: 103.8198 }
    ]

    // Add markers and configure them
    pointSeries.bullets.push(() => {
      const circle = am5.Circle.new(root, {
        radius: 6,
        tooltipText: "{title}",
        tooltipY: 0,
        fill: am5.color(0x1E88E5),
        stroke: root.interfaceColors.get("background"),
        strokeWidth: 2
      })

      // Animate when hovering
      circle.states.create("hover", {
        scale: 1.5,
        fill: am5.color(0x1565C0)
      })

      return am5.Bullet.new(root, {
        sprite: circle
      })
    })

    // Add location data
    pointSeries.data.setAll(locations)

    // Add zoom control
    chart.set("zoomControl", am5map.ZoomControl.new(root, {}))

    // Make the map global
    chart.set("maxZoomLevel", 1)
    chart.set("maxPanOut", 0.8)

    // Center on the world
    chart.animate({
      key: "rotationX",
      from: 0,
      to: 0,
      duration: 1500,
      easing: am5.ease.inOut(am5.ease.cubic)
    })

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