// Provider/ThemeProvider.jsx
import { createContext } from "react";
import useTheme from "../hook/useTheme";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const themeData = useTheme();
  return (
    <ThemeContext.Provider value={themeData}>
      {children}
    </ThemeContext.Provider>
  );
}