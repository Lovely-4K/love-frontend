import { useMemo } from 'react';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '~/constants';
import { setStoredData, getStoredData } from '~/utils/localStorage';

const useLogin = () => {
  const accessToken = getStoredData(ACCESS_TOKEN_KEY);
  const refreshToken = getStoredData(REFRESH_TOKEN_KEY);

  const setLoginParams = ({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) => {
    setStoredData(ACCESS_TOKEN_KEY, accessToken);
    setStoredData(REFRESH_TOKEN_KEY, refreshToken);
  };

  const isLoggedIn = useMemo(() => {
    return accessToken !== null && refreshToken !== null;
  }, [accessToken, refreshToken]);

  return { isLoggedIn, setLoginParams };
};

export default useLogin;
