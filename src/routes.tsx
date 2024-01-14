import { RouteObject, createBrowserRouter } from "react-router-dom"
import { NotFound } from "./pages/404"
import { AppLayout } from "./pages/_layouts/app"
import { Home } from "./pages/app/home"

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
    ],
  },
]

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL || "/",
})
