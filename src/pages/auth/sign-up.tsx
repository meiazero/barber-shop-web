import { SignUpForm } from "@/components/signup-form"
import { Helmet } from "react-helmet-async"

export function SignUp() {
  return (
    <>
      <Helmet title="Criar conta grátis" />
      <div className="lg:p-8">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar conta grátis
          </h1>
          <p className="text-sm text-muted-foreground">
            Crie sua conta para melhorar a forma que trabalha.
          </p>
        </div>

        <SignUpForm />

        <p className="px-6 pt-4 text-center text-sm leading-relaxed text-muted-foreground">
          Ao continuar, você concorda com nossos{" "}
          <a
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Termos de serviço
          </a>{" "}
          e{" "}
          <a
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Políticas de privacidade
          </a>
          .
        </p>

        <p className="pt-2 text-center text-sm text-muted-foreground">
          Já possui uma conta?{" "}
          <a
            href="/sign-in"
            className="hover:text-primary-dark font-semibold text-primary"
          >
            Faça login
          </a>
        </p>
      </div>
    </>
  )
}
