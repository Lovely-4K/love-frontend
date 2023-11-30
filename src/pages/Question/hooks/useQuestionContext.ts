import { useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';
const useQuestionContext = () => {
  const questionContext = useContext(QuestionContext);

  if (questionContext === null) {
    throw new Error('Question Context is not existed');
  }

  return questionContext;
};

export default useQuestionContext;
