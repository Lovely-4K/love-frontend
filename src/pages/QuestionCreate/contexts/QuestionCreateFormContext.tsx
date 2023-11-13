import type {
  createQuestionFromResponse,
  createFormParams,
} from '~/services/question/useCreateForm';
import { UseMutateAsyncFunction } from '@tanstack/react-query';
import { PropsWithChildren, createContext, useState } from 'react';
import { useCreateForm } from '~/services/question';

interface QuestionCreateFormContextProps {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  answers: string[];
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
  mutateAsync: UseMutateAsyncFunction<
    createQuestionFromResponse,
    Error,
    createFormParams,
    unknown
  >;
  isError: boolean;
}

const QuestionCreateFormContext = createContext<QuestionCreateFormContextProps>(
  {} as QuestionCreateFormContextProps,
);

const QuestionCreateFormProvider = ({ children }: PropsWithChildren) => {
  const { mutateAsync, isError } = useCreateForm();
  const [question, setQuestion] = useState<string>('');
  const [answers, setAnswers] = useState<string[]>([]);

  return (
    <QuestionCreateFormContext.Provider
      value={{
        question,
        setQuestion,
        answers,
        setAnswers,
        mutateAsync,
        isError,
      }}
    >
      {children}
    </QuestionCreateFormContext.Provider>
  );
};

export { QuestionCreateFormContext, QuestionCreateFormProvider };
