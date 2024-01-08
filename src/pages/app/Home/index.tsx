import { Helmet } from "react-helmet-async"

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <div>
        <h1 className="text-3xl">Olái mundo!</h1>
      </div>
    </>
  )
}
