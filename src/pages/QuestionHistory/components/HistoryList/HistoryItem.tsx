import QuestionChatItem from '~/pages/Question/components/QuestionChat/QuestionChatItem';
import useGetQuestionDetail from '~/pages/QuestionHistory/hooks/useGetQuestionDetail';

interface QuestionDropDown {
  questionTitle: string;
  questionId: number;
}

const HistoryItem = ({ questionTitle, questionId }: QuestionDropDown) => {
  const { data: questionDetail } = useGetQuestionDetail(questionId);
  const defaultMessage = '답변이 존재하지 않습니다!';
  const { boyAnswer, girlAnswer } = questionDetail ?? {
    boyAnswer: defaultMessage,
    girlAnswer: defaultMessage,
  };

  return (
    <div className="collapse-arrow collapse border border-solid border-grey-200 bg-base-white">
      <input type="checkbox" className="peer" />
      <div className="font-medium collapse-title text-xl transition-all duration-200 peer-checked:bg-base-secondary">
        {questionTitle}
      </div>
      <div className="collapse-content">
        <QuestionChatItem
          type={'start'}
          author={'정'}
          message={boyAnswer}
          answerStatus={true}
        />
        <QuestionChatItem
          type={'end'}
          author={'호'}
          message={girlAnswer}
          answerStatus={true}
        />
      </div>
    </div>
  );
};

export default HistoryItem;
