import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  location: string
  quote: string
  rating: number
  imageSrc: string
  profession?: string
}

export default function TestimonialCard({ name, location, quote, rating, imageSrc, profession }: TestimonialCardProps) {
  return (
    <div className="relative flex flex-col rounded-xl border bg-card p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="absolute -top-5 left-6 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
        <span className="text-primary text-xl font-bold">"</span>
      </div>
      <div className="mt-4 mb-6">
        <p className="text-muted-foreground italic">{quote}</p>
      </div>
      <div className="mt-auto flex items-center gap-4">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-xs text-muted-foreground">
            {profession ? `${profession}, ` : ""}
            {location}
          </p>
        </div>
        <div className="ml-auto flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

