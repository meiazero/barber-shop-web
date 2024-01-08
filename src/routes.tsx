import { RouteObject, createBrowserRouter } from "react-router-dom"
import { NotFound } from "./pages/404"
import { AppLayout } from "./pages/_layouts/app"
import { Home } from "./pages/app/home"
import { NewRace } from "./pages/app/race"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewRace />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]

export const router = createBrowserRouter(routes)
