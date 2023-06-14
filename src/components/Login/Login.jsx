import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import {
  StyledInputAuth,
  StyledFormAuth,
  StyledBtnAuthAccent,
  StyledHeaderAuth,
} from './Login.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

let schema = yup.object({
  password: yup
    .string()
    .required('Please enter a password')
    .min(8)
    .max(32)
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, 'a-z and 0-9'),

  email: yup.string().required('Please enter a email').email().min(8).max(32),
});

function Login() {
  const dispatch = useDispatch();
  const startValue = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    dispatch(logIn(values));
  };
  return (
    <>
      <StyledHeaderAuth>Log in</StyledHeaderAuth>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={schema}
        initialValues={startValue}
      >
        <StyledFormAuth>
          <StyledInputAuth type="email" name="email" placeholder="Email *" />
          <ErrorMessage name="tremail" component="div" />

          <StyledInputAuth
            type="password"
            name="password"
            placeholder="Password *"
          />
          <ErrorMessage name="password" component="div" />

          <StyledBtnAuthAccent type="submit">Log in</StyledBtnAuthAccent>
        </StyledFormAuth>
      </Formik>
    </>
  );
}

export default Login;
