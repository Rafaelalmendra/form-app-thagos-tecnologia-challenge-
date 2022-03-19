import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(2).required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null])
    .required(),
});

export default schema;
