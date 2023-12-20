import { useSuspenseQuery } from '@tanstack/react-query';
import { QuestionHistoryDetail } from '~/types';
import apiClient from '~/api/apiClient';

const getCoupleAnswer = async (
  questionId: number,
): Promise<QuestionHistoryDetail> => {
  const URL = `/questions/details/${questionId}`;
  const response = await apiClient.get(URL);

  return response.data.body;
};

const useGetCoupleAnswer = (questionId: number) => {
  return useSuspenseQuery({
    queryKey: ['coupleAnswer', questionId],
    queryFn: () => getCoupleAnswer(questionId),
  });
};

export default useGetCoupleAnswer;
