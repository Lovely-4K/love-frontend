export const getTodayDate = () => {
  return new Date().toISOString().split('T')[0];
};
