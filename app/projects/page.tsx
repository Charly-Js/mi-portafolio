import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import RankBadge from "@/components/RankBadge"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

type Rank = "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond" | "Master" | "Apex Predator"

interface Project {
  name: string
  description: string
  color: string
  rank: Rank
  demoUrl: string
}

const projects: Project[] = [
  {
    name: "Colgit",
    description: "Herramienta de control de versiones de código abierto inspirada en Git, con un enfoque en la colaboración y la facilidad de uso.",
    color: "halo-blue",
    rank: "Diamond",
    demoUrl: "https://colgit-demo.vercel.app",
  },
  {
    name: "Petshop",
    description: "Sistema integral de gestión de tiendas veterinarias con seguimiento de inventario y programación de citas.",
    color: "halo-orange",
    rank: "Gold",
    demoUrl: "https://petshop-demo.vercel.app",
  },
  {
    name: "Nova",
    description: "Asistente de inteligencia artificial con capacidades avanzadas de búsqueda de archivos y procesamiento de lenguaje natural.",
    color: "halo-light-blue",
    rank: "Master",
    demoUrl: "https://nova-ai-demo.vercel.app",
  },
  {
    name: "YouBriefSoftware",
    description: "Plataforma de desarrollo de software personalizado que ofrece soluciones adaptadas para empresas de todos los tamaños.",
    color: "halo-dark-blue",
    rank: "Apex Predator",
    demoUrl: "https://youbriefsoftware-demo.vercel.app",
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <main className="main-content">
        <h1 className="text-4xl font-bold mb-6 text-center text-halo-blue">Proyectos listos para el conbate</h1>
        <p className="text-center text-halo-light-blue mb-8">
        Explora mi arsenal de creaciones digitales, cada una probada en batalla y lista para su implementación.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="bg-black bg-opacity-30 border-halo-blue hover:bg-opacity-40 transition-all duration-300"
            >
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className={`text-${project.color}`}>{project.name}</CardTitle>
                <RankBadge rank={project.rank} />
              </CardHeader>
              <CardContent>
                <p className="text-halo-light-blue mb-4">{project.description}</p>
                <p className="text-halo-orange mb-4">Difficulty: {project.rank}</p>
                <Button asChild className="w-full bg-halo-blue hover:bg-halo-light-blue text-black font-semibold">
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Launch Demo
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

