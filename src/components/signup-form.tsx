import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const signUpSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
})

type SignUpSchema = z.infer<typeof signUpSchema>

export function SignUpForm() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  })

  const handleRegisterUser = async ({
    email,
    fullName,
    password,
  }: SignUpSchema) => {
    const data = { email, fullName, password }
    try {
      console.log(data)

      toast.success("Conta Criada!", {
        description: "",
        action: {
          label: "Login",
          onClick: () => {
            navigate(`/sign-in?email=${email}`)
          },
        },
      })
    } catch (err) {
      toast.error("Erro ao registrar usuário!")
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
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Sua senha</Label>
            <Input
              id="password"
              placeholder="minhaSenhaSegura"
              type="password"
              {...register("password")}
            />
          </div>

          <Button type="submit" disabled={isSubmitting}>
            Finalizar cadastro
          </Button>
        </div>
      </form>
    </div>
  )
}
