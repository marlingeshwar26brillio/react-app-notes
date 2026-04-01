import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/Login.css'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate login - check if user exists in localStorage
    const user = JSON.parse(localStorage.getItem('user') || 'null')
    if (user && user.email === form.email) {
      // For demo, just check email match
      navigate('/dashboard')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="login-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="login-input"
        />
        <button type="submit" className="login-btn">Login</button>
        <p>Don't have an account? <Link to="/signup" className="login-link">Sign Up</Link></p>
      </form>
    </div>
  )
}
