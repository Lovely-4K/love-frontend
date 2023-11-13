import { useMutation, QueryClient } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';

export interface updateUserAnswerParams {
  questionId: number;
  selectedItemIndex: number;
  sex: 'MALE' | 'FEMALE';
}

const queryClient = new QueryClient();

const useUpdateUserAnswer = () => {
  const updateUserAnswer = async ({
    questionId,
    selectedItemIndex,
    sex,
  }: updateUserAnswerParams) => {
    const subURL = `/questions/${questionId}`;
    const params = `/answers?sex=${sex}`;
    const URL = subURL + params;
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
      await queryClient.invalidateQueries({ queryKey: ['questionDetail'] });
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
