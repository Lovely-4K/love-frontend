import { useContext, useEffect } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';
import useGetQuestion from './useGetQuestion';

const useQuestionForm = () => {
  const { data } = useGetQuestion(); // react-query
  const { questionForm, setQuestionForm } = useContext(QuestionContext); // context 에서 데이터 받아오기
  const {
    questionId,
    questionContent,
    firstChoice,
    secondChoice,
    thirdChoice,
    fourthChoice,
  } = questionForm;

  // react-query 성공시 question 변경
  useEffect(() => {
    if (data) {
      setQuestionForm(data.body);
    }
  }, [data, setQuestionForm]);

  // question 관련 데이터 return
  return {
    questionId,
    questionContent,
    answers: [firstChoice, secondChoice, thirdChoice, fourthChoice],
  };
};

export default useQuestionForm;
