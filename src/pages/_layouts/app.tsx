import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { UserContext } from "@/providers/AuthProvider"
import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export function AppLayout() {
  const user = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user.authUser) {
      navigate("/auth/sign-in", { replace: true })
    }
  }, [user.authUser, navigate])

  return (
    <main className="flex min-h-screen flex-col bg-background antialiased">
      <Header />
      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}
