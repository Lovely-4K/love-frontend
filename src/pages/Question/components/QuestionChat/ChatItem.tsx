import { Avatar } from '~/components/common';

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

  return (
    <div className={`chat ${chatType} my-3`}>
      <Avatar
        src={picture}
        size="medium"
        className="md:h-[6.25rem] md:w-[6.25rem]"
        chatImage={true}
      />
      <div className="chat-header">
        <time className="text-sm opacity-50 md:text-base">{author}</time>
      </div>
      <div className="chat-bubble flex w-full max-w-xs flex-wrap items-center justify-center bg-grey-100 py-4 font-medium text-base-black lg:px-10">
        {message}
      </div>
    </div>
  );
};

export default QuestionChatItem;
