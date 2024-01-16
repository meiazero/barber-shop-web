import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCurrentDate(): string {
  const format = (n: number) => (n < 10 ? `0${n}` : n)

  let day = new Date().getDate().toString()
  let month = (new Date().getMonth() + 1).toString()
  let year = new Date().getFullYear().toString()

  return `${format(day as unknown as number)}/${format(
    month as unknown as number
  )}/${year}`
}
