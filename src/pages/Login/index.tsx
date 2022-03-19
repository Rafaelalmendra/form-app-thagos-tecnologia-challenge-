import Grid from '@mui/material/Grid';
import ImageLogin from '../../components/ImageLogin';
import FormRegistration from '../../components/FormRegistration';

const Login = () => (
  <Grid
    container
    display="flex"
    alignItems="center"
    justifyContent="center"
    mb={5}
    columns={{ xs: 4, sm: 8, md: 12 }}
    sx={{
      minHeight: {
        xs: '90vh',
        sm: '90vh',
        md: '100vh',
        lg: '100vh',
      },
    }}
  >
    <Grid item xs={6}>
      <ImageLogin />
    </Grid>
    <Grid item xs={6}>
      <FormRegistration />
    </Grid>
  </Grid>
);

export default Login;
