import { useQuery } from '@tanstack/react-query';
import { QuestionToday } from '~/types';
import apiClient from '~/api/apiClient';

const getQuestion = async (): Promise<QuestionToday> => {
  const response = await apiClient.get('/questions/daily?coupleId=1');

  console.log(response.data);

  return response.data;
};

export const useGetQuestion = () => {
  return useQuery({
    queryKey: ['question'],
    queryFn: getQuestion,
  });
};
