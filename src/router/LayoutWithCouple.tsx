import { Navigate, Outlet } from 'react-router-dom';
import paths from './paths';
import useLayoutContext from '~/hooks/useLayoutContext';

const LayoutWithCouple = () => {
  const { coupleMode } = useLayoutContext();

  if (coupleMode !== 'RELATIONSHIP')
    return <Navigate to={paths.MAIN} replace state={true} />;

  return <Outlet />;
};

export default LayoutWithCouple;
