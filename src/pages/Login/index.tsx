import Form from '../../components/Form';
import ImageLogin from '../../assets/images/vector-login.svg';
import Grid from '@mui/material/Grid';

const Login = () => (
  <Grid
    container
    spacing={2}
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
  >
    <Grid item xs={7}>
      <img src={ImageLogin} alt="Imagem de Login" />
    </Grid>
    <Grid item xs={5}>
      <Form />
    </Grid>
  </Grid>
);

export default Login;
