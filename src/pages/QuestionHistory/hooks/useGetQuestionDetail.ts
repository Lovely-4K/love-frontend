import { useQuery } from '@tanstack/react-query';
import { QuestionHistoryDetail } from '~/types';
import apiClient from '~/api/apiClient';

const getQuestionDetail = async (
  questionId: number,
): Promise<QuestionHistoryDetail> => {
  const response = await apiClient.get(
    `/questions/details/${questionId}?memberId=1&sex=MALE`,
  );

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
