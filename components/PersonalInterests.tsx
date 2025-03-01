import { Badge } from "@/components/ui/badge"

const interests = [
  { name: "AI and Machine Learning", icon: "🤖" },
  { name: "Video Game Development", icon: "🎮" },
  { name: "Sci-Fi Literature", icon: "📚" },
  { name: "Space Exploration", icon: "🚀" },
  { name: "Hiking", icon: "🏞️" },
  { name: "Playing Guitar", icon: "🎸" },
]

export function PersonalInterests() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-halo-orange light:text-red-600 font-oswald">Personal Interests</h3>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest, index) => (
          <Badge
            key={index}
            className="bg-halo-dark-blue text-halo-light-blue light:bg-blue-100 light:text-blue-800 hover:bg-halo-blue hover:text-black transition-colors duration-300"
          >
            {interest.icon} {interest.name}
          </Badge>
        ))}
      </div>
      <p className="mt-4 text-halo-light-blue light:text-black">
        Cuando no estoy codificando, puedes encontrarme explorando mundos virtuales, sumergiéndome en las últimas novelas de ciencia ficción o soñando.
        sobre el futuro de los viajes espaciales. Creo que una persona completa es un mejor desarrollador, aportando nuevas perspectivas y soluciones
        creativas a cada proyecto.
      </p>
    </div>
  )
}

