import type { updateUserAnswerParams } from '~/services/question/useUpdateUserAnswer';
import { UseMutateFunction } from '@tanstack/react-query';
import { useCallback } from 'react';
import { QuestionForm } from '~/types';

interface useQuestionParams {
  mutateUserAnswer: UseMutateFunction<
    any,
    Error,
    updateUserAnswerParams,
    () => void
  >;
  questionForm: QuestionForm;
  userAnswer: number;
  setUserAnswer: React.Dispatch<React.SetStateAction<number>>;
}

const useQuestion = ({
  mutateUserAnswer,
  questionForm,
  userAnswer,
  setUserAnswer,
}: useQuestionParams) => {
  const handleSubmitUserAnswer = useCallback(
    (userAnswer: number) => {
      const { questionId } = questionForm;
      mutateUserAnswer({
        questionId,
        selectedItemIndex: userAnswer,
      });
    },
    [questionForm, mutateUserAnswer],
  );

  const handleClickAnswer = (answerIndex: number) => {
    setUserAnswer(answerIndex === userAnswer ? -1 : answerIndex);
  };

  return {
    handleSubmitUserAnswer,
    handleClickAnswer,
  };
};

export default useQuestion;
