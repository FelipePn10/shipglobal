"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "next-i18next"; // Importe o hook de tradução

export function TestimonialSlider() {
  const { t } = useTranslation("common"); // Use o hook de tradução
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState(1);
  const [isClient, setIsClient] = useState(false); // Estado para verificar se está no cliente

  // Lista de depoimentos com informações traduzidas
  const testimonials = [
    {
      id: 1,
      name: t("testimonials.anaSilva.name"),
      location: t("testimonials.anaSilva.location"),
      image: "/api/placeholder/150/150",
      text: t("testimonials.anaSilva.text"),
      rating: 5,
      role: t("testimonials.anaSilva.role"),
      date: t("testimonials.anaSilva.date"),
    },
    {
      id: 2,
      name: t("testimonials.pedroSantos.name"),
      location: t("testimonials.pedroSantos.location"),
      image: "/api/placeholder/150/150",
      text: t("testimonials.pedroSantos.text"),
      rating: 5,
      role: t("testimonials.pedroSantos.role"),
      date: t("testimonials.pedroSantos.date"),
    },
    {
      id: 3,
      name: t("testimonials.mariaCosta.name"),
      location: t("testimonials.mariaCosta.location"),
      image: "/api/placeholder/150/150",
      text: t("testimonials.mariaCosta.text"),
      rating: 5,
      role: t("testimonials.mariaCosta.role"),
      date: t("testimonials.mariaCosta.date"),
    },
    {
      id: 4,
      name: t("testimonials.carlosMendes.name"),
      location: t("testimonials.carlosMendes.location"),
      image: "/api/placeholder/150/150",
      text: t("testimonials.carlosMendes.text"),
      rating: 4,
      role: t("testimonials.carlosMendes.role"),
      date: t("testimonials.carlosMendes.date"),
    },
    {
      id: 5,
      name: t("testimonials.julianaFerreira.name"),
      location: t("testimonials.julianaFerreira.location"),
      image: "/api/placeholder/150/150",
      text: t("testimonials.julianaFerreira.text"),
      rating: 5,
      role: t("testimonials.julianaFerreira.role"),
      date: t("testimonials.julianaFerreira.date"),
    },
  ];

  // Verifica se está no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Autoplay com intervalo de 5 segundos
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay && isClient) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length, isClient]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setAutoplay(false);
  };

  // Variantes de animação baseadas na direção
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    }),
  };

  return (
    <div className="py-12 px-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-center mb-2 text-blue-900">
        {t("testimonials.title")}
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
        {t("testimonials.subtitle")}
      </p>

      <div className="relative max-w-5xl mx-auto mb-12">
        {/* Aspas decorativas */}
        <div className="absolute -top-8 -left-4 lg:-left-8 opacity-10">
          <Quote size={60} className="text-blue-900" />
        </div>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex flex-col items-center lg:flex-row gap-8 lg:gap-12"
          >
            <Card className="relative flex-shrink-0 w-full lg:w-1/3 p-2 overflow-hidden shadow-xl border-blue-100">
              <div className="absolute top-0 left-0 w-full h-full bg-blue-900/5 rounded-xl"></div>
              <div className="relative aspect-square overflow-hidden rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-700 to-purple-700">
                <motion.img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-900/80 to-transparent py-4">
                  <Badge className="absolute top-4 right-4 bg-yellow-400 text-blue-900 hover:bg-yellow-500">
                    {t("testimonials.verified")}
                  </Badge>
                  <div className="flex ml-4 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonials[currentIndex].rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-white text-sm ml-4">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </Card>

            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative"
                >
                  <Quote size={24} className="text-blue-400 mr-2" />
                </motion.div>
              </div>

              <motion.p
                className="text-xl md:text-2xl font-medium text-gray-800 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {testimonials[currentIndex].text}
              </motion.p>

              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="font-bold text-lg text-blue-900">
                  {testimonials[currentIndex].name}
                </h4>
                <div className="flex items-center text-gray-600 space-x-2">
                  <p className="text-sm">{testimonials[currentIndex].location}</p>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <p className="text-sm">{testimonials[currentIndex].date}</p>
                </div>

                <div className="mt-3 flex items-center">
                  <Button
                    variant="link"
                    className="p-0 text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    {t("testimonials.viewFullTestimonial")}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controles de navegação */}
        <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none px-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full bg-white/90 shadow-md border-gray-200 hover:bg-white pointer-events-auto transition-transform hover:scale-110"
          >
            <ChevronLeft className="h-5 w-5 text-blue-800" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full bg-white/90 shadow-md border-gray-200 hover:bg-white pointer-events-auto transition-transform hover:scale-110"
          >
            <ChevronRight className="h-5 w-5 text-blue-800" />
          </Button>
        </div>
      </div>

      {/* Indicadores de slide */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-blue-600 w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`${t("testimonials.viewTestimonial")} ${index + 1}`}
          />
        ))}
      </div>

      {/* Controles em dispositivos móveis */}
      <div className="flex justify-center mt-8 space-x-3 sm:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={prevTestimonial}
          className="rounded-full border-blue-300 hover:bg-blue-50"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          {t("testimonials.previous")}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={nextTestimonial}
          className="rounded-full border-blue-300 hover:bg-blue-50"
        >
          {t("testimonials.next")}
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}