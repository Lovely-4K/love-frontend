import styled from '@emotion/styled';
import { MainPreviews } from './components';

const MainPageContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`;

const MainPage = () => {
  return (
    <MainPageContainer>
      <MainPreviews />
    </MainPageContainer>
  );
};

export default MainPage;
