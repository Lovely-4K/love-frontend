import { Navigate } from 'react-router-dom';
import { useLogin } from '~/hooks';
import { paths } from '~/router';
import { LoginButtons, LoginTitle } from './components';

const Login = () => {
  const { isLoggedIn } = useLogin();

  if (isLoggedIn) return <Navigate to={paths.MAIN} replace />;

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-16 bg-gradient-to-t from-[#FF5794] to-[#FF7360]">
      <LoginTitle />
      <LoginButtons />
    </div>
  );
};

export default Login;
