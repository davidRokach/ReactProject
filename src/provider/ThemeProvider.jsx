import React, { useCallback, useContext, useMemo, useState } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { node } from "prop-types";

const ThemeContext = React.createContext(null);

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = useCallback(
    () => setIsDark((perv) => !perv),
    [setIsDark]
  );
  // const toggleDarkMode = () => setIsDark(!isDark);

  const theme = createTheme({
    palette: { mode: !isDark ? "light" : "dark" },
  });

  const value = useMemo(() => {
    return { isDark, toggleDarkMode };
  }, [isDark, toggleDarkMode]);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: node.isRequired,
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error(" useTheme must be within a MuiThemeProvider");
  return context;
};
export default ThemeProvider;
