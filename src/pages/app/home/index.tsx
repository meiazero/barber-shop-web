import { Helmet } from "react-helmet-async"

export function Home() {
  return (
    <>
      <Helmet title="página inicial" />
      <div>
        <h1 className="text-3xl">Página inicial</h1>
      </div>
    </>
  )
}
