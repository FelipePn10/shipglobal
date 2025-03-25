"use client"

import { type ReactNode, useState } from "react"
import { motion } from "framer-motion"

interface ProcessStepProps {
  number: number
  title: string
  description: string
  icon: ReactNode
  details?: string
}

export default function ProcessStep({ number, title, description, icon, details }: ProcessStepProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      className="flex flex-col items-center text-center space-y-4 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      onClick={() => details && setExpanded(!expanded)}
    >
      <div className="relative">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 shadow-sm">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-sm">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>

      {details && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: expanded ? "auto" : 0,
            opacity: expanded ? 1 : 0,
          }}
          className="overflow-hidden bg-blue-50 rounded-lg p-4 w-full"
        >
          <p className="text-sm text-left">{details}</p>
        </motion.div>
      )}

      {details && (
        <button
          className="text-xs text-primary hover:underline"
          onClick={(e) => {
            e.stopPropagation()
            setExpanded(!expanded)
          }}
        >
          {expanded ? "Show less" : "Learn more"}
        </button>
      )}
    </motion.div>
  )
}

