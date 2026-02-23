import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import Grievance from './pages/Grievance'; // Ensure you've created this file
import './i18n';

function App() {
  const [colorblindMode, setColorblindMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: { 
        main: colorblindMode ? '#005AB5' : '#1a237e' 
      },
      secondary: {
        main: colorblindMode ? '#DC3220' : '#ff9800' 
      },
      background: {
        default: '#f8fafd',
        paper: '#ffffff',
      },
      error: {
        main: colorblindMode ? '#E66100' : '#f44336'
      },
      success: {
        main: colorblindMode ? '#5D3FD3' : '#4caf50'
      }
    },
    typography: {
      allVariants: {
        color: colorblindMode ? '#000000' : 'inherit',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Main Dashboard Route */}
          <Route 
            path="/" 
            element={
              <Home 
                toggleColorblind={() => setColorblindMode(!colorblindMode)} 
                isColorblind={colorblindMode} 
              />
            } 
          />
          {/* Civic Services: Grievance Route */}
          <Route path="/grievance" element={<Grievance />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;