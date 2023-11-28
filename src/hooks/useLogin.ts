import { saveValueToStorage, getValueFromStorage } from '~/utils/localStorage';

const useLogin = (token: string | null) => {
  if (token !== null) {
    saveValueToStorage('accessToken', token);
  }

  const isLoggedIn = () => {
    const storageToken = getValueFromStorage('accessToken');

    return storageToken !== null && storageToken !== undefined;
  };

  return { isLoggedIn };
};

export default useLogin;
