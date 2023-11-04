import { useQuery } from '@tanstack/react-query';
import { QuestionHistoryDetail } from '~/types';
import apiClient from '~/api/apiClient';

const getQuestionDetail = async (): Promise<QuestionHistoryDetail> => {
  const response = await apiClient.get('/questions/details/1');

  console.log(response.data);

  return response.data;
};

export const useGetQuestionDetail = () => {
  return useQuery({
    queryKey: ['questionDetail'],
    queryFn: getQuestionDetail,
  });
};
