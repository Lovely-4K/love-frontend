import { useEffect, MutableRefObject } from 'react';
import type { QuestionHistoryPreview } from '~/types';
import useObserve from '~/hooks/useObserve';

interface useHistoryObserverParams {
  histories: QuestionHistoryPreview[];
  handleUpdateLastId: (questionId: number) => void;
  lastItemRef: MutableRefObject<null | HTMLDivElement>;
}

const useHistoryObserver = ({
  histories,
  handleUpdateLastId,
  lastItemRef,
}: useHistoryObserverParams) => {
  const [observe] = useObserve(() => {
    const lastChild = histories[histories.length - 1];
    const { questionId } = lastChild;
    handleUpdateLastId(questionId);
  });

  useEffect(() => {
    if (lastItemRef && lastItemRef.current) {
      observe(lastItemRef.current);
    }
  }, [histories]);
};

export default useHistoryObserver;
