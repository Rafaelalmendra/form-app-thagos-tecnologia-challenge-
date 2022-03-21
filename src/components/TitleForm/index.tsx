import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

const TitleForm = () => {
  const { t } = useTranslation();
  return (
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
        {t('Welcome')}!
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
        {t('Create your account')}
      </Typography>
    </Box>
  );
};

export default TitleForm;
