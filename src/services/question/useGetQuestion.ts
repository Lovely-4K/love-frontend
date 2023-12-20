import { useSuspenseQuery } from '@tanstack/react-query';
import { QuestionFormResponse } from '~/types';
import apiClient from '~/api/apiClient';

const getQuestion = async (): Promise<QuestionFormResponse> => {
  const URL = '/questions/daily';
  const response = await apiClient.get(URL);

  return response.data.body;
};

const useGetQuestion = () => {
  return useSuspenseQuery({
    queryKey: ['question'],
    queryFn: getQuestion,
  });
};

export default useGetQuestion;
