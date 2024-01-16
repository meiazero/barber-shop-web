import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function SchedulersTable() {
  return (
    <section className="w-full rounded-md border px-5 py-3 md:px-10 md:py-5">
      <h2 className="text-md border-b border-b-slate-200 pb-5 font-semibold text-black-smoke md:text-xl">
        Agendamentos
      </h2>

      <Table>
        <TableCaption>Agendamentos do dia.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Horario</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Detalhes</TableHead>
            <TableHead className="text-right">Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-sm md:text-base">
          <TableRow>
            <TableCell className="font-semibold">
              {new Date("2023 15:30").toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </TableCell>
            <TableCell>Pago</TableCell>
            <TableCell className="min-w-28 text-balance">
              Corte de cabelo e fazer a barba
            </TableCell>
            <TableCell className="text-right">R$25.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  )
}
