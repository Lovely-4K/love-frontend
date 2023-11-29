import { useSuspenseQuery } from '@tanstack/react-query';
import { Diarys } from '~/types';
import apiClient from '~/api/apiClient';

interface getDiarysParams {
  page: number;
  selectSortMethod?: string;
  diaryCategory?: string;
}

const getDiarys = async ({
  selectSortMethod = 'createdDate',
  diaryCategory,
  page,
}: getDiarysParams): Promise<Diarys> => {
  let apiUrl = `/diaries?page=${page}&size=10&direction=${selectSortMethod}`;

  if (diaryCategory) {
    apiUrl += `&category=${diaryCategory}`;
  }

  const response = await apiClient.get(apiUrl);

  return response.data.body as Diarys;
};

const useGetDiarys = ({
  selectSortMethod = 'createdData',
  diaryCategory,
  page,
}: getDiarysParams) => {
  return useSuspenseQuery({
    queryKey: ['Diarys', selectSortMethod, diaryCategory, page],
    queryFn: () => getDiarys({ selectSortMethod, diaryCategory, page }),
  });
};

export default useGetDiarys;
