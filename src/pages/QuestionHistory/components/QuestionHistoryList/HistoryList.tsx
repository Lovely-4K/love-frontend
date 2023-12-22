import { useRef } from 'react';
import useHistoryList from '../../hooks/useHistoryList';
import useHistoryObserver from '../../hooks/useHistoryObserver';
import HistoryItem from './HistoryItem';
import HistoryNoneItem from './HistoryNoneItem';

const HistoryList = () => {
  const lastItemRef = useRef(null);
  const { histories, handleObserveLastItem } = useHistoryList();
  useHistoryObserver({
    histories,
    lastItemRef,
    handleObserveLastItem,
  });

  return (
    <div className="h-full space-y-3 overflow-y-auto pb-10">
      {histories.map(({ questionId, questionContent }, index) => (
        <div ref={index === histories.length ? lastItemRef : null}>
          <HistoryItem
            questionTitle={questionContent}
            questionId={questionId}
            key={questionId}
          />
        </div>
      ))}
      {histories.length === 0 && <HistoryNoneItem />}
    </div>
  );
};

export default HistoryList;
