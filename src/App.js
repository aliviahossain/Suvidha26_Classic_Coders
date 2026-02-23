import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import './i18n'; // Essential for the multilingual UI

function App() {
  // State for Colorblind Accessibility Mode
  const [colorblindMode, setColorblindMode] = useState(false);

  // Creating a theme that adapts based on the Colorblind toggle
  const theme = createTheme({
    palette: {
      mode: 'light', // Locking to light mode for kiosk clarity
      primary: { 
        // Using a high-contrast cobalt blue for better visibility in colorblind mode
        main: colorblindMode ? '#005AB5' : '#1a237e' 
      },
      secondary: {
        // High-contrast vermillion for secondary actions
        main: colorblindMode ? '#DC3220' : '#ff9800' 
      },
      background: {
        default: '#f8fafd',
        paper: '#ffffff',
      },
      // Adding a specific color set for colorblind-safe feedback
      error: {
        main: colorblindMode ? '#E66100' : '#f44336'
      },
      success: {
        main: colorblindMode ? '#5D3FD3' : '#4caf50'
      }
    },
    // Boosting contrast for typography in accessibility mode
    typography: {
      allVariants: {
        color: colorblindMode ? '#000000' : 'inherit',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Passing state and toggle function to Home. 
          matches the props used in your Home.js: toggleColorblind and isColorblind
      */}
      <Home 
        toggleColorblind={() => setColorblindMode(!colorblindMode)} 
        isColorblind={colorblindMode} 
      />
    </ThemeProvider>
  );
}

export default App;