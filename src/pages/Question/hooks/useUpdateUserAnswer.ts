import { useMutation, QueryClient } from '@tanstack/react-query';
import axios from 'axios';

interface updateUserAnswerParams {
  selectedItemIndex: number;
  sex: 'MALE' | 'FEMALE';
}

const queryClient = new QueryClient();

const useUpdateUserAnswer = () => {
  const updateUserAnswer = async ({
    selectedItemIndex,
    sex,
  }: updateUserAnswerParams) => {
    const subURL = '/questions/1';
    const params = `/answers?sex=${sex}`;
    const URL = subURL + params;
    const response = await axios.patch(URL, {
      data: { choiceNumber: selectedItemIndex },
    });

    return response.data;
  };

  const { mutate, data, isError } = useMutation({
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

  return { mutate, data, isError };
};

export default useUpdateUserAnswer;
