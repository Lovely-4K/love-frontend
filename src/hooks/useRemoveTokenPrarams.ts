import useLocalStorage from './useLocalStorage';

const useRemoveTokenParams = () => {
  const urlParams = new URL(location.href).searchParams;
  const token = urlParams.get('token');
  useLocalStorage('token', token);
};

export default useRemoveTokenParams;
