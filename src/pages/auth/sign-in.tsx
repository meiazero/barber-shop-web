import { SignInForm } from "@/components/signin-form"
import { Helmet } from "react-helmet-async"

export function SignIn() {
  return (
    <>
      <Helmet title="Acessar painel" />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe seus agendamentos pelo painel!
            </p>
          </div>

          <SignInForm />
          <p className="pt-2 text-center text-sm text-muted-foreground">
            Ainda não possue uma conta? Crie uma{" "}
            <a
              href="/auth/sign-up"
              className="hover:text-primary-dark font-semibold text-primary"
            >
              aqui
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
