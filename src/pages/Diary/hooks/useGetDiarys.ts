import { useQuery } from '@tanstack/react-query';
import { Diarys } from '~/types';
import apiClient from '~/api/apiClient';

interface getDiarysParams {
  selectSortMethod?: string;
  selectCategory?: string;
}

const getDiarys = async ({
  selectSortMethod = 'createdDate',
  selectCategory,
}: getDiarysParams): Promise<Diarys> => {
  console.log(selectSortMethod);

  let apiUrl = `/diaries?page=0&size=10&sort=${selectSortMethod}`;

  if (selectCategory) {
    apiUrl += `&category=${selectCategory}`;
  }

  const response = await apiClient.get(apiUrl);

  return response.data.body as Diarys;
};

const useGetDiarys = (
  { selectSortMethod, selectCategory }: getDiarysParams = {
    selectSortMethod: 'createdDated',
  },
) => {
  return useQuery({
    queryKey: ['Diarys', selectSortMethod, selectCategory],
    queryFn: () => getDiarys({ selectSortMethod, selectCategory }),
  });
};

export default useGetDiarys;
