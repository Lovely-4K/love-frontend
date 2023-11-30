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

const useGetQuestionDetail = (
  questionId: number,
  openedStatus: boolean = true,
) => {
  return useQuery({
    enabled: questionId !== -1 && openedStatus,
    queryKey: ['questionDetail', questionId],
    queryFn: () => getQuestionDetail(questionId),
  });
};

export default useGetQuestionDetail;
