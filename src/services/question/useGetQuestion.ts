import { useSuspenseQuery } from '@tanstack/react-query';
import { QuestionForm } from '~/types';
import apiClient from '~/api/apiClient';

const getQuestion = async (): Promise<QuestionForm> => {
  const response = await apiClient.get('/questions/daily');

  return response.data.body as QuestionForm;
};

const useGetQuestion = () => {
  return useSuspenseQuery({
    queryKey: ['question'],
    queryFn: getQuestion,
  });
};

export default useGetQuestion;
