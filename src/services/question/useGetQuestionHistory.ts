import { useQuery } from '@tanstack/react-query';
import { QuestionHistoryList } from '~/types';
import apiClient from '~/api/apiClient';

interface useGetQuestionHistoryParams {
  lastQuestionId: number;
}

const getQuestionHistory = async (
  lastQuestionId: number = 0,
): Promise<QuestionHistoryList> => {
  const url = `/questions?id=${lastQuestionId}&limit=20`;
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
