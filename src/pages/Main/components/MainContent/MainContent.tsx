import { useMain } from '../../hooks';
import InviteContainer from './InviteContainer';
import PreviewsContainer from './PreviewsContainer';

const MainContent = () => {
  const { coupleMode } = useMain();

  return coupleMode ? <PreviewsContainer /> : <InviteContainer />;
};

export default MainContent;
