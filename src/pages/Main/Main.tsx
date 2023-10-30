import { useState } from 'react';
import { MainCouple, MainSolo } from './components';

const MainPage = () => {
  const [isCoupled] = useState(true); // 이 부분은 테스트용이고 나중에 인증처리 할 때 수정합시다!

  const mainContent = isCoupled ? <MainCouple /> : <MainSolo />;

  return <>{mainContent}</>;
};

export default MainPage;
