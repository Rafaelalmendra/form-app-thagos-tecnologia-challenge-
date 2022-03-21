import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Users, Mail, Lock } from 'react-feather';
import { Box, Button } from '@mui/material';
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
  const [loading, setLoading] = useState(false);
  const [sucess, setSucess] = useState(true);
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
              title="Seu nome"
              icon={<Users />}
            />
            {errors.name && (
              <Alert severity="error">
                Nome deve conter no mínimo 2 caracteres
              </Alert>
            )}
            <Field
              name="email"
              component={Input}
              title="Seu e-mail"
              icon={<Mail />}
            />
            {errors.email && (
              <Alert severity="error">Digite um e-mail válido</Alert>
            )}
            <Field
              name="password"
              component={Input}
              title="Sua senha"
              type="password"
              icon={<Lock />}
            />
            {errors.password && (
              <Alert severity="error">
                A senha deve conter no mínimo 8 caracteres, uma letra maiúscula,
                um número e uma caractere especial
              </Alert>
            )}
            <Field
              name="confirmPassword"
              component={Input}
              title="Confirme sua senha"
              type="password"
              icon={<Lock />}
            />
            {errors.confirmPassword && (
              <Alert severity="error">As senhas não coincidem</Alert>
            )}
            {loading ? (
              <LoadingButton
                fullWidth
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
              >
                Cadastrando
              </LoadingButton>
            ) : (
              <Button
                fullWidth
                variant="contained"
                sx={{ marginTop: '1.5rem' }}
                type="submit"
              >
                Cadastrar
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
            Cadastro efetuado com sucesso!
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default FormRegistration;
