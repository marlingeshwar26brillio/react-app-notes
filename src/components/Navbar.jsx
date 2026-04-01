import { Link, useNavigate } from 'react-router-dom'
import '../css/Navbar.css'

export default function Navbar() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user') || 'null')

  const logout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <nav className="nav">
      <Link to="/" className="brand">MyNotes</Link>
      <div className="links">
        <Link to="/" className="a">Home</Link>
        {user ? (
          <>
            <Link to="/dashboard" className="a">Dashboard</Link>
            <span className="name">Hi, {user.name}</span>
            <button onClick={logout} className="btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="a">Login</Link>
            <Link to="/signup" className="a">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  )
}