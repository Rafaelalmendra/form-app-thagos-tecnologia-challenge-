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
        xs: '80vh',
        sm: '80vh',
        md: '80vh',
        lg: '100vh',
      },
      margin: '2rem 0 2rem 0',
    }}
  >
    <Grid item xs={6}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ width: '100%' }}
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
