import { Outlet } from "react-router-dom"

export function AuthLayout() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <Outlet />
    </div>
  )
}
