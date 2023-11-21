import { useQuery } from '@tanstack/react-query';
import { Diarys } from '~/types';
import apiClient from '~/api/apiClient';

interface getDiarysParams {
  sortMethod?: string;
  category?: string;
}

const getDiarys = async ({
  sortMethod = 'createdDate',
  category,
}: getDiarysParams): Promise<Diarys> => {
  let apiUrl = `/diaries?page=0&size=10&sort=${sortMethod}`;

  if (category) {
    apiUrl += `&category=${category}`;
  }

  const response = await apiClient.get(apiUrl);

  return response.data.body as Diarys;
};

const useGetDiarys = (
  { sortMethod, category }: getDiarysParams = { sortMethod: 'createdDated' },
) => {
  return useQuery({
    queryKey: ['Diarys', sortMethod, category],
    queryFn: () => getDiarys({ sortMethod, category }),
  });
};

export default useGetDiarys;
