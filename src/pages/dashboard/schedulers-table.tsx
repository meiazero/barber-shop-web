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
    <section className="w-full rounded-md border px-10 py-5">
      <h2 className="border-b border-b-slate-200 pb-5 text-xl font-semibold text-black-smoke">
        Agendamentos
      </h2>

      <Table>
        <TableCaption>Agendamentos mais recentes.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Detalhes</TableHead>
            <TableHead className="text-right">Horario</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">001</TableCell>
            <TableCell>Pago</TableCell>
            <TableCell>Corte de cabelo e fazer a barba</TableCell>
            <TableCell className="text-right">R$25.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  )
}
