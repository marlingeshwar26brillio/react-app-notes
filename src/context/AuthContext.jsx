import { createContext, useContext, useState } from "react";
import { getUsers, saveUsers, getSession, setSession, clearSession } from "../utils/storage";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const session = getSession();
    if (!session) return null;
    const users = getUsers();
    return users.find(u => u.id === session.userId) || null;
  });

  const signup = async (username, password) => {
    const users = getUsers();
    if (users.some(u => u.username === username)) {
      throw new Error("User already registered");
    }

    const newUser = {
      id: crypto.randomUUID(),
      username,
      password,
      createdAt: Date.now()
    };

    users.push(newUser);
    saveUsers(users);
    setSession({ userId: newUser.id });
    setUser(newUser);
  };

  const login = async (username, password) => {
    const users = getUsers();

    const found = users.find(
      u => u.username === username && u.password === password
    );
    if (!found) throw new Error("Invalid credentials");

    setSession({ userId: found.id });
    setUser(found);
  };

  const logout = () => {
    clearSession();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}