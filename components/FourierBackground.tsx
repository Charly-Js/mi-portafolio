"use client"

import type React from "react"
import { useRef, useEffect } from "react"

class FourierCircle {
  constructor(radius: number, speed: number, center: { x: number; y: number }) {
    this.radius = radius
    this.speed = speed
    this.center = center
    this.angle = 0
  }

  update() {
    this.angle += this.speed
    if (this.angle > 2 * Math.PI) this.angle -= 2 * Math.PI
  }

  getPosition() {
    return {
      x: this.center.x + this.radius * Math.cos(this.angle),
      y: this.center.y + this.radius * Math.sin(this.angle),
    }
  }

  radius: number
  speed: number
  center: { x: number; y: number }
  angle: number
}

const FourierBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const NUM_CIRCLES = 5
    const SPEED = 0.02

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const center = { x: canvas.width / 2, y: canvas.height / 2 }
    const circles: FourierCircle[] = []

    for (let i = 0; i < NUM_CIRCLES; i++) {
      const radius = 100 / (i + 1)
      const speed = SPEED * (i + 1)
      circles.push(new FourierCircle(radius, speed, center))
    }

    const trail: { x: number; y: number }[] = []

    function animate() {
      if (!ctx) return
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)"
      if (canvas) {
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      circles.forEach((circle, i) => {
        circle.update()
        const pos = circle.getPosition()

        ctx.beginPath()
        ctx.arc(center.x, center.y, circle.radius, 0, 2 * Math.PI)
        ctx.strokeStyle = "rgba(0, 119, 190, 0.1)"
        ctx.stroke()

        if (i < circles.length - 1) {
          const nextPos = circles[i + 1].getPosition()
          ctx.beginPath()
          ctx.moveTo(pos.x, pos.y)
          ctx.lineTo(nextPos.x, nextPos.y)
          ctx.strokeStyle = "rgba(0, 255, 255, 0.2)"
          ctx.stroke()
        }
      })

      const point = circles[circles.length - 1].getPosition()
      trail.push(point)
      if (trail.length > 200) trail.shift()

      ctx.beginPath()
      ctx.moveTo(trail[0].x, trail[0].y)
      trail.forEach((p) => ctx.lineTo(p.x, p.y))
      ctx.strokeStyle = "rgba(0, 255, 255, 0.3)"
      ctx.stroke()

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      center.x = canvas.width / 2
      center.y = canvas.height / 2
      circles.forEach((circle) => (circle.center = center))
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

export default FourierBackground

