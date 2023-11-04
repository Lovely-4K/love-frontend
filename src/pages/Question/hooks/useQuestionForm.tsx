import { useContext, useEffect } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';
import useGetQuestion from './useGetQuestion';

const useQuestionForm = () => {
  const { data } = useGetQuestion();
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
    if (data) {
      setQuestionForm(data.body);
    }
  }, [data, setQuestionForm]);

  return {
    userAnswer,
    setUserAnswer,
    questionId,
    questionContent,
    answers: [firstChoice, secondChoice, thirdChoice, fourthChoice],
  };
};

export default useQuestionForm;
