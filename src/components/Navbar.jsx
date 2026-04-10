import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { logout } = useAuth();
  const { toggleTheme } = useTheme();

  return (
    <div className="navbar">
      <h2>Notely</h2>
      <div>
        <Link to="/app">Notes</Link>
        <Link to="/trash">Trash</Link>
        <button onClick={toggleTheme}>Theme</button>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}