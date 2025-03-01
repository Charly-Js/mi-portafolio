"use client"

import { motion } from "framer-motion"

export default function FogEffect() {
  return (
    <div className="fog-container">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className={`fog fog-${i + 1}`}
          initial={{ x: "100%" }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20 + i * 10,
            ease: "linear",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  )
}

