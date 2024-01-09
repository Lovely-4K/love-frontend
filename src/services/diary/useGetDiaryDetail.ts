import { useQuery } from '@tanstack/react-query';
import type { ReadDiary } from '~/types';
import apiClient from '~/api/apiClient';

interface useGetDiaryDetailParams {
  diaryId: string | undefined;
}

const getDiaryDetail = async (diaryId: string): Promise<ReadDiary> => {
  const url = `/diaries/${diaryId}`;
  const response = await apiClient.get(url);

  return response.data.body;
};

const useGetDiaryDetail = ({ diaryId }: useGetDiaryDetailParams) => {
  return useQuery({
    enabled: !!diaryId,
    queryKey: ['DiaryDetail', diaryId],
    queryFn: () => getDiaryDetail(diaryId as string),
  });
};

export default useGetDiaryDetail;
