import { RouteObject, createBrowserRouter } from "react-router-dom"
import { NotFound } from "./pages/404"
import { AppLayout } from "./pages/_layouts/app"
import { Home } from "./pages/app/home"
import { Races } from "./pages/app/races"
import { NewRace } from "./pages/app/races/new"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/races",
        errorElement: <NotFound />,
        children: [
          {
            path: "",
            element: <Races />,
          },
          {
            path: "new",
            element: <NewRace />,
          },
          {
            path: ":id",
            element: <h1>Detalhes da corrida</h1>,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]

export const router = createBrowserRouter(routes)
