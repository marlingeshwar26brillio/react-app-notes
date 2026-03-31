import { Link } from 'react-router-dom'

export default function Home() {
  const user = JSON.parse(localStorage.getItem('user') || 'null')
  return (
    <div>
      <h1 >Welcome to <span>MyNotes</span></h1>
      {user
        ? <Link to="/dashboard">Go to Dashboard →</Link>
        : <div style={{display:'flex',gap:12}}>
            <Link to="/signup">Get Started</Link>
            <Link to="/login">Login</Link>
          </div>
      }
    </div>
  )
}

