"use client"

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatsCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  color?: string;
  icon: React.ReactNode;
}

export default function StatsCard({ value, label, prefix = "", suffix = "", duration = 2, color = "", icon }: StatsCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60);

      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16.67); // ~60fps

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${color}`}
    >
      <div className={`flex-shrink-0 rounded-full p-4 ${color.replace('border-l', 'bg')}`}>
        {icon}
      </div>
      <div className="flex flex-col">
        <div className="text-3xl md:text-4xl font-bold text-primary">
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </div>
        <p className="text-sm text-muted-foreground mt-2">{label}</p>
      </div>
    </motion.div>
  );
}