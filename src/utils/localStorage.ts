export const setStoredData = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStoredData = (key: string) => {
  const value = localStorage.getItem(key);

  return value ? JSON.parse(value) : null;
};

export const clearStoredData = (key: string) => {
  localStorage.removeItem(key);
};
