import { useQuery } from '@tanstack/react-query';
import { QuestionHistoryDetail } from '~/types';
import apiClient from '~/api/apiClient';

const useGetQuestionDetail = (questionId: number) => {
  const getQuestionDetail = async (): Promise<QuestionHistoryDetail> => {
    const response = await apiClient.get(
      `/questions/details/${questionId}?memberId=1&sex=MALE`,
    );

    return response.data.body;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ['questionDetail', questionId],
    queryFn: getQuestionDetail,
  });

  return { data, isError, isLoading };
};

export default useGetQuestionDetail;
