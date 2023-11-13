import QuestionChatItem from '~/pages/Question/components/QuestionChat/ChatItem';
import useGetQuestionDetail from '~/pages/QuestionHistory/hooks/useGetQuestionDetail';

interface QuestionDropDown {
  questionTitle: string;
  questionId: number;
}

const HistoryItem = ({ questionTitle, questionId }: QuestionDropDown) => {
  const { data: questionDetail, isSuccess } = useGetQuestionDetail(questionId);

  if (!isSuccess) return;

  const { myAnswer, opponentAnswer, myProfile, opponentProfile } =
    questionDetail;

  return (
    <div className="collapse collapse-arrow border border-solid border-grey-200 bg-base-white">
      <input type="checkbox" className="peer" />
      <div className="font-medium collapse-title text-xl text-base-black transition-all duration-200 peer-checked:bg-base-primary peer-checked:text-base-white">
        {questionTitle}
      </div>
      <div className="collapse-content">
        <QuestionChatItem
          type={'start'}
          author={'정'}
          message={myAnswer}
          picture={myProfile}
          answerStatus={true}
        />
        <QuestionChatItem
          type={'end'}
          author={'호'}
          message={opponentAnswer}
          picture={opponentProfile}
          answerStatus={true}
        />
      </div>
    </div>
  );
};

export default HistoryItem;
