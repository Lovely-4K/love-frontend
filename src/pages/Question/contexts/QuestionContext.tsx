import { PropsWithChildren, createContext, useState, useEffect } from 'react';
import { QuestionHistoryDetail, QuestionForm } from '~/types';
import useQuestion from '../hooks/useQuestion';
import {
  useCreateTodayQuestion,
  useGetQuestion,
  useUpdateUserAnswer,
  useGetQuestionDetail,
} from '~/services/question';

interface QuestionContextProps {
  questionForm: QuestionForm;
  questionDetail: QuestionHistoryDetail;
  userAnswer: number;
  methods: ReturnType<typeof useQuestion>;
}

const QuestionContext = createContext<QuestionContextProps | null>(null);

const QuestionProvider = ({ children }: PropsWithChildren) => {
  const { data: questionForm } = useGetQuestion();
  const { data: questionDetail } = useGetQuestionDetail(
    questionForm.questionId,
  );
  const { mutate: mutateCreateTodayQuestion } = useCreateTodayQuestion();
  const { mutate: mutateUserAnswer } = useUpdateUserAnswer();
  const [userAnswer, setUserAnswer] = useState(-1);

  const questionHooks = useQuestion({
    mutateUserAnswer,
    questionForm,
    userAnswer,
    setUserAnswer,
  });

  useEffect(() => {
    mutateCreateTodayQuestion();
  }, []);

  return (
    <QuestionContext.Provider
      value={{
        questionForm,
        questionDetail,
        userAnswer,
        methods: {
          ...questionHooks,
        },
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionContext, QuestionProvider };
