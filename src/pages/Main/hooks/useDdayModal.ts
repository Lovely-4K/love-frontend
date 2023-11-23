import { useContext } from 'react';
import { DdayModalContext } from '../contexts';

const useDdayModal = () => {
  const dDayModalContext = useContext(DdayModalContext);

  if (!dDayModalContext) throw new Error('Cannot find DdayModalProvider');

  return dDayModalContext;
};

export default useDdayModal;
