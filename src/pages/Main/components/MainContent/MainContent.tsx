import InviteContainer from './InviteContainer';
import PreviewsContainer from './PreviewsContainer';
import { useGetCoupleProfile } from '~/services/couple';

const MainContent = () => {
  const { data: coupleProfile } = useGetCoupleProfile();

  const coupleMode = coupleProfile.coupleStatus;

  return coupleMode === 'RELATIONSHIP' ? (
    <PreviewsContainer />
  ) : (
    <InviteContainer />
  );
};

export default MainContent;
