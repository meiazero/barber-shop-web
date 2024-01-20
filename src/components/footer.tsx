import { Heart } from "lucide-react"
import { Icons } from "./icons"

export function Footer() {
  return (
    <footer className="border py-4">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex flex-row items-center gap-3 text-lg font-semibold">
          <h1>barber.shop</h1>|<span>v0.1.0</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className="flex flex-row items-center gap-2">
            Feito com <Heart className="size-5 fill-red-600 " /> por{" "}
          </span>{" "}
          <span className="font-bold">meiazero.</span>
          <div className="flex flex-row items-center gap-2">
            Disponivel em {""}
            <a href="https://github.com/meiazero/barber-shop-web">
              <Icons.gitHub className="mt-1 size-4 hover:animate-spin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
