import { Progress } from "@/components/ui/progress"

interface SkillBarProps {
  skill: string
  level: number
}

export function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-halo-light-blue light:text-black">{skill}</span>
        <span className="text-halo-orange light:text-red-600">{level}%</span>
      </div>
      <Progress value={level} className="w-full h-2 bg-halo-dark-blue bg-opacity-50 light:bg-gray-200">
        <div
          className="h-full bg-halo-blue light:bg-blue-600 transition-all duration-500 ease-in-out"
          style={{ width: `${level}%` }}
        />
      </Progress>
    </div>
  )
}

