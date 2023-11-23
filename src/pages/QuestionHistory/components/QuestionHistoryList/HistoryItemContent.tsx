import { QuestionHistoryDetail } from '~/types';
import { Loading } from '~/components/common';
import QuestionChatItem from '~/pages/Question/components/QuestionChat/ChatItem';

interface HistoryItemContentProps {
  questionDetail: QuestionHistoryDetail | undefined;
}

const HistoryItemContent = ({ questionDetail }: HistoryItemContentProps) => {
  if (questionDetail === undefined) {
    return (
      <div className="flex h-full w-full items-center justify-center py-12">
        <Loading size="large" />
      </div>
    );
  }

  const { myAnswer, myProfile, opponentAnswer, opponentProfile } =
    questionDetail;

  return (
    <>
      <QuestionChatItem
        type={'start'}
        author={'나의 답변'}
        message={myAnswer}
        picture={myProfile}
        answerStatus={!!myAnswer}
      />
      <QuestionChatItem
        type={'end'}
        author={'상대의 답변'}
        message={opponentAnswer}
        picture={opponentProfile}
        answerStatus={!!opponentAnswer}
      />
    </>
  );
};

export default HistoryItemContent;
