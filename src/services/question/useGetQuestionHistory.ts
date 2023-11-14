import { useQuery } from '@tanstack/react-query';
import { QuestionHistoryPreview } from '~/types';
import apiClient from '~/api/apiClient';

const getQuestionHistory = async (
  coupleId: number = 5,
  lastQuestionId: number = 0,
): Promise<QuestionHistoryPreview[]> => {
  const url = `/questions?id=${lastQuestionId}&coupleId=${coupleId}&limit=10`;
  const response = await apiClient.get(url);

  return response.data;
};

const useGetQuestionHistory = (
  coupleId: number = 1,
  lastQuestionId: number = 0,
) => {
  return useQuery({
    queryKey: ['questions', coupleId, lastQuestionId],
    queryFn: () => getQuestionHistory(coupleId, lastQuestionId),
  });
};

export default useGetQuestionHistory;
