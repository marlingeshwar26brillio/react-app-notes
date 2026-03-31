import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user') || 'null')

  const logout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <nav style={s.nav}>
      <Link to="/" style={s.brand}>MyNotes</Link>
      <div style={s.links}>
        <Link to="/" style={s.a}>Home</Link>
        {user ? (
          <>
            <Link to="/dashboard" style={s.a}>Dashboard</Link>
            <span style={s.name}>Hi, {user.name}</span>
            <button onClick={logout} style={s.btn}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={s.a}>Login</Link>
            <Link to="/signup" style={s.a}>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  )
}

const s = {
  nav: { display:'flex', justifyContent:'space-between', alignItems:'center',
         padding:'12px 24px', background:'#1e1e2e', color:'#fff' },
  brand: { color:'#7c3aed', fontWeight:'bold', fontSize:20, textDecoration:'none' },
  links: { display:'flex', gap:16, alignItems:'center' },
  a: { color:'#ccc', textDecoration:'none' },
  name: { color:'#7c3aed', fontSize:14 },
  btn: { background:'#7c3aed', color:'#fff', border:'none',
         padding:'6px 14px', borderRadius:6, cursor:'pointer' }
}