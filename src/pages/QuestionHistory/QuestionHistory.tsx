import { HistoryHeader, HistoryList } from './components';

const QuestionHistory = () => {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-y-auto px-7 py-8 md:px-10">
      <HistoryHeader />
      <HistoryList />
    </div>
  );
};

export default QuestionHistory;
