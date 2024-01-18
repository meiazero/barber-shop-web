export type NavItem = {
  href: string
  title: string
  label: string
}

export interface JwtToken {
  id: number
  name: string
  barberName: string
  email: string
  exp: number
}
