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
      fontSize: '2.485rem',
      fontWeight: '600',
    },
    subtitle1: {
      fontSize: '1.875rem',
      fontWeight: '500',
    },
    button: {
      fontSize: '1rem',
      width: '14rem',
      height: '3rem',
    },
  },
});

export default theme;
