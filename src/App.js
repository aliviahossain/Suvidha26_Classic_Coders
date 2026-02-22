import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import './i18n'; // Essential for the multilingual UI 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Creating the high-contrast theme required for accessibility [cite: 25, 31]
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: '#1a237e' },
      background: {
        default: darkMode ? '#121212' : '#f8fafd',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
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