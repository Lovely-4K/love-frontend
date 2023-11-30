import useQuestionContext from '../../hooks/useQuestionContext';
import QuestionChatItem from './ChatItem';

const QuestionChat = () => {
  const { questionDetail } = useQuestionContext();
  const { myAnswer, myProfile, opponentAnswer, opponentProfile } =
    questionDetail;

  return (
    <div className="mt-16">
      <QuestionChatItem
        type={'start'}
        answerStatus={!!myAnswer}
        author={'나의 답변'}
        picture={myProfile}
        message={myAnswer}
      />
      <QuestionChatItem
        type={'end'}
        answerStatus={!!opponentAnswer}
        author={'상대의 답변'}
        picture={opponentProfile}
        message={opponentAnswer}
      />
    </div>
  );
};

export default QuestionChat;
