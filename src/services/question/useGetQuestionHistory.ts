import { useQuery } from '@tanstack/react-query';
import { QuestionHistoryList } from '~/types';
import apiClient from '~/api/apiClient';

interface useGetQuestionHistoryParams {
  lastQuestionId: number;
}
const token = localStorage.getItem('token');

const getQuestionHistory = async (
  lastQuestionId: number = 0,
): Promise<QuestionHistoryList> => {
  const url = `/questions?id=${lastQuestionId}&limit=10`;
  const response = await apiClient.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

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
