import { PropsWithChildren, createContext } from 'react';
import { QuestionToday } from '~/types';

const QuestionContext = createContext<QuestionToday>({} as QuestionToday);

const QuestionProvider = ({
  children,
  question = {
    questionId: 1,
    questionContent: '테스트 질문',
    firstChoice: '선택지 1',
    secondChoice: '선택지 2',
    thirdChoice: '선택지 3',
    fourthChoice: null,
  },
}: PropsWithChildren & { question: QuestionToday }) => {
  return (
    <QuestionContext.Provider value={question}>
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionContext, QuestionProvider };
