"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LoadingScreen() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio("/halo-theme.mp3")
    audio.loop = true
    setAudioElement(audio)

    const timer = setTimeout(() => {
      setLoading(false)
      router.push("/home")
    }, 6000) // 6 seconds loading screen

    return () => {
      clearTimeout(timer)
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }
    }
  }, [router])

  const toggleSound = () => {
    if (audioElement) {
      if (isMuted) {
        audioElement.play().catch((e) => console.log("Audio playback failed:", e))
      } else {
        audioElement.pause()
      }
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-halo-blue hover:text-halo-light-blue"
        onClick={toggleSound}
      >
        {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
      </Button>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-12"
      >
        <h1 className="text-6xl font-bold text-halo-blue">CHARLY-JS</h1>
      </motion.div>

      {/* Loading Ring */}
      <div className="relative w-32 h-32">
        <motion.div
          className="absolute inset-0 border-4 border-halo-blue rounded-full"
          initial={{ rotate: 0, scale: 0.8 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 border-4 border-t-transparent border-halo-light-blue rounded-full"
          initial={{ rotate: 0, scale: 0.8 }}
          animate={{ rotate: -360, scale: 1 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-8"
      >
        <p className="text-halo-light-blue text-xl">Initializing System...</p>
      </motion.div>

      {/* Loading Progress */}
      <motion.div
        className="w-64 h-1 bg-halo-dark-blue mt-4 overflow-hidden"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 5, ease: "easeInOut" }}
      >
        <motion.div
          className="h-full bg-halo-blue"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 5, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  )
}

