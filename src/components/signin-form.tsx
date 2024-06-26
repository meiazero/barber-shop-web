import { env } from "@/env"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useSearchParams } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"
import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const signInSchema = z.object({
  email: z
    .string()
    .email({ message: "Você precisa fornecer um e-mail válido" }),
  password: z
    .string()
    .min(5, { message: "Sua senha precisa ter no mínimo 5 caracteres" }),
})

type SignInSchema = z.infer<typeof signInSchema>

export function SignInForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: searchParams.get("email") ?? "",
      password: "",
    },
  })

  const handleAuthenticate = async ({ email, password }: SignInSchema) => {
    setIsLoading(true)
    try {
      // to test the loading
      await new Promise(resolve => setTimeout(resolve, 3000))

      const { data, status } = await axios.post(
        `${env.VITE_API_URL}/sign-in`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      if (status !== 200) {
        throw new Error("Não foi possível efetuar o login. Tente novamente.")
      }

      localStorage.setItem("token", JSON.stringify(await data?.token))

      reset()
      navigate("/")

      toast.success("Login efetuado com sucesso!", {
        description: `Bem-vindo, ${email}!`,
        action: {
          label: "Dashboard",
          onClick: () => {
            navigate("/dashboard")
          },
        },
      })
    } catch (error) {
      toast.error("Não foi possível efetuar o login. Tente novamente.", {
        // @ts-ignore
        description: error.message,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid gap-6 px-3 pt-10">
      <form onSubmit={handleSubmit(handleAuthenticate)}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input
              id="email"
              type="email"
              autoCapitalize="none"
              autoComplete="false"
              autoCorrect="off"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Sua senha</Label>
            <Input
              id="password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>

          <Button type="submit" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Acessar painel
          </Button>
        </div>
      </form>
    </div>
  )
}
