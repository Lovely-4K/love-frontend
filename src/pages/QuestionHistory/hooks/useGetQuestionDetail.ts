import { useQuery } from '@tanstack/react-query';
import { QuestionHistoryDetail, code, links } from '~/types';
import apiClient from '~/api/apiClient';

interface QuestionHistoryDetailResponse {
  code: code;
  links: links;
  body: QuestionHistoryDetail;
}

const useGetQuestionDetail = (questionId: number) => {
  const getQuestionDetail =
    async (): Promise<QuestionHistoryDetailResponse> => {
      const response = await apiClient.get(
        `/questions/details/${questionId}?memberId=1&sex=MALE`,
      );

      return response.data;
    };

  const { data, isError, isLoading } = useQuery({
    enabled: questionId !== -1,
    queryKey: ['questionDetail', questionId],
    queryFn: getQuestionDetail,
  });

  return { data, isError, isLoading };
};

export default useGetQuestionDetail;
