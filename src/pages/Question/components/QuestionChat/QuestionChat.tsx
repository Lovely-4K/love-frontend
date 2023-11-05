import QuestionChatItem from './QuestionChatItem';
import useGetQuestion from '~/pages/Question/hooks/useGetQuestion';
import useGetQuestionDetail from '~/pages/QuestionHistory/hooks/useGetQuestionDetail';

const QuestionChat = () => {
  const { data: question } = useGetQuestion();
  const { data: { boyAnswer, girlAnswer } = {} } = useGetQuestionDetail(
    question?.body?.questionId || -1,
  );

  console.log(boyAnswer, girlAnswer);

  return (
    <div className="mt-16">
      <QuestionChatItem
        type={'start'}
        answerStatus={!!boyAnswer}
        author={'나의 답변'}
        message={boyAnswer}
      />
      <QuestionChatItem
        type={'end'}
        answerStatus={!!girlAnswer}
        author={'상대의 답변'}
        message={girlAnswer}
      />
    </div>
  );
};

export default QuestionChat;
