import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Users, Mail, Lock } from 'react-feather';
import { Box, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import api from '../../services/api';
import schema from '../../schema/validationRegister';
import Input from '../Input';
import TitleForm from '../TitleForm';

const FormRegistration = () => {
  const navigate = useNavigate();
  const onSubmit = (values: any) => {
    api
      .post('/users', {
        name: values.name,
        email: values.email,
        password: values.password,
      })
      .then(() => {
        navigate('/sucess');
      })
      .catch((response) => {
        console.error(response.error);
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
            <Button
              fullWidth
              variant="contained"
              sx={{ marginTop: '1.5rem' }}
              type="submit"
            >
              Cadastrar
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default FormRegistration;
