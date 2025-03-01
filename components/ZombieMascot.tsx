"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const expressions = ["idle", "greeting", "surprised", "thinking"]

const ZombieMascot = () => {
  const [expression, setExpression] = useState("idle")

  useEffect(() => {
    const interval = setInterval(() => {
      setExpression(expressions[Math.floor(Math.random() * expressions.length)])
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed bottom-4 right-4 w-24 h-24 bg-mountain-gray-dark/80 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-mountain-gray-light/20"
      animate={{
        scale: expression === "surprised" ? [1, 1.2, 1] : 1,
        rotate: expression === "thinking" ? [0, -10, 10, -10, 0] : 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-4xl">{getExpressionEmoji(expression)}</span>
    </motion.div>
  )
}

const getExpressionEmoji = (expression: string) => {
  switch (expression) {
    case "greeting":
      return "👋"
    case "surprised":
      return "😮"
    case "thinking":
      return "🤔"
    default:
      return "🧟"
  }
}

export default ZombieMascot

