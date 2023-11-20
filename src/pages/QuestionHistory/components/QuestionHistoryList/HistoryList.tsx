import { useRef } from 'react';
import useHistoryList from '../../hooks/useHistoryList';
import HistoryItem from './HistoryItem';

const HistoryList = () => {
  const historyListRef = useRef(null);
  const { histories } = useHistoryList();
  const noneItem = histories.length === 0 && '현재 작성된 기록이 없어요.';

  return (
    <div ref={historyListRef} className="flex flex-col gap-3">
      {histories.map(({ questionId, questionContent }, index) => (
        <HistoryItem
          questionTitle={questionContent}
          questionId={questionId}
          key={index}
        />
      ))}
      {noneItem}
    </div>
  );
};

export default HistoryList;
