import { useQuery } from '@tanstack/react-query';
import { QuestionHistoryDetail } from '~/types';
import apiClient from '~/api/apiClient';

const getQuestionDetail = async (
  questionId: number,
): Promise<QuestionHistoryDetail> => {
  const URL = `/questions/details/${questionId}`;
  const response = await apiClient.get(URL);

  return response.data.body;
};

const useGetQuestionDetail = (questionId: number) => {
  return useQuery({
    enabled: questionId !== -1,
    queryKey: ['questionDetail', questionId],
    queryFn: () => getQuestionDetail(questionId),
  });
};

export default useGetQuestionDetail;
