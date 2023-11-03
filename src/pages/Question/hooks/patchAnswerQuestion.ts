import { useMutation } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';

const patchAnswerQuestion = async ({
  choiceNumber,
}: {
  choiceNumber: number;
}) => {
  await apiClient.patch(`/v1/questions/1/answers?sex=MALE`, {
    choiceNumber,
  });
};

export const useGetQuestion = () => {
  return useMutation({ mutationFn: patchAnswerQuestion });
};
