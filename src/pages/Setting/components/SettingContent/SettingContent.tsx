import { useSetting } from '../../hooks';
import ContentItem from './ContentItem';

const SettingContent = () => {
  const { activeTab, handleLogout, handleDeleteCouple } = useSetting();

  if (activeTab === 'LOGOUT') {
    return (
      <ContentItem
        title="💔"
        buttonName="로그아웃"
        description={`정말 로그아웃 하시겠어요?\n로그아웃 후에도 커플은 유지돼요.`}
        handleButtonClick={handleLogout}
      />
    );
  }

  if (activeTab === 'INACTIVE') {
    return (
      <ContentItem
        title="🔓"
        buttonName="비활성화"
        description={`커플을 비활성화 하시겠어요?\n최대 30일까지 커플의 기록이 보존돼요.`}
        handleButtonClick={handleDeleteCouple}
      />
    );
  }

  if (activeTab === 'REACTIVE') {
    return (
      <ContentItem
        title="💖"
        buttonName="재결합"
        description={`이전의 상대와 재결합하시겠어요?\n 30일 이내에 재결합시 기록이 복구돼요.`}
        handleButtonClick={() => {}}
      />
    );
  }
};

export default SettingContent;
