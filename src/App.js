import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import './i18n'; // Import i18n configuration

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Creating a high-contrast theme for accessibility 
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1a237e', // Deep Blue from your design [cite: 100]
      },
      background: {
        default: darkMode ? '#121212' : '#f8fafd',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home toggleTheme={() => setDarkMode(!darkMode)} />
    </ThemeProvider>
  );
}

export default App;