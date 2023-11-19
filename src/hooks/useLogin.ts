import useLocalStorage from './useLocalStorage.ts';

const useLogin = (token: string | null) => {
  const { saveValueToStorage, getValueFromStorage } = useLocalStorage();

  if (token !== null) {
    saveValueToStorage('token', token);
  }

  const isLoggedIn = () => {
    const storageToken = getValueFromStorage('token');

    return storageToken !== null && storageToken !== undefined;
  };

  return { isLoggedIn };
};

export default useLogin;
