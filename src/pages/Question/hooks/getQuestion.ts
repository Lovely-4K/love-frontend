import { useQuery } from '@tanstack/react-query';
import { Question } from '~/types';
import apiClient from '~/api/apiClient';

const getQuestion = async (): Promise<Question> => {
  const response = await apiClient.get('/questions/daily?coupleId=1');

  return response.data;
};

export const useGetQuestion = () => {
  return useQuery({
    queryKey: ['question'],
    queryFn: getQuestion,
  });
};
