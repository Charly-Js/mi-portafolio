import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

interface Achievement {
  title: string
    description: string
    date:string
  
}

const achievements: Achievement[] = [
  {
    title: "Integracion de IA  en proyectos",
    description: "Completed curso  basico  de integracion de IA",
    date: "2024",
  },
  {
    title: "Analista de base de datos",
    description: "Análisis  de base de  datos  de proyectos de terceros ",
    date: "2024",
  },
  {
    title: "Open Source Contributor",
    description: "Ando contribuyendo  en  3 proyectos de desarrollo de sofware",
    date: "En progreso",
  },
  {
    title: "Colaboracion y participacion del fondo emprender SENA",
    description: "Participante para  el  evento SENASOFT",
    date: "En progreso",
  },
]

export default function Achievements() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center text-halo-blue mb-8">Missions Completed</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <Card
            key={index}
            className="bg-black bg-opacity-30 border-halo-blue hover:bg-opacity-40 transition-all duration-300"
          >
            <CardHeader>
              <CardTitle className="flex items-center text-halo-orange">
                <Trophy className="mr-2" />
                {achievement.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-halo-light-blue mb-2">{achievement.description}</p>
              <p className="text-sm text-halo-blue">Estado: {achievement.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

