import useHistoryItem from '../../hooks/useHistoryItem';
import { Loading } from '~/components/common';
import QuestionChatItem from '~/pages/Question/components/QuestionChat/ChatItem';

interface QuestionDropDown {
  questionTitle: string;
  questionId: number;
}

const HistoryItem = ({ questionTitle, questionId }: QuestionDropDown) => {
  const { handleArcodianClick, questionDetail } = useHistoryItem(questionId);
  const QuestionChatContent = () => {
    if (!questionDetail) return <Loading />;
    const { myAnswer, myProfile, opponentAnswer, opponentProfile } =
      questionDetail;

    return (
      <>
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
      </>
    );
  };

  return (
    <div className="collapse collapse-arrow border border-solid border-grey-200 bg-base-white">
      <input onClick={handleArcodianClick} type="checkbox" className="peer" />
      <div className="collapse-title text-xl font-medium text-base-black transition-all duration-200 peer-checked:bg-base-primary peer-checked:text-base-white">
        {questionTitle}
      </div>
      <div className="collapse-content">
        <QuestionChatContent />
      </div>
    </div>
  );
};

export default HistoryItem;
