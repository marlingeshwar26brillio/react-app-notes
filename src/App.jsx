import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { NotesProvider } from "./context/NotesContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Trash from "./pages/Trash";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NotesProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/app" element={
              <ProtectedRoute><Dashboard /></ProtectedRoute>
            } />

            <Route path="/trash" element={
              <ProtectedRoute><Trash /></ProtectedRoute>
            } />
          </Routes>
        </NotesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}