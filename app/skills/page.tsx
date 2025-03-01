"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Skill {
  name: string
  level: number
  description: string
  learningSource: string
  icon: string // We'll use emoji as icons for simplicity
}

const skills: Skill[] = [
  {
    name: "React",
    level: 50,
    description: "Competente en la construcción de interfaces de usuario complejas e interactivas con React y su ecosistema.",
    learningSource: "Cursos de Udemy, documentación oficial y experiencia práctica en proyectos",
    icon: "⚛️",
  },
  {
    name: "Node.js",
    level: 40,
    description: "Experiencia en JavaScript del lado del servidor, API RESTful y arquitectura de backend.",
    learningSource: "FreeCodeCamp, documentación de Node.js y creación de proyectos personales",
    icon: "🟩",
  },
  {
    name: "Gestión de bases de datos",
    level: 50,
    description: "Sólidas habilidades de mecanografía, interfaces y funciones avanzadas de TypeScript.",
    learningSource: "Manual de TypeScript, tutoriales en línea y desarrollo profesional",
    icon: "🔷",
  },
  {
    name: "Python",
    level: 50,
    description: "Competente en análisis de datos, creación de scripts y desarrollo de backend con Python.",
    learningSource: "Especialización en Python y proyectos de automatización personal de Coursera",
    icon: "🐍",
  },
  {
    name: "Integración de AI",
    level: 55,
    description: "Experiencia en integración de modelos de IA y creación de aplicaciones inteligentes.",
    learningSource: "Documentación de OpenAI, talleres de IA y proyectos experimentales",
    icon: "🤖",
    },
{
    name: "Java",
    level: 65,
    description: "Experiencia adquirida  en trabajos de apoyo para estudiantes  del SENA",
    learningSource: "Entrega de proyectos  JAVA con su respectiva documentación",
    icon: "♨",
    },
]

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-16">
      <main className="main-content">
        <h1 className="text-4xl font-bold mb-6 text-center text-halo-blue">Combat Skills</h1>
        <p className="text-center text-halo-light-blue mb-8">
          Just like a Spartan's arsenal, these are the tools I've mastered for digital warfare.
        </p>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </main>
    </div>
  )
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
      <Card className="bg-black bg-opacity-30 border-halo-blue hover:bg-opacity-40 transition-all duration-300">
        <CardHeader className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <CardTitle className="flex items-center justify-between text-halo-orange">
            <span className="flex items-center">
              <span className="text-2xl mr-2">{skill.icon}</span>
              {skill.name}
            </span>
            {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-halo-light-blue">Mastery Level</span>
              <span className="text-halo-blue font-bold">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2 bg-halo-dark-blue bg-opacity-50">
              <div className="h-full bg-halo-blue" style={{ width: `${skill.level}%` }} />
            </Progress>
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-halo-light-blue mb-2">{skill.description}</p>
              <p className="text-halo-orange">
                <strong>Campo de entrenamiento:</strong> {skill.learningSource}
              </p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

