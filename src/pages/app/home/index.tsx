import { Helmet } from "react-helmet-async"

export function Home() {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   let isCancelled = false

  //   async function fetchAndSetData() {
  //     const options = {
  //       method: "GET",
  //       url: env.VITE_API_URL,
  //     }
  //     try {
  //       const { data } = await axios.request(options)

  //       if (!isCancelled) {
  //         setData(data)
  //       }
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }

  //   fetchAndSetData()

  //   return () => {
  //     isCancelled = true
  //   }
  // }, [])

  return (
    <>
      <Helmet title="página inicial" />

      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Cuide da sua beleza.</h1>
        <p className="text-xl">
          Agende seu horário com os melhores barbeiros da região.
        </p>
        {/* {data.length > 0 && (
          <pre className="font-mono text-sm">
            {JSON.stringify(data, null, 2)}
          </pre>
        )} */}
      </div>
    </>
  )
}
