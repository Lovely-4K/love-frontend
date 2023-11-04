import { useMutation, QueryClient } from '@tanstack/react-query';
import axios from 'axios';

const queryClient = new QueryClient();

const useCreateTodayQuestion = () => {
  const createTodayQuestion = async () => {
    const subURL = '/questions';
    const params = '?coupleId=1';
    const URL = subURL + params;
    const response = await axios.post(URL, { data: {} });

    return response.data;
  };

  const { data, isError } = useMutation({
    mutationFn: createTodayQuestion,
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['question'] });
    },
  });

  return { data, isError };
};

export default useCreateTodayQuestion;
