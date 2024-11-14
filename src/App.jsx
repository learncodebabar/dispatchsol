// App.js
import React, { useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard darkMode={darkMode} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
