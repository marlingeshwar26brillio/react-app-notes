import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const nav = useNavigate();
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
    <form className="auth" onSubmit={submit}>
      <h2>Create Account</h2>
      <input placeholder="Username" onChange={e=>setU(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setP(e.target.value)} />
      <button>Signup</button>
    </form>
  );
}