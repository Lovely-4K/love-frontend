import { useQuery } from '@tanstack/react-query';
import { QuestionHistoryPreview } from '~/types';
import apiClient from '~/api/apiClient';

interface useGetQuestionHistoryParams {
  lastQuestionId: number;
}

const getQuestionHistory = async (
  lastQuestionId: number = 0,
): Promise<QuestionHistoryPreview[]> => {
  const url = `/questions?id=${lastQuestionId}&limit=20`;
  const response = await apiClient.get(url);

  return response.data;
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
