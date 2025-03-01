"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const HolographicScan: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let yPos = 0
    let direction = 1

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient
      const gradient = ctx.createLinearGradient(0, yPos - 50, 0, yPos + 50)
      gradient.addColorStop(0, "rgba(0, 127, 255, 0)")
      gradient.addColorStop(0.5, "rgba(0, 255, 255, 0.5)")
      gradient.addColorStop(1, "rgba(0, 127, 255, 0)")

      // Draw scanning line
      ctx.fillStyle = gradient
      ctx.fillRect(0, yPos - 50, canvas.width, 100)

      // Update position
      yPos += direction

      // Reverse direction at edges
      if (yPos > canvas.height || yPos < 0) {
        direction *= -1
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animate as any)
    }
  }, [])

  return <canvas ref={canvasRef} className="holographic-scan" />
}

export default HolographicScan

