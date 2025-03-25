"use client"

import { useState, useCallback, useMemo } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// Type definitions for better type safety
interface Region {
  id: string
  name: string
  x: number
  y: number
  countries: string[]
  color?: string
}

// Enhanced regions with more detailed information
const regions: Region[] = [
  { 
    id: "na", 
    name: "North America", 
    x: 20, 
    y: 30, 
    countries: ["USA", "Canada", "Mexico"],
    color: "bg-blue-500"
  },
  { 
    id: "eu", 
    name: "Europe", 
    x: 48, 
    y: 25, 
    countries: ["UK", "Germany", "France", "Italy", "Spain"],
    color: "bg-green-500"
  },
  { 
    id: "as", 
    name: "Asia", 
    x: 70, 
    y: 35, 
    countries: ["China", "Japan", "South Korea", "Singapore", "India"],
    color: "bg-purple-500"
  },
  { 
    id: "sa", 
    name: "South America", 
    x: 30, 
    y: 60, 
    countries: ["Brazil", "Argentina", "Chile", "Colombia"],
    color: "bg-red-500"
  },
  { 
    id: "oc", 
    name: "Oceania", 
    x: 80, 
    y: 70, 
    countries: ["Australia", "New Zealand"],
    color: "bg-teal-500"
  },
]

export default function InteractiveMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null)
  
  // Memoized toggle region handler for performance
  const toggleRegion = useCallback((regionId: string) => {
    setActiveRegion(current => current === regionId ? null : regionId)
  }, [])

  // Accessibility improvements
  const handleKeyDown = useCallback((event: React.KeyboardEvent, regionId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleRegion(regionId)
    }
  }, [toggleRegion])

  // Animation variants for consistent and reusable animations
  const variants = {
    marker: {
      hover: { scale: 1.2 },
      initial: { scale: 1 }
    },
    tooltip: {
      hidden: { opacity: 0, y: 10 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }
      }
    }
  }

  // Render optimized countries list
  const renderCountriesList = useCallback((countries: string[]) => (
    <ul className="mt-1 text-xs space-y-1">
      {countries.map((country) => (
        <li 
          key={country} 
          className="flex items-center gap-2 text-gray-700"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          {country}
        </li>
      ))}
    </ul>
  ), [])

  return (
    <div 
      className="relative w-full aspect-[2/1] bg-blue-50 rounded-xl overflow-hidden border shadow-sm"
      role="region" 
      aria-label="Interactive Shipping Destinations Map"
    >
      <Image
        src="/placeholder.svg?height=600&width=1200"
        alt="World map showing shipping destinations"
        width={1200}
        height={600}
        priority
        className="w-full h-full object-cover opacity-40 grayscale-[50%]"
      />

      {regions.map((region) => (
        <div 
          key={region.id} 
          className="absolute" 
          style={{ left: `${region.x}%`, top: `${region.y}%` }}
        >
          <motion.button
            aria-expanded={activeRegion === region.id}
            aria-controls={`${region.id}-tooltip`}
            variants={variants.marker}
            whileHover="hover"
            className={`
              w-7 h-7 rounded-full flex items-center justify-center 
              text-white text-xs font-bold transition-all duration-300
              ${region.color} 
              ${activeRegion === region.id ? "ring-4 ring-primary/30" : ""}
            `}
            onClick={() => toggleRegion(region.id)}
            onKeyDown={(e) => handleKeyDown(e, region.id)}
            tabIndex={0}
          >
            {region.id.toUpperCase().charAt(0)}
          </motion.button>

          <AnimatePresence>
            {activeRegion === region.id && (
              <motion.div
                id={`${region.id}-tooltip`}
                variants={variants.tooltip}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute z-20 mt-3 p-4 bg-white rounded-lg shadow-xl border w-56"
                role="tooltip"
              >
                <h4 className="font-bold text-sm text-gray-800">{region.name}</h4>
                <p className="text-xs text-gray-500 mt-1 mb-2">Shipping Destinations:</p>
                {renderCountriesList(region.countries)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      <div 
        className="absolute bottom-2 right-2 bg-white/80 rounded-md px-2 py-1 text-xs text-gray-600"
        aria-hidden="true"
      >
        Click on markers to view shipping info
      </div>
    </div>
  )
}