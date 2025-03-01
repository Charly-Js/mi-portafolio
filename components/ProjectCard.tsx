import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Rank = "Apex Predator" | "Master" | "Diamond" | "Platinum" | "Gold" | "Silver" | "Bronze"

interface ProjectCardProps {
  title: string
  description: string
  rank: Rank
  link: string
}

const rankColors: Record<Rank, string> = {
  "Apex Predator": "bg-apex-red text-white",
  Master: "bg-apex-purple text-white",
  Diamond: "bg-apex-blue text-white",
  Platinum: "bg-apex-silver text-black",
  Gold: "bg-apex-gold text-black",
  Silver: "bg-gray-400 text-black",
  Bronze: "bg-apex-bronze text-white",
}

export function ProjectCard({ title, description, rank, link }: ProjectCardProps) {
  return (
    <Card className="bg-black/50 border-apex-gold/20 hover:border-apex-gold transition-colors duration-300">
      <CardHeader>
        <CardTitle className="text-apex-gold">{title}</CardTitle>
        <Badge className={`${rankColors[rank]} mt-2`}>{rank}</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{description}</p>
        <a href={link} className="text-apex-red hover:text-apex-gold mt-4 inline-block">
          View Project →
        </a>
      </CardContent>
    </Card>
  )
}

