import { useQuery } from '@tanstack/react-query';
import { Diarys } from '~/types';
import apiClient from '~/api/apiClient';

interface getDiarysParams {
  selectSortMethod?: string;
  diaryCategory?: string;
}

const getDiarys = async ({
  selectSortMethod = 'createdDate',
  diaryCategory,
}: getDiarysParams): Promise<Diarys> => {
  let apiUrl = `/diaries?page=0&size=10&sort=${selectSortMethod}`;

  if (diaryCategory) {
    apiUrl += `&category=${diaryCategory}`;
  }

  const response = await apiClient.get(apiUrl);

  return response.data.body as Diarys;
};

const useGetDiarys = (
  { selectSortMethod, diaryCategory }: getDiarysParams = {
    selectSortMethod: 'createdDate',
  },
) => {
  return useQuery({
    queryKey: ['Diarys', selectSortMethod, diaryCategory],
    queryFn: () => getDiarys({ selectSortMethod, diaryCategory }),
  });
};

export default useGetDiarys;
