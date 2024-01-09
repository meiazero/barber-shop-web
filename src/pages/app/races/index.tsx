import { Helmet } from "react-helmet-async"

export function Races() {
  return (
    <>
      <Helmet title="minhas corridas" />
      <div>
        <h1 className="text-3xl">
          Minhas corridas
        </h1>
      </div>
    </>
  )
}
