import HistoryItem from './HistoryItem';
import useGetQuestions from '~/services/question/useGetQuestions';

const HistoryList = () => {
  const { data: questions, isSuccess } = useGetQuestions();

  if (!isSuccess) return;

  return (
    <div className="flex flex-col gap-3">
      {questions.answeredQuestions.map(({ questionId, questionContent }) => (
        <HistoryItem
          questionTitle={questionContent}
          questionId={questionId}
          key={questionId}
        />
      ))}
    </div>
  );
};

export default HistoryList;
