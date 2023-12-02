import { useContext } from 'react';
import { LayoutContext } from '~/contexts/LayoutContext';

const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayoutContext must be used within a LayoutProvider');
  }

  return context;
};

export default useLayoutContext;
