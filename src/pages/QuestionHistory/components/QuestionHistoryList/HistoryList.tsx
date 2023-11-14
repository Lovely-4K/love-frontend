import { useRef } from 'react';
import useHistoryList from '../../hooks/useHistoryList';
import HistoryItem from './HistoryItem';

const HistoryList = () => {
  const historyListRef = useRef(null);
  const { histories } = useHistoryList({ historyListRef });

  return (
    <div ref={historyListRef} className="flex flex-col gap-3">
      {histories.map(({ questionId, questionContent }) => (
        <HistoryItem
          questionTitle={questionContent}
          questionId={questionId}
          key={questionId}
        />
      ))}
    </div>
  );
};

export default HistoryList;
