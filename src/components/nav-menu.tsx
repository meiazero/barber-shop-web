import { NavConfig } from "@/config/nav"
import { NavItem } from "@/types"
import { Link } from "react-router-dom"

export function NavMenu() {
  return (
    <nav>
      <ul className="flex flex-row gap-3">
        {NavConfig.map((link, index) => (
          <NavMenuItem {...link} key={index} />
        ))}
      </ul>
    </nav>
  )
}

function NavMenuItem(link: NavItem) {
  return (
    <li className="hover:underline">
      <Link to={link.href} title={link.title}>
        {link.label}
      </Link>
    </li>
  )
}
