import { PropsWithChildren, createContext, useState } from 'react';

interface QuestionCreateFormContextProps {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  answers: string[];
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
}

const QuestionCreateFormContext = createContext<QuestionCreateFormContextProps>(
  {} as QuestionCreateFormContextProps,
);

const QuestionCreateFormProvider = ({ children }: PropsWithChildren) => {
  const [question, setQuestion] = useState<string>('');
  const [answers, setAnswers] = useState<string[]>([]);

  return (
    <QuestionCreateFormContext.Provider
      value={{ question, setQuestion, answers, setAnswers }}
    >
      {children}
    </QuestionCreateFormContext.Provider>
  );
};

export { QuestionCreateFormContext, QuestionCreateFormProvider };
