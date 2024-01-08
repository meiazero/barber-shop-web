import { Location } from "@/components/location"
import { Helmet } from "react-helmet-async"

export function Home() {
  const locations = [
    {
      city: "Brasília",
      state: "Distrito Federal",
      country: "Brasil",
    },
    {
      city: "Salvador",
      state: "Bahia",
      country: "Brasil",
    },
    {
      city: "Rio de Janeiro",
      state: "Rio de Janeiro",
      country: "Brasil",
    },
    {
      city: "São Paulo",
      state: "São Paulo",
      country: "Brasil",
    },
    {
      city: "Curitiba",
      state: "Paraná",
      country: "Brasil",
    },
    {
      city: "Porto Alegre",
      state: "Rio Grande do Sul",
      country: "Brasil",
    },
    {
      city: "Belém",
      state: "Pará",
      country: "Brasil",
    },
    {
      city: "Fortaleza",
      state: "Ceará",
      country: "Brasil",
    },
    {
      city: "Manaus",
      state: "Amazonas",
      country: "Brasil",
    },
    {
      city: "Recife",
      state: "Pernambuco",
      country: "Brasil",
    },
    {
      city: "Goiânia",
      state: "Goiás",
      country: "Brasil",
    },
    {
      city: "Palmas",
      state: "Tocantins",
      country: "Brasil",
    },
    {
      city: "Teresina",
      state: "Piauí",
      country: "Brasil",
    },
    {
      city: "Belo Horizonte",
      state: "Minas Gerais",
      country: "Brasil",
    },
    {
      city: "Campo Grande",
      state: "Mato Grosso do Sul",
      country: "Brasil",
    },
    {
      city: "João Pessoa",
      state: "Paraíba",
      country: "Brasil",
    },
    {
      city: "Macapá",
      state: "Amapá",
      country: "Brasil",
    },
    {
      city: "Natal",
      state: "Rio Grande do Norte",
      country: "Brasil",
    },
    {
      city: "Boa Vista",
      state: "Roraima",
      country: "Brasil",
    },
    {
      city: "Aracaju",
      state: "Sergipe",
      country: "Brasil",
    },
    {
      city: "Maceió",
      state: "Alagoas",
      country: "Brasil",
    },
    {
      city: "Vitória",
      state: "Espírito Santo",
      country: "Brasil",
    },
    {
      city: "Cuiabá",
      state: "Mato Grosso",
      country: "Brasil",
    }
  ]


  return (
    <>
      <Helmet title="página inicial" />


      {locations.map((locate, index) => (<Location {...locate} key={index} />))}
    </>
  )
}
