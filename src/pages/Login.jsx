import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GridPattern from "../components/GridPattern";

export default function Login() {
  const { user, login } = useAuth();
  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      nav("/app");
    }
  }, [user, nav]);

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
    <div className="min-h-screen bg-slate-100 dark:bg-neutral-900 flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-300">
      <GridPattern
        width={36}
        height={36}
        className="opacity-60 mask-[radial-gradient(ellipse_at_center,white,transparent_75%)]"
      />
      <Link
        to="/"
        className="absolute top-6 left-6 z-10 px-4 py-2 rounded-lg text-slate-700 dark:text-neutral-300 hover:bg-slate-200 dark:hover:bg-neutral-800 transition-colors font-medium"
      >
        ← Back
      </Link>
      <form onSubmit={submit} className="relative z-10 w-full max-w-md bg-white dark:bg-neutral-800 border dark:border-neutral-700 rounded-3xl shadow-xl p-8 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center mb-2 text-slate-900 dark:text-neutral-100">Notely</h2>
        <p className="text-center text-slate-600 dark:text-neutral-400 mb-8 text-sm">Welcome back</p>
        
        {info && <p className="text-blue-600 text-sm mb-4 text-center font-medium">{info}</p>}
        {err && <p className="text-red-500 text-sm mb-4 text-center font-medium">{err}</p>}
        
        <div className="space-y-4">
          <input 
            placeholder="Username" 
            value={username}
            onChange={e=>setU(e.target.value)} 
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-slate-900 dark:text-neutral-100 placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={e=>setP(e.target.value)} 
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-slate-900 dark:text-neutral-100 placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button 
            type="submit"
            className="w-full px-4 py-3 bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg"
          >
            Login
          </button>
        </div>

        <p className="text-center mt-6 text-slate-600 dark:text-neutral-400">
          Don't have an account? <Link to="/signup" className="text-blue-500 dark:text-blue-400 font-semibold hover:underline">Sign up</Link>
        </p>
      </form>
    </div>
  );
}