import { Box } from '@mui/material';
import Image from '../../assets/images/vector-login.svg';

const ImageLogin = () => (
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
    <img style={{ width: '60%' }} src={Image} alt="Imagem de Login" />
  </Box>
);

export default ImageLogin;
