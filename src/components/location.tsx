import { MapPin } from "lucide-react";
import { Card } from "./card";

interface LocationProps {
  city: string
  state: string
  country: string
}

export function Location(location: LocationProps): JSX.Element | null {
  return (
    <Card className="rounded-full flex py-1 px-4 border-zinc-800 flex-row items-center justify-center gap-2">
      <MapPin className="size-7" />
      <div className="flex flex-col me-3">
        <span className="font-bold">{location.city}</span>
        <div>
          <span className="text-sm">{location.state}</span>
          <span className="text-sm me-1">,</span>
          <span className="text-sm">{location.country}</span>
        </div>
      </div>
    </Card>
  )
}