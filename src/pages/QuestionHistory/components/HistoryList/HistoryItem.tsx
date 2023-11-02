import QuestionChatItem from '~/pages/Question/components/QuestionChat/QuestionChatItem';

interface QuestionDropDown {
  questionTitle: string;
}

const HistoryItem = ({ questionTitle }: QuestionDropDown) => {
  return (
    <div className="collapse-arrow collapse border border-solid border-grey-200 bg-base-white">
      <input type="checkbox" className="peer" />
      <div className="font-medium collapse-title text-xl transition-all duration-200 peer-checked:bg-base-secondary">
        {questionTitle}
      </div>
      <div className="collapse-content">
        <QuestionChatItem
          type={'start'}
          author={'정'}
          message={'500만 월급 전라도 취직'}
          answerStatus={true}
        />
        <QuestionChatItem
          type={'end'}
          author={'호'}
          message={'300만 월급 서울 강남 취직'}
          answerStatus={true}
        />
      </div>
    </div>
  );
};

export default HistoryItem;
