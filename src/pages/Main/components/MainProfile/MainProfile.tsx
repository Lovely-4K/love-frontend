import { memo } from 'react';
import CoupleProfile from './CoupleProfile';
import SoloProfile from './SoloProfile';
import { useGetCoupleProfile } from '~/services/couple';

const MainProfile = memo(() => {
  const { data: coupleProfile } = useGetCoupleProfile();

  const coupleMode = coupleProfile.coupleStatus;

  return coupleMode === 'RELATIONSHIP' ? <CoupleProfile /> : <SoloProfile />;
});

export default MainProfile;
