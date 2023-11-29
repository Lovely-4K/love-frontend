import { paths } from '~/router';
import { HistoryList } from './components';
import { NavigationHeader } from '~/components/domain';

const QuestionHistory = () => {
  return (
    <div className="mx-auto h-full w-full max-w-4xl overflow-y-auto px-7 py-8 md:px-10">
      <NavigationHeader
        pageTitle="우리의 질문들"
        prevPageLink={paths.QUESTION}
      />
      <HistoryList />
    </div>
  );
};

export default QuestionHistory;
