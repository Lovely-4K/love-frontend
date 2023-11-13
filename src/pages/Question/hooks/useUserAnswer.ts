import { useState } from 'react';

const useUserAnswer = (myChoiceIndex: number = -1) => {
  const [userAnswer, setUserAnswer] = useState(myChoiceIndex);

  const handleClickAnswer = (answerIndex: number) => {
    setUserAnswer(answerIndex === userAnswer ? -1 : answerIndex);
  };

  return { userAnswer, handleClickAnswer };
};

export default useUserAnswer;
