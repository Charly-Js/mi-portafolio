import { Github, Linkedin, Twitter } from "lucide-react"
import MainMenu from "@/components/MainMenu"
import Achievements from "@/components/Achievements"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import type React from "react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <main className="main-content text-center w-full">
        <h1 className="text-6xl font-bold mb-8 text-halo-blue animate-pulse light:text-black light:animate-none">
          Charly-js Portafolio
        </h1>
        <p className="text-xl mb-12 text-halo-light-blue light:text-black">
        ¡Explora mis proyectos y conóceme mejor!
        </p>
        <MainMenu />
        <Achievements />
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-halo-orange light:text-red-600">Connect with me</h2>
          <div className="flex justify-center space-x-6">
            <SocialLink href="https://github.com/Charly-Js" icon={<Github />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/carlos-eduardo-pinzon-gonzalez-87033a22b/" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="https://wa.me/573209650037" icon={<FontAwesomeIcon icon={faWhatsapp} />} label="WhatsApp" />
          </div>
        </div>
      </main>
    </div>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-halo-dark-blue bg-opacity-20 light:bg-blue-100 text-halo-light-blue hover:text-halo-blue transition-colors duration-300 light:text-blue-600 light:hover:text-blue-800"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
