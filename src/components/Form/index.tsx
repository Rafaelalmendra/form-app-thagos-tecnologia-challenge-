import { Box, Button, Typography } from '@mui/material';
import { Users, Mail, Lock } from 'react-feather';
import Field from '../Field';

const Form = () => (
  <Box>
    <Box display="flex" flexDirection={'column'} alignItems="center">
      <Typography
        sx={{
          fontSize: {
            xs: '1.4rem',
            sm: '1.4rem',
            md: '1.4rem',
            xl: '1.875rem',
          },
        }}
        variant="subtitle1"
      >
        Bem vindo!
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: '2rem',
            sm: '2rem',
            md: '2rem',
            xl: '2.485rem',
          },
        }}
        variant="h1"
        mb="1.5rem"
      >
        Crie sua conta
      </Typography>
    </Box>
    <Box>
      <Field title="Seu nome" icon={<Users />} />
      <Field title="Seu e-mail" icon={<Mail />} />
      <Field title="Sua senha" icon={<Lock />} />
      <Field title="Confirme sua senha" icon={<Lock />} />
      <Button fullWidth sx={{ marginTop: '1.5rem' }} variant="contained">
        Cadastrar
      </Button>
    </Box>
  </Box>
);

export default Form;
