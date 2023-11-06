import { useContext, useEffect } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';
import useCreateTodayQuestion from './useCreateTodayQuestion';
import useGetQuestion from './useGetQuestion';
import useUpdateUserAnswer from './useUpdateUserAnswer';
import useGetQuestionDetail from '~/pages/QuestionHistory/hooks/useGetQuestionDetail';

const useQuestion = () => {
  const {
    questionDetail,
    setQuestionDetail,
    userAnswer,
    setUserAnswer,
    questionForm,
    setQuestionForm,
  } = useContext(QuestionContext);
  const { mutate: createTodayQuestionMutate } = useCreateTodayQuestion();
  const { data: questionResponse } = useGetQuestion();
  const { data: questionDetailResponse } = useGetQuestionDetail(
    questionResponse?.body?.questionId || -1,
  );
  const { mutate: mutateUserAnswer } = useUpdateUserAnswer();

  const {
    questionId,
    questionContent,
    firstChoice,
    secondChoice,
    thirdChoice,
    fourthChoice,
    questionFormType,
  } = questionForm;

  useEffect(() => {
    createTodayQuestionMutate();
  }, []);

  useEffect(() => {
    if (questionResponse) {
      setQuestionForm(questionResponse.body);
    }
  }, [questionResponse, setQuestionForm]);

  useEffect(() => {
    if (questionDetailResponse) {
      setQuestionDetail(questionDetailResponse.body);
    }
  }, [questionDetailResponse, setQuestionDetail]);

  const handleSubmitUserAnswer = () => {
    if (questionId) {
      mutateUserAnswer({
        questionId,
        selectedItemIndex: userAnswer,
        sex: 'MALE',
      });
    }
  };

  return {
    questionDetail,
    userAnswer,
    setUserAnswer,
    handleSubmitUserAnswer,
    question: {
      questionId,
      questionContent,
      questionFormType,
    },
    answers: [firstChoice, secondChoice, thirdChoice, fourthChoice],
  };
};

export default useQuestion;
