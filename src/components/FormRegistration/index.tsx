import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Users, Mail, Lock } from 'react-feather';
import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import api from '../../services/api';
import schema from '../../schema/validationRegister';
import Input from '../Input';
import TitleForm from '../TitleForm';

interface ValuesProps {
  name: string;
  email: string;
  password: string;
}

const FormRegistration = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [sucess, setSucess] = useState(false);
  const onSubmit = (values: ValuesProps, { resetForm }: any) => {
    setLoading(true);
    api
      .post('/users', {
        name: values.name,
        email: values.email,
        password: values.password,
      })
      .then(() => {
        setLoading(false);
        resetForm();
        setSucess(true);
      })
      .catch((response) => {
        console.error(response.error);
        setLoading(false);
      });
  };

  return (
    <Box>
      <TitleForm />
      <Formik
        onSubmit={onSubmit}
        validationSchema={schema}
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
      >
        {({ errors }) => (
          <Form>
            <Field
              name="name"
              component={Input}
              title={t('Your name')}
              icon={<Users />}
            />
            {errors.name && (
              <Alert severity="error">
                {t('Name must contain at least 2 characters')}
              </Alert>
            )}
            <Field
              name="email"
              component={Input}
              title={t('Your e-mail')}
              icon={<Mail />}
            />
            {errors.email && (
              <Alert severity="error">{t('Enter a valid email address')}</Alert>
            )}
            <Field
              name="password"
              component={Input}
              title={t('Your password')}
              type="password"
              icon={<Lock />}
            />
            {errors.password && (
              <Alert severity="error">
                {t(
                  'The password must contain at least 8 characters, an uppercase letter, a number and a special character'
                )}
              </Alert>
            )}
            <Field
              name="confirmPassword"
              component={Input}
              title={t('Confirm your password')}
              type="password"
              icon={<Lock />}
            />
            {errors.confirmPassword && (
              <Alert severity="error">{t('Passwords do not match')}</Alert>
            )}
            {loading ? (
              <LoadingButton
                fullWidth
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
              >
                {t('Registering')}
              </LoadingButton>
            ) : (
              <Button
                fullWidth
                variant="contained"
                sx={{ marginTop: '1.5rem' }}
                type="submit"
              >
                {t('Register')}
              </Button>
            )}
          </Form>
        )}
      </Formik>

      {sucess && (
        <Snackbar autoHideDuration={6000} open={sucess}>
          <Alert
            onClose={() => setSucess(false)}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            {t('Registration successful!')}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default FormRegistration;
