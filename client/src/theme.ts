// src/theme.ts
import { createTheme } from '@mui/material/styles';
import { blue, pink, grey } from '@mui/material/colors';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: blue[700], light: blue[500], dark: blue[900], contrastText: '#fff' },
    secondary: { main: pink[500], light: pink[300], dark: pink[700], contrastText: '#fff' },
    background: { default: blue[900], paper: '#fff' },
    text: { primary: grey[900], secondary: grey[700] },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    allVariants: {
      color: grey[900],
      letterSpacing: '0.02em',
    },
    h1: { fontSize: '2rem', fontWeight: 700 },
    h2: { fontSize: '1.75rem', fontWeight: 700 },
    h3: { fontSize: '1.5rem', fontWeight: 700 },
    h6: { fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase' },
    body1: { fontSize: '1rem' },
    body2: { fontSize: '0.875rem' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.6,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          transition: 'all 0.3s ease-in-out',
          '&.footer-link-light': {
            color: '#fff', // чисто белый
            fontSize: '1rem', // как у h6
            fontWeight: 700, // жирный шрифт
            textTransform: 'uppercase', // верхний регистр
            letterSpacing: '0.05em',
            '&:hover': {
              color: blue[200],
              textDecoration: 'underline',
              transform: 'translateX(2px)',
            },
          },
        },
      },
    },
  },
});

export default lightTheme;
