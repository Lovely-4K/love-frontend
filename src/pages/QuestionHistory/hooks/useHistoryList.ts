import { useState, useEffect, MutableRefObject } from 'react';
import type { QuestionHistoryPreview } from '~/types';
import useObserve from '~/hooks/useObserve';
import useGetQuestionHistory from '~/services/question/useGetQuestionHistory';

interface useHistoryListProps {
  historyListRef: MutableRefObject<null>;
}

const useHistoryList = ({ historyListRef }: useHistoryListProps) => {
  const [histories, setHistories] = useState<QuestionHistoryPreview[]>([]);
  const { data, refetch } = useGetQuestionHistory();
  const [observe] = useObserve(refetch);

  useEffect(() => {
    if (data !== undefined) {
      setHistories((currHistories) => {
        return [...currHistories, ...data];
      });
    }
  }, [data]);

  useEffect(() => {
    const historyListNode = historyListRef.current;

    if (historyListNode) {
      const { lastChild } = historyListNode;
      observe(lastChild);
    }
  }, [histories, observe, historyListRef]);

  return {
    histories,
  };
};

export default useHistoryList;
