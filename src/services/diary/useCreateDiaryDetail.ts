import { useMutation } from '@tanstack/react-query';
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

  return useMutation({
    mutationKey: ['diaryEdit'],
    mutationFn: ({ formData }: CreateDiaryDetailParams) =>
      createDiaryDetail({ formData }),
    onSuccess: () => {
      navigate(`/diary/${kakaoMapId}`);
    },
  });
};

export default useCreateDiaryDetail;
