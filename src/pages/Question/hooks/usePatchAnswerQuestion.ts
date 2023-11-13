import { useMutation } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';

const patchAnswerQuestion = async (choiceNumber: number) => {
  await apiClient.patch(`/questions/1/answers?sex=FEMALE`, {
    choiceNumber,
  });
};

const usePatchAnswerQuestion = () => {
  return useMutation({ mutationFn: patchAnswerQuestion });
};

export default usePatchAnswerQuestion;
