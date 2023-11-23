import { useMutation } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';

interface editDiaryDetail {
  diaryId: string;
  formData: FormData;
}

interface useEditDiaryDetail {
  diaryId: string;
  formData: FormData;
}

const editDiaryDetail = async ({ diaryId, formData }: editDiaryDetail) => {
  const url = `/diaries/${diaryId}`;
  const response = await apiClient.patch(url, formData);

  return response.data;
};

const useEditDiaryDetail = ({ diaryId, formData }: useEditDiaryDetail) => {
  return useMutation({
    mutationKey: ['diaryEdit'],
    mutationFn: () => editDiaryDetail({ diaryId, formData }),
  });
};

export default useEditDiaryDetail;
