import styled from '@emotion/styled';
import { MainPreviews } from './components';

const MainPageContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainPage = () => {
  return (
    <MainPageContainer className="md:items-center">
      <MainPreviews />
    </MainPageContainer>
  );
};

export default MainPage;
