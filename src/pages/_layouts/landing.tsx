import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Outlet } from "react-router-dom"

export function LandingLayout() {
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
