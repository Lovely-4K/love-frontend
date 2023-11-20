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
  const response = await apiClient.get(
    `/diaries?page=0&size=10&sort=${sortMethod}`,
  );

  return response.data.body as Diarys;
};

const useGetDiarys = (
  { sortMethod, category }: getDiarysParams = { sortMethod: 'createdDated' },
) => {
  return useQuery({
    queryKey: ['Diarys', sortMethod, category], // queryKey에 category 추가
    queryFn: () => getDiarys({ sortMethod, category }), // getDiarys 호출 시 객체 전달
  });
};

export default useGetDiarys;
