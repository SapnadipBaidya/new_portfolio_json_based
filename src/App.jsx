import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useState, useMemo } from 'react';
import Home from './pages/Home';

function App() {
  const [mode, setMode] = useState('dark');
  
  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? {
        primary: { main: '#1976d2' },
        secondary: { main: '#9c27b0' },
        background: { default: '#f5f5f5', paper: '#ffffff' },
      } : {
        primary: { main: '#90caf9' },
        secondary: { main: '#ce93d8' },
        background: { default: '#121212', paper: '#1e1e1e' },
      }),
    },
    typography: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    },
  }), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
}

export default App;