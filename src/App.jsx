import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { NotesProvider } from "./context/NotesContext";
import { ThemeProvider } from "./context/ThemeContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Trash from "./pages/Trash";
import "./styles.css";

export default function App() {
  return (
    <HashRouter> //used this because it works in github pages and if browser is refreshed it works
      <ThemeProvider>
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
      </ThemeProvider>
    </HashRouter>
  );
}