import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import * as yup from 'yup';
import {
  StyledInputAuth,
  StyledFormAuth,
  StyledBtnAuthAccent,
  StyledHeaderAuth,
} from '../Login/Login.styled';

let schema = yup.object({
  username: yup.string().required('Please enter a name').min(3).max(32),

  password: yup
    .string()
    .required('Please enter a password')
    .min(8)
    .max(32)
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, 'a-z and 0-9'),

  email: yup
    .string()
    .required('Please enter a password')
    .email()
    .min(8)
    .max(32),
});

function Register() {
  const dispatch = useDispatch();
  const startValue = {
    email: '',
    password: '',
    username: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };
  return (
    <>
      <StyledHeaderAuth>Register</StyledHeaderAuth>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={schema}
        initialValues={startValue}
      >
        <StyledFormAuth>
          <StyledInputAuth type="text" name="username" placeholder="Name *" />
          <ErrorMessage name="username" component="div" />

          <StyledInputAuth type="email" name="email" placeholder="Email *" />
          <ErrorMessage name="email" component="div" />

          <StyledInputAuth
            type="password"
            name="password"
            placeholder="Password *"
          />
          <ErrorMessage name="password" component="div" />

          <StyledBtnAuthAccent type="submit">Register</StyledBtnAuthAccent>
        </StyledFormAuth>
      </Formik>
    </>
  );
}

export default Register;
