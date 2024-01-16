import { createContext, useEffect, useState } from "react"

interface JwtToken {
  id: number
  name: string
  barberName: string
  email: string
  exp: number
}

interface UserTemplate {
  authUser: JwtToken | null
  setAuthUser: (token: JwtToken) => void
  unsetAuthUser: () => void
}

export const UserContext = createContext({} as UserTemplate)

function UserProvider({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("token")

  const userTemplate: UserTemplate = {
    authUser: null,
    setAuthUser: (user: JwtToken) => {
      if (token) {
        setUser((prev: UserTemplate) => {
          const newUserObject = { ...prev, authUser: user }
          localStorage.setItem("token", JSON.stringify(newUserObject))
          return newUserObject
        })
      }
    },
    unsetAuthUser: () => {
      localStorage.removeItem("token")
      setUser((prev: UserTemplate) => {
        return { ...prev, authUser: null }
      })
    },
  }

  const [user, setUser] = useState<UserTemplate>(userTemplate)

  const autoLogin = () => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("token") as string)

      setUser((prev: UserTemplate) => {
        const newUserObject = {
          ...prev,
          authUser: savedUser as JwtToken | null,
        }
        return newUserObject
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return new Error(err)
    }
  }

  useEffect(() => {
    autoLogin()
  }, [])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export default UserProvider
