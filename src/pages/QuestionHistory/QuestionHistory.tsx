import { HistoryHeader, HistoryList } from './components';
import { QuestionContainer as QestionHistoryContainer } from '~/pages/Question/Question';

const QuestionHistory = () => {
  return (
    <QestionHistoryContainer>
      <HistoryHeader />
      <HistoryList />
    </QestionHistoryContainer>
  );
};

export default QuestionHistory;
