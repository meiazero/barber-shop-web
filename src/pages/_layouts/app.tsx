import { Outlet } from "react-router-dom"

export function AppLayout() {
  return (
    <main className="bg-background min-h-screen antialiased">
      <Outlet />
    </main>
  )
}
