import { Link } from "react-router-dom"

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">A página não foi encontrada</h1>
      <p className="text-accent-foreground text-2xl">
        Voltar para tela{" "}
        <Link className="text-orange-500 hover:underline" to="/">
          Inicial
        </Link>
        .
      </p>
    </div>
  )
}
