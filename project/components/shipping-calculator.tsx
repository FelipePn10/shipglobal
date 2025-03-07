"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Card } from '@/components/ui/card'

export function ShippingCalculator() {
  const [weight, setWeight] = useState('')
  const [fromCountry, setFromCountry] = useState('')
  const [toCountry, setToCountry] = useState('')
  const [shippingMethod, setShippingMethod] = useState('')

  const countries = [
    { value: 'us', label: 'Estados Unidos' },
    { value: 'uk', label: 'Reino Unido' },
    { value: 'cn', label: 'China' },
    { value: 'jp', label: 'Japão' },
    // Add more countries
  ]

  const shippingMethods = [
    { value: 'express', label: 'Expresso (3-5 dias)' },
    { value: 'priority', label: 'Prioritário (5-7 dias)' },
    { value: 'economic', label: 'Econômico (10-15 dias)' },
  ]

  return (
    <Card className="calculator-card">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Peso (kg)</label>
            <Input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="calculator-input"
              placeholder="Ex: 2.5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">País de Origem</label>
            <select
              value={fromCountry}
              onChange={(e) => setFromCountry(e.target.value)}
              className="calculator-input"
            >
              <option value="">Selecione o país</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">País de Destino</label>
            <select
              value={toCountry}
              onChange={(e) => setToCountry(e.target.value)}
              className="calculator-input"
            >
              <option value="">Selecione o país</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Método de Envio</label>
            <select
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
              className="calculator-input"
            >
              <option value="">Selecione o método</option>
              {shippingMethods.map((method) => (
                <option key={method.value} value={method.value}>
                  {method.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Button className="w-full">Calcular Frete</Button>
      </div>
    </Card>
  )
}