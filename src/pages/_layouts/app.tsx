import { Header } from "@/components/header"
import { api } from "@/lib/axios"
import { isAxiosError } from "axios"
import { useLayoutEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export function AppLayout() {
  const navigate = useNavigate()

  useLayoutEffect(() => {
    const interceptorId = api.interceptors.response.use(
      response => response,
      error => {
        if (isAxiosError(error)) {
          const status = error.response?.status
          const code = error.response?.data.code

          if (status === 401 && code === "UNAUTHORIZED") {
            navigate("/sign-in", {
              replace: true,
            })
          }
        }

        return Promise.reject(error)
      }
    )

    return () => {
      api.interceptors.response.eject(interceptorId)
    }
  }, [navigate])

  return (
    <main className="flex min-h-screen flex-col bg-background antialiased">
      <Header />
      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </main>
  )
}
