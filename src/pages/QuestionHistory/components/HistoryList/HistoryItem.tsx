import QuestionChatItem from '~/pages/Question/components/QuestionChat/QuestionChatItem';
import useGetQuestionDetail from '~/pages/QuestionHistory/hooks/useGetQuestionDetail';

interface QuestionDropDown {
  questionTitle: string;
}

const HistoryItem = ({ questionTitle }: QuestionDropDown) => {
  const { data: questionDetail } = useGetQuestionDetail();
  const { boyAnswer, girlAnswer } = questionDetail ?? {
    boyAnswer: '기본 값',
    girlAnswer: '기본 값',
  };

  console.log(questionDetail);

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
