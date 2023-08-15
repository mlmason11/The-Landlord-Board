import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="main-header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/properties">Listed Properties</Link>
        <Link to="/form">Add New Property</Link>
      </nav>
      <h1>The Landlord Board</h1>
      <h2>We put the 'honest' in 'honest living'</h2>
    </header>
  )
}

export default Header