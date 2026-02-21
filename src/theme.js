'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4e73df',
    },
    secondary: {
      main: '#b19cd9',
    },
    background: {
      default: '#f4f6f9', 
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)',
          border: 'none',
        },
      },
    },
  },
});

export default theme;