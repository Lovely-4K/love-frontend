import { useQuery } from '@tanstack/react-query';
import { Diarys } from '~/types';
import apiClient from '~/api/apiClient';

interface getDiarysParams {
  sortMethod?: string;
  selectCategory?: string;
}

const getDiarys = async ({
  sortMethod = 'createdDate',
  selectCategory,
}: getDiarysParams): Promise<Diarys> => {
  let apiUrl = `/diaries?page=0&size=10&sort=${sortMethod}`;

  if (selectCategory) {
    apiUrl += `&selectCategory=${selectCategory}`;
  }

  const response = await apiClient.get(apiUrl);

  return response.data.body as Diarys;
};

const useGetDiarys = (
  { sortMethod, selectCategory }: getDiarysParams = {
    sortMethod: 'createdDated',
  },
) => {
  return useQuery({
    queryKey: ['Diarys', sortMethod, selectCategory],
    queryFn: () => getDiarys({ sortMethod, selectCategory }),
  });
};

export default useGetDiarys;
