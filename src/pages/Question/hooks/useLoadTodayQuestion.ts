import { useEffect } from 'react';
import { useCreateTodayQuestion } from '~/services/question';

const useLoadTodayQuestion = () => {
  const { mutate: mutateCreateTodayQuestion } = useCreateTodayQuestion();

  useEffect(() => {
    mutateCreateTodayQuestion();
  }, []);
};

export default useLoadTodayQuestion;
