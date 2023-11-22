import { useQuery } from '@tanstack/react-query';
import type { Diary } from '~/types';
import apiClient from '~/api/apiClient';

interface useGetDiaryDetailParams {
  diaryId: string | undefined;
}

const getDiaryDetail = async (diaryId: string): Promise<Diary> => {
  const url = `/diaries/${diaryId}`;
  const response = await apiClient.get(url);

  return response.data.body;
};

const useGetDiaryDetail = ({ diaryId }: useGetDiaryDetailParams) => {
  return useQuery({
    queryKey: ['diaryDetail', diaryId],
    queryFn: () => getDiaryDetail(diaryId as string),
  });
};

export default useGetDiaryDetail;
