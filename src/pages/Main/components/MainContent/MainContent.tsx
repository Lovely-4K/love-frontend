import InviteContainer from './InviteContainer';
import PreviewsContainer from './PreviewsContainer';
import useLayoutContext from '~/hooks/useLayoutContext';

const MainContent = () => {
  const { coupleMode } = useLayoutContext();

  return coupleMode === 'RELATIONSHIP' ? (
    <PreviewsContainer />
  ) : (
    <InviteContainer />
  );
};

export default MainContent;
