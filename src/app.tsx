import { Helmet, HelmetProvider } from "react-helmet-async"
import { RouterProvider } from "react-router-dom"
import { Toaster } from "./components/ui/sonner"
import { UserProvider } from "./providers/AuthProvider"
import { router } from "./routes"

export default function App() {
  return (
    <UserProvider>
      <HelmetProvider>
        <Helmet titleTemplate="%s | barber.shop" />
        <RouterProvider router={router} />
        <Toaster richColors />
      </HelmetProvider>
    </UserProvider>
  )
}
