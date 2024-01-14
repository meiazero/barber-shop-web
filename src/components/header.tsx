import { NavMenu } from "@/components/nav-menu"
import { Link } from "react-router-dom"
import { Icons } from "./icons"
import { Button } from "./ui/button"

export function Header() {
  return (
    <header className="flex h-16 w-full items-center border-b border-zinc-200">
      <div className="container flex flex-row items-center justify-between">
        <Link
          to="/"
          title="Página Inicial"
          className="flex flex-row items-center gap-x-3 text-2xl font-bold"
        >
          <Icons.logo className="size-8" />
          barbearia
        </Link>
        <NavMenu />
        <Button asChild>
          <Link to="/sign-in">Entrar</Link>
        </Button>
      </div>
    </header>
  )
}
