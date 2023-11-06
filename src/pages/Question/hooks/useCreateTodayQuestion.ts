import { useMutation, QueryClient } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';

const queryClient = new QueryClient();

const useCreateTodayQuestion = () => {
  const createTodayQuestion = async () => {
    const subURL = '/questions';
    const params = '?coupleId=1';
    const URL = subURL + params;
    const response = await apiClient.post(URL, { data: {} });

    return response.data;
  };

  const { mutate, data, isError } = useMutation({
    mutationFn: createTodayQuestion,
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['question'] });
    },
  });

  return { mutate, data, isError };
};

export default useCreateTodayQuestion;
