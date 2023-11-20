import { useQuery } from '@tanstack/react-query';
import { Diarys } from '~/types';
import apiClient from '~/api/apiClient';

interface getDiarysParams {
  sortMethod?: string;
}

const getDiarys = async (
  sortMethod: string = 'createdDate',
): Promise<Diarys> => {
  const response = await apiClient.get(
    `/diaries?page=0&size=10&sort=${sortMethod}`,
  );

  return response.data.body as Diarys;
};

const useGetDiarys = (
  { sortMethod }: getDiarysParams = { sortMethod: 'createdDated' },
) => {
  return useQuery({
    queryKey: ['Diarys', sortMethod],
    queryFn: () => getDiarys(sortMethod),
  });
};

export default useGetDiarys;
