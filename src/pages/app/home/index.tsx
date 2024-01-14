import { Helmet } from "react-helmet-async"

export function Home() {
  return (
    <>
      <Helmet title="página inicial" />

      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Cuide da sua beleza.</h1>
        <p className="text-xl">
          Agende seu horário com os melhores barbeiros da região.
        </p>
      </div>
    </>
  )
}
