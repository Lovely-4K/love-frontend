import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import apiClient from '~/api/apiClient';

interface EditDiaryDetailParams {
  diaryId: string;
  formData: FormData;
}

const editDiaryDetail = async ({
  diaryId,
  formData,
}: EditDiaryDetailParams) => {
  const url = `/diaries/${diaryId}`;
  const response = await apiClient.patch(url, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data;
};

const useEditDiaryDetail = (
  kakaoMapId: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ['diaryEdit'],
    mutationFn: ({ diaryId, formData }: EditDiaryDetailParams) =>
      editDiaryDetail({ diaryId, formData }),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      navigate(`/diary/${kakaoMapId}`);
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};

export default useEditDiaryDetail;
