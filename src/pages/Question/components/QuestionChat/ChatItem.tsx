interface QuestionChatItemProps {
  type: 'start' | 'end';
  answerStatus: boolean;
  message?: string;
  author: string;
  picture?: string;
}

const QuestionChatItem = ({
  type,
  answerStatus,
  author,
  message,
  picture,
}: QuestionChatItemProps) => {
  const chatType = type === 'start' ? 'chat-start' : 'chat-end';
  message = answerStatus === false ? '답변을 기다리는 중이에요!' : message;

  const getTempImageUrl = () => {
    const appendedPath = '/images/member/';
    if (picture) {
      return picture.replace('amazonaws.com/', `amazonaws.com${appendedPath}`);
    }
  };

  return (
    <div className={`chat ${chatType} my-3`}>
      <div className="avatar chat-image">
        <div className="avatar-small rounded-full lg:avatar-medium">
          <img src={getTempImageUrl()} />
        </div>
      </div>
      <div className="chat-header">
        <time className="text-xs opacity-50">{author}</time>
      </div>
      <div className="font-medium chat-bubble flex flex-wrap bg-grey-100 text-base-black lg:px-16 lg:py-3">
        {message}
      </div>
    </div>
  );
};

export default QuestionChatItem;
