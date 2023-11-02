import QuestionChatItem from './QuestionChatItem';

const QuestionChat = () => {
  return (
    <div className="mt-16">
      <QuestionChatItem
        type={'start'}
        answerStatus={true}
        author={'나의 답변'}
        message={'세미콜론 쓰기'}
      />
      <QuestionChatItem
        type={'end'}
        answerStatus={false}
        author={'상대의 답변'}
        message={'세미콜론 안쓰기'}
      />
    </div>
  );
};

export default QuestionChat;
