import { useCallback, useState, useRef, useEffect } from 'react';

const useLocalStorage = (key?: string, value?: any) => {
  const defaultStorageKey = useRef(key);
  const [defaultStorageValue, setDefaultStorageValue] = useState(value);

  const saveValueToSotrage = useCallback((key: string, value: any) => {
    localStorage.setItem(key, value);

    if (key === defaultStorageKey.current) {
      setDefaultStorageValue(value);
    }
  }, []);

  const getValueFromStorage = useCallback((key: string) => {
    if (key === defaultStorageKey.current && defaultStorageValue) {
      return defaultStorageValue;
    }
    const value = localStorage.getItem(key);

    return value ? value : null;
  }, []);

  useEffect(() => {
    if (key && value) {
      saveValueToSotrage(key, value);
    }
    if (key) {
      setDefaultStorageValue((curr: any) => {
        const savedValue = getValueFromStorage(key);
        curr =
          typeof savedValue === 'string' ? savedValue : JSON.parse(savedValue);

        return curr;
      });
    }
  }, []);

  return { defaultStorageValue, getValueFromStorage, saveValueToSotrage };
};

export default useLocalStorage;
