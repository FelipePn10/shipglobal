import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center space-y-3 rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="rounded-full bg-blue-100 p-3">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-center text-muted-foreground">{description}</p>
    </div>
  )
}

