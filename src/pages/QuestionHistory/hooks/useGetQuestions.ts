import { useQuery } from '@tanstack/react-query';
import { QuestionHistories } from '~/types';
import apiClient from '~/api/apiClient';

const useGetQuestions = () => {
  const getQuestions = async (): Promise<QuestionHistories> => {
    const response = await apiClient.get('/questions?id=0&coupleId=1&limit=10');

    return response.data.body;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ['questions'],
    queryFn: getQuestions,
  });

  return { data, isError, isLoading };
};

export default useGetQuestions;
