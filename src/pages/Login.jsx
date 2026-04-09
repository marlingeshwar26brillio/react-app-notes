import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const location = useLocation();
  const [username, setU] = useState("");
  const [password, setP] = useState("");
  const [err, setErr] = useState("");
  const [info] = useState(location.state?.info || "");

  const submit = async e => {
    e.preventDefault();
    try {
      await login(username, password);
      nav("/app");
    } catch {
      setErr("Invalid credentials");
    }
  };

  return (
    <form className="auth" onSubmit={submit}>
      <h2>Login</h2>
      {info && <p>{info}</p>}
      {err && <p>{err}</p>}
      <input placeholder="Username" onChange={e=>setU(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setP(e.target.value)} />
      <button>Login</button>
      <Link to="/signup">Create account</Link>
    </form>
  );
}