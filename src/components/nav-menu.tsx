import { NavConfig } from "@/config/nav"
import { Link } from "react-router-dom"

export function NavMenu() {
  return (
    <nav>
      <ul className="flex flex-row gap-3">
        {NavConfig.map((link, index) => (
          <li key={index}>
            <Link
              to={link.href}
              title={link.title}
              className="py-1 hover:border-b hover:border-zinc-900"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
