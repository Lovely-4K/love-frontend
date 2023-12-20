import useQuestionData from '../../hooks/useQuestionData';
import QuestionChatItem from './ChatItem';

const QuestionChat = () => {
  const { coupleAnswer } = useQuestionData();
  const { myAnswer, myProfile, opponentAnswer, opponentProfile } = coupleAnswer;

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
