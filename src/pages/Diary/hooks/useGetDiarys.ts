import { useQuery } from '@tanstack/react-query';
import { Diarys } from '~/types';
import apiClient from '~/api/apiClient';

const getDiarys = async (): Promise<Diarys> => {
  const response = await apiClient.get('/diaries?page=0&size=10');

  return response.data.body as Diarys;
};

const useGetDiarys = () => {
  return useQuery({
    queryKey: ['Diarys'],
    queryFn: getDiarys,
  });
};

export default useGetDiarys;
