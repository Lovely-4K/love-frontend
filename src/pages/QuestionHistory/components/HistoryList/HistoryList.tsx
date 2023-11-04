import HistoryItem from './HistoryItem';
import { useGetQuestions } from '~/pages/QuestionHistory/hooks/useGetQuestions';

const HistoryList = () => {
  const { data: questions } = useGetQuestions();

  const defaultQuestions = {
    answeredQuestions: [
      { questionId: 1, questionContent: 'Default Question 1' },
      { questionId: 2, questionContent: 'Default Question 2' },
      { questionId: 3, questionContent: 'Default Question 2' },
      { questionId: 4, questionContent: 'Default Question 2' },
    ],
  };

  const answeredQuestions =
    questions?.answeredQuestions || defaultQuestions.answeredQuestions;

  return (
    <div className="flex flex-col gap-3">
      {answeredQuestions.map(({ questionId, questionContent }) => (
        <HistoryItem questionTitle={questionContent} key={questionId} />
      ))}
    </div>
  );
};

export default HistoryList;
