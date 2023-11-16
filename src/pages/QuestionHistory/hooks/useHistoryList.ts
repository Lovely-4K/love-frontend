import { useState, useEffect, MutableRefObject } from 'react';
import type { QuestionHistoryPreview } from '~/types';
import useObserve from '~/hooks/useObserve';
import useGetQuestionHistory from '~/services/question/useGetQuestionHistory';

interface useHistoryListProps {
  historyListRef: MutableRefObject<null>;
}

const useHistoryList = ({ historyListRef }: useHistoryListProps) => {
  const [histories, setHistories] = useState<QuestionHistoryPreview[]>([]);
  const [lastQuestionId, setLastQuestionId] = useState(0);
  const { data } = useGetQuestionHistory({ lastQuestionId });
  const [observe] = useObserve(() => {
    const lastQuestion = histories[histories.length - 1];
    const { questionId: lastQuestionId } = lastQuestion;
    setLastQuestionId(lastQuestionId);
  });

  useEffect(() => {
    if (data !== undefined) {
      const { answeredQuestions } = data;
      setHistories((currHistories) => {
        return [...currHistories, ...answeredQuestions];
      });
    }
  }, [data]);

  useEffect(() => {
    if (data === undefined) return;
    if (data.answeredQuestions.length < 20) return;

    if (historyListRef && historyListRef.current) {
      const historyListNode = historyListRef.current;
      const { lastChild } = historyListNode;
      observe(lastChild);
    }
  }, [data, observe, historyListRef]);

  return {
    histories,
  };
};

export default useHistoryList;
