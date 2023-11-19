import useLocalStorage from './useLocalStorage.ts';

const useLogin = (token: string | null) => {
  const { defaultStorageValue: storageToken } = useLocalStorage('token', token);

  const isLoggedIn = () => {
    return storageToken !== null && storageToken !== undefined;
  };

  return { isLoggedIn };
};

export default useLogin;
