import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import apiClient from '~/api/apiClient';

interface DeleteDiaryDetailParams {
  diaryId: string | number;
}

const deleteDiaryDetail = async ({ diaryId }: DeleteDiaryDetailParams) => {
  const url = `/diaries/${diaryId}`;
  const response = await apiClient.delete(url);

  return response.data;
};

const useDeleteDiaryDetail = (kakaoMapId: string) => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ['diaryEdit'],
    mutationFn: ({ diaryId }: DeleteDiaryDetailParams) =>
      deleteDiaryDetail({ diaryId }),
    onSuccess: () => {
      navigate(`/diary/${kakaoMapId}`);
    },
  });
};

export default useDeleteDiaryDetail;
