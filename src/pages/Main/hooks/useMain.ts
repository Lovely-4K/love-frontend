import { useContext } from 'react';
import { MainContext } from '../contexts';

const useMain = () => {
  const mainContext = useContext(MainContext);

  if (!mainContext) throw new Error('Cannot find MainProvider');

  return mainContext;
};

export default useMain;
