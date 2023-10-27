import { LoginContainer, LoginTitle } from './components';

const Login = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-16 bg-gradient-to-t from-[#FF5794] to-[#FF7360]">
      <LoginTitle />
      <LoginContainer />
    </div>
  );
};

export default Login;
