const checkTokenParams = (key: string) => {
  const urlParams = new URL(location.href).searchParams;
  const value = urlParams.get(key);

  return value;
};

export default checkTokenParams;
