import { NavigationHeader } from '~/components/domain';

const HistoryHeader = () => {
  return (
    <div className="mx-[-3rem]">
      <NavigationHeader pageTitle="우리의 질문들" prevPageLink="/question" />
    </div>
  );
};

export default HistoryHeader;
