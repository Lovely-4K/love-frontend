import QuestionChatItem from './QuestionChatItem';
import useGetQuestionDetail from '~/pages/QuestionHistory/hooks/useGetQuestionDetail';

const QuestionChat = () => {
  const { data: { boyAnswer, girlAnswer } = {} } = useGetQuestionDetail(4);

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
