"use client"

import { useEffect, useRef, useState } from "react"

// Performance optimization: use requestAnimationFrame with time tracking
const useAnimationFrame = (callback: (time: number) => void) => {
  const frame = useRef<number>()
  const last = useRef<number>(0)

  const animate = (time: number) => {
    if (last.current === undefined) last.current = time
    const deltaTime = time - last.current
    callback(deltaTime)
    last.current = time
    frame.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    frame.current = requestAnimationFrame(animate)
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [callback])
}

export default function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Improved color management with configurable palettes
  const colorPalettes = {
    blueGradient: [
      "rgba(239, 246, 255, 0.8)",  // blue-50
      "rgba(219, 234, 254, 0.7)",  // blue-100
      "rgba(191, 219, 254, 0.6)"   // blue-200
    ],
    softBlues: [
      "rgba(59, 130, 246, 0.05)",
      "rgba(96, 165, 250, 0.05)",
      "rgba(147, 197, 253, 0.05)"
    ]
  }

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useAnimationFrame((deltaTime) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    ctx.clearRect(0, 0, dimensions.width, dimensions.height)

    // Advanced gradient creation with dynamic color interpolation
    const gradient = ctx.createLinearGradient(0, 0, dimensions.width, dimensions.height)
    colorPalettes.blueGradient.forEach((color, index) => {
      gradient.addColorStop(index / (colorPalettes.blueGradient.length - 1), color)
    })
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, dimensions.width, dimensions.height)

    // Enhanced wave physics with more natural movement
    const waves = [
      { amplitude: 50, period: 0.02, speed: 0.01, color: colorPalettes.softBlues[0], phase: 0 },
      { amplitude: 30, period: 0.03, speed: 0.02, color: colorPalettes.softBlues[1], phase: 2 },
      { amplitude: 20, period: 0.04, speed: 0.015, color: colorPalettes.softBlues[2], phase: 4 }
    ]

    // More performant and physically inspired particle system
    class ImprovedParticle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      noise: number;
      color: string;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 4 + 1;
        this.vx = Math.cos(Math.random() * Math.PI * 2) * 0.5;
        this.vy = Math.sin(Math.random() * Math.PI * 2) * 0.5;
        this.noise = Math.random() * 100;
        const baseBlue = 200 + Math.floor(Math.random() * 55);
        this.color = `rgba(${baseBlue}, ${baseBlue + 20}, 255, ${Math.random() * 0.4 + 0.1})`;
      }

      update(time: number) {
        // Perlin noise-like movement
        this.noise += 0.01
        this.x += this.vx + Math.sin(this.noise) * 0.2
        this.y += this.vy + Math.cos(this.noise) * 0.2

        // Wrap-around with smoother transitions
        this.x = (this.x + dimensions.width) % dimensions.width
        this.y = (this.y + dimensions.height) % dimensions.height
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    const particles = Array.from({ length: 30 }, () => new ImprovedParticle(dimensions.width, dimensions.height))
    particles.forEach(p => p.update(deltaTime))
    particles.forEach(p => p.draw(ctx))

    // Wave rendering with smoother interpolation
    waves.forEach(wave => {
      ctx.beginPath()
      for (let x = 0; x < dimensions.width; x += 5) {
        const y = dimensions.height / 2 + 
          Math.sin(x * wave.period + deltaTime * wave.speed + wave.phase) * wave.amplitude

        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.lineTo(dimensions.width, dimensions.height)
      ctx.lineTo(0, dimensions.height)
      ctx.closePath()
      ctx.fillStyle = wave.color
      ctx.fill()
    })
  })

  return (
    <canvas 
      ref={canvasRef} 
      width={dimensions.width} 
      height={dimensions.height}
      className="fixed inset-0 -z-10 w-full h-full" 
    />
  )
}