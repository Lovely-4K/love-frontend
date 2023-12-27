import { useEffect } from 'react';
import {
  useCreateTodayQuestion,
  useGetQuestion,
  useGetCoupleAnswer,
} from '~/services/question';

const useLoadTodayQuestion = () => {
  const {
    mutate: mutateCreateTodayQuestion,
    isSuccess,
    isError,
  } = useCreateTodayQuestion();
  const { data: todayQuestion } = useGetQuestion(isSuccess || isError);
  const { data: coupleAnswer } = useGetCoupleAnswer(todayQuestion);

  useEffect(() => {
    mutateCreateTodayQuestion();
  }, []);

  return { todayQuestion, coupleAnswer };
};

export default useLoadTodayQuestion;
