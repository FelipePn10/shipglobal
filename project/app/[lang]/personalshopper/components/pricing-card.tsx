"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, HelpCircle, X } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: Array<{ text: string; included: boolean; tooltip?: string }>
  buttonText: string
  popular?: boolean
  annualPrice?: string
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  popular = false,
  annualPrice,
}: PricingCardProps) {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div
      className={`relative flex flex-col rounded-xl ${popular ? "border-primary border-2 shadow-lg" : "border"} bg-card p-6 transition-all duration-300 hover:shadow-md`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
          Most Popular
        </div>
      )}
      <div className="text-center mt-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="mt-4 flex items-baseline justify-center">
          <span className="text-3xl font-bold">{isAnnual ? annualPrice || price : price}</span>
          <span className="ml-1 text-sm text-muted-foreground">/month</span>
        </div>
        {annualPrice && (
          <div className="mt-2 flex justify-center gap-2 text-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-2 py-1 rounded-l-md ${!isAnnual ? "bg-primary text-primary-foreground" : "bg-muted"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-2 py-1 rounded-r-md ${isAnnual ? "bg-primary text-primary-foreground" : "bg-muted"}`}
            >
              Annual
            </button>
          </div>
        )}
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
      <ul className="mt-6 space-y-3 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            ) : (
              <X className="mr-2 h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            )}
            <span className={`text-sm ${!feature.included ? "text-muted-foreground" : ""}`}>{feature.text}</span>
            {feature.tooltip && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="ml-1">
                      <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs text-xs">{feature.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button className={`w-full ${popular ? "" : "bg-primary/90 hover:bg-primary"}`}>{buttonText}</Button>
      </div>
      {isAnnual && <p className="mt-2 text-xs text-center text-primary">Save 20% with annual billing</p>}
    </div>
  )
}

