import { useMutation, QueryClient } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';

export interface updateUserAnswerParams {
  questionId: number;
  selectedItemIndex: number;
}

const queryClient = new QueryClient();

const updateUserAnswer = async ({
  questionId,
  selectedItemIndex,
}: updateUserAnswerParams) => {
  const URL = `/questions/${questionId}/answers`;
  const response = await apiClient.patch(
    URL,
    JSON.stringify({ choiceNumber: selectedItemIndex }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data;
};

const useUpdateUserAnswer = () => {
  return useMutation({
    mutationKey: ['userAnswer'],
    mutationFn: updateUserAnswer,
    onMutate: async ({ selectedItemIndex }) => {
      await queryClient.cancelQueries({ queryKey: ['userAnswer'] });

      queryClient.setQueryData(['userAnswer'], selectedItemIndex);

      return () => {
        queryClient.setQueryData(['userAnswer'], '');
      };
    },
    onSuccess: async () => {
      alert('답변을 제출했습니다!');
      await queryClient.invalidateQueries({
        queryKey: ['questionDetail', 'temperature'],
      });
    },
    onError: (error, _, context) => {
      if (error && context) {
        context();
      }
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['userAnswer'] });
    },
  });
};

export default useUpdateUserAnswer;
