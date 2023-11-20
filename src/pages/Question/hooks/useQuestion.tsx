import { useCallback, useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';

const useQuestion = () => {
  const questionContext = useContext(QuestionContext);

  if (!questionContext) {
    throw new Error('questionContext is null');
  }
  const { questionForm, questionDetail, mutateUserAnswer } = questionContext;

  const { questionId, firstChoice, secondChoice, thirdChoice, fourthChoice } =
    questionForm;

  const handleSubmitUserAnswer = useCallback(
    (userAnswer: number) => {
      if (questionId) {
        mutateUserAnswer({
          questionId,
          selectedItemIndex: userAnswer,
        });
        mutateUserAnswer({
          questionId,
          selectedItemIndex: userAnswer,
        });
      }
    },
    [mutateUserAnswer, questionId],
  );

  return {
    questionForm: {
      ...questionForm,
      answers: [firstChoice, secondChoice, thirdChoice, fourthChoice],
    },
    questionDetail,
    methods: {
      handleSubmitUserAnswer,
    },
  };
};

export default useQuestion;
