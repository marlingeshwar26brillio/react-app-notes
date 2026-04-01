import { Link } from 'react-router-dom'

export default function Home() {
  const user = JSON.parse(localStorage.getItem('user') || 'null')
  return (
    <div className="home-container">
      <h1 className="welcome-title">Welcome to <span>MyNotes</span></h1>
      {user
        ? <Link to="/dashboard" className="auth-link">Go to Dashboard →</Link>
        : <div className="auth-links">
            <Link to="/signup" className="auth-link">Get Started</Link>
            <Link to="/login" className="auth-link">Login</Link>
          </div>
      }
    </div>
  )
}

