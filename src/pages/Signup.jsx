import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import GridPattern from "../components/GridPattern";

export default function Signup() {
  const { user, signup } = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    if (user) {
      nav("/app");
    }
  }, [user, nav]);

  const [username, setU] = useState("");
  const [password, setP] = useState("");
  const [err, setErr] = useState("");

  const submit = async e => {
    e.preventDefault();
    try {
      await signup(username, password);
      nav("/app");
    } catch (error) {
      if (error.message === "User already registered") {
        nav("/login", {
          state: { info: "Username already registered. Please login." }
        });
      } else {
        setErr("Unable to create account. Try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
      <GridPattern
        width={36}
        height={36}
        className="opacity-60 mask-[radial-gradient(ellipse_at_center,white,transparent_75%)]"
      />
      <Link
        to="/"
        className="absolute top-6 left-6 z-10 px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-200 transition-colors font-medium"
      >
        ← Back
      </Link>
      <form onSubmit={submit} className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-slate-900">Create Account</h2>
        <p className="text-center text-slate-600 mb-8 text-sm">Join Notely and start organizing</p>
        
        {err && <p className="text-red-500 text-sm mb-4 text-center font-medium">{err}</p>}
        
        <div className="space-y-4">
          <input 
            placeholder="Username" 
            value={username}
            onChange={e=>setU(e.target.value)} 
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={e=>setP(e.target.value)} 
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button 
            type="submit"
            className="w-full px-4 py-3 bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg"
          >
            Sign Up
          </button>
        </div>

        <p className="text-center mt-6 text-slate-600 ">
          Already have an account? <Link to="/login" className="text-blue-500  font-semibold hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
}