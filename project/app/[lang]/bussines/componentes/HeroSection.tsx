"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Language } from "../types/contentTypes";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  learnMore: string;
  lang: Language;
}

export function HeroSection({ title, subtitle, description, cta, learnMore, lang }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950/20 dark:to-transparent" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            {title}
            <br />
            <span className="text-primary">{subtitle}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">{description}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href={`/${lang}/auth?type=business`}>
              <Button size="lg" className="text-lg px-8 py-6">
                {cta}
              </Button>
            </Link>
            <Link href={`#how-it-works`}>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                {learnMore}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}