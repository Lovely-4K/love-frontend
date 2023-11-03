import { useQuery } from '@tanstack/react-query';
import { QuestionHistories } from '~/types';
import apiClient from '~/api/apiClient';

const getQuestions = async (): Promise<QuestionHistories> => {
  const response = await apiClient.get('/questions/details/1');

  return response.data;
};

export const useGetQuestionDetail = () => {
  return useQuery({
    queryKey: ['questions'],
    queryFn: getQuestions,
  });
};
