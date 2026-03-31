import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav>
        <Link to="/aboutme"> About Me</Link>
        <Link to="/contact"> Contact</Link>
        <Link to="/users"> User List</Link>
    </nav>
  )
}
