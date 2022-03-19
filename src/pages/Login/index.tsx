import Form from '../../components/Form';
import ImageLogin from '../../assets/images/vector-login.svg';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

const Login = () => (
  <Grid
    container
    display="flex"
    alignItems="center"
    justifyContent="center"
    columns={{ xs: 4, sm: 8, md: 12 }}
    sx={{
      height: {
        xs: '90vh',
        sm: '90vh',
        md: '100vh',
        lg: '100vh',
      },
    }}
  >
    <Grid item xs={6}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: '100%',
          marginTop: {
            xs: '2rem',
          },
        }}
      >
        <img style={{ width: '60%' }} src={ImageLogin} alt="Imagem de Login" />
      </Box>
    </Grid>
    <Grid item xs={6}>
      <Form />
    </Grid>
  </Grid>
);

export default Login;
