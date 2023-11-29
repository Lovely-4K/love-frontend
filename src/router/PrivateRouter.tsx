import { Navigate, Outlet } from 'react-router-dom';
import useLogin from '~/hooks/useLogin';
import checkParams from '~/utils/checkParams';

/** @todo: 유저가 localStorage 토큰 값을 수정하는 경우 checkAuth 등으로 에러 표시 필요 */
const PrivateRouter = () => {
  const token = checkParams('accessToken');
  const { isLoggedIn } = useLogin(token);

  return isLoggedIn() ? <Outlet /> : <Navigate to={`login`} replace />;
};

export default PrivateRouter;
