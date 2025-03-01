"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = window.document.documentElement
    if (isDark) {
      root.classList.remove("light")
    } else {
      root.classList.add("light")
    }
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-4 right-4 p-2 rounded-full bg-halo-blue bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 light:bg-halo-accent-light light:bg-opacity-20 light:hover:bg-opacity-30"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="w-6 h-6 text-halo-orange" /> : <Moon className="w-6 h-6 text-halo-blue-light" />}
    </button>
  )
}

