import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import apiClient from '~/api/apiClient';

interface DeleteDiaryDetailParams {
  diaryList: number[];
}

const deleteDiaryDetail = async ({ diaryList }: DeleteDiaryDetailParams) => {
  const url = `/diaries/delete`;
  const response = await apiClient.post(url, { diaryList });

  return response.data;
};

const useDeleteDiaryDetail = (kakaoMapId: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['diaryEdit'],
    mutationFn: ({ diaryList }: DeleteDiaryDetailParams) =>
      deleteDiaryDetail({ diaryList }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['Diarys', 'createdDate'],
      });
      navigate(`/diary/${kakaoMapId}`);
    },
  });
};

export default useDeleteDiaryDetail;
