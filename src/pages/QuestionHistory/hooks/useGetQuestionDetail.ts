import { useQuery } from '@tanstack/react-query';
import { QuestionHistoryDetail } from '~/types';
import apiClient from '~/api/apiClient';

const useGetQuestionDetail = () => {
  const getQuestionDetail = async (): Promise<QuestionHistoryDetail> => {
    const response = await apiClient.get('/questions/details/4');

    return response.data.body;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ['questionDetail'],
    queryFn: getQuestionDetail,
  });

  return { data, isError, isLoading };
};

export default useGetQuestionDetail;
