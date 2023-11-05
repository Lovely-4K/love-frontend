import HistoryItem from './HistoryItem';
import useGetQuestions from '~/pages/QuestionHistory/hooks/useGetQuestions';

const HistoryList = () => {
  const { data: questions } = useGetQuestions();

  return (
    <div className="flex flex-col gap-3">
      {questions?.answeredQuestions.map(({ questionId, questionContent }) => (
        <HistoryItem questionTitle={questionContent} key={questionId} />
      ))}
    </div>
  );
};

export default HistoryList;
