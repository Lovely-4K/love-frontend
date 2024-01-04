import { Navigate, Outlet } from 'react-router-dom';
import paths from './paths';
import { useGetCoupleProfile } from '~/services/couple';

const LayoutWithCouple = () => {
  const { data: coupleProfile } = useGetCoupleProfile();

  const coupleMode = coupleProfile.coupleStatus;

  if (coupleMode !== 'RELATIONSHIP')
    return <Navigate to={paths.MAIN} replace state={true} />;

  return <Outlet />;
};

export default LayoutWithCouple;
