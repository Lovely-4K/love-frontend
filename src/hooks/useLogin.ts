import { useCallback, useMemo } from 'react';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '~/constants';
import {
  setStoredData,
  getStoredData,
  clearStoredData,
} from '~/utils/localStorage';

const useLogin = () => {
  const accessToken = getStoredData(ACCESS_TOKEN_KEY);
  const refreshToken = getStoredData(REFRESH_TOKEN_KEY);

  const setLoginParams = useCallback(
    ({
      accessToken,
      refreshToken,
    }: {
      accessToken: string;
      refreshToken: string;
    }) => {
      setStoredData(ACCESS_TOKEN_KEY, accessToken);
      setStoredData(REFRESH_TOKEN_KEY, refreshToken);
    },
    [],
  );

  const logout = useCallback(() => {
    clearStoredData(ACCESS_TOKEN_KEY);
    clearStoredData(REFRESH_TOKEN_KEY);
  }, []);

  const isLoggedIn = useMemo(() => {
    return accessToken !== null && refreshToken !== null;
  }, [accessToken, refreshToken]);

  return { isLoggedIn, setLoginParams, logout };
};

export default useLogin;
