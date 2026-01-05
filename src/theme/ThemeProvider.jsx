import { useEffect } from "react";

export default function ThemeProvider({ theme = "light", children }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return children;
}