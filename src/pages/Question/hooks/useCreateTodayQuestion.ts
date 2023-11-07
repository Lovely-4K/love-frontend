import { useMutation, QueryClient } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';

const queryClient = new QueryClient();

const createTodayQuestion = async () => {
  const subURL = '/questions';
  const params = '?coupleId=1';
  const URL = subURL + params;
  const response = await apiClient.post(URL, { data: {} });

  return response.data;
};

const useCreateTodayQuestion = () => {
  return useMutation({
    mutationFn: createTodayQuestion,
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['question'] });
    },
  });
};

export default useCreateTodayQuestion;
