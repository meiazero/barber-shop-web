import { NavConfig } from "@/config/nav"
import { NavItem } from "@/types"
import { Link, useLocation } from "react-router-dom"

export function NavMenu() {
  const { pathname } = useLocation()

  return (
    <nav>
      <ul className="flex flex-row gap-3">
        {NavConfig.map((link, index) => (
          <NavMenuItem link={link} path={pathname} key={index} />
        ))}
      </ul>
    </nav>
  )
}

function NavMenuItem({ link, path }: { link: NavItem; path?: string }) {
  return (
    <li>
      <Link
        to={link.href}
        title={link.title}
        className={`py-1 hover:border-b hover:border-zinc-900 ${
          path == link.href ? "border-b border-zinc-900" : ""
        }`}
      >
        {link.label}
      </Link>
    </li>
  )
}
