import { useQuery } from '@tanstack/react-query';
import { QuestionHistoryDetail, QuestionFormResponse } from '~/types';
import apiClient from '~/api/apiClient';

const getCoupleAnswer = async (
  questionId: number,
): Promise<QuestionHistoryDetail> => {
  const URL = `/questions/details/${questionId}`;
  const response = await apiClient.get(URL);

  return response.data.body;
};

export const useGetCoupleAnswerHistory = (
  questionId: number,
  opendStatus: boolean,
) => {
  return useQuery({
    enabled: opendStatus,
    queryKey: ['coupleAnswerHistory', questionId],
    queryFn: () => getCoupleAnswer(questionId),
  });
};

const useGetCoupleAnswer = (question: QuestionFormResponse | undefined) => {
  return useQuery({
    enabled: question !== undefined,
    queryKey: ['coupleAnswer', question?.questionId],
    queryFn: () => getCoupleAnswer(question?.questionId as number),
  });
};

export default useGetCoupleAnswer;
