import { useMutation } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';

const patchAnswerQuestion = async ({
  choiceNumber,
}: {
  choiceNumber: number;
}) => {
  await apiClient.patch(`/questions/1/answers?sex=FEMALE`, {
    choiceNumber,
  });
};

export const usePatchAnswerQuestion = () => {
  return useMutation({ mutationFn: patchAnswerQuestion });
};
