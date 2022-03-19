import { Formik, Form, Field } from 'formik';
import { Users, Mail, Lock } from 'react-feather';
import { Box, Button } from '@mui/material';
import api from '../../services/api';
import Input from '../Input';
import TitleForm from '../TitleForm';

const FormRegistration = () => {
  const onSubmit = (values: any) => {
    api
      .post('/users', {
        name: values.name,
        email: values.email,
        password: values.password,
      })
      .then(() => {
        //redirect to login
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
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        render={({ values, handleChange }) => (
          <Form>
            <Field
              name="name"
              onChange={handleChange}
              value={values.name}
              component={Input}
              title="Seu nome"
              icon={<Users />}
            />
            <Field
              name="email"
              onChange={handleChange}
              value={values.email}
              component={Input}
              title="Seu email"
              icon={<Mail />}
            />
            <Field
              name="password"
              onChange={handleChange}
              value={values.password}
              component={Input}
              title="Sua senha"
              type="password"
              icon={<Lock />}
            />
            <Field
              name="confirmPassword"
              onChange={handleChange}
              value={values.confirmPassword}
              component={Input}
              title="Confirme sua senha"
              type="password"
              icon={<Lock />}
            />
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
      />
    </Box>
  );
};

export default FormRegistration;
