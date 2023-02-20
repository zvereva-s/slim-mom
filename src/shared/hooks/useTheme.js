import { useContext } from "react";

import { ThemeContext } from "../providers/ThemeProvider";

export default function useTheme() {
  const { theme, setThemeSchema } = useContext(ThemeContext);

  return { theme, setThemeSchema };
}
