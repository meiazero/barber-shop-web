import { createContext, useEffect, useState } from "react"

interface JwtToken {
  id: string
  name: string
  barberName: string
  email: string
  role: string
  exp: number
}

interface UserTemplate {
  authUser: JwtToken | null
  setAuthUser: (token: JwtToken) => void
  unsetAuthUser: () => void
}

export const UserContext = createContext({} as UserTemplate)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("token")

  const userTemplate: UserTemplate = {
    authUser: null,
    setAuthUser: (user: JwtToken) => {
      if (token) {
        setUser((prev: UserTemplate) => {
          const newUserObject = { ...prev, authUser: user }
          localStorage.setItem("user", JSON.stringify(newUserObject))
          return newUserObject
        })
      }
    },
    unsetAuthUser: () => {
      localStorage.removeItem("user")
      localStorage.removeItem("token")
      setUser((prev: UserTemplate) => {
        const newUserObject = { ...prev, authUser: null }
        return newUserObject
      })
    },
  }

  const [user, setUser] = useState<UserTemplate>(userTemplate)

  const autoLogin = () => {
    try {
      const savedUser = localStorage.getItem("user")

      setUser((prev: UserTemplate) => {
        const newUserObject = {
          ...prev,
          authUser: savedUser as JwtToken | null,
        }
        return newUserObject
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    autoLogin()
  }, [])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
