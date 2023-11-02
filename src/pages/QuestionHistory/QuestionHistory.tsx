import { HistoryHeader, HistoryList } from './components';
import { QuestionContainer } from '~/pages/Question/Question';

const QuestionHistory = () => {
  return (
    <QuestionContainer>
      <HistoryHeader />
      <HistoryList />
    </QuestionContainer>
  );
};

export default QuestionHistory;
