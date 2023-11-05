import { useContext, useEffect } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';
import useGetQuestion from './useGetQuestion';
import useUpdateUserAnswer from './useUpdateUserAnswer';

const useQuestionForm = () => {
  const { data: questionResponse } = useGetQuestion();
  const { mutate: mutateUserAnswer } = useUpdateUserAnswer();
  const { userAnswer, setUserAnswer, questionForm, setQuestionForm } =
    useContext(QuestionContext);
  const {
    questionId,
    questionContent,
    firstChoice,
    secondChoice,
    thirdChoice,
    fourthChoice,
  } = questionForm;

  useEffect(() => {
    if (questionResponse) {
      setQuestionForm(questionResponse.body);
    }
  }, [questionResponse, setQuestionForm]);

  const handleSubmitUserAnswer = () => {
    if (questionId) {
      mutateUserAnswer({
        questionId,
        selectedItemIndex: userAnswer,
        sex: 'MALE',
      });
    }
  };

  return {
    userAnswer,
    setUserAnswer,
    handleSubmitUserAnswer,
    questionId,
    questionContent,
    answers: [firstChoice, secondChoice, thirdChoice, fourthChoice],
  };
};

export default useQuestionForm;
