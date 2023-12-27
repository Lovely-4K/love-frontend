import useLoadTodayQuestion from '../../hooks/common/useLoadTodayQuestion';
import QuestionChatItem from './ChatItem';
import { Loading } from '~/components/common';

const QuestionChat = () => {
  const { coupleAnswer } = useLoadTodayQuestion();

  if (coupleAnswer === undefined) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
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
