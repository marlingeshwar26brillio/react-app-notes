import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'


const isAuth = () => !!localStorage.getItem('user')

const Protected = ({ children }) =>
  isAuth() ? children : <Navigate to="/login" />

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}