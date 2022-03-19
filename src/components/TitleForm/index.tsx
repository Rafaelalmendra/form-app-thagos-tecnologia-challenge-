import { Box, Typography } from '@mui/material';

const TitleForm = () => (
  <Box display="flex" flexDirection={'column'} alignItems="center">
    <Typography
      variant="subtitle1"
      sx={{
        fontSize: {
          xs: '1.4rem',
          sm: '1.4rem',
          md: '1.4rem',
          xl: '1.875rem',
        },
      }}
    >
      Bem vindo!
    </Typography>
    <Typography
      variant="h1"
      sx={{
        fontSize: {
          xs: '2rem',
          sm: '2rem',
          md: '2rem',
          xl: '2.485rem',
        },
        marginBottom: '1.5rem',
      }}
    >
      Crie sua conta
    </Typography>
  </Box>
);

export default TitleForm;
