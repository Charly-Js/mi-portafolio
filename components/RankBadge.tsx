import Image from "next/image"
import { Tooltip } from "./Tooltip"

type Rank = "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond" | "Master" | "Apex Predator"

interface RankBadgeProps {
  rank: Rank
}

const rankImages: Record<Rank, string> = {
  Bronze: "/ranks/apex-bronze.png",
  Silver: "/ranks/apex-silver.png",
  Gold: "/ranks/apex-gold.png",
  Platinum: "/ranks/apex-platinum.png",
  Diamond: "/ranks/apex-diamond.png",
  Master: "/ranks/apex-master.png",
  "Apex Predator": "/ranks/apex-predator.png",
}

export default function RankBadge({ rank }: RankBadgeProps) {
  return (
    <Tooltip content={`Rank: ${rank}`}>
      <div className="relative w-12 h-12">
        <Image src={rankImages[rank] || "/placeholder.svg"} alt={`${rank} rank`} layout="fill" objectFit="contain" />
      </div>
    </Tooltip>
  )
}

