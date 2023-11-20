import { saveValueToStorage, getValueFromStorage } from '~/utils/localStorage';

const useLogin = (token: string | null) => {
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
