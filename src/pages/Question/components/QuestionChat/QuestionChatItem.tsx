interface QuestionChatItemProps {
  type: 'start' | 'end';
  answerStatus: boolean;
  message?: string;
  author: string;
}

const QuestionChatItem = ({
  type,
  answerStatus,
  author,
  message = '답변을 기다리는 중이에요!',
}: QuestionChatItemProps) => {
  const chatType = type === 'start' ? 'chat-start' : 'chat-end';
  message = answerStatus === false ? '답변을 기다리는 중이에요!' : message;

  return (
    <div className={`chat ${chatType}`}>
      <div className="avatar chat-image">
        <div className="w-10 rounded-full">
          <img src="https://source.unsplash.com/random/" />
        </div>
      </div>
      <div className="chat-header">
        <time className="text-xs opacity-50">{author}</time>
      </div>
      <div className="chat-bubble bg-grey-100 px-4 py-2 text-base-black">
        {message}
      </div>
    </div>
  );
};

export default QuestionChatItem;
