import { useRef } from 'react';
import useHistoryList from '../../hooks/useHistoryList';
import HistoryItem from './HistoryItem';

const HistoryList = () => {
  const historyListRef = useRef(null);
  const { histories } = useHistoryList();
  const NoneItem = histories.length === 0 && (
    <div className="flex h-full w-full items-center justify-center">
      현재 작성된 기록이 없어요.
    </div>
  );

  return (
    <div
      ref={historyListRef}
      className="h-full space-y-3 overflow-y-auto pb-10"
    >
      {histories.map(({ questionId, questionContent }) => (
        <HistoryItem
          questionTitle={questionContent}
          questionId={questionId}
          key={questionId}
        />
      ))}
      {NoneItem}
    </div>
  );
};

export default HistoryList;
