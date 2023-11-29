import { Navigate, Outlet, useSearchParams } from 'react-router-dom';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '~/constants';
import { paths } from '.';
import useLogin from '~/hooks/useLogin';

const PrivateRouter = () => {
  const { isLoggedIn, setLoginParams } = useLogin();
  const [searchParams] = useSearchParams();

  const accessToken = searchParams.get(ACCESS_TOKEN_KEY);
  const refreshToken = searchParams.get(REFRESH_TOKEN_KEY);

  if (accessToken && refreshToken) {
    setLoginParams({ accessToken, refreshToken });

    return <Navigate to={paths.MAIN} replace />;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to={paths.LOGIN} replace />;
};

export default PrivateRouter;
