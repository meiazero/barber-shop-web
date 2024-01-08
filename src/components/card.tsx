import { cn } from "@/lib/utils"

interface CardProps {
  children?: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("h-fit w-fit rounded-md border p-2", className)}>
      {children}
    </div>
  )
}
