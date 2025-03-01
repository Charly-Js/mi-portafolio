import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const timelineEvents = [
  {
    year: "2024 - Present",
    title: "Junior Full Stack Developer",
    company: "YouBriefSoft",
    description: "Lider de desarrollo de software a medida para empresas de terceros",
  },
  {
    year: "2020 - 2023",
    title: "Tecnico TI",
    company: "Invertec Sistemas",
    description: "Lider encargado  de mesa de ayuda para empresas gubernamentales.",
  },
 
]

export function Timeline() {
  return (
    <div className="space-y-4">
      {timelineEvents.map((event, index) => (
        <Card
          key={index}
          className="bg-black bg-opacity-30 border-halo-blue light:bg-white light:bg-opacity-80 light:border-gray-300"
        >
          <CardHeader>
            <CardTitle className="text-halo-orange light:text-red-600 font-oswald flex justify-between">
              <span>{event.title}</span>
              <span className="text-halo-light-blue light:text-blue-600">{event.year}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-halo-blue light:text-blue-800 mb-2">{event.company}</p>
            <p className="text-halo-light-blue light:text-black">{event.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

