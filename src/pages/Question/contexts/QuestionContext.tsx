import type { updateUserAnswerParams } from '~/services/question/useUpdateUserAnswer';
import { UseMutateFunction } from '@tanstack/react-query';
import { PropsWithChildren, createContext, useState, useEffect } from 'react';
import { QuestionHistoryDetail, QuestionForm } from '~/types';
import {
  useCreateTodayQuestion,
  useGetQuestion,
  useUpdateUserAnswer,
  useGetQuestionDetail,
} from '~/services/question';

interface QuestionContextProps {
  questionForm: QuestionForm;
  questionDetail: QuestionHistoryDetail;
  mutateUserAnswer: UseMutateFunction<
    any,
    Error,
    updateUserAnswerParams,
    () => void
  >;
}

const QuestionContext = createContext<QuestionContextProps | null>(null);

const initialQuestionForm = {
  questionId: 1,
  questionContent: '테스트 질문',
  firstChoice: '선택지 1',
  secondChoice: '선택지 2',
  thirdChoice: undefined,
  fourthChoice: undefined,
  questionFormType: 'SERVER',
};

const initialQuestionDetail = {
  questionContent: '테스트 질문',
  myAnswer: '',
  opponentAnswer: '',
  myChoiceIndex: 1,
  opponentChoiceIndex: 1,
  myProfile: '',
  opponentProfile: '',
};

const QuestionProvider = ({ children }: PropsWithChildren) => {
  const { mutate: createTodayQuestionMutate } = useCreateTodayQuestion();
  const { data: questionResponse } = useGetQuestion();
  const { data: questionDetailResponse, refetch: questionDetailRefetch } =
    useGetQuestionDetail(questionResponse?.questionId || -1, true);
  const { data: updateAnswerResponse, mutate: mutateUserAnswer } =
    useUpdateUserAnswer();
  const [questionForm, setQuestionForm] =
    useState<QuestionForm>(initialQuestionForm);
  const [questionDetail, setQuestionDetail] = useState<QuestionHistoryDetail>(
    initialQuestionDetail,
  );

  useEffect(() => {
    createTodayQuestionMutate();
  }, [createTodayQuestionMutate]);

  useEffect(() => {
    if (questionResponse) {
      setQuestionForm(questionResponse);
    }
  }, [questionResponse, setQuestionForm]);

  useEffect(() => {
    if (questionDetailResponse) {
      setQuestionDetail(questionDetailResponse);
    }
  }, [questionDetailResponse, setQuestionDetail]);

  useEffect(() => {
    if (updateAnswerResponse !== undefined) {
      alert('답변을 제출했습니다!');
      questionDetailRefetch().catch((error) => console.log(error));
    }
  }, [updateAnswerResponse, questionDetailRefetch]);

  return (
    <QuestionContext.Provider
      value={{
        questionForm,
        questionDetail,
        mutateUserAnswer,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionContext, QuestionProvider };
