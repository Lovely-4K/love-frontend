import React, { PropsWithChildren, createContext } from 'react';
import { useState } from 'react';
import { QuestionToday } from '~/types';

interface QuestionContextProps {
  userAnswer: number;
  setUserAnswer: React.Dispatch<React.SetStateAction<number>>;
  questionForm: QuestionToday;
  setQuestionForm: React.Dispatch<React.SetStateAction<QuestionToday>>;
}

const QuestionContext = createContext<QuestionContextProps>(
  {} as QuestionContextProps,
);

const QuestionProvider = ({ children }: PropsWithChildren) => {
  const [userAnswer, setUserAnswer] = useState(-1);
  const [questionForm, setQuestionForm] = useState<QuestionToday>({
    questionId: 1,
    questionContent: '테스트 질문',
    firstChoice: '선택지 1',
    secondChoice: '선택지 2',
    thirdChoice: undefined,
    fourthChoice: undefined,
  } as QuestionToday);

  return (
    <QuestionContext.Provider
      value={{ userAnswer, setUserAnswer, questionForm, setQuestionForm }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionContext, QuestionProvider };
