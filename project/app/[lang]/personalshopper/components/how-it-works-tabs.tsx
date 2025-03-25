"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingBag, Globe, Truck, Package, Search, CreditCard } from "lucide-react"

export default function HowItWorksTabs() {
  const [activeTab, setActiveTab] = useState("browse")

  const steps = [
    {
      id: "browse",
      title: "Browse & Select",
      icon: <Search className="h-6 w-6" />,
      description: "Browse international stores and select items you want to purchase.",
      details: [
        "Access exclusive international products",
        "Shop from stores that don't ship to your country",
        "Save items to your wishlist for later",
        "Get personalized recommendations",
      ],
    },
    {
      id: "request",
      title: "Request Quote",
      icon: <ShoppingBag className="h-6 w-6" />,
      description: "Submit your shopping list for a detailed quote including all costs.",
      details: [
        "Transparent pricing with no hidden fees",
        "Detailed breakdown of product costs",
        "Shipping and handling estimates",
        "Import duties and taxes calculation",
      ],
    },
    {
      id: "payment",
      title: "Make Payment",
      icon: <CreditCard className="h-6 w-6" />,
      description: "Securely pay for your order through our platform.",
      details: [
        "Multiple payment options available",
        "Secure payment processing",
        "Installment plans for large orders",
        "Currency conversion at competitive rates",
      ],
    },
    {
      id: "purchase",
      title: "We Purchase",
      icon: <Globe className="h-6 w-6" />,
      description: "Our team buys the items on your behalf from the original retailers.",
      details: [
        "Professional shoppers with local knowledge",
        "Verification of product authenticity",
        "Real-time order status updates",
        "Direct communication with your personal shopper",
      ],
    },
    {
      id: "consolidate",
      title: "Consolidation",
      icon: <Package className="h-6 w-6" />,
      description: "We receive and inspect your items, then consolidate them into one shipment.",
      details: [
        "Quality inspection of all items",
        "Product photos sent for your approval",
        "Secure packaging to prevent damage",
        "Option to remove original packaging to reduce weight",
      ],
    },
    {
      id: "delivery",
      title: "International Shipping",
      icon: <Truck className="h-6 w-6" />,
      description: "We handle customs and shipping, delivering your items directly to you.",
      details: [
        "Complete customs documentation handling",
        "Multiple shipping speed options",
        "Package tracking throughout the journey",
        "Insurance coverage for all shipments",
      ],
    },
  ]

  return (
    <Tabs defaultValue="browse" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid grid-cols-3 md:grid-cols-6 h-auto p-1">
        {steps.map((step) => (
          <TabsTrigger
            key={step.id}
            value={step.id}
            className="flex flex-col py-2 gap-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <span className="sr-only md:not-sr-only text-xs">{step.title}</span>
            <span className="md:hidden">{step.icon}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {steps.map((step) => (
        <TabsContent key={step.id} value={step.id} className="mt-6">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{step.description}</p>

              <ul className="space-y-2">
                {step.details.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <span className="text-xs text-primary font-bold">{index + 1}</span>
                    </div>
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="order-1 md:order-2 bg-blue-50 rounded-xl p-6 flex items-center justify-center">
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-full max-w-md aspect-video bg-white rounded-lg shadow-md flex items-center justify-center"
              >
                <div className="text-6xl text-primary">{step.icon}</div>
              </motion.div>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

