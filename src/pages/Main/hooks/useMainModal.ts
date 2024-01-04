import { useContext } from 'react';
import { MainModalContext } from '../contexts';

const useMainModal = () => {
  const mainModalContext = useContext(MainModalContext);

  if (!mainModalContext) throw new Error('Cannot find ProfileProvider');

  return mainModalContext;
};

export default useMainModal;
