import useHistoryItem from '../../hooks/useHistoryItem';
import HistoryItemContent from './HistoryItemContent';

interface QuestionDropDown {
  questionTitle: string;
  questionId: number;
}

const HistoryItem = ({ questionTitle, questionId }: QuestionDropDown) => {
  const { handleArcodianClick, questionDetail } = useHistoryItem(questionId);

  return (
    <div
      id={String(questionId)}
      className="collapse-arrow collapse mb-3 border border-solid border-grey-200 bg-base-white"
    >
      <input type="checkbox" className="peer" onClick={handleArcodianClick} />
      <div className="collapse-title text-xl font-medium text-base-black transition-all duration-200 peer-checked:bg-base-primary peer-checked:text-base-white">
        {questionTitle}
      </div>
      <div className="collapse-content">
        <HistoryItemContent questionDetail={questionDetail} />
      </div>
    </div>
  );
};

export default HistoryItem;
