import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { ArrowLeft } from 'react-feather';
import { useTranslation } from 'react-i18next';
import Image from '../../assets/images/vector-404.svg';

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection={'column'}
      sx={{ height: '100vh' }}
    >
      <img style={{ width: '50%', marginBottom: '1rem' }} src={Image} alt="" />
      <Button variant="outlined" onClick={() => navigate('/')}>
        <ArrowLeft /> {t('Return')}
      </Button>
    </Box>
  );
};

export default NotFound;
