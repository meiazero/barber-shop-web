import { getCurrentDate } from "@/lib/utils"
import { Helmet } from "react-helmet-async"
import { SchedulersTable } from "./schedulers-table"

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <main className="container flex flex-col gap-y-4">
        <div className="flex w-full flex-row items-center justify-between">
          <h1 className="w-fit rounded-md border bg-slate-100 px-2 py-1 text-2xl font-bold uppercase">
            Meiazero Barbearia
          </h1>
          <p className="text-md font-bold text-black-smoke">
            {getCurrentDate()}
          </p>
        </div>

        <SchedulersTable />
      </main>
    </>
  )
}
