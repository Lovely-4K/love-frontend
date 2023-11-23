import { useQuery } from '@tanstack/react-query';
import { QuestionHistoryList } from '~/types';
import apiClient from '~/api/apiClient';

interface useGetQuestionHistoryParams {
  lastQuestionId: number | null;
}

const getQuestionHistory = async (
  lastQuestionId: number | null = null,
): Promise<QuestionHistoryList> => {
  const url = lastQuestionId
    ? `/questions?id=${lastQuestionId}&limit=10`
    : `questions?limit=10`;
  const response = await apiClient.get(url);

  return response.data.body;
};

const useGetQuestionHistory = ({
  lastQuestionId,
}: useGetQuestionHistoryParams) => {
  return useQuery({
    queryKey: ['questions', lastQuestionId],
    queryFn: () => getQuestionHistory(lastQuestionId),
  });
};

export default useGetQuestionHistory;
