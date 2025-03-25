"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CountrySelector from "./country-selector"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ShippingCalculator() {
  const [weight, setWeight] = useState("")
  const [dimensions, setDimensions] = useState({ length: "", width: "", height: "" })
  const [shippingType, setShippingType] = useState("standard")
  const [result, setResult] = useState<number | null>(null)

  const handleCalculate = () => {
    // This is a simplified calculation for demonstration
    const weightValue = Number.parseFloat(weight) || 0
    const volume =
      ((Number.parseFloat(dimensions.length) || 0) *
        (Number.parseFloat(dimensions.width) || 0) *
        (Number.parseFloat(dimensions.height) || 0)) /
      5000 // Volumetric weight

    const calculatedWeight = Math.max(weightValue, volume)

    // Base rate + weight multiplier
    let rate = 15 + calculatedWeight * 5

    // Apply shipping type multiplier
    if (shippingType === "express") {
      rate *= 1.5
    } else if (shippingType === "priority") {
      rate *= 2
    }

    setResult(Number.parseFloat(rate.toFixed(2)))
  }

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <h3 className="text-xl font-bold mb-4">Shipping Cost Calculator</h3>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="country">Destination Country</Label>
          <CountrySelector />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="weight">Package Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            placeholder="Enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="grid gap-2">
            <Label htmlFor="length">Length (cm)</Label>
            <Input
              id="length"
              type="number"
              placeholder="L"
              value={dimensions.length}
              onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="width">Width (cm)</Label>
            <Input
              id="width"
              type="number"
              placeholder="W"
              value={dimensions.width}
              onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              placeholder="H"
              value={dimensions.height}
              onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
            />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="shipping-type">Shipping Type</Label>
          <Select value={shippingType} onValueChange={setShippingType}>
            <SelectTrigger id="shipping-type">
              <SelectValue placeholder="Select shipping type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard (7-10 days)</SelectItem>
              <SelectItem value="express">Express (3-5 days)</SelectItem>
              <SelectItem value="priority">Priority (1-2 days)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={handleCalculate}>Calculate Shipping</Button>

        {result !== null && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Estimated Shipping Cost:</p>
            <p className="text-2xl font-bold text-primary">${result}</p>
            <p className="text-xs text-muted-foreground mt-2">
              This is an estimate. Final cost may vary based on actual weight and dimensions.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

