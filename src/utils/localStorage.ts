export const saveValueToStorage = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

export const getValueFromStorage = (key: string) => {
  const value = localStorage.getItem(key);

  return value ? value : null;
};

export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};
