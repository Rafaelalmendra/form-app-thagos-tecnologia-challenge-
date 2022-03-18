import { Button, Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      <Typography variant="subtitle1" color="primary">
        Bem vindo!
      </Typography>
      <Typography variant="h1">Crie sua conta</Typography>
      <Button variant="contained">Cadastrar</Button>
    </>
  );
};

export default Home;
