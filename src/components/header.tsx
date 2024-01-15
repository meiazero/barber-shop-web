import { MoveRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Icons } from "./icons"
import { buttonVariants } from "./ui/button"

export function Header() {
  return (
    <header className="flex h-16 w-full items-center border-b border-zinc-200">
      <div className="container flex flex-row items-center justify-between">
        <div className="flex  flex-row items-center gap-x-3">
          <Icons.logo className="size-10 md:size-8" />
          <Link
            to="/"
            title="Página Inicial"
            className="hidden text-2xl font-bold md:block"
          >
            barbearia
          </Link>
        </div>
        {/* <NavMenu /> */}

        <Link to="/sign-up" className={buttonVariants({ variant: "default" })}>
          Cadastrar como barbeiro
          <MoveRight className="ms-2 size-5" />
        </Link>
      </div>
    </header>
  )
}
