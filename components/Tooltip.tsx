import type * as React from "react"

interface TooltipProps {
  content: string
  children: React.ReactNode
}

export function Tooltip({ content, children }: TooltipProps) {
  return (
    <div className="relative group">
      {children}
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {content}
      </span>
    </div>
  )
}

