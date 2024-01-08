import { MapPin } from "lucide-react"
import { Card } from "./card"

interface LocationProps {
  city: string
  state: string
  country: string
}

export function Location(location: LocationProps): JSX.Element | null {
  return (
    <Card className="flex flex-row items-center justify-center gap-2 rounded-full border-zinc-800 px-4 py-1">
      <MapPin className="size-7" />
      <div className="me-3 flex flex-col">
        <span className="font-bold">{location.city}</span>
        <div>
          <span className="text-sm">{location.state}</span>
          <span className="me-1 text-sm">,</span>
          <span className="text-sm">{location.country}</span>
        </div>
      </div>
    </Card>
  )
}
