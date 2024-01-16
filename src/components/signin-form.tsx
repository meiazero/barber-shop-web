import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate, useSearchParams } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"
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
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: searchParams.get("email") ?? "",
      password: "",
    },
  })

  const handleAuthenticate = async ({ email }: SignInSchema) => {
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

          <Button type="submit" disabled={isSubmitting}>
            Acessar painel
          </Button>
        </div>
      </form>
    </div>
  )
}
