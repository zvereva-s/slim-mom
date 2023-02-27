import React, { useState } from "react";

export const ThemeContext = React.createContext({
  isDark: false,
  theme: "light",
  setThemeSchema: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const defaultTheme = {
    isDark,
    theme: isDark ? "dark" : "light",
    setThemeSchema: () => {
      setIsDark(!isDark);
    },
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
