import { paths } from '~/router';
import { NavigationHeader } from '~/components/domain';

const HistoryHeader = () => {
  const { QUESTION } = paths;

  return (
    <div>
      <NavigationHeader pageTitle="우리의 질문들" prevPageLink={QUESTION} />
    </div>
  );
};

export default HistoryHeader;
