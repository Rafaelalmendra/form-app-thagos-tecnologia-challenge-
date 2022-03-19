import { Box, Button, Typography } from '@mui/material';
import { Users, Mail, Lock } from 'react-feather';
import Field from '../Field';

const Form = () => (
  <Box>
    <Typography variant="subtitle1" color="primary">
      Bem vindo!
    </Typography>
    <Typography variant="h1" mb="1.5rem">
      Crie sua conta
    </Typography>

    <Box>
      <Field title="Seu nome" icon={<Users />} />
      <Field title="Seu e-mail" icon={<Mail />} />
      <Field title="Sua senha" icon={<Lock />} />
      <Field title="Confirme sua senha" icon={<Lock />} />
      <Button sx={{ marginTop: '1.5rem' }} variant="contained">
        Cadastrar
      </Button>
    </Box>
  </Box>
);

export default Form;
