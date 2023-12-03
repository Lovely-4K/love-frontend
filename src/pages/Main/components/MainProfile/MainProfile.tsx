import { memo } from 'react';
import CoupleProfile from './CoupleProfile';
import SoloProfile from './SoloProfile';
import useLayoutContext from '~/hooks/useLayoutContext';

const MainProfile = memo(() => {
  const { coupleMode } = useLayoutContext();

  return coupleMode === 'RELATIONSHIP' ? <CoupleProfile /> : <SoloProfile />;
});

export default MainProfile;
