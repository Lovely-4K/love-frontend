import { useState, useEffect } from 'react';
import type { QuestionHistoryPreview } from '~/types';
import useGetQuestionHistory from '~/services/question/useGetQuestionHistory';

const useHistoryList = () => {
  const [histories, setHistories] = useState<QuestionHistoryPreview[]>([]);
  const [lastQuestionId, setLastQuestionId] = useState(
    histories[histories.length - 1]?.questionId ?? null,
  );
  const { data: newHistories } = useGetQuestionHistory({
    lastQuestionId,
  });

  const handleObserveLastItem = (questionId: number) => {
    setLastQuestionId(questionId);
  };

  useEffect(() => {
    if (newHistories === undefined) return;
    const { answeredQuestions } = newHistories;

    setHistories(() => {
      return lastQuestionId === null
        ? answeredQuestions
        : [...histories, ...answeredQuestions];
    });
  }, [newHistories]);

  return {
    histories,
    handleObserveLastItem,
  };
};

export default useHistoryList;
