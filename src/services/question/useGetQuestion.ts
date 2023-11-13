import { useQuery } from '@tanstack/react-query';
import { QuestionForm } from '~/types';
import apiClient from '~/api/apiClient';

const getQuestion = async (): Promise<QuestionForm> => {
  const response = await apiClient.get('/questions/daily?coupleId=1');

  return response.data.body as QuestionForm;
};

const useGetQuestion = () => {
  return useQuery({
    queryKey: ['question'],
    queryFn: getQuestion,
  });
};

export default useGetQuestion;
