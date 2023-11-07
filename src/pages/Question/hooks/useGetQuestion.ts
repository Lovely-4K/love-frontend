import { useQuery } from '@tanstack/react-query';
import { QuestionForm } from '~/types';
import apiClient from '~/api/apiClient';

const useGetQuestion = () => {
  const getQuestion = async (): Promise<QuestionForm> => {
    const response = await apiClient.get('/questions/daily?coupleId=1');

    return response.data.body as QuestionForm;
  };

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['question'],
    queryFn: getQuestion,
  });

  return { data, isError, isLoading, isSuccess };
};

export default useGetQuestion;
