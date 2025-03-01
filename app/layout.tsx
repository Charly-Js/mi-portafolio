import type { Metadata } from "next"
import { Inter, Roboto, Oswald } from "next/font/google"
import "./globals.css"
import FourierBackground from "@/components/FourierBackground"
import Navigation from "@/components/Navigation"
import ThemeToggle from "@/components/ThemeToggle"
import type React from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
})
const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
})

export const metadata: Metadata = {
  title: "Charly-js",
  description: "Charly-js, featuring projects and contact information",
    generator:  "Charly-js"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} ${oswald.variable}`}>
      <body className={inter.className}>
        <FourierBackground />
        <div className="relative z-10 min-h-screen backdrop-blur-md bg-black bg-opacity-30 transition-colors duration-300">
          <Navigation />
          {children}
          <ThemeToggle />
        </div>
      </body>
    </html>
  )
}



import './globals.css'