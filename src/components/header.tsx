import { NavMenu } from "@/components/nav-menu"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="flex h-16 w-full items-center border-b border-zinc-200">
      <div className="container flex flex-row items-center justify-between">
        <h1 className="text-4xl font-bold">
          <Link to="/" title="Página Inicial">
            itaxi
          </Link>
        </h1>
        <NavMenu />
      </div>
    </header>
  )
}
