import { useContext, useEffect } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';
import useCreateTodayQuestion from './useCreateTodayQuestion';
import useGetQuestion from './useGetQuestion';
import useUpdateUserAnswer from './useUpdateUserAnswer';
import useGetQuestionDetail from '~/pages/QuestionHistory/hooks/useGetQuestionDetail';

const useQuestion = () => {
  const { questionDetail, setQuestionDetail, questionForm, setQuestionForm } =
    useContext(QuestionContext);
  const { mutate: createTodayQuestionMutate } = useCreateTodayQuestion();
  const { data: questionResponse } = useGetQuestion();
  const { data: questionDetailResponse, refetch: questionDetailRefetch } =
    useGetQuestionDetail(questionResponse?.questionId || -1);
  const { data: updateAnswerResponse, mutate: mutateUserAnswer } =
    useUpdateUserAnswer();

  const { questionId, firstChoice, secondChoice, thirdChoice, fourthChoice } =
    questionForm;

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

  const handleSubmitUserAnswer = (userAnswer: number) => {
    if (questionId) {
      mutateUserAnswer({
        questionId,
        selectedItemIndex: userAnswer,
        sex: 'MALE',
      });
      mutateUserAnswer({
        questionId,
        selectedItemIndex: userAnswer,
        sex: 'FEMALE',
      });
    }
  };

  return {
    questionForm: {
      ...questionForm,
      answers: [firstChoice, secondChoice, thirdChoice, fourthChoice],
    },
    questionDetail,
    methods: {
      handleSubmitUserAnswer,
    },
  };
};

export default useQuestion;
