import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { getUser, refreshUser } from 'redux/auth/auth-operations';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout/Layout';
import 'react-toastify/dist/ReactToastify.css';
import { getIsRefreshing } from 'redux/auth/auth-selectors';
import { ThemeSwitching } from './styles/ThemeSwitching';
import { useAuth } from 'hooks';
import { GlobalStylesPrivate } from './styles/GlobalStylePrivate.styled';
import { GlobalStylePublic } from './GlobalStylePublic/GlobalStylePublic.styled';
import Loader from './Loader/Loader';
// import Login from 'pages/Login';
import Register from 'pages/Register';
import Home from 'pages/Home';
import Calculator from 'pages/Calculator';
import Diary from 'pages/Diary';
import PageNotFound from './PageNotFound/PageNotFound';

const Login = lazy(() => import('../pages/Login'));

export const App = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser())
      .unwrap()
      .then(() => dispatch(getUser()));
  }, [dispatch]);

  const isRefreshing = useSelector(getIsRefreshing);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <ThemeSwitching>
        {isLoggedIn ? <GlobalStylesPrivate /> : <GlobalStylePublic />}
        {/* <Suspense fallback={<Loader />}> <div>Navlinks</div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/registration">Register</NavLink>
        <div>links</div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/registration">Register</Link> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/registration"
              element={
                <PublicRoute restricted>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Login />
                  </Suspense>
                </PublicRoute>
              }
            />
            <Route
              path="/calculator"
              element={
                <PrivateRoute>
                  <Calculator />
                </PrivateRoute>
              }
            />
            <Route
              path="/diary"
              element={
                <PrivateRoute>
                  <Diary />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
        {/* </Suspense> */}
      </ThemeSwitching>
    </>
  );
};
