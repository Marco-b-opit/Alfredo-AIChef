import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: '#50e3c2',
      contrastText: '#fdfdfd',
    },
    secondary: {
      main: '#008fff',
      contrastText: '#fdfdfd',
    },
    background: {
      default: '#fdfdfd',
      paper: '#fefefe',
    },
    text: {
      primary: '#020202',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), sans-serif',
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    // You can add more typography settings as needed
  },
  spacing: 8, // For example, 8px times the factor you assign to spacing values
});

export const darkTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: {
      main: '#03dac6',
      contrastText: '#020202',
    },
    secondary: {
      main: '#45ADFF',
      contrastText: '#020202',
    },
    background: {
      default: '#020202',
      paper: '#040404',
    },
    text: {
      primary: '#fdfdfd',
      secondary: '#aaaaaa',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), sans-serif',
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
  spacing: 8,
});
