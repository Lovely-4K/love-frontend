import { useCallback } from 'react';

const useLocalStorage = () => {
  const saveValueToStorage = useCallback((key: string, value: any) => {
    localStorage.setItem(key, value);
  }, []);

  const getValueFromStorage = useCallback((key: string) => {
    const value = localStorage.getItem(key);

    return value ? value : null;
  }, []);

  return { getValueFromStorage, saveValueToStorage };
};

export default useLocalStorage;
