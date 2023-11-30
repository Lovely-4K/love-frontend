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

const useCreateDiaryDetail = (
  kakaoMapId: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['diaryEdit'],
    mutationFn: ({ formData }: CreateDiaryDetailParams) =>
      createDiaryDetail({ formData }),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries([
        ['Diarys'],
      ] as InvalidateQueryFilters);
      navigate(`/diary/${kakaoMapId}`);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  return mutation;
};

export default useCreateDiaryDetail;
