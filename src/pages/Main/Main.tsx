import styled from '@emotion/styled';
import { useState } from 'react';
import { MainCouple, MainSolo } from './components';

const MainPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainPage = () => {
  const [isCoupled] = useState(true); // 이 부분은 테스트용이고 나중에 인증처리 할 때 수정합시다!
  const mainContent = isCoupled ? <MainCouple /> : <MainSolo />;

  return <MainPageContainer>{mainContent}</MainPageContainer>;
};

export default MainPage;
