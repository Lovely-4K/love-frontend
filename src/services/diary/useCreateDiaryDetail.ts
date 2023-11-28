import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import apiClient from '~/api/apiClient';

interface CreateDiaryDetailParams {
  formData: FormData;
}

const createDiaryDetail = async ({ formData }: CreateDiaryDetailParams) => {
  const url = `/diaries`;
  const response = await apiClient.post(url, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data;
};

const useCreateDiaryDetail = (kakaoMapId: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['diaryEdit'],
    mutationFn: ({ formData }: CreateDiaryDetailParams) =>
      createDiaryDetail({ formData }),
    onSuccess: async () => {
      try {
        await queryClient.invalidateQueries([
          'Diarys',
          'createdDate',
        ] as InvalidateQueryFilters);
        // await queryClient.refetchQueries([
        //   'Diarys',
        //   'createdDate',
        // ] as InvalidateQueryFilters);
        navigate(`/diary/${kakaoMapId}`);
      } catch (error) {
        console.error('An error occurred while invalidating queries:', error);
      }
    },
  });

  return mutation;
};

export default useCreateDiaryDetail;
