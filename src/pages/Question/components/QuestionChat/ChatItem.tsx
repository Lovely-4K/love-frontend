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

  const getTempImageUrl = () => {
    const appendedPath = '/images/member/';
    if (picture) {
      return picture.replace('amazonaws.com/', `amazonaws.com${appendedPath}`);
    }
  };

  return (
    <div className={`chat ${chatType} my-3`}>
      <Avatar
        src={getTempImageUrl()}
        size={'small'}
        className={'lg:avatar-medium rounded-full'}
        chatImage={true}
      ></Avatar>
      <div className="chat-header">
        <time className="text-xs opacity-50">{author}</time>
      </div>
      <div className="chat-bubble flex w-full flex-wrap items-center justify-center bg-grey-100 py-4 font-medium text-base-black lg:w-fit lg:px-10">
        {message}
      </div>
    </div>
  );
};

export default QuestionChatItem;
