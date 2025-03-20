"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Package, PackagePlus, Truck, Globe, CheckCircle, Box, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function RepackagingExplainer() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === 3 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const steps = [
    {
      title: "Receiving Your Packages",
      description: "We receive your packages from different retailers and store them in our warehouse.",
      icon: <Package className="h-12 w-12 text-blue-500" />,
      animation: (
        <motion.div 
          className="relative h-40 w-full bg-blue-50 rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="absolute top-4 left-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Box className="h-16 w-16 text-blue-500" />
          </motion.div>
          <motion.div 
            className="absolute top-4 right-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Box className="h-12 w-12 text-purple-400" />
          </motion.div>
          <motion.div 
            className="absolute bottom-4 left-1/4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Box className="h-10 w-10 text-yellow-400" />
          </motion.div>
        </motion.div>
      )
    },
    {
      title: "Removing Excess Packaging",
      description: "We carefully remove unnecessary packaging materials to reduce weight and volume.",
      icon: <PackagePlus className="h-12 w-12 text-purple-500" />,
      animation: (
        <motion.div 
          className="relative h-40 w-full bg-purple-50 rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Box className="h-20 w-20 text-purple-500" />
          </motion.div>
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-purple-300 rounded-lg"
            initial={{ width: "90%", height: "90%" }}
            animate={{ width: "60%", height: "60%" }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </motion.div>
      )
    },
    {
      title: "Consolidating Multiple Items",
      description: "We combine multiple packages into one, saving you significant shipping costs.",
      icon: <CheckCircle className="h-12 w-12 text-green-500" />,
      animation: (
        <motion.div 
          className="relative h-40 w-full bg-green-50 rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="absolute top-4 left-4"
            initial={{ x: 0, y: 0 }}
            animate={{ x: 60, y: 40 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <Box className="h-12 w-12 text-blue-500" />
          </motion.div>
          <motion.div 
            className="absolute top-4 right-4"
            initial={{ x: 0, y: 0 }}
            animate={{ x: -60, y: 40 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <Box className="h-10 w-10 text-purple-400" />
          </motion.div>
          <motion.div 
            className="absolute bottom-4 left-1/4"
            initial={{ x: 0, y: 0 }}
            animate={{ x: 60, y: -20 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <Box className="h-8 w-8 text-yellow-400" />
          </motion.div>
          <motion.div 
            className="absolute bottom-4 right-1/4 opacity-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <Package className="h-20 w-20 text-green-500" />
          </motion.div>
        </motion.div>
      )
    },
    {
      title: "International Shipping",
      description: "Your repackaged items are securely shipped to your destination in any of our 17 service countries.",
      icon: <Globe className="h-12 w-12 text-yellow-500" />,
      animation: (
        <motion.div 
          className="relative h-40 w-full bg-yellow-50 rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="absolute left-0 top-1/2 transform -translate-y-1/2"
            initial={{ x: -50 }}
            animate={{ x: 300 }}
            transition={{ delay: 0.3, duration: 2, ease: "easeInOut" }}
          >
            <Truck className="h-16 w-16 text-yellow-500" />
          </motion.div>
          <motion.div 
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <Globe className="h-16 w-16 text-blue-500" />
          </motion.div>
        </motion.div>
      )
    }
  ]

  const benefits = [
    {
      title: "Cost Savings",
      description: "Save up to 80% on international shipping costs by reducing package volume and weight.",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />
    },
    {
      title: "Environmental Impact",
      description: "Reduce your carbon footprint by minimizing packaging waste and shipping volume.",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />
    },
    {
      title: "Simplified Customs",
      description: "Consolidated packages mean fewer customs declarations and potential fees.",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />
    },
    {
      title: "Protection",
      description: "Professional repackaging ensures your items arrive safely at their destination.",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />
    }
  ]

  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              REEMBALAGEM: Smarter International Shipping
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Our professional repackaging service helps you save money, reduce waste, and ensure your items arrive safely at their destination in any of our 17 service countries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Learn More
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Repackaging Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our professional repackaging service optimizes your shipments in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden transition-all duration-300 ${activeStep === index ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'}`}
                onClick={() => {
                  setActiveStep(index)
                  setIsPlaying(false)
                }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="bg-blue-50 p-2 rounded-full">
                      {step.icon}
                    </div>
                    <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Repackaging</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover why thousands of customers choose our repackaging service for international shipping
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our repackaging service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Is repackaging safe for fragile items?</h3>
                <p className="text-gray-600">
                  Yes! Our professional team is trained to handle delicate items with care. We use appropriate cushioning materials and techniques to ensure your fragile items are well-protected.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How much can I save with repackaging?</h3>
                <p className="text-gray-600">
                  Customers typically save 30-80% on international shipping costs through our repackaging service, depending on the original packaging and number of items consolidated.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Will you discard the original packaging?</h3>
                <p className="text-gray-600">
                  By default, we remove and recycle original packaging. If you wish to keep original boxes (for warranties, etc.), you can specify this in your shipping preferences.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Which countries do you serve?</h3>
                <p className="text-gray-600">
                  We currently provide repackaging and forwarding services to 17 countries across North America, Europe, Asia, and Australia. Check our Countries page for the full list.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}