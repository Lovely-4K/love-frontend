import { useContext } from 'react';
import { MainContentContext } from '../contexts';

const useMainContent = () => {
  const mainContentContext = useContext(MainContentContext);

  if (!mainContentContext) throw new Error('Cannot find MainContentProvider');

  return mainContentContext;
};

export default useMainContent;
