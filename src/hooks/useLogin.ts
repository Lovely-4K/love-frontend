import useLocalStorage from './useLocalStorage.ts';

const useLogin = () => {
  const { defaultStorageValue: token } = useLocalStorage('token');

  const isLoggedIn = () => {
    return token !== null;
  };

  return { isLoggedIn };
};

export default useLogin;
