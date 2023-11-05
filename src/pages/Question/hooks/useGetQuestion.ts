import { useQuery } from '@tanstack/react-query';
import { QuestionToday, code, links } from '~/types';
import apiClient from '~/api/apiClient';

interface QuestionResponse {
  code: code;
  links: links;
  body: QuestionToday;
}

const useGetQuestion = () => {
  const getQuestion = async (): Promise<QuestionResponse> => {
    const response = await apiClient.get('/questions/daily?coupleId=1');

    return response.data;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ['question'],
    queryFn: getQuestion,
  });

  return { data, isError, isLoading };
};

export default useGetQuestion;
