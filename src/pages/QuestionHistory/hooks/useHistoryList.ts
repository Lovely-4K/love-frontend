import { useState, useEffect, useCallback } from 'react';
import type { QuestionHistoryPreview } from '~/types';
import useObserve from '~/hooks/useObserve';
import useGetQuestionHistory from '~/services/question/useGetQuestionHistory';

const useHistoryList = () => {
  const [histories, setHistories] = useState<QuestionHistoryPreview[]>([]);
  const [lastQuestionId, setLastQuestionId] = useState(0);
  const { data: histoiresResponse } = useGetQuestionHistory({
    lastQuestionId,
  });

  useEffect(() => {
    console.log(lastQuestionId);
  }, [lastQuestionId]);
  const observeCallbackFn = useCallback(() => {
    if (histories.length === 0) return;

    const lastChild = histories[histories.length - 1];
    const { questionId } = lastChild;
    setLastQuestionId(questionId);
  }, [histories]);
  const [observe] = useObserve(observeCallbackFn);

  useEffect(() => {
    if (histoiresResponse === undefined) return;

    const { answeredQuestions } = histoiresResponse;
    setHistories((currHistories) => {
      return [...currHistories, ...answeredQuestions];
    });
  }, [histoiresResponse]);

  useEffect(() => {
    if (histoiresResponse === undefined) return;
    if (histoiresResponse.answeredQuestions.length < 10) return;

    const lastQuestion = histories[histories.length - 1];

    if (lastQuestion) {
      const { questionId } = lastQuestion;
      const lastChild = document.getElementById(String(questionId));

      if (lastChild) {
        observe(lastChild);
      }
    }
  }, [histories]);

  return {
    histories,
  };
};

export default useHistoryList;
