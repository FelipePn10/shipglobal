"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Package,
  ShoppingBag,
  Truck,
  CreditCard,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Clock,
  Shield,
  DollarSign,
  Users,
  BarChart,
  GlobeIcon,
  PackageIcon,
  PhoneIcon,
  SmileIcon,
} from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ShippingCalculator } from "@/components/shipping-calculator"
import StatsCard from "@/components/StatsCard"
import AnimatedGradientBackground from "./components/animated-gradient-background"
import FAQAccordion from "./components/faq-accordion"
import FeatureCard from "./components/feature-card"
import HowItWorksTabs from "./components/how-it-works-tabs"
import InteractiveMap from "./components/interactive-map"
import PricingCard from "./components/pricing-card"
import TestimonialCard from "./components/testimonial-card"




export default function PersonalShopper() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const faqItems = [
    {
      question: "How long does international shipping usually take?",
      answer:
        "Shipping times vary depending on the destination country and shipping method chosen. Standard shipping typically takes 7-14 business days, express shipping 3-5 business days, and priority shipping 1-2 business days. You can see estimated delivery times during checkout.",
    },
    {
      question: "How do you handle customs and import duties?",
      answer:
        "We handle all customs paperwork on your behalf. Import duties and taxes are calculated during checkout based on your country's regulations. We provide transparent pricing so there are no surprises when your package arrives.",
    },
    {
      question: "Can I purchase from multiple stores in one order?",
      answer:
        "Yes! That's one of the main benefits of our service. You can purchase items from multiple international stores, and we'll consolidate them into a single shipment to save on shipping costs.",
    },
    {
      question: "What happens if an item is out of stock after I place my order?",
      answer:
        "If an item becomes unavailable after you place your order, we'll notify you immediately and offer alternatives or a refund for that specific item. Your other items will proceed as normal.",
    },
    {
      question: "Do you offer package tracking?",
      answer:
        "Yes, we provide full tracking for all shipments. Once your order is shipped, you'll receive tracking information via email and can monitor your package's journey through our customer portal.",
    },
    {
      question: "What if my item arrives damaged or is not as described?",
      answer:
        "We inspect all items before shipping, but if you receive a damaged item or something that doesn't match the description, contact our customer service within 48 hours of delivery. We'll work with you to resolve the issue with a replacement or refund.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Contact Us
            </Link>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <AnimatedGradientBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 pointer-events-none"></div>

          <motion.div
            className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] relative z-10"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="flex flex-col justify-center space-y-4" variants={fadeIn}>
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 w-fit"
                >
                  New Feature: Real-time Package Tracking
                </motion.div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Your Personal Shopper for Global Purchases
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Shop from any international store and have your purchases delivered to your doorstep. We handle
                  everything from purchase to delivery.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1">
                  Start Shopping <ArrowRight className="h-4 w-4" />
                </Button>
                <Link
                  href="#how-it-works"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No hidden fees</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Fast delivery</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Secure payments</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>24/7 support</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Shopping illustration"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </motion.div>
          </motion.div>

          <motion.div
      className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <StatsCard value={150} suffix="+" label="Countries Served" color="border-l-blue-500" icon={<GlobeIcon />} />
      <StatsCard value={500000} suffix="+" label="Packages Delivered" color="border-l-green-500" icon={<PackageIcon />} />
      <StatsCard value={98} suffix="%" label="Customer Satisfaction" color="border-l-yellow-500" icon={<SmileIcon />} />
      <StatsCard value={24} suffix="/7" label="Customer Support" color="border-l-red-500" icon={<PhoneIcon />} />
    </motion.div>
        </section>

        {/* How It Works Section - Detailed */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">
                  Detailed Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How Our Service Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Shop from any international store with our easy-to-use service. We handle everything from purchase to
                  delivery.
                </p>
              </div>
            </motion.div>

            <div className="mx-auto max-w-5xl mt-12">
              <HowItWorksTabs />
            </div>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button size="lg" className="gap-2">
                Start Your Global Shopping Journey <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">
                  Premium Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Choose Our Service</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience hassle-free international shopping with our comprehensive personal shopper service.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeIn}>
                <FeatureCard
                  icon={<Package className="h-6 w-6 text-primary" />}
                  title="Access to Exclusive Products"
                  description="Shop from stores that don't ship to your country and access exclusive international products."
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <FeatureCard
                  icon={<Truck className="h-6 w-6 text-primary" />}
                  title="Consolidated Shipping"
                  description="Save on shipping costs by combining multiple purchases into a single shipment."
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <FeatureCard
                  icon={<CheckCircle className="h-6 w-6 text-primary" />}
                  title="Quality Assurance"
                  description="We inspect all items before shipping to ensure they meet your expectations."
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <FeatureCard
                  icon={<Globe className="h-6 w-6 text-primary" />}
                  title="Customs Handling"
                  description="We take care of all customs paperwork and import duties for a smooth delivery process."
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <FeatureCard
                  icon={<ShoppingBag className="h-6 w-6 text-primary" />}
                  title="Personal Shopping Advice"
                  description="Get expert recommendations and assistance with selecting the right products."
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <FeatureCard
                  icon={<Shield className="h-6 w-6 text-primary" />}
                  title="Purchase Protection"
                  description="Every order is protected against damage, loss, or items not as described."
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <FeatureCard
                  icon={<CreditCard className="h-6 w-6 text-primary" />}
                  title="Flexible Payment Options"
                  description="Pay with credit cards, PayPal, or bank transfers in your local currency."
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <FeatureCard
                  icon={<Clock className="h-6 w-6 text-primary" />}
                  title="Extended Storage"
                  description="We can store your purchases for up to 60 days while you decide on shipping."
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <FeatureCard
                  icon={<Users className="h-6 w-6 text-primary" />}
                  title="Dedicated Support Team"
                  description="Our multilingual support team is available 24/7 to assist with any questions."
                />
              </motion.div>
            </motion.div>

            <div className="mt-8 text-center">
              <Link href="#pricing" className="text-primary hover:underline inline-flex items-center gap-1">
                View our pricing plans <ChevronDown className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Destinations Map Section */}
        <section id="destinations" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">Global Reach</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">We Ship Worldwide</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our service covers over 150 countries across the globe. Explore our shipping destinations.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mx-auto max-w-5xl mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <InteractiveMap />
            </motion.div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Popular Destinations</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    United States
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    United Kingdom
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Australia
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Canada
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Germany
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Shipping Times</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-between">
                    <span>North America:</span>
                    <span className="font-medium">3-7 days</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Europe:</span>
                    <span className="font-medium">2-5 days</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Asia:</span>
                    <span className="font-medium">4-8 days</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Australia:</span>
                    <span className="font-medium">5-10 days</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>South America:</span>
                    <span className="font-medium">6-12 days</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Shipping Methods</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-between">
                    <span>Standard:</span>
                    <span className="font-medium">From $15</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Express:</span>
                    <span className="font-medium">From $25</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Priority:</span>
                    <span className="font-medium">From $40</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Economy:</span>
                    <span className="font-medium">From $10</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Freight:</span>
                    <span className="font-medium">Custom quote</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">
                  Transparent Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, Affordable Rates</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that works best for your shopping needs with no hidden fees.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeIn}>
                <PricingCard
                  title="Basic"
                  price="$9.99"
                  annualPrice="$7.99"
                  description="Perfect for occasional shoppers"
                  features={[
                    {
                      text: "Purchase service fee: 10%",
                      included: true,
                      tooltip: "Fee applied to the total cost of your purchases",
                    },
                    { text: "Standard shipping rates", included: true },
                    { text: "14-day storage", included: true },
                    { text: "Email support", included: true },
                    { text: "Photo verification", included: false },
                    { text: "Priority processing", included: false },
                    { text: "Dedicated account manager", included: false },
                  ]}
                  buttonText="Get Started"
                  popular={false}
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <PricingCard
                  title="Premium"
                  price="$19.99"
                  annualPrice="$15.99"
                  description="Ideal for regular international shoppers"
                  features={[
                    {
                      text: "Purchase service fee: 7%",
                      included: true,
                      tooltip: "Discounted fee applied to the total cost of your purchases",
                    },
                    {
                      text: "Discounted shipping rates",
                      included: true,
                      tooltip: "Save up to 15% on all shipping methods",
                    },
                    { text: "30-day storage", included: true },
                    { text: "Priority email & chat support", included: true },
                    {
                      text: "Photo verification service",
                      included: true,
                      tooltip: "We'll send photos of your items before shipping",
                    },
                    { text: "Priority processing", included: true },
                    { text: "Dedicated account manager", included: false },
                  ]}
                  buttonText="Get Started"
                  popular={true}
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <PricingCard
                  title="Business"
                  price="$49.99"
                  annualPrice="$39.99"
                  description="For high-volume shoppers & businesses"
                  features={[
                    {
                      text: "Purchase service fee: 5%",
                      included: true,
                      tooltip: "Our lowest fee applied to the total cost of your purchases",
                    },
                    {
                      text: "Premium shipping rates",
                      included: true,
                      tooltip: "Save up to 25% on all shipping methods",
                    },
                    { text: "60-day storage", included: true },
                    { text: "24/7 priority support", included: true },
                    { text: "Photo verification service", included: true },
                    { text: "Priority processing", included: true },
                    {
                      text: "Dedicated account manager",
                      included: true,
                      tooltip: "Personal assistance for all your shopping needs",
                    },
                  ]}
                  buttonText="Contact Sales"
                  popular={false}
                />
              </motion.div>
            </motion.div>

            <div className="mx-auto max-w-3xl bg-blue-50 rounded-xl p-6 md:p-8 mt-8">
              <h3 className="text-xl font-bold mb-4 text-center">All Plans Include</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Secure payment processing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Package consolidation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Customs documentation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Package tracking</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Shipping insurance</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Secure customer portal</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Calculator Section */}
        <section id="calculator" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">Estimate Costs</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Shipping Cost Calculator</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get an estimate of your shipping costs before you place an order.
                </p>
              </div>
            </motion.div>

            <div className="mx-auto max-w-3xl mt-12 grid md:grid-cols-[2fr_1fr] gap-8">
              <ShippingCalculator />

              <div className="space-y-6">
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Shipping Tips</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Consolidate multiple purchases to save on shipping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Remove original packaging to reduce weight</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Choose standard shipping for non-urgent items</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Declare accurate values to avoid customs delays</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border bg-card p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our shipping experts can provide personalized quotes for complex shipments.
                  </p>
                  <Button className="w-full" variant="outline">
                    Contact Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">
                  Customer Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our satisfied customers have to say.
                </p>
              </div>
            </motion.div>

            <Tabs defaultValue="individuals" className="mx-auto max-w-5xl mt-12">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="individuals">Individual Shoppers</TabsTrigger>
                <TabsTrigger value="businesses">Business Clients</TabsTrigger>
              </TabsList>

              <TabsContent value="individuals" className="mt-0">
                <motion.div
                  className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={fadeIn}>
                    <TestimonialCard
                      name="Sarah Johnson"
                      location="United Kingdom"
                      profession="Fashion Designer"
                      quote="GlobalShop has been a game-changer for me. I can finally shop from US stores without worrying about shipping restrictions."
                      rating={5}
                      imageSrc="/placeholder.svg?height=100&width=100"
                    />
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <TestimonialCard
                      name="Michael Chen"
                      location="Singapore"
                      profession="Tech Enthusiast"
                      quote="The service is incredibly reliable. My packages always arrive on time and in perfect condition. Worth every penny!"
                      rating={5}
                      imageSrc="/placeholder.svg?height=100&width=100"
                    />
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <TestimonialCard
                      name="Elena Rodriguez"
                      location="Spain"
                      profession="Interior Designer"
                      quote="I love how they handle all the customs paperwork. Shopping internationally has never been this easy."
                      rating={4}
                      imageSrc="/placeholder.svg?height=100&width=100"
                    />
                  </motion.div>
                </motion.div>
              </TabsContent>

              <TabsContent value="businesses" className="mt-0">
                <motion.div
                  className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={fadeIn}>
                    <TestimonialCard
                      name="David Williams"
                      location="Australia"
                      profession="Retail Store Owner"
                      quote="We've been using GlobalShop for our inventory sourcing for over 2 years. Their business plan has saved us thousands in shipping costs."
                      rating={5}
                      imageSrc="/placeholder.svg?height=100&width=100"
                    />
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <TestimonialCard
                      name="Sophia Patel"
                      location="Canada"
                      profession="E-commerce Manager"
                      quote="Our dedicated account manager makes the entire process seamless. We can focus on growing our business while they handle the logistics."
                      rating={5}
                      imageSrc="/placeholder.svg?height=100&width=100"
                    />
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <TestimonialCard
                      name="Thomas Müller"
                      location="Germany"
                      profession="Import/Export Consultant"
                      quote="The transparency and reliability of GlobalShop's business services are unmatched. I recommend them to all my clients."
                      rating={5}
                      imageSrc="/placeholder.svg?height=100&width=100"
                    />
                  </motion.div>
                </motion.div>
              </TabsContent>
            </Tabs>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-blue-100 px-4 py-1 text-sm text-primary">
                <BarChart className="mr-2 h-4 w-4" />
                <span>Trusted by over 50,000 customers worldwide</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">
                  Common Questions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to the most common questions about our service.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mx-auto max-w-3xl mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FAQAccordion items={faqItems} />
            </motion.div>

            <motion.div
              className="mx-auto max-w-3xl mt-12 bg-white rounded-xl p-8 border shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">
                Our support team is here to help you with any questions you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Contact Support
                </Button>
                <Button className="gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Live Chat
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Start Shopping Globally?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of satisfied customers who shop internationally with ease.
              </p>
            </motion.div>

            <motion.div
              className="mx-auto w-full max-w-sm space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form className="flex flex-col gap-2">
                <Input type="email" placeholder="Enter your email" className="h-10" />
                <Button type="submit" className="w-full">
                  Get Started Today
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link href="#" className="underline underline-offset-2">
                  Terms & Conditions
                </Link>
              </p>
            </motion.div>

            <motion.div
              className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 mb-2 text-primary"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
                <span className="text-sm">Secure Payments</span>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 mb-2 text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
                <span className="text-sm">Buyer Protection</span>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 mb-2 text-primary"
                >
                  <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"></path>
                  <path d="M8 8v1"></path>
                  <path d="M12 8v1"></path>
                  <path d="M16 8v1"></path>
                  <path d="M20 8v1"></path>
                  <path d="M8 12v1"></path>
                  <path d="M12 12v1"></path>
                  <path d="M16 12v1"></path>
                  <path d="M20 12v1"></path>
                  <path d="M8 16v1"></path>
                  <path d="M12 16v1"></path>
                  <path d="M20 16h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1"></path>
                </svg>
                <span className="text-sm">Global Shipping</span>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 mb-2 text-primary"
                >
                  <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                  <path d="M19.692 20.259a3.572 3.572 0 0 0-.579-4.554 4 4 0 0 0-5.348-.35 4 4 0 0 0-5.347.35 3.572 3.572 0 0 0-.579 4.554c.46.69 1.125 1.312 1.979 1.858 1.85 1.183 4.038 1.884 4.438 1.884.4 0 2.589-.701 4.438-1.884.853-.546 1.518-1.168 1.978-1.858Z"></path>
                </svg>
                <span className="text-sm">24/7 Support</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">GlobalShop</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">
            <Link href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </nav>

          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>

        <div className="container mt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GlobalShop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

