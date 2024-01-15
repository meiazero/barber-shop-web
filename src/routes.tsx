import { createBrowserRouter } from "react-router-dom"
import { NotFound } from "./pages/404"
import { AppLayout } from "./pages/_layouts/app"
import { AuthLayout } from "./pages/_layouts/auth"
import { LandingLayout } from "./pages/_layouts/landing"
import { Home } from "./pages/app/home"
import { Privacy } from "./pages/app/privacy"
import { Terms } from "./pages/app/terms"
import { SignIn } from "./pages/auth/sign-in"
import { SignUp } from "./pages/auth/sign-up"
import { Dashboard } from "./pages/dashboard"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <AppLayout />,
        errorElement: <NotFound />,
        children: [
          {
            path: "dashboard/",
            element: <Dashboard />,
          },
          {
            path: "privacy/",
            element: <Privacy />,
          },
          {
            path: "terms/",
            element: <Terms />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
])
