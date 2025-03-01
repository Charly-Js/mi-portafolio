"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import EnergySwords from "./EnergySwords"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Proyectos", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Acerca de mi", path: "/about" },
    { name: "Contacto", path: "/contact" },
  ]

  return (
    <div ref={navRef} className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-full hover:bg-halo-blue hover:bg-opacity-20 transition-all duration-300 light:hover:bg-blue-100"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <EnergySwords />
      </button>
      <nav
        className={`
          absolute top-full right-0 mt-2 w-48 
          bg-black bg-opacity-90 backdrop-blur-md 
          border border-halo-blue rounded-lg 
          overflow-hidden transition-all duration-300
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
          light:bg-white light:bg-opacity-90 light:border-gray-300
        `}
        aria-label="Main navigation"
      >
        <ul className="py-2" role="menu">
          {navItems.map((item) => (
            <li key={item.path} role="none">
              <Link
                href={item.path}
                className={`
                  block px-4 py-2 text-lg transition-colors duration-300
                  ${
                    pathname === item.path
                      ? "text-halo-blue font-bold light:text-blue-700"
                      : "text-white hover:text-halo-blue light:text-black light:hover:text-blue-600"
                  }
                  light:font-roboto
                `}
                role="menuitem"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation

