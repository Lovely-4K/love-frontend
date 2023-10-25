import { LoginContainer, LoginTitle } from './components';

const Login = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-9 lg:flex-row lg:gap-24">
      <LoginTitle />
      <LoginContainer />
    </div>
  );
};

export default Login;
