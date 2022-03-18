import { Button, Typography, ThemeProvider } from '@mui/material';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="subtitle1" color="primary">
        Bem vindo!
      </Typography>
      <Typography variant="h1">Crie sua conta</Typography>
      <Button variant="contained">Cadastrar</Button>
    </ThemeProvider>
  );
};

export default App;
