"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Ana Silva",
      location: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      text: "Excelente serviço! Consegui comprar produtos dos EUA com facilidade e segurança.",
      rating: 5
    },
    {
      id: 2,
      name: "Pedro Santos",
      location: "Rio de Janeiro, RJ",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      text: "A consolidação de pacotes economizou muito no frete. Super recomendo!",
      rating: 5
    },
    {
      id: 3,
      name: "Maria Costa",
      location: "Curitiba, PR",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      text: "Atendimento excepcional e entrega dentro do prazo prometido.",
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="testimonial-card">
            <div className="flex flex-col items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="testimonial-image"
              />
              <div className="flex mb-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-4 text-center">
                "{testimonials[currentIndex].text}"
              </p>
              <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
              <p className="text-sm text-muted-foreground">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-6 space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}