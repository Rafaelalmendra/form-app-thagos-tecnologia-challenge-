import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#19D773',
      light: '#35FF95',
      dark: '#19CC6E',
      contrastText: '#FFF',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontWeight: '600',
    },
    subtitle1: {
      fontWeight: '500',
      color: '#19D773',
    },
    button: {
      fontSize: '1rem',
      width: '14rem',
      height: '3rem',
    },
  },
  breakpoints: {
    values: {
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
});

export default theme;
