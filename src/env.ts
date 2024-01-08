import { z } from "zod"

export const envSchema = z.object({
  MODE: z.enum(["production", "local"]),
  VITE_APP_URL: z.string(),
})

export const env = envSchema.parse(import.meta.env)
