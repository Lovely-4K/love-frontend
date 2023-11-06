import QuestionChatItem from './QuestionChatItem';
import useGetQuestion from '~/pages/Question/hooks/useGetQuestion';
import useGetQuestionDetail from '~/pages/QuestionHistory/hooks/useGetQuestionDetail';

const QuestionChat = () => {
  const { data: question } = useGetQuestion();
  const { data: questionDetail } = useGetQuestionDetail(
    question?.body?.questionId || -1,
  );

  const {
    myAnswer = '',
    opponentAnswer = '',
    myProfile = '',
    opponentProfile = '',
  } = questionDetail || {};

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
