import { PropsWithChildren, createContext } from 'react';
import { useState } from 'react';
import { QuestionHistoryDetail, QuestionToday } from '~/types';

interface QuestionContextProps {
  userAnswer: number;
  setUserAnswer: React.Dispatch<React.SetStateAction<number>>;
  questionForm: QuestionToday;
  setQuestionForm: React.Dispatch<React.SetStateAction<QuestionToday>>;
  questionDetail: QuestionHistoryDetail;
  setQuestionDetail: React.Dispatch<
    React.SetStateAction<QuestionHistoryDetail>
  >;
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
    questionFormType: 'SERVER',
  } as QuestionToday);
  const [questionDetail, setQuestionDetail] = useState<QuestionHistoryDetail>({
    questionContent: '테스트 질문',
    myAnswer: '',
    opponentAnswer: '',
    myChoiceIndex: 1,
    opponentChoiceIndex: 1,
    myProfile: '',
    opponentProfile: '',
  });

  return (
    <QuestionContext.Provider
      value={{
        questionDetail,
        setQuestionDetail,
        userAnswer,
        setUserAnswer,
        questionForm,
        setQuestionForm,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionContext, QuestionProvider };
