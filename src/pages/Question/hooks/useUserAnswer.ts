import { useState } from 'react';

const useUserAnswer = (myChoiceIndex: number = -1) => {
  const [userAnswer, setUserAnswer] = useState(myChoiceIndex);

  return { userAnswer, setUserAnswer };
};

export default useUserAnswer;
