import { createContext, useContext, useEffect, useState } from "react";
import { getTheme, setThemeStorage } from "../utils/storage";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    document.body.className = theme;
    setThemeStorage(theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}