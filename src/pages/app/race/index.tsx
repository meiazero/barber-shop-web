import { Helmet } from "react-helmet-async"

export function NewRace() {
  return (
    <>
      <Helmet title="nova corrida" />
      <div>
        <h1 className="text-3xl">Fazer uma nova corrida!</h1>
      </div>
    </>
  )
}
