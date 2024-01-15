import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate, useSearchParams } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
})

type SignInSchema = z.infer<typeof signInSchema>

export function SignInForm() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: searchParams.get("email") ?? "",
      password: "",
    },
  })

  const handleAuthenticate = async ({ email, password }: SignInSchema) => {
    const data = { email, password }
    navigate("/")

    toast.success("Login efetuado com sucesso!", {
      description: "",
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
              autoComplete="email"
              autoCorrect="off"
              {...register("email")}
            />
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
          </div>

          <Button type="submit" disabled={isSubmitting}>
            Acessar painel
          </Button>
        </div>
      </form>
    </div>
  )
}
