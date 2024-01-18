import { env } from "@/env"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const signUpSchema = z
  .object({
    fullName: z.string().min(1, { message: "Você precisa fornecer seu nome" }),
    barberShopName: z
      .string()
      .min(1, { message: "Você precisa fornecer o nome da sua barbearia" }),
    email: z
      .string()
      .email({ message: "Você precisa fornecer um e-mail válido" }),
    password: z
      .string()
      .min(5, { message: "Sua senha precisa ter no mínimo 5 caracteres" }),
    confirmPassword: z.string().min(5, {
      message: "Sua senha precisa ter no mínimo 5 caracteres",
    }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  })

type SignUpSchema = z.infer<typeof signUpSchema>

export function SignUpForm() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  })

  const handleRegisterUser = async ({
    email,
    fullName,
    barberShopName,
    password,
  }: SignUpSchema) => {
    try {
      const { status } = await axios.post(
        `${env.VITE_API_URL}/users`,
        {
          email,
          name: fullName,
          barberShopName,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (status !== 201) {
        throw new Error("Erro ao registrar usuário!")
      }

      reset()

      toast.success("Conta Criada!", {
        action: {
          label: "Login",
          onClick: () => {
            navigate(`/auth/sign-in?email=${email}`)
          },
        },
      })
    } catch (error) {
      toast.error("Erro ao registrar usuário!", {
        // @ts-ignore
        description: error.message,
      })
    }
  }

  return (
    <div className="grid gap-6 px-3 pt-10">
      <form onSubmit={handleSubmit(handleRegisterUser)}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="fullName">Seu nome</Label>
            <Input
              id="fullName"
              type="text"
              autoCorrect="off"
              {...register("fullName")}
            />
            {errors.fullName && (
              <span className="text-sm text-red-500">
                {errors.fullName.message}
              </span>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="barberShopName">Nome da barbearia</Label>
            <Input
              id="barberShopName"
              type="text"
              autoCorrect="off"
              {...register("barberShopName")}
            />
            {errors.barberShopName && (
              <span className="text-sm text-red-500">
                {errors.barberShopName.message}
              </span>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input
              id="email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
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
              placeholder="u344X!8%"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirme sua senha</Label>
            <Input
              id="confirmPassword"
              placeholder="u344X!8%"
              type="password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <span className="text-sm text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting}>
            Finalizar cadastro
          </Button>
        </div>
      </form>
    </div>
  )
}
