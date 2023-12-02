import { Navigate, Outlet } from 'react-router-dom';
import { paths } from '.';
import useLayoutContext from '~/hooks/useLayoutContext';

const LayoutWithCouple = () => {
  const { coupleMode } = useLayoutContext();

  if (!coupleMode) return <Navigate to={paths.MAIN} replace />;

  return <Outlet />;
};

export default LayoutWithCouple;
