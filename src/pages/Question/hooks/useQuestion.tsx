import { useCallback, useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';

const useQuestion = () => {
  const { questionForm, questionDetail, mutateUserAnswer } =
    useContext(QuestionContext);

  const { questionId, firstChoice, secondChoice, thirdChoice, fourthChoice } =
    questionForm;

  const handleSubmitUserAnswer = useCallback(
    (userAnswer: number) => {
      if (questionId) {
        mutateUserAnswer({
          questionId,
          selectedItemIndex: userAnswer,
          sex: 'MALE',
        });
        mutateUserAnswer({
          questionId,
          selectedItemIndex: userAnswer,
          sex: 'FEMALE',
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
