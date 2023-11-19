import { Navigate, Outlet } from 'react-router-dom';
import useCheckTokenParams from '~/hooks/useCheckTokenParams';
import useLogin from '~/hooks/useLogin';

/** @todo: 유저가 localStorage 토큰 값을 수정하는 경우 checkAuth 등으로 에러 표시 필요 */
const PrivateRouter = () => {
  const token = useCheckTokenParams('token');
  const { isLoggedIn } = useLogin(token);

  return isLoggedIn() ? <Outlet /> : <Navigate to={`login`} replace />;
};

export default PrivateRouter;
